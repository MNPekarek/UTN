import React, {useState} from "react";

function Contador(){
    const [contador, setcontador] = useState(0);

    const incrementar = () => {
        setcontador(contador+1);
    }

    const decrementar = () => {
        setcontador(contador-1);
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>Valor: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default Contador;