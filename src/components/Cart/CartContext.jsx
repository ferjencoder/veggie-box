import { createContext, useState, useContext } from 'react';

export const priceInARS = ( precio ) => {
	//Format price
	let precioToFormat = precio;
	const options = {
		style: 'currency',
		currency: 'ARS',
		maximumSignificantDigits: 3,
	};
	const priceInARS = new Intl.NumberFormat( 'es-AR', options ).format( precioToFormat );
	return priceInARS;
};

export const handleCartContext = () => useContext( CartContext );

export const CartContext = createContext();

export const CartContextProvider = ( { children } ) => {
	const [ cartList, setCartList ] = useState( [] );

	const addItem = ( item, qty ) => {
		if ( itemIsInCart( item.id ) ) {
			setCartList(
				cartList.map( ( itemWasInCart ) => {
					return itemWasInCart.id === item.id ? { ...itemWasInCart, qty: itemWasInCart.qty + qty } : itemWasInCart;
				} )
			);
		} else {
			setCartList( [ ...cartList, { ...item, qty } ] );
		}
	};
	const addCountOnItem = ( item, qty ) => {
		setCartList(
			cartList.map( ( itemWasInCart ) => {
				return itemWasInCart.id === item.id ? { ...itemWasInCart, qty: qty } : itemWasInCart;
			} )
		);
	};

	const itemIsInCart = ( id ) => ( cartList.find( ( item ) => item.id === id ) ? true : false );

	const totalItemPrice = () => cartList.reduce( ( initialItem, newItem ) => initialItem + newItem.qty * newItem.price, 0 );

	const itemsInCart = () => cartList.reduce( ( initialCartTotal, newCartTotal ) => initialCartTotal + newCartTotal.qty, 0 );

	const itemInCartQty = ( id ) => ( cartList.find( ( item ) => item.id === id ) ? item.qty : 0 );

	const removeItemFromCart = ( id ) => {
		const newCart = cartList.filter( ( item ) => item.id !== id );
		setCartList( newCart );
	};

	const removeAllItemsFromCart = () => setCartList( [] );

	return (
		<>
			<CartContext.Provider
				value={{
					addCountOnItem,
					addItem,
					cartList,
					itemIsInCart,
					itemsInCart,
					removeAllItemsFromCart,
					removeItemFromCart,
					totalItemPrice,
					itemInCartQty,
				}}
			>
				{children}
			</CartContext.Provider>
		</>
	);
};

