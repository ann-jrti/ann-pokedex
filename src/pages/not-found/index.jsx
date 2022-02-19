import './style.css';
import notFoundImg from '../../assets/imgs/pikachu-not-found.gif';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <React.Fragment>
            <main className="not-found-container">
                <div className="not-found-msg-container">
                    <h1 className="not-found-msg">
                        Oh! This is not the page you were looking for
                    </h1>
                    <img className="not-found-img" src={notFoundImg}></img>
                    <Link to="/home"><h2 className="back-home">Take me back home</h2></Link>
                </div>
            </main>
        </React.Fragment>
    );
}

export default NotFound;
