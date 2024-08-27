const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnencriptar()
{
    const texto = encriptar(textarea.value)
    mensaje.value = texto
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringencriptar)
{
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptar = stringencriptar.toLowerCase()

    for (let i = 0; i < matriz.length; i++)
    {
        if (stringencriptar.includes(matriz[i][0]))
        {
            stringencriptar = stringencriptar.replaceAll(matriz[i][0], matriz[i][1])

        }
    }
    return stringencriptar
}


function btndescencriptar() {
    const texto = descencriptar(textarea.value)
    mensaje.value = texto
    textarea.value = "";
}
function descencriptar(stringdescencriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdescencriptar = stringdescencriptar.toLowerCase()

    for (let i = 0; i < matriz.length; i++) {
        if (stringdescencriptar.includes(matriz[i][1])) {
            stringdescencriptar = stringdescencriptar.replaceAll(matriz[i][1], matriz[i][0])

        }
    }
    return stringdescencriptar
}

function copiarTexto()
{
    var mensaje = document.querySelector('.mensaje');
   
    mensaje.select();

    
    document.execCommand('copy');

    alert('Texto copiado al portapapeles!');
}

// Asignar la función al botón 'copiar' cuando el documento esté listo
document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener el botón con la clase 'copiar'
    var botonCopiar = document.querySelector('.copiar');

    // Asignar la función 'copiarTexto' al evento 'click' del botón
    botonCopiar.addEventListener('click', copiarTexto);
});