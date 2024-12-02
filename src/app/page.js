import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Values from "@/components/Value"
import Services from "@/components/Service"
import Blog from "@/components/Blog"
import Footer from "@/components/Footer"

// import BookingButton from "@/components/Bookingbutton"

export default function Home() {
  return (
 
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <Footer />
      
    </main>
 
  )
}
