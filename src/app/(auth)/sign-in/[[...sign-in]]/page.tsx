import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <SignIn />
        </main>
  )
}

export default SignInPage