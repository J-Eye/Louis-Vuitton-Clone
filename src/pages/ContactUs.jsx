import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HelpNavigator from '../components/helpNavigator/HelpNavigator'
import ContactFooter from '../components/contactFooter/ContactFooter'
import Footer from '../components/footer/Footer'
import ContactContainer from '../components/infoContainers/ContactContainer'
import ChatButton from '../components/buttons/ChatButton'
const ContactUs = () => {
  return (
    <>
    <Navbar home={false}/>
    <HelpNavigator/>
    
    <ContactContainer/>
    <ContactFooter/>
    <Footer/>
    <ChatButton/>
    </>
  )
}

export default ContactUs