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

    const [getRooms, setRooms] = useState([])

    const [getFeaturedRooms, setFeaturedRooms] = useState([])

    // getData
    useEffect(() => {
        setRooms(formatData(items))
    }, [])

    useEffect(() => {
        const featuredRooms = getRooms.filter(room => room.featured === true)
        setFeaturedRooms(featuredRooms)
    }, [getRooms])


    return (
        <RoomContext.Provider value={{ ...getRooms}}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }