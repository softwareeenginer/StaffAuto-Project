const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();
const { User } = require('../helper/db');
router.post('/get_me', async (req, res) => {
    try {
        const {user_id} = req.decoded;
        let user = await User.findOne({
            where: {user_id},
            attributes: ['user_id','password','name', 'surname', 'status']
        });
        if (!user) {
            res.json({
                result: false,
                error: 'not_found'
            });
            return ;
        } else {
            if (!user.status) {
                res.json({
                    result: false,
                    error: 'ban'
                });
                return ;
            }
        }
        const new_token = jwt.sign({
            user_id: user.user_id,
            expert: user.expert,
            status: user.status
        }, req.app.get('api_secret_key'), {
            expiresIn: 1408261000
        });

        res.json({
            result: true,
            token: new_token,
            user
        });
    } catch (err) {
        res.status(500);
        res.json('');
    }
});
module.exports = router;
