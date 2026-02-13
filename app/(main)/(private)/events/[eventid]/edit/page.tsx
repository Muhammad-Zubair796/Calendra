import EventForm from "@/components/forms/EventForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getEvent } from "@/server/actions/events"
import { auth } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ eventid: string }>
}) {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()

  const { eventid } = await params 
  
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
            // FIX: Convert null to an empty string. 
            // This satisfies the 'string' type requirement in the form.
            description: event.description ?? "", 
          }}
        />
      </CardContent>
    </Card>
  )
}