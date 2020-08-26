import React from 'react'
import RoomsFilter from '../RoomsFilter/RoomsFilter'
import RoomsList from '../RoomsList/RoomsList'
import Loading from '../Loading/Loading.js'
import { RoomConsumer } from '../../context'

const RoomsContainer = (props) => {
    return (
        <RoomConsumer>
            {value => {
                const { getLoading, getRooms, getSortedRooms } = value
                if (getLoading) {
                    return <Loading />
                }
                return (
                    <div>
                        Hello from rooms container
                        <RoomsFilter rooms={getRooms} />
                        <RoomsList rooms={getSortedRooms} />
                    </div>
                )
            }}
        </RoomConsumer >

    )
}

export default RoomsContainer