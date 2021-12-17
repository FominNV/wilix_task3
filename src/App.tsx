import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import currentCurrency, { Navbar } from './components/Navbar';

import Main from './pages/Main';
import Currensies from './pages/Currensies';

const App: FC = () => {
  const [currentCurrency, setCurrentCurrency] = useState('RUB');

  const selectCurrency = (value: string): void => {
    setCurrentCurrency(value);
  }
  return (
    <>      
      <BrowserRouter>
      <Navbar selectCurrency={selectCurrency} currentCurrency={currentCurrency} />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/currensies" element={<Currensies currentCurrency={currentCurrency} />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;