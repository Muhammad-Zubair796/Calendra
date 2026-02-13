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
    <main className="relative">
      {/* render private navbar if user exists otherwise public navbar */}
      {user ? <PrivateNavBar /> : <PublicNavBar />}

      {/* ✅ ONLY ONE {children} HERE inside the section */}
      <section className="pt-36">
        {children}
      </section>

      {/* Added footer */}
      <footer className="text-center py-4 bg-gray-100 text-gray-600">
        Built By M Zubair
      </footer>
    </main>
  )
}