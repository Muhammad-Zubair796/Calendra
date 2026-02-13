import PrivateNavBar from "@/components/PrivateNavBar"
import PublicNavBar from "@/components/PublicNavBar"
import { currentUser } from "@clerk/nextjs/server"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  
  return (
    // 1. Added flex, flex-col, and min-h-screen to make this container fill the page
    <div className="relative flex flex-col min-h-screen">
      
      {/* render private navbar if user exists otherwise public navbar */}
      {user ? <PrivateNavBar /> : <PublicNavBar />}

      {/* 2. Added flex-1 here. This will push the footer down if {children} is empty */}
      <section className="pt-36 flex-1">
        {children}
      </section>

      {/* 3. The Footer remains at the bottom of the stack */}
      <footer className="text-center py-4 bg-gray-100 text-gray-600 border-t">
        Built By M Zubair
      </footer>
    </div>
  )
}