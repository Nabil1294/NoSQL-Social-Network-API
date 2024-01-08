// requiring mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// creating user schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
  },
  houghts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
{
    toJSON: {
        virtuals: true
      },
      id: false
});

const User = mongoose.model('User', UserSchema);

module.exports = User;