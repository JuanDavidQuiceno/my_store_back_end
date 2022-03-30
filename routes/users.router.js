const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit: limit,
      offset: offset,
      users: [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'David' },
      ]
    })
  } else {
    res.json('falta un parametro requerido')
  }
});

module.exports = router;
