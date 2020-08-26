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
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets } = context;
    // get unique types
    let types = getUnique(props.rooms, 'type')
    // add all
    types = ['all', ...types]
    // map to jsx
    types = types.map((type, index) => {
        return <option value={type} key={index}>{type}</option>
    })

    let people = getUnique(props.rooms, 'capacity')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (<section className='filter-container'>
        <Titles title='search rooms' />
        <form className='filter-form'>
            {/* start select type */}
            <div className='form-group'>
                <label htmlFor='type'>Room type</label>
                <select name='type' id='type' value={type} className='form-control' onChange={handleChange} >
                    {types}
                </select>
            </div>
            {/* end select type */}
            {/* start select guest number */}
            <div className='form-group'>
                <label htmlFor='capacity'>Guests</label>
                <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange} >
                    {people}
                </select>
            </div>
            {/* end select guest number */}
            {/* start select room price */}
            <div className='form-group'>
                <label htmlFor='price'>Room Price ${price}</label>
                <input
                    type='range'
                    name='price'
                    min={minPrice}
                    max={maxPrice}
                    id='price'
                    value={price}
                    onChange={handleChange}
                    className='form-control' />
            </div>
            {/* end select room price */}
            {/* start select room size */}
            <div className='form-group'>
                <label htmlFor='srice'>Room Size</label>
                <div className='size-inputs'>
                    <input type='number' name='minSize' id='size'
                        value={minSize} onChange={handleChange} className='size-input' />
                    <input type='number' name='maxSize' id='size'
                        value={maxSize} onChange={handleChange} className='size-input' />
                </div>
            </div>
            {/* end select room size */}
            {/* start of extras */}
            <div className='form-group'>
                <div className='single-extra'>
                    <input
                        type='checkbox'
                        name='breakfast'
                        id='breakfast'
                        checked={breakfast}
                        onChange={handleChange} />
                    <label htmlFor='breakfast'>Breakfast</label>
                </div>
                <div className='single-extra'>
                    <input
                        type='checkbox'
                        name='pets'
                        id='pets'
                        checked={pets}
                        onChange={handleChange} />
                    <label htmlFor='pets'>Pets</label>
                </div>
            </div>
            {/* end of extras */}
        </form>
    </section>)
}

export default RoomsFilter