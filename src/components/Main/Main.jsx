import Card from "./../Card/Card";
import cardsData from "./../../data/data.json";
import './style.scss';

const Main = () => {
	return (
	<main className="main">
		<div className="container">
			<div className="main__cards">
				{cardsData.map((item, index)=> {
					return (<Card data={item} key={index} />)
				})}
			</div>
			<div className="main__show-btn">
				<button className="show__btn">
					Show map
					<img src="./public/img/icons/map.svg" alt="" />
				</button>
			</div>
				{
					 window.addEventListener('scroll', () => {
						const showBtn = document.querySelector(".main__show-btn");
						if (window.scrollY >= 1450) {
							showBtn.classList.add("hidden");
						} else {
							showBtn.classList.remove("hidden");
						}
				})
				}
		</div>
	</main>
	);
}

export default Main;