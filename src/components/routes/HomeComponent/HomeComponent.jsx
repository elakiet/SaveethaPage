import React from 'react';
import saveetha from './Image/saveetha.jpg';
import './HomeComponent.css'

const HomeComponent = () => {
    return (
        <React.Fragment>
            <div className="image-container">
                <div className="image">
                    <img src={saveetha} alt='saveetha' width={1300} height={800}/>
                </div>
                <div className="titles">
                    <h1>Welcome to Our College</h1>
                    <p>Your future starts here. Learn more about our programs and events.</p>
                </div>
            </div>

        </React.Fragment>
    );
}

export default HomeComponent;