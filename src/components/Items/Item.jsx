

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { priceInARS } from '../Cart';
import { handleFavoritesContext } from '../Favorites';



const itemIsInFavorites = ( id ) => {
	if ( favoritesList == undefined ) {
		console.log( 'favoritesList undefined', favoritesList );
	} else {
		favoritesList.find( ( item ) => item.id === id ) !== undefined ? true : false;
	}
};

const addFavourite = ( id, title, img100, price ) => {
	const favourite = {
		id: id,
		title: title,
		price: price,
		img100: img100,
	};

	alert( 'Added!!' );
	if ( itemIsInFavorites( favourite ) ) {
		setFavoritesList(
			favoritesList.map( ( product ) => {
				return product.id === favourite.id ? { ...favourite } : product;
			} )
		);
	} else {
		setFavoritesList( [ { ...favourite } ] );
	}
};

export const Item = ( { id, title, category, shortDescription, price, img100, img500, cookingTime, cookingDifficulty, nVcalories, servings, stock } ) => {
	const [ isFavorite, setIsFavorite ] = useState( false );
	const { favoritesList } = handleFavoritesContext();

	const categoryStyles = {
		'Keto': {
			backgroundColor: '#f75f48',
			color: 'white'
		},
		'Light': {
			backgroundColor: '#a1d168',
			color: 'black'
		},
		'Vegetariano': {
			backgroundColor: '#f79432',
			color: 'white'
		},
		'Vegano': {
			backgroundColor: '#4f8206',
			color: 'white'
		},
		'Sin Gluten': {
			backgroundColor: '#ffd500',
			color: 'black'
		},
		'default': {
			backgroundColor: '#fe54ac',
			color: 'white'
		}
	};

	const customStyle = {
		...categoryStyles[ category ] || categoryStyles[ 'default' ]
	};


	return (
		<div>
			<Card className='card'>
				<div className='figure'>
					<Link to={`/item/${id}`} className='p-0 m-0'>
						<Card.Img variant='top' src={img500} className='card--image' />
						<Card.Text className='card--tag position-absolute bottom-0 star-0' style={customStyle}>
							{category}
						</Card.Text>
					</Link>
				</div>
				<Card.Body className='pt-0 position-relative'>
					<Link to={`/item/${id}`} className='p-0 m-0'>
						<Card.Title className='card--header'>{title}</Card.Title>
						<Card.Text className='card--text'>
							<small>{shortDescription}</small>
						</Card.Text>
						<Card.Text className='card--text position-absolute top-50 end-0 translate-middle-y d-flex px-3 py-1 mt-5 text-end' style={customStyle}>
							{priceInARS( price )}
						</Card.Text>
						<Card.Text className='card--text__subtxt mb-2 text-muted position-absolute bottom-0 start-50 translate-middle-x d-flex p-2 text-center'>
							<span className='fw-bold'>🕓 {cookingTime}</span>
							{'min  |  ' + cookingDifficulty + '  |  ' + servings + ' porciones  |  ' + nVcalories + ' | Stock: ' + stock}
						</Card.Text>
					</Link>
				</Card.Body>
				<Link to={`/item/${id}`} className='p-0 m-0'>
					<Button size='lg' className='card--button shadow-0 d-flex w-100' style={customStyle}>
						Ver más
					</Button>
				</Link>
				<div>
					<Button
						onClick={() => {
							addFavourite( id, title, img100, price );
						}}
						className='btn-favourite top-0 end-0 shadow-none border-0'
						style={customStyle}
					>
						<FontAwesomeIcon icon={faHeart} size='xl' className='text-white' />
						<span className='visually-hidden'>Agregar a Favoritos</span>
					</Button>
				</div>
			</Card>
		</div>
	);
};
