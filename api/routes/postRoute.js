import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    console.log('All Posts')
})
router.post('/test', (req, res)=>{
    console.log('post route')
})
router.put('/test', (req, res)=>{
    console.log('post route')
})
router.delete('/test', (req, res)=>{
    console.log('post route')
})
router.get('/test', (req, res)=>{
    console.log('post route')
})

export default router