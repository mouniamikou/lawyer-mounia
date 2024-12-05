import Footer from '@/components/Footer'
import MainContactForm from '@/components/form/MainForm'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <MainContactForm></MainContactForm>
    <Footer></Footer>
    </>
  )
}

export default page