const Op = require('sequelize').Op;
const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const moment = require("moment");
// Models
const { User } = require('../helper/db');
// POST api/infos
router.post('/infos/view', async (req, res, next) => {
    try {
        const infos = await User.findAll();
        res.json({ result:true, infos });
    }catch (e) {
        res.json({ result:false });
    }
});

router.post('/update', async (req, res, next) => {
    const {  user  } = req.body;
    try {
        const result = await User.update(user,{ where:{ user_id:user.user_id } });

        res.json({ result });
    }catch (e) {
        res.json({ result:false });
    }
});

router.post('/delete', async (req, res, next) => {
    const {  user_id  } = req.body;
    try {
        const result = await User.destroy({where: {user_id: user.user_id} });

        res.json({ result });
    }catch (e) {
        res.json({ result:false });
    }
});

module.exports = router;
