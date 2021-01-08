import mongoose from 'mongoose';

const { Schema } = mongoose;
const DiscountSchema = new Schema(
    {
        code: { type: String, required: true, unique: true },
        discount: { type: Number, required: true },
        issuedDate: { type: Date, required: true },
        expiryDate: { type: Date, required: true }
    }, {
        timestamps: true
    }
);

const Discount = mongoose.model('Discount', DiscountSchema);
export default Discount;
