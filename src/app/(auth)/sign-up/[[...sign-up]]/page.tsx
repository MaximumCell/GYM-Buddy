import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <SignUp />
    </main>
  )
}

export default SignUpPage