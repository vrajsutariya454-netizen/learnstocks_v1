// Import useState hook from React (used to store and update values)
import { useState } from "react"

// This is a React functional component named Login
export default function Login() {

  // State variable to store email input
  const [email, setEmail] = useState("")

  // State variable to store password input
  const [password, setPassword] = useState("")

  // JSX starts here (this is what gets rendered on screen)
  return (

    // Full screen container with center alignment and gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      
      {/* White card container */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        
        {/* App Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          LearnStocks V
        </h1>

        {/* Subtitle / tagline */}
        <p className="text-center text-gray-500 mb-6">
          Learn • Trade • Grow 📈
        </p>

        {/* Email Input Field */}
        <input
          type="email" // input type is email
          placeholder="Enter your email" // placeholder text
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email} // binds input value to state
          onChange={(e) => setEmail(e.target.value)} // updates state when user types
        />

        {/* Password Input Field */}
        <input
          type="password" // hides input text
          placeholder="Enter your password"
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password} // binds password state
          onChange={(e) => setPassword(e.target.value)} // updates password state
        />

        {/* Login Button */}
        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
          onClick={() => console.log("Login clicked", email, password)} 
          // When clicked → logs email & password in console
        >
          Login
        </button>

        {/* Signup Button */}
        <button
          className="w-full border border-blue-600 text-blue-600 p-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          onClick={() => console.log("Signup clicked", email, password)}
          // Logs signup action (temporary for testing)
        >
          Create Account
        </button>

      </div>
    </div>
  )
}