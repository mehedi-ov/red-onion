import React from 'react'
import Food from '../Food/Food'
import Banner from '../Banner/Banner'
import { Router, Routes } from 'react-router-dom'


const Home = () => {
    return (
        <div>
        <Banner/>
        <Food/>

    </div>
    )
}

export default Home