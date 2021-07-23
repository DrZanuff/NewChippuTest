import { FaTwitter , FaFacebook , FaWhatsapp , FaRegUser } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import './style.scss';
import Logo from '../../images/Chippu2.png';

export function Header(){

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
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Séries</a>
                    <a href="#">TV e Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Filmes</a>
                    <a href="#">Plataformas</a>
                </nav>

                <nav>
                    <span>Podcast</span>
                    <a href="#">Google</a>
                    <a href="#">Apple</a>
                </nav>

                <div>
                    <IoIosSearch />
                    <span>|</span>
                    <FaRegUser />
                </div>
            </div>
        </div>
    )
}