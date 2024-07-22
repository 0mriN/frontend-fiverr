import React from 'react'

export function HomePage() {
    return (
        <section className="home-page">
            <div className="hero-box-container">
                <div className="hero-box">
                    <h1>Find the right <span>freelance</span> service, right away</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for any service..." />
                        <button className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="search"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="white" strokeWidth="2" transform="translate(-1687 -1941)"><g transform="translate(1688 1942)"><circle cx="7.5" cy="7.5" r="7.5"></circle><path d="M18 18l-5.2-5.2"></path></g></g></g></svg>
                        </button>
                    </div>
                </div>
                <div className="hero-images">
                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/678686c47c024e18e773c75e90aaab1c-1705999902381/hero-xl-x1.png" alt="Jenny" className="hero-image" />
                </div>
                <div className="trusted-by">
                    <span>Trusted by:</span>
                    <ul>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.398bc1c.svg" alt="meta" /></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.129f8ec.svg" alt="Google"/></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.e1b0070.svg" alt="NETFLIX"/></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.a47f1ab.svg" alt="P&G"/></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.0520267.svg" alt="PayPal"/></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.67915a0.svg" alt="Payoneer"/></li>
                    </ul>
                </div>
            </div>
            <div className='sub-category-container'>
                <a href="">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech.49dbf0d.svg" alt="programming_tech" loading="lazy"/>
                <p class="sub-category">Programming & Tech</p>
                </a>
            </div>
            {/* <div className='video-container'> */}
            {/* <video controls>
                        <source src="../assets/img/How Fiverr Works homepage.mp4" type="mp4" />
                        Your browser does not support the video tag.
                    </video> */}
            {/* </div> */}
        </section>
    )
}
