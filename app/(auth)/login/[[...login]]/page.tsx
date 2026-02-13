import Image from "next/image"; // Capital I
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-5 gap-10 animate-fade-in">
            <Image
                src="/assets/logo.svg" // Added a "/" at the start
                alt="logo"
                width={100}
                height={100}
                priority // Tells Next.js to load the logo immediately
            />
            <div className="mt-3">
                <SignIn />
            </div>
        </main>
    )
}