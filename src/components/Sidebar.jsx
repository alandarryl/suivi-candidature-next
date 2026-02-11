import React from 'react';
import {Link} from "react-dom";


function sidebar() {
    return (
        <div className='sidebar' >
            <div className='title' >
                <h2 className='title-text' >Suivi de candidature</h2>
            </div>
            <ul className='sidebar-links' >
                <Link><li className='link-item' >Tableau de bord</li></Link>
                <Link><li className='link-item' >Liste des candidature</li></Link>
                <Link><li className='link-item' >Formulaire d'entrer de candidature</li></Link>
            </ul>
        </div>
    )
}

export default sidebar