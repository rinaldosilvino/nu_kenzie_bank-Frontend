import "./styles.css";

function Header({ NuKenzieBlack, setPage }) {
    return (
        <header className="header">
            <div className="logoDiv">
                <img src={NuKenzieBlack} alt="Logo Kenzie" />
            </div>
            <div className="startDiv">
                <button onClick={() => setPage(true)}>Início</button>
            </div>
        </header>
    );
}
export default Header;