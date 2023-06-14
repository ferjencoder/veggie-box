import { Button, Modal } from 'react-bootstrap';

export const Alert = ( { show, handleClose } ) => {

	return (
		<>
			<Modal show={show} onHide={handleClose} backdrop='static' keyboard={false} centered>

				<Modal.Header closeButton className='mx-5'>
					<Modal.Title className='modal__title'>
						<img src='https://res.cloudinary.com/ferjen/image/upload/v1670109429/veggieBox/img/logo/vb-logo_ds51mw.png' alt='Veggie Box Logo' />
					</Modal.Title>
				</Modal.Header>

				<Modal.Body className='modal__text my-5 text-center'>Su compra fue realizada con éxito. Gracias por comprar en VeggieBox! 😁
				</Modal.Body>

				<Modal.Footer className='mx-5'>
					<Button variant='secondary' onClick={handleClose} className='my-3 px-4'>
						Cerrar
					</Button>
				</Modal.Footer>

			</Modal>
		</>
	);

};
