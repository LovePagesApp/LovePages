
import React from 'react'
import { Link } from 'react-router-dom'

const LibraryPage = () => {
  const readBooks = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ]
  const toBeReadBooks = [
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari" },
    { id: 4, title: "The Alchemist", author: "Paulo Coelho" }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Library</h1>
      <section className="mb-8">
        <h2 className="text-2xl mb-2">Read Books</h2>
        <ul>
          {readBooks.map((book) => (
            <li key={book.id} className="mb-1">
              <Link to={`/book/${book.id}`} className="text-blue-600">
                {book.title} by {book.author}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl mb-2">To Be Read</h2>
        <ul>
          {toBeReadBooks.map((book) => (
            <li key={book.id} className="mb-1">
              <Link to={`/book/${book.id}`} className="text-blue-600">
                {book.title} by {book.author}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default LibraryPage
