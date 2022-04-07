$(function() {
    $("#boton_alerta1, #boton_alerta2").on("click", function() {
        alert("El correo fue enviado correctamente")
    })

    $("#titr1").on("dblclick", function() {
        $(this).css({
            "color": "red"
        })
    })

    $("#titr2").on("dblclick", function() {
        $(this).css({
            "color": "red"
        })
    })

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $(".toggler").click(function() {
        $(".toggled").toggle("slow", function() {});
    });
})