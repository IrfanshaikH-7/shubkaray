import LandingPageHero from '@/components/Landing/LandingPageHero'
import LandingPage from '@/components/Landing/LandingPage'
import MobileNav from '@/components/MobileNav/Index'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <MobileNav />
      <LandingPageHero />
      <LandingPage />
    </main>
  )
}
