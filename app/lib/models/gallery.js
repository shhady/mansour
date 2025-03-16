import mongoose from 'mongoose';

// Define the Gallery Item schema
const GalleryItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
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
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    },
    beforeImage: {
      url: {
        type: String,
        required: [true, 'Please provide a before image URL'],
      },
      publicId: String,
      alt: String,
    },
    afterImage: {
      url: {
        type: String,
        required: [true, 'Please provide an after image URL'],
      },
      publicId: String,
      alt: String,
    },
    timeFrame: {
      type: String,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

// Create and export the Gallery model
export default mongoose.models.GalleryItem || mongoose.model('GalleryItem', GalleryItemSchema); 