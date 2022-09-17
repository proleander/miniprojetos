//IMC Calc

// Todas as Variavéis 
let leandroAge = 30;
let LeandroTall = prompt ("Digite sua altura");
let LeandroWeigth = prompt ("Digite o seu Peso");
let imcCalc = (LeandroWeigth / LeandroTall **2).toFixed(1) 
let loseWeigth = imcCalc * 3.06 
let idealWeigth = (imcCalc - 25)
let verSevai = (idealWeigth * 3.06).toFixed(2);

//Verificar quantos kg Falta para o Peso Ideal

if (verSevai <= 0){

    document.write("Você Já está No Peso Ideal: ")


} else (

    document.write(` Você Precisa Perder: ${verSevai} KG `)
)

// Cálculos dos Resultados

if (imcCalc>=40) {

   var resultado = document.
   getElementById("imcResult").innerHTML = imcCalc;
   var resposta = document.
   getElementById("imcResult2").innerHTML = "Obesidade Nivel Máximo";
    


} else if ((imcCalc<40) && (imcCalc>=35 )) {

    var resultado = document.
    getElementById("imcResult").innerHTML = imcCalc;
    var resposta = document.
    getElementById("imcResult2").innerHTML = "Obesidade Nivel 2";



} else if ((imcCalc<35) && (imcCalc>=30)) {

    var resultado = document.
    getElementById("imcResult").innerHTML = imcCalc;
    var resposta = document.
    getElementById("imcResult2").innerHTML = "Obesidade Nivel 1";


} else if ((imcCalc<30) && (imcCalc >=25)) {

    var resultado = document.
    getElementById("imcResult").innerHTML = imcCalc;
    var resposta = document.
    getElementById("imcResult2").innerHTML = "Sobrepeso";
   

} else if ((imcCalc <25) && (imcCalc>=18)) {

    var resultado = document.
    getElementById("imcResult").innerHTML = imcCalc;
    var resposta = document.
    getElementById("imcResult2").innerHTML = "Este é o seu Peso Ideal ";


} else  {

    var resultado = document.
    getElementById("imcResult").innerHTML = imcCalc;
    var resposta = document.
    getElementById("imcResult2").innerHTML = "Magreza Extrema";
    

}

const btn = document.querySelector("#refresh")

    btn.addEventListener("click" , () => {
    location.reload()
})


