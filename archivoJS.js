function onclickbutton(msj) {
    saludo = "Hola \n Bienvenido a Javascript" + msj;
    alert(saludo);
}

$(document).ready(function () {
    $(".miclase").click(function(){
        let text = $(this).val();
        onclickbutton( text );
    });
});