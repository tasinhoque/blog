import express, { Request, Response } from 'express'
import Post from '../models/Post'

const router = express.Router()

router.get('/all', async (req: Request, res: Response) => {
  try {
    const posts = await Post.find()
    res.status(200).send(posts)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

router.get('/:postId', async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.status(200).send(post)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(200).send({ post })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

router.delete('/all', async (req: Request, res: Response) => {
  try {
    const feedback = await Post.deleteMany({})
    feedback
      ? res.status(200).send({ message: 'Success' })
      : res.status(400).send({ message: 'Post not found' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

router.delete('/:postId', async (req: Request, res: Response) => {
  try {
    const feedback = await Post.findByIdAndDelete(req.params.postId)
    feedback
      ? res.status(200).send({ message: 'Success' })
      : res.status(400).send({ message: 'Post not found' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

router.patch('/:postId', async (req: Request, res: Response) => {
  try {
    await Post.findByIdAndUpdate(req.params.postId, { $set: req.body })
    res.status(200).send({ message: 'Success' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

export default router
