const express = require('express')

const Payment = express()

Payment.get('/', (req, res) => {
  res.send('It is working')
})

Payment.listen(5000, () => {
  console.log('server work')
})
