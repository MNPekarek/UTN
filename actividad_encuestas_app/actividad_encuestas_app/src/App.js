import Preguntas from "./componets/Preguntas";
import { useState } from "react";



function App() {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntacion] = useState (0);
  const [isFiniched, setIsFinished] = useState (false);
  

  function handleAnswerSubmit(isCorrect, e) {
    //añadir puntacion
    if (isCorrect) setPuntacion(puntuacion + 1);
    //añadir estilos a la pregunta
  e.target.classList.add(isCorrect ? "correct" : "iscorrect");  
  //cambiar a la siguiente pregunta
  if(preguntaActual === Preguntas.length - 1) {
    setIsFinished(true);
  } else {
    setPreguntaActual(preguntaActual + 1);
  }


    
  }

  if (isFiniched) {
    return (
      <main className="app">
        <div className="encuesta-terminado">
          <span>
            <h2>Tus respuestas fueron: 
              <li>{}</li> 
              </h2>
            {""}
            Tus respuestas fueron {} de {Preguntas.href}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </button>
        </div>
      </main>
    )
    
  }  


  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span> Pregunta {preguntaActual + 1} de</span> {Preguntas.length}
        </div>
      <div className="titulo-pregunta">
         {Preguntas[preguntaActual].titulo}
         </div>

      </div>

      <div className="lado-derecho">
        {Preguntas[preguntaActual].opciones.map((respuesta) => (
          <button key={respuesta.textoRespuesta} 
          onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}> 
             {respuesta.textoRespuesta}
              </button>
        ))}

    

      </div>
    </main>
    
  )
}
 

export default App;
