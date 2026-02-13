import { ScheduleForm } from "@/components/forms/ScheduleForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSchedule } from "@/server/actions/schedule"
import { auth } from "@clerk/nextjs/server"

export default async function SchedulePage() {
    // LOG 1: Check if the page is even loading
    console.log("--- DEBUG: SchedulePage Started ---")

    const { userId, redirectToSignIn } = await auth()
    
    // LOG 2: Check if authentication is working
    console.log("--- DEBUG: Auth Result ---", { userId })

    if (!userId) {
        console.log("--- DEBUG: No User found, redirecting... ---")
        return redirectToSignIn()
    }

    // LOG 3: Check before fetching database
    console.log("--- DEBUG: Fetching schedule for user:", userId)

    const schedule = await getSchedule(userId)

    // LOG 4: Check what the database actually returned
    console.log("--- DEBUG: Database result ---", schedule)

    return (
        <Card className="max-w-md mx-auto border-8 border-blue-200 shadow-2xl shadow-accent-foreground">
            <CardHeader>
                <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
                <ScheduleForm schedule={schedule} />
            </CardContent>
        </Card>
    )
}