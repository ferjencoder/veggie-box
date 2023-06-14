

import { ListGroup } from 'react-bootstrap';

import { Item } from '../Items';
import { SpinnerWidget } from '../Spinner';


export const ItemList = ( datos ) => {

	return (
		<>
			<ListGroup className='container align-content-center d-flex flex-wrap flex-row'>
				{datos.datos.length > 0 ? (
					datos.datos.map( ( item ) => (
						<Item
							key={item.id}
							id={item.id}
							title={item.itemName}
							category={item.category.categoryName}
							description={item.description}
							shortDescription={item.shortDescription}
							price={item.price}
							img100={item.image[ 0 ]}
							img500={item.image[ 1 ]}
							img700={item.image[ 2 ]}
							stock={item.stock}
							cookingTime={item.cookingTime}
							cookingDifficulty={item.cookingDifficulty}
							nVcalories={item.nVcalories}
							servings={item.servings}
						/>
					) )
				) : (
					<SpinnerWidget />
				)}
			</ListGroup>
		</>
	);
};
