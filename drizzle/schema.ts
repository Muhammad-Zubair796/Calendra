import { DAYS_OF_WEEK_IN_ORDER } from "@/constants";
import { relations } from "drizzle-orm";
import { pgTable, text, integer, boolean, uuid, timestamp, index, pgEnum } from "drizzle-orm/pg-core";

// We define these once so we can reuse them in every table!
const createdAt = timestamp("created_at").defaultNow().notNull();
const updatedAt = timestamp("updated_at")
  .defaultNow()
  .notNull()
  .$onUpdate(() => new Date()); // Automatically updates time when you edit a row

export const EventTable = pgTable(
  "events", // This is the actual table name in Neon
  {
    id: uuid("id").primaryKey().defaultRandom(), // DB makes this for you
    name: text("name").notNull(),
    description: text("description").notNull(),
    durationInMinutes: integer("durationInMinutes").notNull(),
    clerkUserId: text("clerkUserId").notNull(), // Links to Clerk user
    isActive: boolean("isActive").notNull().default(true),
    createdAt,
    updatedAt,
  },
  (table) => [
    // This index makes searching "Give me all events for Zubair" super fast
    index("clerkUserIdIndex").on(table.clerkUserId),
  ]
);
export const ScheduleTable = pgTable(
    "schedules",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        timezone:text("timezone").notNull(),
        clerkUserId: text("clerkUserId").notNull().unique(),
        createdAt,
        updatedAt,
    

    }

)
export const scheduleRelations = relations(ScheduleTable,({many})=>({
    availabilities:many(ScheduleAvailabilityTable)
}))
export const scheduleDayOfWeekEnum = pgEnum("day",DAYS_OF_WEEK_IN_ORDER)
export const ScheduleAvailabilityTable = pgTable(
    "ScheduleAvailabilities",
    {
        id:uuid("id").primaryKey().defaultRandom(),
        scheduleId:uuid("scheduleId").notNull().references(()=>ScheduleTable.id),
        startTime:text("startTime").notNull(),
        endTime:text("endTime").notNull(),
        dayOfWeek:scheduleDayOfWeekEnum("dayOfWeek").notNull(),



    },
    (table)=>([
        index("scheduleIdIndex").on(table.scheduleId),

    ])
)
export const scheuleAvailibilityRelations = relations(ScheduleAvailabilityTable,({one})=>({
    schedule:one(ScheduleTable,{
        fields:[ScheduleAvailabilityTable.scheduleId],
        references:[ScheduleTable.id]
    })
})
)