import React, { Component } from 'react'
import { RoomContext } from '../../context.js'
import Loading from '../Loading/Loading.js'

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {

        const value = this.context;
        // console.log(value)

        return (
            <div>
                hello from featured rooms
                <Loading />
            </div>
        )
    }
}

export default FeaturedRooms