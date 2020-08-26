import React, { useState } from 'react'
import Titles from '../Titles/Titles.js'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

const Services = (props) => {

    const [getServices, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: 'Free cocktails',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free shuttle',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            icon: <FaBeer />,
            title: 'Strongest Beer',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ])

    return (
        <section className='services'>
            <Titles title='services' />
            <div className='services-center'>
                {getServices.map((service, index) => {
                    return (
                        <article key={index}>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services