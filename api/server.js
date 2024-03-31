import express from 'express'
import cookieParser from 'cookie-parser';
import 'dotenv/config'
// import routes
import postRoute from './routes/postRoute.js'
import authRoute from './routes/authRoute.js'

const app = express();

// middleware
app.use(express.json())
app.use(cookieParser())
// app.use(dotenv.config())


// routes
app.use('/api/v1/posts', postRoute)
app.use('/api/v1/auth', authRoute)


app.listen(8080, function(){
   console.log('Server is running')
})