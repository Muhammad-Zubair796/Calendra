import EventForm from "@/components/forms/EventForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewEventPage() {
  return (
    // 1. This Wrapper pushes everything down (away from the fixed header)
    <div className="flex flex-col items-center justify-center pt-36 pb-10">
      
      <Card className="max-w-md w-full mx-auto border-8 border-blue-200 shadow-2xl shadow-accent-foreground">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">New Event</CardTitle>
        </CardHeader>
        
        <CardContent>
          <EventForm />
        </CardContent>
      </Card>

    </div>
  );
}