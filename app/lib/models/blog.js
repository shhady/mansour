import mongoose from 'mongoose';

// Define the Comment schema (sub-document)
const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide a comment'],
      trim: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Define the Blog Post schema
const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    excerpt: {
      type: String,
      required: [true, 'Please provide an excerpt'],
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'Please provide an author'],
    },
    featuredImage: {
      url: String,
      publicId: String,
      alt: String,
    },
    tags: [String],
    categories: [String],
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    comments: [CommentSchema],
    isPublished: {
      type: Boolean,
      default: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    metaDescription: {
      type: String,
      trim: true,
    },
    metaKeywords: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Blog Post model
export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema); 