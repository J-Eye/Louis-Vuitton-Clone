import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HelpNavigator from '../components/helpNavigator/HelpNavigator'
import ContactFooter from '../components/contactFooter/ContactFooter'
import Footer from '../components/footer/Footer'
import ContactContainer from '../components/infoContainers/ContactContainer'
const ContactUs = () => {
  return (
    <>
    <Navbar home={false}/>
    <HelpNavigator/>
    
    <ContactContainer/>
    <ContactFooter/>
    <Footer/>
    </>
  )
}

export default ContactUs