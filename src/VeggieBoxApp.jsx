

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Cart, Favorites, FavoritesContextProvider } from './components';
import { CartContextProvider } from './components';
import { CategoryBar } from './components';
import { ItemDetailContainer } from './components';
import { ItemListContainer } from './components';
import { LandingHome } from './components';
import { MessageBar } from './components';
import { NavBar } from './components';

import '../src/style/style.scss';

export const VeggieBoxApp = () => {

  return (

    <CartContextProvider>
      <FavoritesContextProvider>

        <BrowserRouter>

          <MessageBar />
          <NavBar />
          <CategoryBar />

          <Routes>
            <Route path='/home' element={<LandingHome />} />
            <Route path='/' element={<LandingHome />} />
            <Route path='/sanslfiltre' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/*' element={<Navigate to='/home' />} />
          </Routes>

        </BrowserRouter>
      </FavoritesContextProvider>
    </CartContextProvider>
  );
};


