function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
if (document.getElementById("texto").value.length != 0){
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito";
    document.getElementById("parrafo").textContent = "";
    muñeco.src = "./img/encriptado.jpg";
} else{
    muñeco.src = "./img/Muñeco.png";
    alert("Debes ingresar algún texto");
}
}