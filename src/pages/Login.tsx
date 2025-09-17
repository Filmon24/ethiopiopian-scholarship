import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import AuthForm from "../components/AuthForm"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to continue
          </CardDescription>
          <CardAction>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <AuthForm mode="login" />
        </CardContent>
      </Card>
    </div>
  )
}
