const express = require('express');
const router = express.Router();

const _data = require('../models/data');

router.get('/api/data', async (req, res)=>{
    const _dataFind = await _data.find();
    res.json({
        data: _dataFind
    });
});

router.post('/api/data', async (req, res)=>{
    const _dataSave = new _data(req.body);
    await _dataSave.save();
    const _dataFind = await _data.find();
    res.json({
        data: _dataFind
    });
});

router.put('/api/data/:id', async (req, res)=>{
    const {id} = req.params;
    const _dataFind = await _data.findOne({_id: id});
    const {numberCard, employee, history} = req.body;
    if(numberCard){
        _dataFind.numberCard = numberCard;
    }

    if(employee){
        _dataFind.employee = employee;
    }

    if(history){
        _dataFind.history = history;
    }

    await _data.update({_id: id}, _dataFind);
    res.json({
        data: _dataFind
    });
});

/*
router.delete('/api/data/:id', async (req, res)=>{
    const {id} = req.params;
    await _data.remove({_id: id});
    const _dataFind = await _data.find();
    res.json({
        data: _dataFind
    });
});*/

module.exports = router;