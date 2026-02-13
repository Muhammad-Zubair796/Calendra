ALTER TABLE "ScheduleAvailabilities" ALTER COLUMN "dayOfWeek" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."day";--> statement-breakpoint
CREATE TYPE "public"."day" AS ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');--> statement-breakpoint
ALTER TABLE "ScheduleAvailabilities" ALTER COLUMN "dayOfWeek" SET DATA TYPE "public"."day" USING "dayOfWeek"::"public"."day";