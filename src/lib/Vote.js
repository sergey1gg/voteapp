import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true }
}, {
    timestamps: true
});

const Vote = mongoose.models.Vote || mongoose.model('Vote', voteSchema);

export default Vote;