const express = require('express')
const router = express.Router()
const Stam = require('../models/stam')

// Alle stammen Route
router.get('/', async (req, res) => {
	let searchOptions = {}
	if (req.query.species != null && req.query.species !== '') {
		searchOptions.fhnr = new RegExp(req.query.species, 'i')
	}
	try {
		const stammen = await Stam.find(searchOptions)
		res.render('stammen/index', { stammen: stammen, searchOptions: req.query })
	} catch {
		res.redirect('/')
	}
	
})

//Nieuwe stam Route
router.get('/new', async (req, res) => {
	const stam = new Stam({
        fhnr: req.body.fhnr,
        cbs: req.body.cbs,
        other: req.body.other,
        species: req.body.species,
        bsl: req.body.bsl
        })
        try {
            const newStam = await stam.save()
            res.redirect(`stammen/${newStam._id}`)
        } catch {
            res.render('stammen/new', {
                stam: stam,
                errorMessage: 'Error creating Strain'
            })
        }    
})

//Creëer stam Route
router.post('/', async (req, res) => {
	res.send('Nieuwe stam')
})

module.exports = router
