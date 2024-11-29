import styles from './style.module.scss';
import starIcon from './star.svg';

const Card = ({ data }) => {

	const {
		title,
		desc,
		rating,
		price_per_night,
		dates_available,
		img,
		img2x,
	} = data;

	return (
		<article className={styles.card}>
			<a href="#!" className={styles.link}>

			</a>

			<img className={styles.img} src={img} srcSet={`${img2x} 2x`} alt="img" />
			
			<div className={styles.descWrapper}>

			<div className={styles.titleWrapper}>
				<h3 className={styles.descWrapper}>{title}</h3>
				<div className={styles.rating}>
					<img src={starIcon} alt="starIcon" />
					{rating}
				</div>
			</div>

			<p className={styles.desc}>{desc}</p>
			<p className={styles.date}>{dates_available}</p>

			<p className={styles.price}>
				<strong>${price_per_night}</strong> night
			</p>
			</div>

		</article>
	);
}
 
export default Card;