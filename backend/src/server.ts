import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import postRoutes from './routes/post'
import dotenv from 'dotenv'

dotenv.config()
const app: express.Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/post', postRoutes)

app.get(
  '/search',
  (req: Request<{}, {}, {}, { book: string }>, res: Response) => {
    res.status(200).send(req.query.book)
  }
)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)

mongoose.connect(
  process.env.MONGO_URI || '',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to DB')
)
