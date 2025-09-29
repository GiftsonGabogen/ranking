CREATE TABLE "lists" (
	"id" text PRIMARY KEY NOT NULL,
	"author_id" text NOT NULL,
	"title" varchar(200) NOT NULL,
	"slug" varchar(200) NOT NULL,
	"description" text,
	"cover_image" varchar(500),
	"category" varchar(50) DEFAULT 'general' NOT NULL,
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"cycle_end_date" timestamp,
	"allow_suggestions" boolean DEFAULT false NOT NULL,
	"view_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "lists_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "lists" ADD CONSTRAINT "lists_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;