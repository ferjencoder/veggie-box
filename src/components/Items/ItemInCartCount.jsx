

import { useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

import { handleCartContext } from '../Cart';


export const ItemInCartCount = ( { stock = 0, initial = 0, item } ) => {
	const [ itemCountCart, setItemCountCart ] = useState( initial );
	const { addCountOnItem } = handleCartContext();

	const increment = ( itemCountCart ) => {
		if ( itemCountCart < stock ) {
			setItemCountCart( itemCountCart + 1 );
			addCountOnItem( item, itemCountCart + 1 );
		}
	};

	const decrement = ( itemCountCart ) => {
		if ( itemCountCart === 1 ) {
			return;
		} else {
			setItemCountCart( itemCountCart - 1 );
			addCountOnItem( item, itemCountCart - 1 );
		}
	};

	return (
		<ButtonToolbar>
			<ButtonGroup className='me-2' aria-label='Aumentar o disminuir la cantidad de items'>
				<Button variant='success' onClick={() => decrement( itemCountCart )}>
					-
				</Button>
				<Button variant='light'>{itemCountCart}</Button>
				<Button variant='success' onClick={() => increment( itemCountCart )}>
					+
				</Button>
			</ButtonGroup>
		</ButtonToolbar>
	);
};
