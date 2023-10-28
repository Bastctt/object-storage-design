import './Acceuil.css';
import React from 'react';
import Canapé from '../../Assets/canapé.mp4';
import Miroir from '../../Assets/miroir.mp4';
import Desk from '../../Assets/bureau.webp';
import Design from '../../Assets/design.webp';

function Acceuil() {
    return (
        <div className="parent">
            <div className="div1">
                <video className='video1' autoPlay muted loop>
                    <source src={Canapé} type='video/mp4'></source>
                </video>
            </div>
            <div className="div2">
            <video className='video1' autoPlay muted loop>
                    <source src={Miroir} type='video/mp4'></source>
                </video>
            </div>
            <div className="div3">
                <img className='video1' src={Desk}></img>
            </div>
            <div className="div4">
                <img className='video1' src={Design}></img>
            </div>
        </div>
    );
}

export default Acceuil;
