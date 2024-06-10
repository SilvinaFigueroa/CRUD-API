import express from 'express'
import userRoutes from './routes/users.js'

import bodyparser from 'body-parser' // it allows us to take in the incoming POST request body.

const app = express()
const PORT = 5000

app.use(bodyparser.json()) //specified that JSON data will be used in the application
app.use('/users', userRoutes)

app.get('/', (req, res)=>{
    console.log('[GET ROUTE]')
    res.send('HELLO From Homepage')

})



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

