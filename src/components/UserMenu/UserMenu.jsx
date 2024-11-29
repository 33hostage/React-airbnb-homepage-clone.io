import Account from '../Account/Account';
import Link from '../Link/Link';
import globeIcon from './globe.svg';
import './style.scss';

const UserMenu = () => {
	return (
		<div className="user-menu">
			<div className="user-menu__home">
				<Link text="Airbnb your home" />
			</div>
			<div className="user-menu__local">
				<Link icon={globeIcon} />
			</div>
			<div className="user-menu__user">
				<Account />
			</div>
		</div>
	);
}
 
export default UserMenu;