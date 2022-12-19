import React from 'react'
import { MdLocationOn } from 'react-icons/md'

const BodyContainer = (Props) => {
    
    return (
        <>
                <div className='blog-container'>
                    <img src={`../images/${Props.img}`} />

                    < MdLocationOn className='location-icon-box' />
                    <h4 className='place-title-box'>{Props.location}</h4>
                    <a className='google-map-box' href={Props.maplocation}>View on Google Map</a>
                    <h1 className='location-name-box'>{Props.header}</h1>
                    <p className='date-box'>{Props.date}</p>
                    <div className='description-box'>
                        <p className='description-para'>{Props.des}</p>
                        <hr className='bottom-line' />
                    </div>
                </div>

        </>
    )
}

export default BodyContainer