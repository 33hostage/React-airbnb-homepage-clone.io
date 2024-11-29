import arrowIcon from './arrow-right.svg'
import './style.scss';

const NextBtn = () => {
	return (
		<button className="arrow-right-btn">
			<img src={arrowIcon} alt="Next" />
		</button>
	);
}
 
export default NextBtn;