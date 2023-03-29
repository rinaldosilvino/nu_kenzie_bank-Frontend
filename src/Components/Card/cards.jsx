import "./styles.css";

export const EmptyCard = () =>
{
    return (
        <div>
            <li className="cardDiv_empty">
                <div className="emptyDiv_one"></div>
                <div className="emptyDiv_two"></div>
            </li>
            <li className="cardDiv_empty">
                <div className="emptyDiv_one"></div>
                <div className="emptyDiv_two"></div>
            </li>
            <li className="cardDiv_empty">
                <div className="emptyDiv_one"></div>
                <div className="emptyDiv_two"></div>
            </li>
        </div>
    );
}

export const CardOne = ({
    trashButton, 
    removeItems,
    current,
}) => {
    return (
        <li className={current.type === "Entrada" ? "cardOne":"cardTwo"}>
        <div className="cardOne_description">
            <h3 className="cardOne_h3">{current.description}</h3>
            <span className="cardOne_span">{current.type}</span>
        </div>
        <div className="cardOne_value" onClick={() => removeItems(current)}>
            <span className="cardOne_spanValue">R$ {current.value}</span>
            <div className="cardOne_img">
            <img className="cardOne_imgValue" src={trashButton} alt="Lixeira" />
            </div>
        </div>
        </li>
    );
}

export const CardTwo = ({
    description, 
    value, 
    type, 
    trashButton, 
    removeItems,
    current
}) => {
    return (
        <li className="cardDiv_two">
            <div className="card-div-description">
            <h3 className="card-h3">{description}</h3>
            <span className="card-span-type">{type}</span>
            </div>
            <div className="card-div-value" onClick={() => removeItems(current)}>
            <span className="card-span-value">R$ {value}</span>
            <div className="img-div">
                <img className="card-img-value" src={trashButton} alt="Lixeira" />
            </div>
            </div>
        </li>
        );
};