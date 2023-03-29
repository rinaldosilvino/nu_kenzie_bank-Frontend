import './styles.css';

const TotalMoney = ({ listTransactions }) => {
    const totalValue = listTransactions.reduce(
        (acc, current) => acc + current.value,0
    );

return (
    <div className="total-div">
        <span className="total-span-total">Valor total</span>
        <span className="total-span-price">R$ {totalValue}</span>
    </div>
);
};

export default TotalMoney;