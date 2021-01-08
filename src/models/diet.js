import mongoose from 'mongoose';

const { Schema } = mongoose;
const DietSchema = new Schema(
  {
    name: String,
    image: String
  },
);

const Diet = mongoose.model('Diet', DietSchema);
export default Diet;
