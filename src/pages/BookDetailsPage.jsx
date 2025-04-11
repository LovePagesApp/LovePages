
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetailsPage = () => {
  const { id } = useParams()
  const [bookStatus, setBookStatus] = useState('none')
  const [format, setFormat] = useState('physical')

  const handleMarkRead = () => {
    setBookStatus('read')
    alert('Marked as read')
  }

  const handleAddTBR = () => {
    setBookStatus('tbr')
    alert('Added to TBR')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Book Details (ID: {id})</h1>
      <p className="mb-4">Book details information goes here.</p>
      <div className="mb-4">
        <label className="block mb-2">Select Format:</label>
        <select value={format} onChange={(e) => setFormat(e.target.value)} className="w-full p-2 border rounded">
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
          <option value="audiostory">Audiostory</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button onClick={handleMarkRead} className="flex-grow px-4 py-2 bg-green-600 text-white rounded">
          Mark as Read
        </button>
        <button onClick={handleAddTBR} className="flex-grow px-4 py-2 bg-blue-600 text-white rounded">
          Add to TBR
        </button>
      </div>
    </div>
  )
}

export default BookDetailsPage
