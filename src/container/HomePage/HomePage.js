import React from 'react';
import Hero from '../../components/Hero/Hero.js'
import Banner from '../../components/Banner/Banner.js'
import { Link } from 'react-router-dom'
import Services from '../../components/Services/Services.js'
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms.js'
import Aux from '../../utility/Aux/Aux.js'

const Home = (props) => {
    return (
        <Aux>
            <Hero>
                <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                    <Link to='rooms' className='btn-primary'>
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </Aux>
    )
}

export default Home