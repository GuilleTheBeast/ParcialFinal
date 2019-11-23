const express = require('express');
const router = express.Router();


const Disney = require('../models/disney');

router.get('/', async (req, res) => {
    const disneys = await Disney.find();
    console.log(disneys);
    res.render('index', {
        disneys
    });
});

router.post('/add', async (req, res) => {
const disney = new Disney(req.body);
await disney.save();
res.redirect('/');

});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const disney = await Disney.findById(id);
    res.render('edit', {
        disney
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Disney.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
const { id } = req.params;
await Disney.remove({_id: id});
res.redirect('/');
});


module.exports = router;