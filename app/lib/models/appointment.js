import mongoose from 'mongoose';

// Define the Appointment schema
const AppointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    patientEmail: {
      type: String,
      required: [true, 'Please provide your email'],
      trim: true,
      lowercase: true,
    },
    patientPhone: {
      type: String,
      required: [true, 'Please provide your phone number'],
      trim: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'Please select a doctor'],
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    },
    date: {
      type: Date,
      required: [true, 'Please select a date'],
    },
    time: {
      type: String,
      required: [true, 'Please select a time'],
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    reminderSent: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Appointment model
export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema); 