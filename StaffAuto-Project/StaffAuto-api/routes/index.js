const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Models
const { User } = require('../helper/db');

/* GET home page. */
router.get('/', (req, res) => {
    res.send({ title: 'Express' });
});
router.post('/register', (req, res) => {

    const { nameandsurname,salary,phone, adress, identity, mission,healthinfo,holiday} = req.body;
    let exit=false;

    const user = {
        nameandsurname,
        salary,
        phone,
        adress,
        identity,
        mission,
        healthinfo,
        holiday
    };

    User.findOne({where:{ nameandsurname }}).then((user)=>{
        if(user){
            res.json({
                result: false,
                message: 'already'
            });
            exit=true;
        }
    });

    const promise = User.create(user);


    promise.then((user) => {

        const token = jwt.sign({user_id:user.user_id,status:user.status}, req.app.get('api_secret_key'), {
            expiresIn: 1408261000
        });


        res.json({
            result: {user_id:user.user_id,status:user.status},
            token
        });


    }).catch((err) => {
        res.json(err);
    });

});

module.exports = router;
