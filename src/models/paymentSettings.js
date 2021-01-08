import mongoose from 'mongoose';

const { Schema } = mongoose;
const PaymentSettingsSchema = new Schema(
    {
        tax: { type: Number, required: true, default: 0 },
        deliveryFee: { type: Number, required: true, default: 0 }
    },
    {
        timestamps: true
    }
);

const PaymentSettings = mongoose.model('PaymentSettings', PaymentSettingsSchema);
export default PaymentSettings;
