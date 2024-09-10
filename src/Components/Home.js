import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();  

    const handleClick = () => {
        navigate('/chatgpt');  
    };

    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt="" />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Make All Your Dream Come True!
                    </h1>
                    <p className='primary-text'>
                        Achieve your dream IELTS Writing and unlock a world of opportunities, taking you wherever your heart desires!
                    </p>
                    <button className='secondary-button' onClick={handleClick}>
                        Evaluate your IELTS Writing <FiArrowRight />{""}
                    </button>
                </div>
                <div className='home-image-section'>
                    <img src={BannerImage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home