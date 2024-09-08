const express = require('express');
const router = express.Router();
const authorizeAdmin = require('../middleware/authorizeAdmin');

// Admin icazəsi ilə endpointlər
router.post('/', authorizeAdmin, async (req, res) => {
  // məkan yaratma 
});

router.put('/:id', authorizeAdmin, async (req, res) => {
  // məkan yeniləmə 
});

router.delete('/:id', authorizeAdmin, async (req, res) => {
  // məkan silmə 
});
