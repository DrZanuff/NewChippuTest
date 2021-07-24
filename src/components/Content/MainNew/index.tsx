import Main from '../../../images/photos/main1.png';
import './style.scss';

export function MainNew() {
    return (
        <div className={`main-content`}>
            <div className="tag">Filmes</div>
            <h3 className="title">Como Shang-Chi pode consertar a pior decisão da Marvel (MCU)</h3>
            <p className="sub">Como Shang-Chi pode consertar a pior decisão da Marvel (MCU)</p>
            <div className="fade"></div>
            <img src={Main} alt="Movie 1" />
        </div>
    )
}