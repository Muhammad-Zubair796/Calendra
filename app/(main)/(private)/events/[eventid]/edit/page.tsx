import EventForm from "@/components/forms/EventForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getEvent } from "@/server/actions/events"
import { auth } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ eventid: string }> // 1️⃣ Change eventId to eventid (lowercase)
}) {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()

  const { eventid } = await params // 2️⃣ Change eventId to eventid (lowercase)
  
  // 3️⃣ Pass eventid (lowercase) to the function
  const event = await getEvent(userId, eventid)

  if (!event) {
    return notFound()
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Edit Event</CardTitle>
      </CardHeader>
      <CardContent>
        <EventForm
          event={{
            ...event,
            description: event.description || undefined,
          }}
        />
      </CardContent>
    </Card>
  )
}