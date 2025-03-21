# Dr. Mansour Medical Website

A modern, professional, and visually engaging medical website for Dr. Muhammad Mansour (Plastic Surgery Specialist) and Dr. Ahmad Mansour (Ophthalmologist & Oculoplastic Surgeon).

## Features

- Responsive design for all devices
- RTL support for Hebrew language
- Advanced accessibility features
- Dark mode support
- Modern animations and transitions
- SEO optimized
- Multi-author blog system
- Image gallery with before/after photos
- Testimonials carousel
- Appointment booking system
- Admin dashboard for content management

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: MongoDB, Mongoose
- **Authentication**: Clerk
- **Image Storage**: Cloudinary
- **Blog Editor**: TipTap
- **Animations**: Custom CSS animations with Tailwind

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- MongoDB Atlas account
- Cloudinary account
- Clerk account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mansour-medical.git
   cd mansour-medical
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # MongoDB
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/mansour-medical?retryWrites=true&w=majority

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
   CLERK_SECRET_KEY=your-secret-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `app/` - Next.js app directory
  - `(routes)/` - All routes of the application
  - `components/` - Reusable UI components
  - `lib/` - Utility functions, hooks, and configurations
  - `api/` - API routes

## Deployment

The project can be deployed to Vercel with the following command:

```bash
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Clerk](https://clerk.dev/)
- [TipTap](https://tiptap.dev/)
#   m a n s o u r  
 