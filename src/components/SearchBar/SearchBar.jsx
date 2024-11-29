import './style.scss';
import searchIcon from './search.svg'
import Link from '../Link/Link';

const SearchBar = () => {
	return (
		<div className="searchbar">

			<div className="searchbar__btns-wrapper">
				<button className="searchbar__btn">
					<Link text="Anywhere" />
				</button>
				<button className="searchbar__btn">
					<Link text="Any week" />
				</button>
				<button className="searchbar__btn">
					<Link text="Add guests" style="light" />
				</button>
			</div>
			
			<button className="searchbar__btn-search">
				<img src={searchIcon} alt="Search" />
			</button>

		</div>
	);
}
 
export default SearchBar;