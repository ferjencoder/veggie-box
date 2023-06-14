import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Table, Row } from 'react-bootstrap';

import { CartItem, handleCartContext, priceInARS } from '../Cart';
import { Alert } from '../Alert';
import db from '../../utils/firebaseConfig';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

export const Cart = () => {
	const { cartList, removeAllItemsFromCart, totalItemPrice } = handleCartContext();
	const [ show, setShow ] = useState( false );

	const order = {
		buyer: {
			name: 'Mrs. Smith',
			email: 'jane.smith@email.com',
			phone: '+54123123',
			address: 'San Martin 100',
		},
		boughtDate: serverTimestamp(),

		items: cartList.map( ( item ) => ( {
			id: item.id,
			title: item.itemName,
			price: item.price,
			qty: item.qty,
			subtoTotal: item.price * item.qty,
		} ) ),

		total: totalItemPrice(),
		totalPlusTaxes: priceInARS( totalItemPrice() + totalItemPrice() * 0.21 ),
	};

	const handleClose = () => {
		setShow( false );
		createOrder();
		cartList.forEach( async ( item ) => {
			const itemRef = doc( db, 'items', item.id );
			await updateDoc( itemRef, {
				stock: increment( -item.qty ),
			} );
		} );
		removeAllItemsFromCart();
	};

	const handleShow = () => setShow( true );

	const createOrder = () => {
		const db = getFirestore();
		const ordersList = collection( db, 'orders' );
		addDoc( ordersList, order )
			.then( ( { id } ) => console.log( id ) )
			.catch( ( err ) => console.log( err ) );
	};

	if ( cartList.length === 0 ) {

		return (

			<Container className='mt-5 px-5'>
				<Row className='px-5'>
					<Col className='px-5'>
						<Table>
							<thead>
								<tr>
									<th>TU CARRITO</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border-0'>
										<h4 className='mt-5 pt-2 pb-5'>Aun no has agregado items a tu carrito</h4>
										<hr />
										<Link to={'/sanslfiltre'}>
											<Button className='card--button mt-5 px-5'>Seguir comprando</Button>
										</Link>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		);
	}

	return (

		<Container className='mt-5'>
			<Row>
				<Col className='me-5' xs={8}>
					<Table>
						<thead>
							<tr>
								<th></th>
								<th className='p-3 ps-4 text-uppercase'>Detalle</th>
								<th className='p-3 ps-4 text-uppercase'>Precio</th>
								<th className='p-3 ps-4 text-uppercase'>Cantidad</th>
								<th className='p-3 ps-4 text-uppercase'>Subtotal</th>
								<th className='p-3 ps-4 text-uppercase'></th>
							</tr>
						</thead>
						<tbody className='align-middle'>
							{cartList.map( ( item ) => (
								<CartItem key={item.id} item={item} />
							) )}
						</tbody>
					</Table>
				</Col>
				<Col>
					<Table>
						<thead>
							<tr>
								<th colSpan={2} className='p-3 ps-4 text-uppercase'>
									Tu Carrito
								</th>
							</tr>
						</thead>
						<tbody className='align-middle'>
							<tr>
								<td className='p-3 ps-4 text-uppercase'>Subtotal</td>
								<td className='text-end pe-5'>{priceInARS( totalItemPrice() )}</td>
							</tr>
							<tr>
								<td className='p-3 ps-4 text-uppercase'>Impuestos</td>
								<td className='text-end pe-5'>{priceInARS( totalItemPrice() * 0.21 )}</td>
							</tr>
							<tr>
								<td className='p-3 ps-4 text-uppercase'>Descuentos</td>
								<td className='text-end pe-5'>{priceInARS( 0 )}</td>
							</tr>
							<tr>
								<td className='p-3 ps-4 text-uppercase'>Total</td>
								<td className='text-end pe-5'>{priceInARS( totalItemPrice() + totalItemPrice() * 0.21 )}</td>
							</tr>
							<tr>
								<td colSpan={2} className='border-0'>
									{/* *************************************************************************** */}
									<Button onClick={handleShow} className='card--button d-flex' style={{ width: '100%' }}>
										Finalizar Compra
									</Button>
									{/* *************************************************************************** */}

									<Alert show={show} handleClose={handleClose} />
								</td>
							</tr>
							<tr>
								<td colSpan={2} className='border-0'>
									<Button onClick={() => removeAllItemsFromCart()} className='card--button d-flex' style={{ width: '100%' }}>
										Eliminar Carrito
									</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);

};