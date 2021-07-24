import { MainNew } from './MainNew';
import { Small } from './SmallNews'
import Photo1 from '../../images/photos/small1.png'
import Photo2 from '../../images/photos/small2.png'
import Photo3 from '../../images/photos/small3.png'
import Photo4 from '../../images/photos/small4.png'
import './style.scss';

export function Content() {

    const samllNews = [
        { image : Photo1 , tag : 'Oscar 2021' ,
        text : 'Oscar 2021 | Assista ao Chippu Live Show especial da premiação'},

        { image : Photo2 , tag : 'Podcast' ,
        text : 'Invasão Secreta | Olivia Colman negocia para se juntar ao elenco de série da Marvel'},

        { image : Photo3 , tag : 'Livros' ,
        text : 'Como Shang-Chi pode consertar a pior decisão da Marvel (MCU)'},

        { image : Photo4 , tag : 'Animes' ,
        text : 'Como Shang-Chi pode consertar a pior decisão da Marvel (MCU)'},
    ]

    return (
        <div className="display-flex">
            <div className="body-grid">
                <MainNew />
                <div className={'small'}>
                    <Small position={'left'} data={samllNews[0]}/>
                    <Small data={samllNews[1]}/>
                    <Small data={samllNews[2]}/>
                    <Small position={'right'} data={samllNews[3]}/>
                </div>
            </div>
        </div>
    )

}