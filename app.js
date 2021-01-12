const express = require("express")
const config = require("config")
const monggose = require('mongoose');


const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get("port") || 5000

async function start() {
    try{
        await monggose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true
        })
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT}.....!`)
})