/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter , FaFacebook , FaWhatsapp , FaRegUser } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';
import './style.scss';
import Logo from '../../images/Chippu2.png';
import Google from '../../images/googleplay.png';
import Apple from '../../images/applestore.png';



export function Header(){

    const [ selectedMenu , setSelectedMenu ] = useState<Array<boolean>>(
        [
            true,
            false,
            false,
            false,
            false
        ]
    )

    function handleMenuClick(i : number) {
        const newMenu = selectedMenu.map( (menu ,index) => {
            if (i === index){
                return true;
            } else {
                return false;
            }
        })
        setSelectedMenu(newMenu)
    }

    return(
        <div className="header-top">

            <div className="header-light">
                <time>Segunda, 22 de maio de 2021</time>
                <div className="social">
                    <FaFacebook color='#FAFAFA'/>
                    <FaTwitter color='#FAFAFA'/>
                    <FaWhatsapp color='#FAFAFA'/>
                </div>
            </div>

            <div className="header-dark">
                <img src={Logo} alt="Chippu Logo" />
                <nav className='navigation'>
                    <a
                    href="#"
                    className={ selectedMenu[0] ? 'active' : ''}
                    onClick={ ()=> handleMenuClick(0) }
                    >Home</a>

                    <a
                    href="#"
                    className={ selectedMenu[1] ? 'active' : ''}
                    onClick={ ()=> handleMenuClick(1) }
                    >Séries</a>

                    <a
                    href="#"
                    className={ selectedMenu[2] ? 'active' : ''}
                    onClick={ ()=> handleMenuClick(2) }
                    >TV e Séries</a>

                    <a href="#"
                    className={ selectedMenu[3] ? 'active' : ''}
                    onClick={ ()=> handleMenuClick(3) }
                    > Filmes</a>

                    <a href="#"
                    className={ selectedMenu[4] ? 'active' : ''}
                    onClick={ ()=> handleMenuClick(4) }
                    >Plataformas</a>
                </nav>

                <nav className="stores">
                    <span>Podcast</span>
                    <img src={Google} alt="Google Play" />
                    <img src={Apple} alt="Apple Store" />
                </nav>

                <div className="user-icons">
                    <IoIosSearch color='#FAFAFA'/>
                    <span>|</span>
                    <FaRegUser color='#FAFAFA'/>
                </div>
            </div>
        </div>
    )
}