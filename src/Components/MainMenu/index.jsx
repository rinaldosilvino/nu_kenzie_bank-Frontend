import "./styles.css";

export const MainMenu = ({ filter, setFilter }) => {
    return (
        <div className="menuDiv_parent">
        <h3>Resumo Financeiro</h3>
        <div className="menuDiv_button">
            <button className="menu-button-all menu-button-todos" onClick={() => setFilter("")}>Todos</button>
            <button
            onClick={() => setFilter("Entrada")}
            className="menu-button-all menu-button-entradas"
            >
            Entradas
            </button>
            <button
            onClick={() => setFilter("Despesas")}
            className="menu-button-all menu-button-despesas"
            >
            Despesas
            </button>
        </div>
        </div>
    );
};

export const Alert = () => {
    return (
        <div className="divAlert">
            <h2>Você ainda não possui nenhum lançamento</h2>
        </div>
    );
};