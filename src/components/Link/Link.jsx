import styles from './style.module.scss';

const Link = ({ text, style, icon }) => {

	return (
		<a
			href='#!'
			className={
				styles.link + ' ' + (style === 'light' ? styles.linkLight : undefined)
				} >
			{icon && <img src={icon} alt="" />}
			{text}
		</a>
	);
};
 
export default Link;