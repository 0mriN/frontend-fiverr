import footerLogo from "../assets/img/svg/footerLogo.svg"
import tiktok from "../assets/img/svg/tiktok.svg"
import instagram from "../assets/img/svg/instagram.svg"
import linkedin from "../assets/img/svg/linkedin.svg"
import facebook from "../assets/img/svg/facebook.svg"
import pinterest from "../assets/img/svg/pinterest.svg"
import x from "../assets/img/svg/x.svg"
import globe from "../assets/img/svg/globe.svg"
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
						<p><span>© Fiverr International Ltd. 2024</span></p>
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
							<img src={globe} alt="" />
							<span className="lang-label">English</span>
							</button>
						</section>

						<section className="settings-btns">
							<button className="currecny">₪ ILS</button>
						</section>
					</div>
				</div>
			</div>
		</footer>
	)
}