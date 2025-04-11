
import React from 'react'

const LoginPage = () => {
  const handleGoogleSignIn = () => alert('Google Sign-In clicked!')
  const handleAppleSignIn = () => alert('Apple Sign-In clicked!')

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Login / Registration</h1>
      <button onClick={handleGoogleSignIn} className="w-full mb-2 px-4 py-2 border rounded text-center hover:bg-gray-50">
        Sign in with Google
      </button>
      <button onClick={handleAppleSignIn} className="w-full px-4 py-2 border rounded text-center hover:bg-gray-50">
        Sign in with Apple
      </button>
    </div>
  )
}

export default LoginPage
