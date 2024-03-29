import express from 'express'

// import routes
import postRoute from './routes/postRoute.js'

const app = express();

app.use('/api/v1/posts', postRoute)


app.listen(8080, function(){
   console.log('Server is running')
})