import React from 'react'
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'
import Aside from '../components/Aside/Aside'
import EventShedule from '../components/EventShedule/EventShedule'
import EventVenue from '../components/EventVenue/EventVenue'
import TheHotels from '../components/TheHotels/TheHotels'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <Section />
            <Aside/>
            <EventShedule/>
            <EventVenue/>
            <TheHotels/>
            <FAQ/>
            <Footer/>
        </>

    )

}

export default Home
