import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

import Services from "@/components/Service"

import Footer from "@/components/Footer"
import BlogList from "./blogs/page"

// import BookingButton from "@/components/Bookingbutton"

export default function Home() {
  return (
 
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BlogList/>
      <Footer />
      
    </main>
 
  )
}
