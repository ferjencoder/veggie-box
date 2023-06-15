

import { createContext, useState, useContext, useEffect } from 'react';
import { firestoreFetch } from '../../utils/dbFetch';

// Function to format price to ARS
export const priceInARS = ( precio ) => {

	const options = {
		style: 'currency',
		currency: 'ARS',
		maximumSignificantDigits: 3,
	};
	return new Intl.NumberFormat( 'es-AR', options ).format( precio );

};

// Hook to use CartContext
export const handleCartContext = () => useContext( CartContext );

// Create CartContext
export const CartContext = createContext();

export const CartContextProvider = ( { children } ) => {

	// State for items and cartList
	const [ items, setItems ] = useState( [] );
	const [ cartList, setCartList ] = useState( [] );

	// Fetch items from Firestore on component mount
	useEffect( () => {
		firestoreFetch()
			.then( setItems )
			.catch( console.log );
	}, [] );

	// Function to add item to cart
	const addItem = ( item, qty ) => {
		if ( itemIsInCart( item.id ) ) {
			// If item is already in cart, update quantity
			setCartList( cartList.map( ( cartItem ) =>
				cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + qty } : cartItem
			) );
		} else {
			// If item is not in cart, add it
			setCartList( [ ...cartList, { ...item, qty } ] );
		}
	};

	// Function to update quantity of item in cart
	const addCountOnItem = ( item, qty ) => {
		setCartList( cartList.map( ( cartItem ) =>
			cartItem.id === item.id ? { ...cartItem, qty } : cartItem
		) );
	};

	// Function to check if item is in cart
	const itemIsInCart = ( id ) => cartList.some( ( item ) => item.id === id );

	// Function to calculate total price of items in cart
	const totalItemPrice = () => cartList.reduce( ( total, item ) => total + item.qty * item.price, 0 );

	// Function to calculate total quantity of items in cart
	const itemsInCart = () => cartList.reduce( ( total, item ) => total + item.qty, 0 );

	// Function to get quantity of specific item in cart
	const itemInCartQty = ( id ) => {
		const item = cartList.find( ( item ) => item.id === id );
		return item ? item.qty : 0;
	};

	// Function to remove item from cart
	const removeItemFromCart = ( id ) => {
		setCartList( cartList.filter( ( item ) => item.id !== id ) );
	};

	// Function to remove all items from cart
	const removeAllItemsFromCart = () => setCartList( [] );

	return (
		<CartContext.Provider
			value={{
				items,
				addItem,
				addCountOnItem,
				cartList,
				itemIsInCart,
				itemsInCart,
				removeItemFromCart,
				removeAllItemsFromCart,
				totalItemPrice,
				itemInCartQty,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};




// import { createContext, useState, useContext } from 'react';


// export const priceInARS = ( precio ) => {
// 	//Format price
// 	let precioToFormat = precio;
// 	const options = {
// 		style: 'currency',
// 		currency: 'ARS',
// 		maximumSignificantDigits: 3,
// 	};
// 	const priceInARS = new Intl.NumberFormat( 'es-AR', options ).format( precioToFormat );
// 	return priceInARS;
// };

// export const handleCartContext = () => useContext( CartContext );

// export const CartContext = createContext();

// export const CartContextProvider = ( { children } ) => {

// 	const [ items, setItems ] = useState( [] );
// 	const [ cartList, setCartList ] = useState( [] );

// 	useEffect( () => {
// 		firestoreFetch()
// 			.then( ( result ) => setItems( result ) )
// 			.catch( ( err ) => console.log( err ) );
// 	}, [] );

// 	const addItem = ( item, qty ) => {
// 		if ( itemIsInCart( item.id ) ) {
// 			setCartList(
// 				cartList.map( ( itemWasInCart ) => {
// 					return itemWasInCart.id === item.id ? { ...itemWasInCart, qty: itemWasInCart.qty + qty } : itemWasInCart;
// 				} )
// 			);
// 		} else {
// 			setCartList( [ ...cartList, { ...item, qty } ] );
// 		}
// 	};

// 	const addCountOnItem = ( item, qty ) => {
// 		setCartList(
// 			cartList.map( ( itemWasInCart ) => {
// 				return itemWasInCart.id === item.id ? { ...itemWasInCart, qty: qty } : itemWasInCart;
// 			} )
// 		);
// 	};

// 	const itemIsInCart = ( id ) => ( cartList.find( ( item ) => item.id === id ) ? true : false );

// 	const totalItemPrice = () => cartList.reduce( ( initialItem, newItem ) => initialItem + newItem.qty * newItem.price, 0 );

// 	const itemsInCart = () => cartList.reduce( ( initialCartTotal, newCartTotal ) => initialCartTotal + newCartTotal.qty, 0 );

// 	const itemInCartQty = ( id ) => ( cartList.find( ( item ) => item.id === id ) ? item.qty : 0 );

// 	const removeItemFromCart = ( id ) => {
// 		const newCart = cartList.filter( ( item ) => item.id !== id );
// 		setCartList( newCart );
// 	};

// 	const removeAllItemsFromCart = () => setCartList( [] );

// 	return (
// 		<>
// 			<CartContext.Provider
// 				value={{
// 					items,
// 					addCountOnItem,
// 					addItem,
// 					cartList,
// 					itemIsInCart,
// 					itemsInCart,
// 					removeAllItemsFromCart,
// 					removeItemFromCart,
// 					totalItemPrice,
// 					itemInCartQty,
// 				}}
// 			>
// 				{children}
// 			</CartContext.Provider>
// 		</>
// 	);
// };

