import React from 'react'
import RoomsFilter from '../RoomsFilter/RoomsFilter'
import RoomsList from '../RoomsList/RoomsList'
import Loading from '../Loading/Loading.js'
import { withRoomConsumer } from '../../context'
import Aux from '../../utility/Aux/Aux'

const RoomsContainer = props => {
    const { loading, sortedRooms, rooms } = props.context
    if (loading) {
        return <Loading />
    }
    return (
        <Aux>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </Aux>
    )

}

export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomsFilter from '../RoomsFilter/RoomsFilter'
// import RoomsList from '../RoomsList/RoomsList'
// import Loading from '../Loading/Loading.js'
// import { RoomConsumer } from '../../context'

// const RoomsContainer = (props) => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, rooms, sortedRooms } = value
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from rooms container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 )
//             }}
//         </RoomConsumer >

//     )
// }

// export default RoomsContainer