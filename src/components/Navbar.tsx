import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import * as DATA from '../data';

type props = any;

export const Navbar: FC<props> = ({selectCurrency, currentCurrency}) => {
    // const [currency, setCurrency] = useState('RUB');

    const onClickHandler = (e: any): void => {
      selectCurrency(e.target.dataset.currency)
    }

    return (
      <>
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand disabled fw-bold fs-2">Exchange Log</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item m-3">
                    <Link className="nav-link fs-4" to="/">Calculate</Link>
                  </li>
                  <li className="nav-item m-3">
                    <Link className="nav-link fs-4" to="/currensies">Currensies</Link>
                  </li>
                  <li className="nav-item dropdown m-3">
                    <a className="nav-link dropdown-toggle fs-4 " href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{currentCurrency}</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {Object.entries(DATA.currency).map((el, i) => <li key={i}><a className="dropdown-item" data-currency={el[0]} onClick={onClickHandler} >{el[0]} : {el[1]}</a></li>) }                      
                    </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>
        </div>
      </div>
      </>
    )
}

export default Navbar;