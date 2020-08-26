import React from "react"
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer.js'
import Aux from '../../utility/Aux/Aux'

const RoomPage = (props) => {
    return (
        <Aux>
            <Hero hero='roomsHero'>
                <Banner title='Our Rooms'>
                    <Link to='/' className='btn-primary'>
                        Return Home
                </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </Aux>
    )
}

export default RoomPage