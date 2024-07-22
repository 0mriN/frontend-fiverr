import React from 'react'
import meta from '../assets/img/svg/meta.svg'
import google from '../assets/img/svg/google.svg'
import netflix from '../assets/img/svg/netflix.svg'
import payoneer from '../assets/img/svg/payoneer.svg'
import paypal from '../assets/img/svg/paypal.svg'
import pg from '../assets/img/svg/pg.svg'
import programming from '../assets/img/svg/programming-tech.svg'
import heroImg from '../assets/img/home-page-hero.png'
import searchBtn from '../assets/img/svg/SearchBtn.svg'
import graphicsDesign from '../assets/img/svg/graphics-design.svg'
import digitalMarketing from '../assets/img/svg/digital-marketing.svg'
import writingTranslation from '../assets/img/svg/writing-translation.svg'
import videoAnimation from '../assets/img/svg/video-animation.svg'
import aiServices from '../assets/img/svg/ai-services.svg'
import musicAudio from '../assets/img/svg/music-audio.svg'
import business from '../assets/img/svg/business.svg'
import consulting from '../assets/img/svg/consulting.svg'
import categoriesIcon from '../assets/img/svg/categoriesIcon.svg'
import handshake from '../assets/img/svg/handshake.svg'
import lightning from '../assets/img/svg/lightning.svg'
import support from '../assets/img/svg/support.svg'
import introVideo from '../assets/img/How-Fiverr-Works-homepage.mp4'



export function HomePage() {
    return (
        <section className="home-page">
            <div className="hero-box-container">
                <div className="hero-box">
                    <h1>Find the right <span>freelance</span> service, right away</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for any service..." />
                        <button>
                            <img src={searchBtn} alt="searchbtn" className='search-btn' />
                        </button>
                    </div>
                </div>
                <div className="hero-images">
                    <img src={heroImg} alt="hero" className="hero-image" />
                </div>
                <div className="trusted-by">
                    <span>Trusted by:</span>
                    <ul>
                        <li><img src={meta} alt="meta" /></li>
                        <li><img src={google} alt="Google" /></li>
                        <li><img src={netflix} alt="NETFLIX" /></li>
                        <li><img src={pg} alt="P&G" /></li>
                        <li><img src={paypal} alt="PayPal" /></li>
                        <li><img src={payoneer} alt="Payoneer" /></li>
                    </ul>
                </div>
            </div>
            <div className='sub-category-container'>
                <a href="">
                    <img src={programming} alt="programming_tech" loading="lazy" />
                    <p className="sub-category">Programming & Tech</p>
                </a>
                <a href="">
                    <img src={graphicsDesign} alt="graphics_design" loading="lazy" />
                    <p className="sub-category">Graphics & Design</p>
                </a>
                <a href="">
                    <img src={digitalMarketing} alt="digital_marketing" loading="lazy" />
                    <p className="sub-category">Digital Marketing </p>
                </a>
                <a href="">
                    <img src={writingTranslation} alt="writing_translation" loading="lazy" />
                    <p className="sub-category">Writing & Translation</p>
                </a>
                <a href="">
                    <img src={videoAnimation} alt="video_animation" loading="lazy" />
                    <p className="sub-category">Video & Animation</p>
                </a>
                <a href="">
                    <img src={aiServices} alt="ai_services" loading="lazy" />
                    <p className="sub-category">AI Services</p>
                </a>
                <a href="">
                    <img src={musicAudio} alt="Music_audio" loading="lazy" />
                    <p className="sub-category">Music & Audio</p>
                </a>
                <a href="">
                    <img src={business} alt="business" loading="lazy" />
                    <p className="sub-category">Business</p>
                </a>
                <a href="">
                    <img src={consulting} alt="consulting" loading="lazy" />
                    <p className="sub-category">Consulting</p>
                </a>
            </div>
            <div className='home-intro'>
                <h2 className='intro-title'>A whole world of freelance talent at your fingertips</h2>
                <ul>
                    <li>
                        <div className="intro-card">
                            <img src={categoriesIcon} alt="" />
                            <h3>Over 700 categories</h3>
                        </div>
                        <p>Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                    </li>
                    <li>
                        <div className="intro-card">
                            <img src={handshake} alt="" />
                            <h3>Clear, upfront pricing</h3>
                        </div>
                        <p>No hourly rates, just project-based pricing. Payments only get released when you approve.</p>
                    </li>
                    <li>
                        <div className="intro-card">
                            <img src={lightning} alt="" />
                            <h3>Quality work done faster</h3>
                        </div>
                        <p>Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                    </li>
                    <li>
                        <div className="intro-card">
                            <img src={support} alt="" />
                            <h3>24/7 award-winning support</h3>
                        </div>
                        <p>Chat with our team to get your questions answered or resolve any issues with your orders.</p>
                    </li>
                </ul>
            </div>
            <div className='video-container'>
             <video controls muted autoPlay> 
                        <source src={introVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> 
            </div>
            <div className='home-join-container'>
                <div className='home-join'>
                    <h2>Freelance services at your <em>fingertips!</em></h2>
                    <a>Join Fiverr</a>
                </div>
            </div>
        </section>
    )
}
