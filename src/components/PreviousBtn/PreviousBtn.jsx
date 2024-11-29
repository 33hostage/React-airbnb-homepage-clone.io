import arrowIcon from './arrow-left.svg'
import './style.scss';

const PreviousBtn = () => {
	return (
		<button className="arrow-left-btn">
			<img src={arrowIcon} alt="Previous" />
		</button>
	);
}

export default PreviousBtn;