import { useState } from "react";
import "./styles.css"; 

function Form({ listTransactions, setListTransactions }) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState(0);
    const [type, setType] = useState("");
    const [id, setId] = useState(0);

    function addNewItem() {
        const form = { description, type, value, id };
        if (form.type === "Despesas") {
            form.value *= -1;
        }
        setId(id + 1);

        setListTransactions([...listTransactions, form]);
    }
    function checkFields(){
        if(description && value > 0 && type) return false
        return true
    }

return (
    <div>
        <div className="formDiv">
            <div className="formDiv_input">
                <span className="formSpan_description">Descrição</span>
                <input
                name="description"
                className="formInput"
                placeholder="Digite aqui sua descrição"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
        </div>
        <div className="formDiv_span">
            <span>Valor</span>
            <span>Tipo de valor</span>
        </div>
        <div className="formDiv_value">
            <input
            name="value"
            className="formInput_value"
            placeholder="R$"
            type="number"
            onChange={(event) => setValue(Number(event.target.value))}
            />
            <select
            className="formSelect_value"
            value={type}
            onChange={(event) => {
                setType(event.target.value);
            }}
            >
            <option value="">Selecione</option>
            <option value="Entrada" label="Entrada"></option>
            <option value="Despesas" label="Despesas"></option>
            </select>
        </div>
        <button className="formButton" onClick={() => addNewItem()} disabled={checkFields()}>Inserir valor</button>
        </div>
    </div>
    );

}

export default Form;