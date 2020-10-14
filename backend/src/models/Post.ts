import { Schema, model, Types, Document } from 'mongoose'

export interface PostSchema extends Document {
  _id: Types.ObjectId
  title: string
  description: string
  date: Date
}

const postSchema: Schema<PostSchema> = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

export default model<PostSchema>('Post', postSchema)
