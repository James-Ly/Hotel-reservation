import React from 'react'
import Hero from '../../components/Hero/Hero.js'
import Banner from '../../components/Banner/Banner.js'
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
    return (
        <Hero>
            <Banner title='404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>
                    Return Home
                    </Link>
            </Banner>
        </Hero>
    )
}

export default ErrorPage