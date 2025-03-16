import mongoose from 'mongoose';

// Define the Service schema
const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      trim: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'Please provide a doctor'],
    },
    image: {
      url: String,
      publicId: String,
      alt: String,
    },
    details: [
      {
        title: String,
        description: String,
      },
    ],
    faqs: [
      {
        question: String,
        answer: String,
      },
    ],
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Service model
export default mongoose.models.Service || mongoose.model('Service', ServiceSchema); 