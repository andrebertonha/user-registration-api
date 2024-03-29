const express = require('express')
const userRouter = require('./routers/user')
const port = process.env.PORT
require('./db/db')

const app = express()
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`server up on port ${port}`)
})