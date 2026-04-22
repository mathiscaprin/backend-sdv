const express = require('express');
const router = express.Router();

const {
    getAllSinisters,
    getSinister,
    createSinister,
    updateSinister,
    deleteSinister
} = require('../services/sinisters');

router.post('/', createSinister);
router.get('/:id', getSinister);
router.get('/', getAllSinisters);
router.delete('/:id', deleteSinister);
router.put('/:id', updateSinister);

module.exports = router;