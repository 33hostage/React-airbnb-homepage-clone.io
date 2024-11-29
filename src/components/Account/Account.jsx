import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import navIcon from './nav.svg';
import './style.scss';

const Account = () => {

	const [show, setShow] = useState(false)
	
	return (
		<>
			<button className="account" onClick={() => setShow(!show)}>
				<div className="account__nav-icon">
					<img src={navIcon} alt="Nav" />
				</div>
				<div className="account__avatar">
					<img src="./img/icons/user-avatar.svg" alt="Avatar" />
				</div>
			</button>

			<CSSTransition in={show} timeout={300} classNames='alert' unmountOnExit>
				<div className="user-menu__popup user-menu__popup--active">
					<ul className="user-menu__popup-list1">
						<li className="user-menu__popup-item"><a href=""><strong>Sign up</strong></a></li>
						<li className="user-menu__popup-item"><a href="">Log in</a></li>
					</ul>
					<ul className="user-menu__popup-list2">
						<li className="user-menu__popup-item"><a href="">Gift cards</a></li>
						<li className="user-menu__popup-item"><a href="">Host an experience</a></li>
						<li className="user-menu__popup-item"><a href="">Help Center</a></li>
					</ul>
				</div>
			</CSSTransition>
		</>
	);

}
 
export default Account;