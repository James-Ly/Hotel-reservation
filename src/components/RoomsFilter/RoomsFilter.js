import React, { useContext } from 'react'
import { RoomContext } from '../../context.js'
import Titles from '../Titles/Titles.js'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => {
        return item[value]
    }))]
}

const RoomsFilter = props => {
    const context = useContext(RoomContext)
    const {
        handleChange,
        getType,
        getCapacity,
        getPrice,
        getminPrice,
        getmaxPrice,
        getminSize,
        getmaxSize,
        getBreakfast,
        getPets } = context;
    // get unique types
    let types = getUnique(props.rooms, 'type')
    // add all
    types = ['all', ...types]
    // map to jsx
    types = types.map((type, index) => {
        return <option value={type} key={index}>{type}</option>
    })
    return (<section className='filter-container'>
        <Titles title='search rooms' />
        <form className='filter-form'>
            <div className='form-group'>
                <label htmlFor='type'>room type</label>
                <select name='type' id='type' value={getType} className='form-control' onChange={handleChange} >
                    {types}
                </select>
            </div>
        </form>
    </section>)
}

export default RoomsFilter