
import React, { useState } from 'react'

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching for: ${query}`)
    setResults([])
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Search Books</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchPage
