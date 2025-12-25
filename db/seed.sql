INSERT INTO Event (
  book_title,
  isbn,
  category,
  author_name,
  author_affiliation,
  member_code,
  member_name,
  phone,
  borrow_date,
  due_date,
  returned_date
)
VALUES
-- George Orwell
('1984', 'ISBN-1984', 'Novel',
 'George Orwell', 'Independent',
 'M001', 'Somchai Jaidee', '0812345678',
 '2024-07-01', '2024-07-10', NULL),

('Animal Farm', 'ISBN-AF', 'Political Satire',
 'George Orwell', 'Independent',
 'M001', 'Somchai Jaidee', '0812345678',
 '2024-07-01', '2024-07-10', '2024-07-09'),

-- Haruki Murakami
('Norwegian Wood', 'ISBN-NW', 'Novel',
 'Haruki Murakami', 'Waseda University',
 'M002', 'Somsri Deemark', '0899999999',
 '2024-07-03', '2024-07-15', NULL),

('Kafka on the Shore', 'ISBN-KAFKA', 'Fantasy',
 'Haruki Murakami', 'Waseda University',
 'M001', 'Somchai Jaidee', '0812345678',
 '2024-07-10', '2024-07-20', NULL),

-- Yuval Harari
('Sapiens', 'ISBN-SAPIENS', 'History',
 'Yuval Harari', 'Hebrew University',
 'M001', 'Somchai Jaidee', '0812345678',
 '2024-07-10', '2024-07-20', '2024-07-18');
