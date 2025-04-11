
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/library" element={<LibraryPage />} />
    </Routes>
  )
}

function WelcomeScreen() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-500 text-white text-center px-4">
      <div className="mb-10">
        <img src="/reading-illustration.svg" alt="Reading" className="w-48 mx-auto" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Books are the key to a healthy mind</h1>
      <p className="mb-6 text-sm">Read and log your favourite books, all in one beautiful place.</p>
      <div className="w-full max-w-xs">
        <button onClick={() => navigate('/login')} className="w-full bg-white text-blue-500 font-semibold py-2 rounded mb-2">Login</button>
        <button onClick={() => navigate('/register')} className="w-full bg-blue-700 text-white font-semibold py-2 rounded">Register</button>
      </div>
    </div>
  )
}

function LoginPage() {
  const navigate = useNavigate()
  const handleLogin = () => navigate('/library')

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-sm bg-white shadow p-6 rounded">
        <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
        <p className="mb-4 text-sm text-gray-600">Log in to continue tracking your reading journey</p>
        <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Email" />
        <input className="w-full border px-3 py-2 rounded mb-4" placeholder="Password" type="password" />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white font-semibold py-2 rounded">Login</button>
        <div className="mt-4 text-sm text-center">
          No account? <span onClick={() => navigate('/register')} className="text-blue-500 underline cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  )
}

function RegisterPage() {
  const navigate = useNavigate()
  const handleRegister = () => navigate('/library')

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-sm bg-white shadow p-6 rounded">
        <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
        <p className="mb-4 text-sm text-gray-600">Start your reading journey today</p>
        <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Name" />
        <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Email" />
        <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Password" type="password" />
        <input className="w-full border px-3 py-2 rounded mb-4" placeholder="Confirm Password" type="password" />
        <button onClick={handleRegister} className="w-full bg-blue-500 text-white font-semibold py-2 rounded">Register</button>
        <div className="mt-4 text-sm text-center">
          Already have an account? <span onClick={() => navigate('/login')} className="text-blue-500 underline cursor-pointer">Login</span>
        </div>
      </div>
    </div>
  )
}

function LibraryPage() {
  const [activeTab, setActiveTab] = useState('read')

  const booksRead = [
    { title: '1984', author: 'George Orwell' },
    { title: 'Dune', author: 'Frank Herbert' },
  ]
  const booksTBR = [
    { title: 'The Alchemist', author: 'Paulo Coelho' },
    { title: 'Sapiens', author: 'Yuval Noah Harari' },
  ]

  const books = activeTab === 'read' ? booksRead : booksTBR

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <div className="flex mb-4 space-x-2">
        <button onClick={() => setActiveTab('read')} className={`flex-1 py-2 rounded ${activeTab === 'read' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>Read</button>
        <button onClick={() => setActiveTab('tbr')} className={`flex-1 py-2 rounded ${activeTab === 'tbr' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>To Be Read</button>
      </div>
      <ul>
        {books.map((book, idx) => (
          <li key={idx} className="mb-2 p-4 bg-white shadow rounded">
            <h2 className="font-bold text-lg">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
