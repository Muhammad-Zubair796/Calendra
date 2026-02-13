

```markdown
# Calendra

![Logo](./public/assets/logo.svg)

## Overview

This project is a full-stack web application inspired by Calendly, designed for users to create, manage, and book events or meetings. It allows authenticated users to set up personal schedules, create events with availability slots, and share public booking links. Others can book meetings based on the host's availability without needing an account.

The app handles user authentication, event creation/editing, scheduling, and booking confirmations. It integrates real-time availability checks, email notifications (via Google APIs or similar), and a clean UI built with modern React components.

Key functionalities include:
- User authentication and profiles.
- Event management (create, edit, list).
- Schedule configuration with time slots.
- Public booking pages with available times.
- Success confirmation after booking.

This is built as a Next.js application with server-side rendering, API routes, and a PostgreSQL-compatible database (via Neon).

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
- **Error Handling**: Custom 404 pages, authentication redirects, and alert messages for invalid states.
- **Debugging**: Built-in console logs for troubleshooting authentication and data fetching.

## Tech Stack

### Frontend
- **Next.js** (v16.1.6): React framework for server-side rendering, API routes, and static generation.
- **React** (v19.2.3) & **React DOM**: Core libraries for building UIs.
- **Clerk**: Authentication and user management.
- **Shadcn UI**: Reusable UI components (e.g., Card, Button, Popover) built on Radix UI and Tailwind.
- **React Hook Form** & **Zod**: Form handling and validation.
- **Lucide React**: Icons library.
- **Date-fns** & **Date-fns-tz**: Date manipulation and time zone support.
- **Next Themes**: Theme management (light/dark mode).
- **React Day Picker**: Calendar/date picker component.
- **React Loading Indicators**: Loading spinners.
- **Sonner**: Toast notifications.
- **Tailwind Merge** & **Class Variance Authority (CVA)**: Utility for merging Tailwind classes.
- **TW Animate CSS**: CSS animations.

### Backend
- **Drizzle ORM** (v0.45.1): Type-safe ORM for SQL queries.
- **Neon Database** (@neondatabase/serverless): Serverless PostgreSQL database.
- **Google APIs**: Integration for email/calendar features (e.g., sending confirmations).
- **Clerk Server**: For server-side user data fetching.
- **Next.js Server Actions**: For handling form submissions and database operations.

### Development Tools
- **TypeScript** (v5): Static typing for better code quality.
- **ESLint** (v9): Linting with Next.js config.
- **Drizzle Kit** (v0.31.8): For database schema generation, migrations, and studio.
- **Tailwind CSS** (v4.0.0): Utility-first CSS framework.
- **PostCSS** & **Autoprefixer**: CSS processing.
- **dotenv**: Environment variable management.

## Prerequisites

- Node.js (v18+ recommended).
- A Neon Database account (or any PostgreSQL-compatible DB).
- Clerk account for authentication.
- Google API credentials (if using email integrations).
- Git for version control.

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

Inspired by Calendly • Built with Next.js, Clerk & Shadcn UI
```

Just copy the block above (from `# Calendra` to the last line) → paste into your `README.md` on GitHub → commit → done!

It will render perfectly with headings, bold text, code blocks, lists, and the logo image. Let me know if you want to add screenshots or anything else! 🚀
