
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import LibraryPage from './pages/LibraryPage'
import SearchPage from './pages/SearchPage'
import BookDetailsPage from './pages/BookDetailsPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
