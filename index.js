const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

const buyprod = require('./controller/buyprod')
app.use(buyprod)

const cancel = require('./controller/cancel')
app.use(cancel)

app.listen(process.env.PORT || 3232, () => {
    console.log('listening amethyst')
})
