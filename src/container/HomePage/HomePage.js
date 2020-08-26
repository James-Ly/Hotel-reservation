import React from 'react';
import Hero from '../../components/Hero/Hero.js'
import Banner from '../../components/Banner/Banner.js'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <Hero>
            <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                <Link to='rooms' className='btn-primary'>
                    our rooms
                </Link>
            </Banner>
        </Hero>
    )
}

export default Home