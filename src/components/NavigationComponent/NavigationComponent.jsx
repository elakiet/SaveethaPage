import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutComponent from '../routes/AboutComponent/AboutComponent'
import DepartmentComponent from '../routes/DepartmentComponent/DepartmentComponent'
import EventComponent from '../routes/EventComponent/EventComponent'
import './NavigationComponent.css'
import HomeComponent from '../routes/HomeComponent/HomeComponent'

const NavigationComponent = () => {
    return (
        <BrowserRouter >
            <div className="navbar">
                <ul className='ul'>
                    <li className='li'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='li'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='li'>
                        <Link to='/department'>Department</Link>
                    </li >
                    <li className='li'> 
                        <Link to='/event'>Event</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/' element={<HomeComponent />} />
                <Route exact path='/about' element={<AboutComponent />} />
                <Route exact path='/department' element={<DepartmentComponent />} />
                <Route exact path='/event' element={<EventComponent />} />
            </Routes>
            <div className="footer">
                <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
            </div>
        </BrowserRouter>
    )
}

export default NavigationComponent