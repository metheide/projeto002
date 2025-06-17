function Primo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    let limite = Math.floor(Math.sqrt(n));
    for (let c = 3; c <= limite; c += 2) {
        if (n % c === 0) return false;
    }
    return true;
}

document.getElementById("btn").onclick = function () {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const primosDiv = document.getElementById("primos");
    const naoPrimosDiv = document.getElementById("naoprimos");

    primosDiv.innerHTML = "";
    naoPrimosDiv.innerHTML = "";
    resultado.innerHTML = "";

    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = "Digite um número válido maior que 0.";
        return;
    }

    let primos = [];
    for (let i = 2; i <= numero; i++) {
        if (Primo(i)) primos.push(i);
    }

    primosDiv.innerHTML = "Primos até " + numero + ": " + primos.join(", ");

    if (primos(numero)) {
        naoPrimosDiv.innerHTML = numero + " não é primo!";
    } else {
        naoPrimosDiv.innerHTML = numero + " é primo!";
    }
};

/** function calcular() {
    let numero = document.getElementById("numero").valueAsNumber();
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    if (n < 0) (
        let aviso = document.createElement("p");
        aviso.textContent = "Digite um número válido maior que 0.";
        resultado.appendChild(aviso);
        return
    )

    let divPrimos = document.getElementById("div");
for (let c = 2; c <= numero; c++) {
        if (Primo(c)) {
            let spanPrimo = document.createElement("span");
            spanPrimo.Classname  = "rimo";   
            spanPrimo.textContent = c + " ";
            divPrimos.appendChild(spanPrimo);
        }
        resultado.appendChild(divPrimos);
        
    }
if (Primo(numero)) {
    let avisoFinal = document.createElement("p");
    avisoFinal.textContent = "O numero ${numero} é primo!";
    resultado.appendChild(avisoFinal);
 
*/
