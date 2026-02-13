\# Calendly Clone

!\[Logo\](./public/assets/logo.svg)

\## Overview

This project is a full-stack web application inspired by Calendly, designed for users to create, manage, and book events or meetings. It allows authenticated users to set up personal schedules, create events with availability slots, and share public booking links. Others can book meetings based on the host's availability without needing an account.

The app handles user authentication, event creation/editing, scheduling, and booking confirmations. It integrates real-time availability checks, email notifications (via Google APIs or similar), and a clean UI built with modern React components.

Key functionalities include:

\- User authentication and profiles.

\- Event management (create, edit, list).

\- Schedule configuration with time slots.

\- Public booking pages with available times.

\- Success confirmation after booking.

This is built as a Next.js application with server-side rendering, API routes, and a PostgreSQL-compatible database (via Neon).

\## Features

\- \*\*User Authentication\*\*: Secure sign-up and login using Clerk, with support for social logins and email verification.

\- \*\*Event Management\*\*:

\- Create new events with details like name, description, and duration.

\- Edit existing events.

\- List all user-owned events with cards for quick overview.

\- Delete or update events (via forms and server actions).

\- \*\*Scheduling\*\*:

\- Configure personal availability schedules.

\- Generate valid time slots based on user schedule and event duration.

\- Handle time zones using \`date-fns-tz\`.

\- \*\*Booking System\*\*:

\- Public booking pages for events, showing available slots.

\- Form to select and confirm bookings.

\- Success page with confirmation details and email notification tease.

\- \*\*Public Profiles\*\*: Shareable profiles for users to showcase availability.

\- \*\*UI/UX Enhancements\*\*:

\- Responsive design with Tailwind CSS and Shadcn UI components.

\- Loading states, animations (via \`tw-animate-css\`), and toasts (via \`sonner\`).

\- Custom forms with validation using \`react-hook-form\` and \`zod\`.

\- \*\*Database Integration\*\*: Use Drizzle ORM for type-safe queries and migrations with Neon Database (serverless PostgreSQL).

\- \*\*Error Handling\*\*: Custom 404 pages, authentication redirects, and alert messages for invalid states.

\- \*\*Debugging\*\*: Built-in console logs for troubleshooting authentication and data fetching.

\## Tech Stack

\### Frontend

\- \*\*Next.js\*\* (v16.1.6): React framework for server-side rendering, API routes, and static generation.

\- \*\*React\*\* (v19.2.3) & \*\*React DOM\*\*: Core libraries for building UIs.

\- \*\*Clerk\*\*: Authentication and user management.

\- \*\*Shadcn UI\*\*: Reusable UI components (e.g., Card, Button, Popover) built on Radix UI and Tailwind.

\- \*\*React Hook Form\*\* & \*\*Zod\*\*: Form handling and validation.

\- \*\*Lucide React\*\*: Icons library.

\- \*\*Date-fns\*\* & \*\*Date-fns-tz\*\*: Date manipulation and time zone support.

\- \*\*Next Themes\*\*: Theme management (light/dark mode).

\- \*\*React Day Picker\*\*: Calendar/date picker component.

\- \*\*React Loading Indicators\*\*: Loading spinners.

\- \*\*Sonner\*\*: Toast notifications.

\- \*\*Tailwind Merge\*\* & \*\*Class Variance Authority (CVA)\*\*: Utility for merging Tailwind classes.

\- \*\*TW Animate CSS\*\*: CSS animations.

\### Backend

\- \*\*Drizzle ORM\*\* (v0.45.1): Type-safe ORM for SQL queries.

\- \*\*Neon Database\*\* (@neondatabase/serverless): Serverless PostgreSQL database.

\- \*\*Google APIs\*\*: Integration for email/calendar features (e.g., sending confirmations).

\- \*\*Clerk Server\*\*: For server-side user data fetching.

\- \*\*Next.js Server Actions\*\*: For handling form submissions and database operations.

\### Development Tools

\- \*\*TypeScript\*\* (v5): Static typing for better code quality.

\- \*\*ESLint\*\* (v9): Linting with Next.js config.

\- \*\*Drizzle Kit\*\* (v0.31.8): For database schema generation, migrations, and studio.

\- \*\*Tailwind CSS\*\* (v4.0.0): Utility-first CSS framework.

\- \*\*PostCSS\*\* & \*\*Autoprefixer\*\*: CSS processing.

\- \*\*dotenv\*\*: Environment variable management.

\### Dependencies Summary (from package.json)

\- Production: @clerk/nextjs, @clerk/themes, @hookform/resolvers, @neondatabase/serverless, class-variance-authority, clsx, date-fns, date-fns-tz, dotenv, drizzle-orm, googleapis, lucide-react, next, next-themes, radix-ui, react, react-day-picker, react-dom, react-hook-form, react-loading-indicators, sonner, tailwind-merge, zod.

\- Development: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, drizzle-kit, eslint, eslint-config-next, shadcn, tailwindcss, tw-animate-css, typescript.

\## Prerequisites

\- Node.js (v18+ recommended).

\- A Neon Database account (or any PostgreSQL-compatible DB).

\- Clerk account for authentication.

\- Google API credentials (if using email integrations).

\- Git for version control.

\## Installation

1\. \*\*Clone the Repository\*\*:

\`\`\`

git clone https://github.com/yourusername/calendly-clone.git

cd calendly-clone

\`\`\`

2\. \*\*Install Dependencies\*\*:

\`\`\`

npm install

\`\`\`

Or use Yarn/PNPM if preferred.

3\. \*\*Set Up Environment Variables\*\*:

Create a \`.env.local\` file in the root directory and add the following:

\`\`\`

\# Database (Neon)

DATABASE\_URL=postgresql://username:password@host:port/dbname?sslmode=require

\# Clerk

NEXT\_PUBLIC\_CLERK\_PUBLISHABLE\_KEY=pk\_test\_...

CLERK\_SECRET\_KEY=sk\_test\_...

\# Google APIs (for email/calendar)

GOOGLE\_CLIENT\_ID=your-client-id

GOOGLE\_CLIENT\_SECRET=your-client-secret

GOOGLE\_API\_KEY=your-api-key

\# Other (e.g., Next.js)

NEXTAUTH\_URL=http://localhost:3000

\`\`\`

Replace placeholders with your actual credentials.

4\. \*\*Database Setup\*\*:

\- Generate migrations: \`npm run db:generate\`

\- Apply migrations: \`npm run db:migrate\`

\- (Optional) Open Drizzle Studio: \`npm run db:studio\`

5\. \*\*Run the Development Server\*\*:

\`\`\`

npm run dev

\`\`\`

Open \[http://localhost:3000\](http://localhost:3000) in your browser.

6\. \*\*Build for Production\*\*:

\`\`\`

npm run build

npm run start

\`\`\`

\## Usage

\### Key Pages and Routes

\- \*\*/login\*\*: Sign-in page using Clerk.

\- \*\*/register\*\*: Sign-up page.

\- \*\*/events\*\*: List of user's events (authenticated).

\- \*\*/events/new\*\*: Create a new event.

\- \*\*/events/\[eventid\]/edit\*\*: Edit an existing event.

\- \*\*/schedule\*\*: Manage personal schedule.

\- \*\*/book/\[clerkUserId\]/\[eventid\]\*\*: Public booking page for an event.

\- \*\*/book/\[clerkUserId\]/\[eventid\]/success\*\*: Booking success confirmation.

\- \*\*/profile/\[clerkUserId\]\*\*: Public user profile.

\- \*\*/public\*\*: Redirects to user's booking page if authenticated.

\### Authentication Flow

\- Users must sign in to access private routes (e.g., /events, /schedule).

\- Public routes (e.g., booking pages) are accessible without auth.

\### Custom Components

\- \*\*Forms\*\*: EventForm, ScheduleForm, MeetingForm – Handle data submission via server actions.

\- \*\*Cards\*\*: EventCard for displaying events.

\- \*\*Loading\*\*: Spinner for async states.

\- \*\*PublicProfile\*\*: Displays user info and events.

\### Debugging Tips

\- Check console logs in pages like SchedulePage for auth/database issues.

\- Use Clerk Dashboard for user management.

\- Monitor Neon Console for database queries.

\## Contributing

1\. Fork the repository.

2\. Create a feature branch: \`git checkout -b feature/new-feature\`

3\. Commit changes: \`git commit -m 'Add new feature'\`

4\. Push to the branch: \`git push origin feature/new-feature\`

5\. Open a Pull Request.

Please follow code style (ESLint) and add tests where possible.

\## License

This project is licensed under the MIT License. See the \[LICENSE\](LICENSE) file for details.

\## Acknowledgments

\- Inspired by Calendly.

\- Built with open-source tools like Next.js, Clerk, and Shadcn UI.

\- Special thanks to the community for libraries and tutorials.

For questions or issues, open a GitHub issue or contact the maintainer at \[your.email@example.com\].
