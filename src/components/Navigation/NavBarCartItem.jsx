

import { Badge, ListGroup } from 'react-bootstrap';

import { priceInARS } from '../Cart';


export const NavBarCartItem = ( { id, itemName, price, img100, itemQty, category } ) => {

	let customStyle = {
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
		customStyle.color = 'black';
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

	let customBg = '';
	let color = '';

	if ( category === 'Keto' ) {
		customBg = 'danger';
		color = 'white';
	} else if ( category === 'Light' ) {
		customBg = 'success';
		color = 'black';
	} else if ( category === 'Vegetariano' ) {
		customBg = 'info';
		color = 'black';
	} else if ( category === 'Vegano' ) {
		customBg = 'primary';
		color = 'white';
	} else if ( category === 'Sin Gluten' ) {
		customBg = 'warning';
		color = 'black';
	} else {
		customBg = 'success';
		color = 'white';
	}

	return (
		<ListGroup.Item as='li' key={id} className='d-flex justify-content-between align-items-start'>
			<div className='ms-2 me-auto my-2 d-flex'>
				<img className='navbar--cart__item' src={img100} alt={`Imagen de ${itemName}`} />
				<div className='d-flex flex-column'>
					<div className='fw-bold'>{itemName}</div>
					<div className='text-start text-uppercase text-black d-block px-1'>
						<small style={customStyle} className='px-3 py-1'>
							{category}
						</small>
					</div>
					<div className='text-start text-uppercase d-block mt-2'>{priceInARS( price )}</div>
				</div>
			</div>
			<Badge bg={customBg} className={`text-${color}`}>
				{itemQty}
			</Badge>
		</ListGroup.Item>
	);
};
