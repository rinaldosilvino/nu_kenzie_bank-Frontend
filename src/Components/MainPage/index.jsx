import "./styles.css";

export const MainPage = ({ HomeGroup262, NuKenzieWhite, setPage }) => {
    return (
        <div className="home-section-parent">
            <main className="page-main">
                <section className="page-section-left">
                    <img src={NuKenzieWhite} alt="Logo Nu enzie" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <h4>de forma rápida e segura</h4>
                    <button onClick={() => setPage(false)}>Iniciar</button>
                </section>
                <section className="page-section-right">
                    <img src={HomeGroup262} alt="Imagem página inicial" />
                </section>
            </main>
        </div>
    );
};

