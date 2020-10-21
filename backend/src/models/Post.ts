import { Schema, model, Types, Document } from 'mongoose'
import { UserSchema } from './User'

export interface PostSchema extends Document {
  _id: Types.ObjectId
  title: string
  description: string
  date: Date
  user: UserSchema['_id']
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: new Types.ObjectId(),
  },
})

export default model<PostSchema>('Post', postSchema)
