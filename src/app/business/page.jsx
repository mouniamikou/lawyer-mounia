import BusinessServicesPage from '@/components/business/BusinessComponent'
import BusinessForm from '@/components/form/BusinessForm'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar></Navbar>
    <BusinessServicesPage></BusinessServicesPage>
    <BusinessForm></BusinessForm>
    </>
  )
}

export default page