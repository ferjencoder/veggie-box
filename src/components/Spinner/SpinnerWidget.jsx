

import { Container, Spinner } from 'react-bootstrap';


export const SpinnerWidget = () => {
	return (
		<Container className='container-sm d-flex flex-column align-items-center mt-5'>
			<Spinner className='spinner' animation='border' role='status' variant='success'>
				<span className='visually-hidden'>Cargando...</span>
			</Spinner>
			<img className='spinner__img' src='https://res.cloudinary.com/ferjen/image/upload/v1670454765/veggieBox/img/logo/vb-logo-big_nc10mn.svg' alt='Veggie Box Logo' />
			<p className='spinner--message m-0 p-0'>cargando..</p>
		</Container>
	);
};
