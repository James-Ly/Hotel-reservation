import React from "react"
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'

const RoomPage = (props) => {
    return (
        <Hero hero='roomsHero'>
            <Banner title='Our Rooms'>
                <Link to='/' className='btn-primary'>
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default RoomPage