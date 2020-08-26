import React from 'react'
import RoomsFilter from '../RoomsFilter/RoomsFilter'
import RoomsList from '../RoomsList/RoomsList'
import Loading from '../Loading/Loading.js'
import { withRoomConsumer } from '../../context'
import Aux from '../../utility/Aux/Aux'

const RoomsContainer = props => {
    const { getLoading, getSortedRooms, getRooms } = props.context
    if (getLoading) {
        return <Loading />
    }
    return (
        <Aux>
            <RoomsFilter rooms={getRooms} />
            <RoomsList rooms={getRooms} />
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
//                 const { getLoading, getRooms, getSortedRooms } = value
//                 if (getLoading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from rooms container
//                         <RoomsFilter rooms={getRooms} />
//                         <RoomsList rooms={getSortedRooms} />
//                     </div>
//                 )
//             }}
//         </RoomConsumer >

//     )
// }

// export default RoomsContainer