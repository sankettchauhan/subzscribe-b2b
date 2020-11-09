import React from 'react'
import Blog from './Blog'
import Slider from './Slider'

const home = () => {
    return (
        <>
            <div id="home-page">
                <Slider />
                <Blog />
            </div>
        </>
    )
}

export default home
