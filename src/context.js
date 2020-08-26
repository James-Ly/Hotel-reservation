import React, { useState, useEffect } from 'react';
import items from './data'

const RoomContext = React.createContext()

const RoomProvider = (props) => {
    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id }
            return room;
        })
        return tempItems
    }

    const getRoom = slug => {
        let tempRooms = [...getRooms]
        const room = tempRooms.find(room => {
            return room.slug === slug
        })
        return room
    }

    const handleChange = event => {
        const type = event.target.type
        const name = event.target.name
        const value = event.target.value
        console.log(type, name, value)
    }


    const [getRooms, setRooms] = useState([])

    const [getSortedRooms, setSortedRooms] = useState([])

    const [getFeaturedRooms, setFeaturedRooms] = useState([])

    const [getLoading, setLoading] = useState(true)

    const [getType, setType] = useState('all')

    const [getCapacity, setCapacity] = useState(1)

    const [getPrice, setPrice] = useState(0)

    const [getminPrice, setminPrice] = useState(0)

    const [getmaxPrice, setmaxPrice] = useState(0)

    const [getminSize, setminSize] = useState(0)

    const [getmaxSize, setmaxSize] = useState(0)

    const [getBreakfast, setBreakfast] = useState(false)

    const [getPets, setPets] = useState(false)

    // getData
    useEffect(() => {
        setRooms(formatData(items))
    }, [])

    useEffect(() => {
        const featuredRooms = getRooms.filter(room => room.featured === true)
        setFeaturedRooms(featuredRooms)
        setSortedRooms(getRooms)
        setLoading(false)
        setmaxPrice(Math.max(...getRooms.map(room => {
            return room.price
        })))
        setmaxSize(Math.max(...getRooms.map(room => {
            return room.size
        })))
    }, [getRooms])


    return (
        <RoomContext.Provider value={{
            getRooms,
            getFeaturedRooms,
            getSortedRooms,
            getLoading,
            getType,
            getCapacity,
            getPrice,
            getminPrice,
            getmaxPrice,
            getminSize,
            getmaxSize,
            getBreakfast,
            getPets,
            getRoom,
            handleChange
        }}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

const withRoomConsumer = Component => {
    const ConsumerWrapper = props => {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
    return ConsumerWrapper
}

export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer }