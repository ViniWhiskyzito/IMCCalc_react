import React, { useState } from "react";

function IMCForm({ onCalculate }) {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (altura && peso) {
            onCalculate(parseFloat(altura), parseFloat(peso));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="imc-form">
            <label>
                Altura (cm):
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Digite sua altura em cm"
                    required
                />
            </label>
            <label>
                Peso (kg):
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Digite seu peso em kg"
                    required
                />
            </label>
            <button type="submit">Calcular IMC</button>
        </form>
    );
}

export default IMCForm;
