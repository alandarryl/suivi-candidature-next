import React from 'react';
import Link from "next/link";


function sidebar() {
    return (
        <div className='side sidebar' >
            <div className='title' >
                <h2 className='title-text' >Suivi de candidature</h2>
            </div>
            <ul className='sidebar-links' >
                <Link href="./dashboard" ><li className='link-item' >Tableau de bord</li></Link>
                <Link href="./candidatureListe" ><li className='link-item' >Liste des candidature</li></Link>
                <Link href="./candidatureFormulaire" ><li className='link-item' >Formulaire d'entrer de candidature</li></Link>
            </ul>
        </div>
    )
}

export default sidebar;