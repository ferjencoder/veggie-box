

import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';


export const firestoreFetch = async ( idCategory ) => {
	let item = collection( db, 'items' );

	if ( idCategory ) {
		item = query( item, where( 'categoryId', '==', idCategory ), orderBy( 'itemName' ) );
	} else {
		item = query( item, orderBy( 'itemName' ) );
	}

	const querySnapshot = await getDocs( item );
	const dataFromFirestore = querySnapshot.docs.map( ( document ) => ( {
		id: document.id,
		...document.data(),
	} ) );
	return dataFromFirestore;
};


export const firestoreFetchOneItem = async ( id ) => {
	const docRef = doc( db, 'items', id );
	const docSnap = await getDoc( docRef );

	if ( docSnap.exists() ) {
		return {
			id: id,
			...docSnap.data(),
		};
	} else {
		console.log( 'No such document!' );
	}
};


