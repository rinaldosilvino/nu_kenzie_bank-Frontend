import { CardOne } from "../Card/cards";

const List = ({ listTransactions, trashButton, removeItems }) => {
    return (
        <ul>
            {listTransactions.map((current, index) =>{
                return (
                current.type ?
                    <CardOne
                        key={index}
                        trashButton={trashButton}
                        removeItems={removeItems}
                        current={current}
                    />
                    :
                    <></>
                )
            })}
        </ul>
        );
    };
    
export default List;