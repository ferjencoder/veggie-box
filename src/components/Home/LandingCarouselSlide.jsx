

import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

export const LandingCarouselSlide = ( { id, title, category, shortDescription, img310, cookingTime } ) => {
	const customStyle = {
		backgroundColor: '',
		color: '',
	};

	if ( category === 'Keto' ) {
		customStyle.backgroundColor = '#f75f48';
		customStyle.color = 'white';
	} else if ( category === 'Light' ) {
		customStyle.backgroundColor = '#a1d168';
		customStyle.color = 'black';
	} else if ( category === 'Vegetariano' ) {
		customStyle.backgroundColor = '#f79432';
		customStyle.color = 'white';
	} else if ( category === 'Vegano' ) {
		customStyle.backgroundColor = '#4f8206';
		customStyle.color = 'white';
	} else if ( category === 'Sin Gluten' ) {
		customStyle.backgroundColor = '#ffd500';
		customStyle.color = 'black';
	} else {
		customStyle.backgroundColor = '#fe54ac';
		customStyle.color = 'white';
	}

	return (
		<SwiperSlide className='landing-swiper__container' key={id}>
			<Link to={`/item/${id}`} className='p-0 m-0'>
				<img className='landing-swiper__img' src={img310} alt={title} />
				<div className='landing-swiper__body px-4 py-2'>
					<h3 className='landing-swiper__title text-black'>{title}</h3>
					<h5 className='landing-swiper__text'>{shortDescription}</h5>
					<div className='card--tag position-absolute bottom-0 end-0' style={customStyle}>
						{category}
					</div>
					<div className='card--tag position-absolute bottom-0 start-0 bg-transparent text-black'>🕒 {cookingTime}</div>
				</div>
			</Link>
		</SwiperSlide>
	);
};
