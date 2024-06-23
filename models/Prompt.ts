import { Schema, model, models } from 'mongoose';
import User from './User';

const PromptScheme = new Schema({
  prompt: {
    type: String,
    required: [true, 'prompt is required!']
  },
  tag: {
    type: String,
    required: [true, 'tag is required!']
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: User
  }
});

const Prompt = models.Prompt || model('Prompt', PromptScheme);

export default Prompt;
