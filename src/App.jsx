import React, { useState } from "react";
import IMCForm from "./components/IMCForm";
import IMCResult from "./components/IMCResult";
import "./App.css";

function App() {
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState("");

    const calculateIMC = (altura, peso) => {
        const alturaEmMetros = altura / 100; // Convertendo altura para metros
        const imcValue = (peso / (alturaEmMetros ** 2)).toFixed(2);

        let classification = "";
        if (imcValue < 18.5) classification = "Abaixo do peso";
        else if (imcValue < 24.9) classification = "Peso normal";
        else if (imcValue < 29.9) classification = "Sobrepeso";
        else if (imcValue < 34.9) classification = "Obesidade grau 1";
        else if (imcValue < 39.9) classification = "Obesidade grau 2";
        else classification = "Obesidade grau 3";

        setImc(imcValue);
        setClassification(classification);
    };

    return (
        <div className="App">
            <h1>Calculadora de IMC</h1>
            <IMCForm onCalculate={calculateIMC} />
            {imc && <IMCResult imc={imc} classification={classification} />}
        </div>
    );
}

export default App;
