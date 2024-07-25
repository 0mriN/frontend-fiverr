import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service';
import { logout } from '../store/actions/user.actions';
import { SearchBar } from './SearchBar';
import { useState } from 'react';
import { gigService } from '../services/gig';
import { LoginModal } from './LoginModal';
import { SignUpModal } from './SignupModal';

import { setFilter } from '../store/actions/gig.actions'
import { PrimeCategoryFilter } from './PrimeCategoryFilter'



export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user);
	const navigate = useNavigate();

	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
	const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

	function onSetFilterBy(filterBy) {
		setFilter(filterBy)
	}
	async function onLogout() {
		try {
			await logout();
			navigate('/');
			showSuccessMsg('Bye now');
		} catch (err) {
			showErrorMsg('Cannot logout');
		}
	}

	return <section className="app-header full">
		<header className="main-container full border-bottom">
			<nav className="main-padding">
				<div className="nav-hamburger">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19"><rect y="16" width="23" height="3" rx="1.5" fill="#555" /><rect width="23" height="3" rx="1.5" fill="#555" /><rect y="8" width="23" height="3" rx="1.5" fill="#555" /></svg>
				</div>
				<div className="nav-logo">
					<NavLink to="/" >fiverr<span>.</span></NavLink>
				</div>

				<div className="nav-filter">
					<SearchBar trackInViewport={false} />
				</div>

				<ul className="nav-icons flex">
					<li className="bell-icon grid-center"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.494 6.818a6.506 6.506 0 0 1 13.012 0v2.006c0 .504.2.988.557 1.345l1.492 1.492a3.869 3.869 0 0 1 1.133 2.735 2.11 2.11 0 0 1-2.11 2.11H2.422a2.11 2.11 0 0 1-2.11-2.11c0-1.026.408-2.01 1.134-2.735l1.491-1.492c.357-.357.557-.84.557-1.345V6.818Zm-1.307 7.578c0 .13.106.235.235.235h15.156c.13 0 .235-.105.235-.235 0-.529-.21-1.036-.584-1.41l-1.492-1.491a3.778 3.778 0 0 1-1.106-2.671V6.818a4.63 4.63 0 1 0-9.262 0v2.006a3.778 3.778 0 0 1-1.106 2.671L2.77 12.987c-.373.373-.583.88-.583 1.41Zm4.49 4.354c0-.517.419-.937.937-.937h4.772a.938.938 0 0 1 0 1.875H7.614a.937.937 0 0 1-.938-.938Z" /></svg></li>
					<li className="msg-icon grid-center"><svg width="20" height="20" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fillRule="evenodd" clipRule="evenodd" d="M.838 4.647a.75.75 0 0 1 1.015-.309L9 8.15l7.147-3.812a.75.75 0 0 1 .706 1.324l-7.5 4a.75.75 0 0 1-.706 0l-7.5-4a.75.75 0 0 1-.309-1.015Z" /><path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.25a.25.25 0 0 0-.25.25v11c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-11a.25.25 0 0 0-.25-.25h-13ZM.75 2.5c0-.966.784-1.75 1.75-1.75h13c.966 0 1.75.784 1.75 1.75v11a1.75 1.75 0 0 1-1.75 1.75h-13A1.75 1.75 0 0 1 .75 13.5v-11Z" /></svg></li>
					<li className="heart-icon grid-center"><svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z" /></svg></li>
				</ul>

				{user ? (
					<>
						<div className="nav-orders">
							<NavLink to="/orders">Orders</NavLink>
						</div>
						<div className="nav-user">
							<button onClick={onLogout}>Logout</button>
						</div>
					</>
				) : (
					<>
						<button onClick={() => setIsLoginModalOpen(true)}>Login</button>
						{/* <button onClick={() => setIsSignUpModalOpen(true)}>Sign Up</button> */}
					</>
				)}
				{isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}

				{/* {isSignUpModalOpen && <SignUpModal onClose={() => setIsSignUpModalOpen(false)} />} */}
			</nav>
		</header>
		{/* <div className="line full"></div> */}
		<PrimeCategoryFilter setFilterBy={onSetFilterBy} filterBy={filterBy} />
		{/* <div className="line full"></div> */}

	</section >

}
