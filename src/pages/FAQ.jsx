import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ContactFooter from '../components/contactFooter/ContactFooter'
import Footer from '../components/footer/Footer'
import HelpNavigator from '../components/helpNavigator/HelpNavigator'
import FAQContainer from '../components/infoContainers/FAQContainer'

const FAQ = () => {
  return (
    <>
    <Navbar home={false}/>
    <HelpNavigator/>
    <FAQContainer/>
    <ContactFooter/>
    <Footer/>
    </>
  )
}

export default FAQ