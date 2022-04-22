import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

    const PageNotFound: FunctionComponent = () => {
    return (
        <div className="center">
            <br/>
            <img src="/images/016.png" alt="Page non trouve" style={{width:'180px'}}/>
            <h1>Hey, cette page n'existe pas !</h1>
            <Link to="/" className="waves-effect waves-teal btn-flat">
                Retourner à l'accueil
            </Link>
        </div>
    );
} 
export default PageNotFound;