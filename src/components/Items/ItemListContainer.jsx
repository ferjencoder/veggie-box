

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// import { db } from '../utils/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';

import { ItemList } from './ItemList';
import { firestoreFetch } from '../../utils/dbFetch';


//consulta a la api y baja los datos para propearlos al ItemList
export const ItemListContainer = () => {

  const [ datos, setDatos ] = useState( [] );
  const { idCategory } = useParams();

  useEffect( () => {
    console.log( 'idCategory', idCategory );
    const fetchData = async () => {
      const dataFromFirestore = await firestoreFetch( parseInt( idCategory ) );
      setDatos( dataFromFirestore );
    };
    fetchData();
  }, [ idCategory ] );

  return <ItemList datos={datos} />;
};

export default ItemListContainer;


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import ItemList from './ItemList';
// import { db } from '../utils/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestoreFetch } from '../utils/dbFetch';


// //consulta a la api y baja los datos para propearlos al ItemList
// const ItemListContainer = () => {
//   const [datos, setDatos] = useState([]);
//   const { idCategory } = useParams();

//   console.log('1', idCategory);
//   console.log(datos);


//   useEffect(() => {
//     // ComponentDidUpdate
//     if (idCategory) {
//       const fetchFromFirestore = async () => {
//         const dataFromFirestore = await firestoreFetch(parseInt(idCategory));
//         setDatos(dataFromFirestore);
//       };

//       //fetchFromFirestore().catch((err) => console.log(err));
//     } else {
//       const fetchFromFirestore = async () => {
//         const dataFromFirestore = await firestoreFetch();
//         setDatos(dataFromFirestore);
//       };

//       fetchFromFirestore().catch((err) => console.log(err));
//     }
//   }, [idCategory]);

//   console.log('2', idCategory);

//   //componentWillUnmount
//   useEffect(() => {
//     return () => {
//       setDatos([]);
//     };
//   }, []);

//   console.log('3', idCategory);

//   return <ItemList datos={datos} />;
// };

// export default ItemListContainer;






// // import { useEffect, useState } from 'react';
// // import { useParams } from 'react-router';
// // import ItemList from './ItemList';
// // import { db } from '../utils/firebaseConfig';
// // import { collection, getDocs, query, where } from 'firebase/firestore';


// // //consulta a la api y baja los datos para propearlos al ItemList
// // const ItemListContainer = () => {
// // 	const [datos, setDatos] = useState([]);
// // 	const { idCategory } = useParams();


// // 	useEffect(() => {
// // 		// ComponentDidUpdate
// // 		const fetchFromFirestore = async () => {
// // 			let q;

// // 			if (idCategory) {
// // 				q = query(collection(db, 'items'), where('categoryId', '==', parseInt(idCategory)));
// // 			} else {
// // 				//undefined (devolder todos los productos)
// // 				q = query(collection(db, 'items'));
// // 			}

// // 			const querySnapshot = await getDocs(q);

// // 			const dataFromFirestore = querySnapshot.docs.map((item) => ({
// // 				// transformar el tipo de dato documento que proviene de la db a objetos, los docs parecen objetos pero no son iguales
// // 				id: item.id,
// // 				...item.data(),
// // 			}));
// // 			return dataFromFirestore;
// // 		};

// // 		fetchFromFirestore()
// // 			.then((result) => setDatos(result))
// // 			.catch((err) => console.log(err));
// // 	}, [idCategory]);

// // 	//componentWillUnmount
// // 	useEffect(() => {
// // 		return () => {
// // 			setDatos([]);
// // 		};
// // 	}, []);
// // 	/////////////////////////////////////////////////////////////////////////////

// // 	return <ItemList datos={datos} />;
// // };

// // export default ItemListContainer;


// // // import {customFetch} from '../utils/customFetch';
// // // import {items} from '../utils/items';
// // // import {async} from '@firebase/util';

// // 	/////////////////////////////////////////////////////////////////////////////
// // 	// EN CASO QUE SE LLENE LA QUOTA EN FIRESTORE
// // 	// useEffect(() => {
// // 	// consulta db hardcodeada
// // 	// 	if (idCategory) {
// // 	// 		customFetch(
// // 	// 			2000,
// // 	// 			items.filter((item) => item.categoryId === parseInt(idCategory))
// // 	// 		)
// // 	// 			.then((resultado) => setDatos(resultado))
// // 	// 			.catch((err) => console.log(err));
// // 	// 	} else {
// // 	// 		customFetch(2000, items)
// // 	// 			.then((resultado) => setDatos(resultado))
// // 	// 			.catch((err) => console.log(err));
// // 	// 	}
// // 	// }, [idCategory]);

// // 	/////////////////////////////////////////////////////////////////////////////
// // 	// WORKING