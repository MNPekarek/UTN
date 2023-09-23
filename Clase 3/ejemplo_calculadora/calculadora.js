const sumar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    console.log(resultado)
    document.getElementById("resultado").textContent = "Resultado Suma: " + resultado;
   };

const restar = () => {
 const num1 = parseFloat(document.getElementById("num1").value);
 const num2 = parseFloat(document.getElementById("num2").value);
 const resultado = num1 - num2;
 console.log(resultado)
 document.getElementById("resultado").textContent = "Resultado Resta: " + resultado;
};

const multiplicar = () => {
 const num1 = parseFloat(document.getElementById("num1").value);
 const num2 = parseFloat(document.getElementById("num2").value);
 const resultado = num1 * num2;
 console.log(resultado)
 document.getElementById("resultado").textContent = "Resultado Multiplicación: " + resultado;
};

const dividir = () => {
 const num1 = parseFloat(document.getElementById("num1").value);
 const num2 = parseFloat(document.getElementById("num2").value);
 if (num2 !== 0) {
 const resultado = num1 / num2;
 console.log(resultado)
 document.getElementById("resultado").textContent = "Resultado División: " + resultado;
 } else {
 document.getElementById("resultado").textContent = "Error: División por cero";
 }
};