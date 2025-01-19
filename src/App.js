import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MovieList from './components/MovieList';
import AddEditMoviePage from './components/pages/AddEditMoviePage';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/Movie-WatchList-Application">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/add" element={<AddEditMoviePage />} />
          <Route path="/movies/edit/:id" element={<AddEditMoviePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;




