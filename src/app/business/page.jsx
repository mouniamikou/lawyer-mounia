import BusinessServicesPage from '@/components/business/BusinessComponent'
import Footer from '@/components/Footer'
import BusinessForm from '@/components/form/BusinessForm'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar></Navbar>
    <BusinessServicesPage></BusinessServicesPage>
    <BusinessForm></BusinessForm>
    <Footer></Footer>
    </>
  )
}

export default page