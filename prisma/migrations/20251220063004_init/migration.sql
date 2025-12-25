-- CreateTable
-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,

    -- Book
    "book_title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    -- Author
    "author_name" TEXT NOT NULL,
    "author_affiliation" TEXT NOT NULL,

    -- Member
    "member_code" TEXT NOT NULL,
    "member_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    -- Borrow info
    "borrow_date" TIMESTAMP NOT NULL,
    "due_date" TIMESTAMP NOT NULL,
    "returned_date" TIMESTAMP,

    -- Organizer (optional)
    "organizerId" INTEGER,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);
