

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

import { ItemCount } from '../Items';
import { SpinnerWidget } from '../Spinner';
import { CartContext } from '../Cart';


const heroImg = 'https://res.cloudinary.com/ferjen/image/upload/v1670412753/veggieBox/img/hero/vb-hero-cooking-hands-gray_dnmmtt.jpg';

export const ItemDetail = ( { item } ) => {
	const [ itemCount, setItemCount ] = useState( 0 );
	const { addItem } = useContext( CartContext );

	const onAdd = ( qty ) => {
		alert( 'Has agregado ' + qty + ` ${item.itemName}` + ' a tu carrito!' );
		setItemCount( qty );
		addItem( item, qty );
	};

	return (
		<>
			{item && item.image ? (
				<Container className='container-sm d-flex flex-column align-items-center mt-5'>
					<Row>
						<Container className='detail-hero__container'>
							<img className='img-fluid' src={heroImg} alt='Manos cocinando comida sana' />
							<Container className='detail-hero__card start-50 translate-middle'>
								<Row>
									<Col xs={5} className='p-0'>
										<img className='img-fluid' src={item.image[ 1 ]} alt='' />
									</Col>
									<Col xs={7}>
										<div className='mb-5'>
											<h1 className='detail-hero__heading text-start mt-5 mb-3 ms-4'>{item.itemName}</h1>
											<div className='hero-line-divider mb-2 ms-4'></div>
											<h3 className='mt-3 text-muted ms-4'>{item.shortDescription}</h3>
										</div>
										<div className='detail-hero__subtxt mt-5'>
											<span className='mt-5'>{`🕖 ${item.cookingTime} min   |    ${item.cookingDifficulty}   |   ${item.servings} porciones   |    ${item.nVcalories}`}</span>
										</div>
									</Col>
								</Row>
							</Container>
						</Container>
					</Row>
					<Row className='row-divider'></Row>
					<Row className='mt-5 detail-hero__recipe'>
						<Col xs={8}>
							<Container className='mt-5'>
								<h4 className='detail-hero__description'>{item.description}</h4>
							</Container>
							{itemCount === 0 ? (
								<ItemCount stock={item.stock} initial={item.qty} onAdd={onAdd} />
							) : (
								<Link to='/cart' className='m-5 p-5'>
									<Container className='d-flex'>
										<Button className='card--button m-5 px-5'>Ver Carrito</Button>
									</Container>
								</Link>
							)}
						</Col>
						<Col xs={4} className='justify-content-center align-items-center'>
							<Container>
								<Table striped>
									<thead>
										<tr>
											<th className='detail-table--header'>Valores Nutricionales</th>
											<th>/ por porción</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Calorías</td>
											<td>{item.nVcalories}</td>
										</tr>
										<tr>
											<td>Grasas</td>
											<td>{item.nVfat}</td>
										</tr>
										<tr>
											<td>Grasas Saturadas</td>
											<td>{item.nVsaturatedFat}</td>
										</tr>
										<tr>
											<td>Carbohidratos</td>
											<td>{item.nVcarbohydrate}</td>
										</tr>
										<tr>
											<td>Azucares</td>
											<td>{item.nVsugar}</td>
										</tr>
										<tr>
											<td>Fibra</td>
											<td>{item.nVdietaryFiber}</td>
										</tr>
										<tr>
											<td>Proteínas</td>
											<td>{item.nVprotein}</td>
										</tr>
										<tr>
											<td>Colesterol</td>
											<td>{item.nVcholesterol}</td>
										</tr>
										<tr>
											<td>Sodio</td>
											<td>{item.nVsodium}</td>
										</tr>
									</tbody>
								</Table>
							</Container>
						</Col>
					</Row>
				</Container>
			) : (
				<SpinnerWidget />
			)}
		</>
	);
};
