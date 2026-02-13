# Calendra

![Logo](./public/assets/logo.svg)

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Now-brightgreen?style=for-the-badge&logo=vercel)](https://calendra-alpha-orpin.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

This project is a full-stack web application inspired by Calendly, designed for users to create, manage, and book events or meetings. It allows authenticated users to set up personal schedules, create events with availability slots, and share public booking links. Others can book meetings based on the host's availability without needing an account.

The app handles user authentication, event creation/editing, scheduling, and booking confirmations. It integrates real-time availability checks, email notifications (via Google APIs or similar), and a clean UI built with modern React components.

**🔗 [View Live Application](https://calendra-alpha-orpin.vercel.app/)**

## Features

- **User Authentication**: Secure sign-up and login using Clerk, with support for social logins and email verification.
- **Event Management**:
  - Create new events with details like name, description, and duration.
  - Edit existing events.
  - List all user-owned events with cards for quick overview.
  - Delete or update events (via forms and server actions).
- **Scheduling**:
  - Configure personal availability schedules.
  - Generate valid time slots based on user schedule and event duration.
  - Handle time zones using `date-fns-tz`.
- **Booking System**:
  - Public booking pages for events, showing available slots.
  - Form to select and confirm bookings.
  - Success page with confirmation details and email notification tease.
- **Public Profiles**: Shareable profiles for users to showcase availability.
- **UI/UX Enhancements**:
  - Responsive design with Tailwind CSS and Shadcn UI components.
  - Loading states, animations (via `tw-animate-css`), and toasts (via `sonner`).
  - Custom forms with validation using `react-hook-form` and `zod`.
- **Database Integration**: Use Drizzle ORM for type-safe queries and migrations with Neon Database (serverless PostgreSQL).

## Tech Stack

### Frontend
- **Next.js** (v16.1.6): React framework for server-side rendering and API routes.
- **React** (v19.2.3): Core UI library.
- **Clerk**: Authentication and user management.
- **Shadcn UI**: Accessible component library.
- **Tailwind CSS**: Styling and layout.

### Backend
- **Drizzle ORM**: Type-safe SQL query builder.
- **Neon Database**: Serverless PostgreSQL.
- **Next.js Server Actions**: Form submissions and DB logic.



## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Muhammad-Zubair796/Calendra.git
   cd Calendra
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Database (Neon)
   DATABASE_URL=postgresql://username:password@host:port/dbname?sslmode=require

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Google APIs (for email/calendar)
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   GOOGLE_API_KEY=your-api-key
   ```

4. **Database Setup**:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Key Pages and Routes
- `/login` → Sign-in page
- `/register` → Sign-up page
- `/events` → List of user's events
- `/events/new` → Create new event
- `/events/[eventid]/edit` → Edit event
- `/schedule` → Manage schedule
- `/book/[clerkUserId]/[eventid]` → Public booking page
- `/book/[clerkUserId]/[eventid]/success` → Booking success
- `/profile/[clerkUserId]` → Public profile

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## License

MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Inspired by Calendly • Built with Next.js, Clerk & Shadcn UI,Neon,Drizzle


