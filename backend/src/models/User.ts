import { Schema, model, Types, Document } from 'mongoose'

export interface UserSchema extends Document {
  _id: Types.ObjectId
  name: string
}

const userSchema: Schema<UserSchema> = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

export default model<UserSchema>('User', userSchema)
