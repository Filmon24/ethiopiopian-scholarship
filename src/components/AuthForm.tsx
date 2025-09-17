import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  reload,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"

type Props = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        if (userCred.user) {
          await sendEmailVerification(userCred.user);
          alert("Signup successful! Check your email for a verification link.");
          navigate("/login");
        }
      } else {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        await reload(userCred.user); 
        if (userCred.user.emailVerified) {
          navigate("/dashboard");
        } else {
          alert("Please verify your email before logging in.");
        }
      }
    } catch (err: any) {
      setError(err.message);
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button variant="outline"
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Loading..." : mode === "signup" ? "Sign Up" : "Login"}
      </Button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}