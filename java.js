


/*se aislan las casas y los departamentos*/
$(document).ready(function() {
    $('#mostrarcasas').on('click', function() {
        $('.cuadropropiedades').hide(); 
        $('.cuadropropiedades[id^="casa"]').show(); 

    });

    $('#mostrardepas').on('click', function() {
        $('.cuadropropiedades').hide(); 
        $('.cuadropropiedades[id^="depa"]').show(); 

    });
});




/*funciones al formulario(boton)*/ 

document.getElementById("button1").addEventListener("click", enviar);

function enviar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaida = document.getElementById('fechaida').value;
    const mail = document.getElementById('mail').value;
    const num = document.getElementById('num').value;

    alert(`Gracias por contactarnos, ${nombre} ${apellido}. Hemos recibido tu información`);

    document.getElementById('form2').reset();
}




document.getElementById("imagenlogo").addEventListener("click", mostrar);
function mostrar(){

    alert("Bienvenidos a la inmobiliaria 'LA COSTA HOUSE', aquí encontrarán los mejores hospedajes de la costa Argentina  ")

}















