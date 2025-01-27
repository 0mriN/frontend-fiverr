import footerLogo from "../assets/img/svg/footerLogo.svg"
import tiktok from "../assets/img/svg/tiktok.svg"
import instagram from "../assets/img/svg/instagram.svg"
import linkedin from "../assets/img/svg/linkedin.svg"
import facebook from "../assets/img/svg/facebook.svg"
import pinterest from "../assets/img/svg/pinterest.svg"
import x from "../assets/img/svg/x.svg"
// import globe from "../assets/img/svg/globe.svg"
import accessibility from "../assets/img/svg/accessibility.svg"
export function AppFooter() {


	return (
		<footer className="app-footer ">
			 {/* <div className='top-line'></div> */}
			<div className="footer-wrapper">
				{/* <div className="footer-grid">

					<div className="footer-col">
						<article>
							<div className="footer-title">
								<h6>Categories</h6>
							</div>
							<div className="footer-content">
								<ul>
									<li><a href="">Graphics & Design</a></li>
									<li><a href="">Digital Marketing</a></li>
									<li><a href="">Writing & Translation</a></li>
									<li><a href="">Video & Animation</a></li>
									<li><a href="">Music & Audio</a></li>
									<li><a href="">Fiverr Logo Maker</a></li>
									<li><a href="">Programming & Tech</a></li>
									<li><a href="">Data</a></li>
									<li><a href="">Business</a></li>
									<li><a href="">Personal Growth & Hobbies</a></li>
									<li><a href="">Photography</a></li>
									<li><a href="">End-to-End Projects</a></li>
									<li><a href="">Sitemap</a></li>
								</ul>
							</div>
						</article>
					</div>

					<div className="footer-col">
						<article>
							<div className="footer-title">
								<h6>About</h6>
							</div>
							<div className="footer-content">
								<ul>
									<li><a href="">Careers</a></li>
									<li><a href="">Press & News</a></li>
									<li><a href="">Partnerships</a></li>
									<li><a href="">Privacy Policy</a></li>
									<li><a href="">Terms of Service</a></li>
									<li><a href="">Intellectual Property Claims</a></li>
									<li><a href="">Investor Relations</a></li>
								</ul>
							</div>
						</article>
					</div>

					<div className="footer-col">
						<article>
							<div className="footer-title">
								<h6>Support and Education</h6>
							</div>
							<div className="footer-content">
								<ul>
									<li><a href="">Help & Support</a></li>
									<li><a href="">Trust & Safety</a></li>
									<li><a href="">Quality Guide</a></li>
									<li><a href="">Selling on Fiverr</a></li>
									<li><a href="">Buying on Fiverr</a></li>
									<li><a href="">Fiverr Guides</a></li>
									<li><a href="">Learn Online Courses</a></li>
								</ul>
							</div>
						</article>
					</div>

					<div className="footer-col">
						<article>
							<div className="footer-title">
								<h6>Community</h6>
							</div>
							<div className="footer-content">
								<ul>
									<li><a href="">Customer Success Stories</a></li>
									<li><a href="">Community Hub</a></li>
									<li><a href="">Forum</a></li>
									<li><a href="">Events</a></li>
									<li><a href="">Blog</a></li>
									<li><a href="">Creators</a></li>
									<li><a href="">Affiliates</a></li>
									<li><a href="">Podcast</a></li>
									<li><a href="">Invite a Friend</a></li>
									<li><a href="">Become a Seller</a></li>
									<li><a href="">Community Standards</a></li>
								</ul>
							</div>
						</article>
					</div>

					<div className="footer-col">
						<article>
							<div className="footer-title">
								<h6>Business Solutions</h6>
							</div>
							<div className="footer-content">
								<ul>
									<li><a href="">About Business Solutions</a></li>
									<li><a href="">Fiverr Pro</a></li>
									<li><a href="">Fiverr Certified</a></li>
									<li><a href="">Become an Agency</a></li>
									<li><a href="">Fiverr Enterprise</a></li>
									<li><a href="">ClearVoice Content Marketing</a></li>
									<li><a href="">Working Not Working</a></li>
									<li><a href="">Contact Sales</a></li>
								</ul>
							</div>
						</article>
					</div>

				</div> */}
				<div className="footer-bottom">
					<div className="footer-bottom-left">
						<span className="footer-logo">
							<img src={footerLogo} alt="" />
						</span>
						<p><span>© Thriverr International Ltd. 2024</span></p>
					</div>
					<div className="footer-bottom-right">
						<ul className="social">
							<li><a href=""><img src={tiktok} alt="" /></a></li>
							<li><a href=""><img src={instagram} alt="" /></a></li>
							<li><a href=""><img src={linkedin} alt="" /></a></li>
							<li><a href=""><img src={facebook} alt="" /></a></li>
							<li><a href=""><img src={pinterest} alt="" /></a></li>
							<li><a href=""><img src={x} alt="" /></a></li>
						</ul>

						<section className="settings-btns">
							<button className="lang">
							{/* <img src={globe} alt=""  className="globe-logo"/> */}
							<svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z" strokeWidth="0.2"></path></svg>
							<span className="lang-label">English</span>
							</button>
						</section>

						<section className="settings-btns">
							<button className="currecny">US$ USD</button>
						</section>
					</div>
				</div>
			</div>
		</footer>
	)
}