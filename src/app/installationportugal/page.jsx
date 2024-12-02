import InstallationForm from '@/components/form/ContactForm'
import Navbar from '@/components/Navbar'
import Instal from '@/components/installation/InstallationPortugal.jsx'
import React from 'react'


function page() {
  return (
    <>
    <Navbar></Navbar>
    <Instal></Instal>
    <InstallationForm></InstallationForm>
    </>
  )
}

export default page