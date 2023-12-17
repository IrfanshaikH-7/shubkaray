import LandingPage from '@/components/LandingPage'
import MobileNav from '@/components/MobileNav/Index'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <MobileNav />
      <LandingPage />
    </main>
  )
}
