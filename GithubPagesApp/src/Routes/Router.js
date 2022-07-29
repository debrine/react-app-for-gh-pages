import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/react-app-for-gh-pages/'
          element={<p>this is the home screen</p>}></Route>
        <Route path='/test/' element={<p>test</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
