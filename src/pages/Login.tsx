import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <AuthForm mode="login" />
      </div>
    </div>
  );
}
