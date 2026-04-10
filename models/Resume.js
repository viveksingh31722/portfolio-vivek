import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  contentType: { type: String, required: true },
  // Storing the file as a buffer in MongoDB
  data: { type: Buffer, required: true },
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
