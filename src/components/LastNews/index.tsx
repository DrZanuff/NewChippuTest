import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './style.scss';
import Left from '../../images/left-arrow-button.svg';
import Right from '../../images/right-arrow-button.svg';


export function LastNews() {

    const items=
        [
            { id: 1, title: 'A 4ª temporada de Cobra Kai deve estrear no fim de 2021 na Netflix' },
            { id: 2, title: 'Netflix lançará games de séries como Stranger Things para voltar a crescer' },
            { id: 3, title: 'Loki, a nova série Original da Marvel Studios. O Deus da Trapaça está de volta.' },
            { id: 4, title: 'O terceiro filme da série trará de volta os atores dos filmes anteriores, como Zendaya, Marisa Tomei e Jacob Batalon.' },
        ]

    return (
        <>
            <div className='last-news'>
                <div className='hilight'> <span>Últimas noticias</span> </div>
                <Carousel plugins={[
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 3000,
                        }
                    },
                ]}
                    animationSpeed={1000}>
                    {items.map(item => <div key={item.id}>{item.title}</div>)}
                </Carousel>

                <div className="news-controls">
                    <img src={Left} alt="Left" />
                    <img src={Right} alt="Right" />
                </div>

                
            </div>
            <div className="line"></div>
        </>
        
    )

}
