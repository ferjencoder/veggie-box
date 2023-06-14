

import { Card, CardGroup, Container } from 'react-bootstrap';

import { LandingCarouselContainer } from './LandingCarouselContainer';

const imgSandia1 = 'https://res.cloudinary.com/ferjen/image/upload/v1670439316/veggieBox/img/navbar/vb-sandia-1_ird7os.svg';
const imgSandia2 = 'https://res.cloudinary.com/ferjen/image/upload/v1670439316/veggieBox/img/navbar/vb-sandia-2_pjjpd1.svg';
const imgSandia3 = 'https://res.cloudinary.com/ferjen/image/upload/v1670439316/veggieBox/img/navbar/vb-sandia-3_mznwsv.svg';

export const LandingHome = () => {

	return (
		<>
			<Container>
				<h1 className='landing__h1'>Cómo funciona?</h1>
				<CardGroup>
					<Card className='shadow-none d-flex align-items-center border-0'>
						<Card.Img className='landing-card__image' variant='top' src={imgSandia1} />
						<Card.Body className='text-center'>
							<Card.Title className='landing__h1'>1. elegi</Card.Title>
							<Card.Text className='landing-card__text'>De nuestra lista de 31 menus, podes elegir los que más te gusten y armar tu VeggieBox. Nosotros nos encargamos del resto! Todo para que sólo tengas que ocuparte de cocinar.</Card.Text>
						</Card.Body>
					</Card>
					<Card className='shadow-none d-flex align-items-center border-0'>
						<Card.Img className='landing-card__image' variant='top' src={imgSandia2} />
						<Card.Body className='text-center'>
							<Card.Title className='landing__h1'>2. cocina</Card.Title>
							<Card.Text className='landing-card__text'>Te enviamos todo! Los ingredientes necesarios, especias... todo, con el valor nutricional y calorías, con el paso a paso sugerido, videos... Todo!</Card.Text>
						</Card.Body>
					</Card>
					<Card className='shadow-none d-flex align-items-center border-0'>
						<Card.Img className='landing-card__image' variant='top' src={imgSandia3} />
						<Card.Body className='text-center'>
							<Card.Title className='landing__h1'>3. disfruta</Card.Title>
							<Card.Text className='landing-card__text'>Elegiste la opción más sana! Y ahora tenes más tiempo para vos. Te ahorraste 2hs de supermercado, 30 min. de buscar opciones y 40 min de colas. Disfruta 😁!</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
			<LandingCarouselContainer />
		</>
	);
};
