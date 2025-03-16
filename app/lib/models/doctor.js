import mongoose from 'mongoose';

// Define the Doctor schema
const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    specialty: {
      type: String,
      required: [true, 'Please provide a specialty'],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, 'Please provide a bio'],
    },
    education: [
      {
        degree: String,
        institution: String,
        year: String,
        description: String,
      },
    ],
    experience: [
      {
        position: String,
        institution: String,
        startYear: String,
        endYear: String,
        description: String,
      },
    ],
    certifications: [
      {
        name: String,
        institution: String,
        year: String,
      },
    ],
    image: {
      url: String,
      publicId: String,
      alt: String,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    socialMedia: {
      facebook: String,
      instagram: String,
      linkedin: String,
      twitter: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Doctor model
export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema); 