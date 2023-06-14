

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from '../Items';
import { firestoreFetchOneItem } from '../../utils/dbFetch';

// import {items} from '../utils/items';
// import {customFetch} from '../utils/customFetch';
// const {products} = require('../utils/products');

export const ItemDetailContainer = () => {
	const [ dato, setDato ] = useState( {} );
	const { idItem } = useParams();

	/////////////////////////////////////////////////////////////////////////////
	//	EN CASO QUE SUPERE LA QUOTA EN FIRESTORE
	// 	useEffect(() => {
	// 		customFetch(
	// 			2000,
	// 			items.find((item) => item.id === parseInt(idItem))
	// 		)
	// 			.then((result) => setDato(result))
	// 			.catch((err) => console.log(err));
	// 	}, []);
	/////////////////////////////////////////////////////////////////////////////

	useEffect( () => {
		firestoreFetchOneItem( idItem )
			.then( ( result ) => setDato( result ) )
			.catch( ( err ) => console.log( err ) );
	}, [ idItem ] );

	return (
		<>
			<ItemDetail item={dato} />
		</>
	);
};

export default ItemDetailContainer;
