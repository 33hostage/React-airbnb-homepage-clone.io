import CategoryItem from '../CategoryItem/CategoryItem';
import FilterBtn from '../FilterBtn/FilterBtn';
import NextBtn from '../NextBtn/NextBtn';
import PreviousBtn from '../PreviousBtn/PreviousBtn';
import categoriesData from './../../data/categories.json';
import './style.scss';

const Categories = () => {
	return (
		<div className="categories">
			<div className="container">
				<div className="categories__row">
					<div className="categories__list">
						{
							categoriesData.map((cat, index)=>
								(
									<CategoryItem
										title={cat.title}
										img={cat.img}
										key={index}
									/>
								)
							)
						}
					</div>
					<div className="categories__next-btn">
						{/* <PreviousBtn /> */}
						<NextBtn />
					</div>
					<div className="categories__filter">
						<FilterBtn />
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Categories;