CREATE TABLE events
(
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  book_title TEXT,
  isbn TEXT,
  category TEXT,
  author_name TEXT,
  author_affiliation TEXT,
  member_code TEXT,
  member_name TEXT,
  phone TEXT,
  borrow_date DATE,
  due_date DATE,
  returned_date DATE
);