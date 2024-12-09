import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Correct import

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user signed in");
        navigate("/profile");
      })
      .catch((error) => {
        setError(error.message); // Set user-friendly error
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-cyan-500 focus:ring-offset-2"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
              className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-cyan-500 focus:ring-offset-2"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
          >
            Submit
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/reg" className="text-cyan-600 hover:underline font-medium">
            Get an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
