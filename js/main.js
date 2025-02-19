
function calcular (){
    let prod1 = parseFloat(document.getElementById("producto1").value);
    let prod2 = parseFloat(document.getElementById("producto2").value);
    let prod3 = parseFloat(document.getElementById("producto3").value);
    let prod4 = parseFloat(document.getElementById("producto4").value);
    let prod5 = parseFloat(document.getElementById("producto5").value);
    
    let subtotal = prod1+prod2+prod3+prod4+prod5;

    validarCampos(prod1, prod2, prod3, prod4, prod5);

    let descuento = validarDescuento(subtotal)

    document.getElementById("subtotal").innerText=subtotal+" Lps";
    document.getElementById("descuento").innerText= (descuento*100)+"%";

    let total = subtotal-(subtotal*descuento);
    document.getElementById("total").innerText=total+" Lps"
    
}

function validarCampos(producto1, producto2, producto3, producto4, producto5){
    if (producto1 == "" || isNaN(producto1)){
        Swal.fire({
            title: "Hola!",
            text: "No pueden haber valores vacios",
            icon: "warning"
        });
    }else if (producto2 == "" || isNaN(producto2)){
        Swal.fire({
            title: "Hola!",
            text: "No pueden haber valores vacios",
            icon: "warning"
        });
    }else if (producto3 == "" || isNaN(producto3)){
        Swal.fire({
            title: "Hola!",
            text: "No pueden haber valores vacios",
            icon: "warning"
        });
    }else if (producto4 == "" || isNaN(producto4)){
        Swal.fire({
            title: "Hola!",
            text: "No pueden haber valores vacios",
            icon: "warning"
        });
    }else if (producto5 == "" || isNaN(producto5)){
        Swal.fire({
            title: "Hola!",
            text: "No pueden haber valores vacios",
            icon: "warning"
        });
    }
}

function validarDescuento(subTotal){
    if(subTotal>0 && subTotal<1000){
        return 0
    }else if (subTotal >= 1000 && subTotal < 5000){
        return 0.10
    }else if (subTotal >= 5000 && subTotal < 9000){
        return 0.20
    }else if (subTotal >= 9000 && subTotal < 13000){
        return 0.30
    }else if (subTotal>=13000){
        return 0.40
    }
}

function limpiar(){
    document.getElementById("producto1").value="";
    document.getElementById("producto2").value="";
    document.getElementById("producto3").value="";
    document.getElementById("producto4").value="";
    document.getElementById("producto5").value="";
    document.getElementById("subtotal").innerText="0.00 Lps";
    document.getElementById("descuento").innerText="0%";
    document.getElementById("total").innerText="0.00 Lps";
}