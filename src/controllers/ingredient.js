import mongoose from 'mongoose';

const { Schema } = mongoose;
const IngredientSchema = new Schema(
  {
    name: String,
    image: String,
    inBox: { type: Boolean, default: true }
  },
);

const Ingredient = mongoose.model('Ingredient', IngredientSchema);
export default Ingredient;
