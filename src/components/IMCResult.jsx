import React from "react";

function IMCResult({ imc, classification }) {
    return (
        <div className="imc-result">
            <h2>Resultado</h2>
            <p>
                <strong>IMC:</strong> {imc}
            </p>
            <p>
                <strong>Classificação:</strong> {classification}
            </p>
        </div>
    );
}

export default IMCResult;
