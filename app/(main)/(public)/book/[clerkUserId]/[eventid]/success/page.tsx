import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/lib/formatters";
import { getEvent } from "@/server/actions/events";
import { clerkClient } from "@clerk/nextjs/server";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function SuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ clerkUserId: string; eventid: string }>;
  searchParams: Promise<{ startTime: string }>;
}) {
  const { clerkUserId, eventid } = await params;
  const { startTime } = await searchParams;

  // Fetch event
  const event = await getEvent(clerkUserId, eventid);

  if (!event) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <AlertTriangle className="mb-4 h-12 w-12 text-red-500" />
        <h1 className="mb-2 text-2xl font-bold">Event Not Found</h1>
        <p className="mb-6 text-muted-foreground">
          This event may have been deleted or is no longer available.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    );
  }

  // Fetch host user from Clerk
  const client = await clerkClient();
  const calendarUser = await client.users.getUser(clerkUserId);

  // Validate and parse startTime
  const startTimeDate = new Date(startTime);
  const isValidDate = !isNaN(startTimeDate.getTime());

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-6">
      <Card className="w-full max-w-xl border-8 border-blue-200 shadow-2xl shadow-accent-foreground/20">
        <CardHeader className="text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <span className="text-3xl">✅</span>
          </div>
          <CardTitle className="text-2xl md:text-3xl">
            Successfully Booked {event.name}
          </CardTitle>
          <CardDescription className="text-lg">
            with {calendarUser.fullName ?? calendarUser.firstName ?? "the host"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          {isValidDate ? (
            <div className="rounded-lg bg-muted p-6">
              <p className="mb-2 text-sm text-muted-foreground">Your appointment is scheduled for:</p>
              <p className="text-xl font-semibold">{formatDateTime(startTimeDate)}</p>
            </div>
          ) : (
            <p className="text-destructive">
              Booking time could not be displayed (invalid timestamp).
            </p>
          )}

          <div className="space-y-2">
            <p className="font-medium">Confirmation email sent</p>
            <p className="text-sm text-muted-foreground">
              You should receive a confirmation email shortly with all details.
            </p>
            <p className="text-sm text-muted-foreground">
              You can safely close this page now.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}