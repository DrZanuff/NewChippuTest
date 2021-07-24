import './styles.scss';

type NewsData = {
    image : string,
    tag   : string,
    text  : string
}

interface SmallNewsProps {
    position? : string
    data : NewsData
}

export function Small( {position , data} : SmallNewsProps ) {

    return(
        <div className={`component-body ${position}`}>
            <div className="tag">{data.tag}</div>
            <h5 className="title">{data.text}</h5>
            <div className="fade"></div>
            <img src={data.image} alt="" />
            
        </div>
    )

}