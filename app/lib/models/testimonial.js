import mongoose from 'mongoose';

// Define the Testimonial schema
const TestimonialSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    patientLocation: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide testimonial content'],
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'Please provide a doctor'],
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    },
    image: {
      url: String,
      publicId: String,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    isDisplayed: {
      type: Boolean,
      default: true,
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Testimonial model
export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema); 