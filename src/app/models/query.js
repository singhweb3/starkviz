import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema({
  clientName: String,
  email: String,
  message: String,
});

export default mongoose.models.Query || mongoose.model('Query', QuerySchema);