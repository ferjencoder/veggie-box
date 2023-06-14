

import { Swiper } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import { LandingCarouselSlide } from '../Home';
import { SpinnerWidget } from '../Spinner';

export const LandingCarouselList = ( datos ) => {

	return (

		<>
			<Container className='landing-swiper__carousel'>
				<h1 className='landing__h1'>Te van a encantar!...</h1>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					slidesPerGroup={2}
					loop={true}
					// loopFillGroupWithBlank={true}
					navigation={true}
					modules={[ Pagination, Navigation ]}
					className='mySwiper'
				>
					<div className='swiper-wrapper'>
						{
							datos.datos.length > 0
								? ( datos.datos.map( ( item ) => (
									<LandingCarouselSlide
										key={item.id}
										id={item.id}
										title={item.itemName}
										category={item.category.categoryName}
										description={item.description}
										shortDescription={item.shortDescription}
										price={item.price}
										img310={item.image[ 2 ]}
										stock={item.stock}
										cookingTime={item.cookingTime}
										cookingDifficulty={item.cookingDifficulty}
										nVcalories={item.nVcalories}
										servings={item.servings}
									/>
								) ) )
								: ( <SpinnerWidget /> )
						}
					</div>
				</Swiper>
			</Container>
		</>

	);

};
