'use client'
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { neobrutalism } from "@clerk/themes";
export default function LandingPage(){
    return(
        <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
            <section className="flex items-center flex-col">
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    priority
                />
                {/*main heading*/}
                <h1 className="text-2xl 
                font-black lg:text-3xl">
                Your time, perfectly planned

                </h1>
                <p className="font-extralight">
                    Join millions of professionals 
                    who easily book meetings with #1
                    scheduling tool

                </p>
                <Image
                    src="/assets/planning.svg"
                    alt="planning"
                    width={100}
                    height={100}

                
                />


            </section>
            <div className="mt-3">
                <SignIn
                routing="hash"
                appearance={{
                    baseTheme:neobrutalism
                }}
                
                
                
                />

            </div>

        </main>
    )
}