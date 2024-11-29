import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
	const { carouselState: { currentSlide } } = rest;
	return (
		<>
			<PreviousBtn className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
			<NextBtn onClick={() => next()} />
		</>
	);
}
 
export default ButtonGroup;