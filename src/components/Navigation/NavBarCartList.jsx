

import { ListGroup } from 'react-bootstrap';

import { NavBarCartItem } from './NavBarCartItem';
import { handleCartContext } from '../Cart';


export const NavBarCartList = () => {

	const { cartList } = handleCartContext();

	return (
		<ListGroup variant='flush'>
			{
				cartList.length > 0
					? cartList.map( ( item ) =>
						<NavBarCartItem
							key={item.id}
							id={item.id}
							itemName={item.itemName}
							price={item.price}
							img100={item.image[ 0 ]}
							itemQty={item.qty}
							category={item.category.categoryName} /> )
					: <p>whots this</p>
				//TODO: change "whots this"
			}
		</ListGroup> );
};

