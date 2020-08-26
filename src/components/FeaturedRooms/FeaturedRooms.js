import React, { Component } from 'react'
import { RoomContext } from '../../context.js'
import Loading from '../Loading/Loading.js'
import Titles from '../Titles/Titles.js'
import Room from '../Room/Room'

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { rooms, featuredRooms, loading } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section className='featured-rooms'>
                <Titles title='Featured Rooms' />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}

                </div>
            </section>
        )
    }
}

export default FeaturedRooms