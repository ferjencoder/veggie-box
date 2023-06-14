import { createContext, useState, useContext } from 'react';

export const handleFavoritesContext = () => useContext( FavoritesContext );

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ( { children } ) => {
	const [ favoritesList, setFavoritesList ] = useState( [] );

	const addFavorite = ( item ) => {
		if ( itemIsInFavorites( item.id ) ) {
			setFavoritesList(
				favoritesList.map( ( itemWasInFavorites ) => {
					if ( itemWasInFavorites.id === item.id ) return;
				} )
			);
		} else {
			setFavoritesList( [ ...favoritesList, { ...item } ] );
		}
	};

	const itemIsInFavorites = ( id ) => ( favoritesList.find( ( item ) => item.id === id ) ? true : false );

	const removeItemFromFavorites = ( id ) => {
		const newFavorite = favoritesList.filter( ( item ) => item.id !== id );
		setFavoritesList( newFavorite );
	};

	const removeAllItemsFromFavorites = () => setFavoritesList( [] );

	return (
		<>
			<FavoritesContext.Provider
				value={{
					favoritesList,
					addFavorite,
					itemIsInFavorites,
					removeItemFromFavorites,
					removeAllItemsFromFavorites,
				}}
			>
				{children}
			</FavoritesContext.Provider>
		</>
	);
};

