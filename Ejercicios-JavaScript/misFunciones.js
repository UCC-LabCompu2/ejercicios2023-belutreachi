/**
 * Convierte unidaddes entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el ususario
 * @return Valor que retorna
 */

convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;

    } else if(id==="pulgada"){
        pul = valor;
        met = valor*0.0254;
        pie = valor*0.0833333;
        yar = valor*0.0277778;
    } else if(id==="pie"){
        pie = valor;
        met = valor*0.3048;
        pul = valor*12;
        yar = valor*0.333333;
    } else if(id==="yarda"){
        yar = valor;
        met = valor*0.9144;
        pul = valor*36;
        pie = valor*3;
    }
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
    document.lasUnidades.unid_metro.value = met;

}

/**
 * Convierte grados a radianes o radianes a grados
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */

convertirGR = (id) => {
    let gr, rad;

    if(id=="grados"){
        gr = document.getElementById("grados").value;
        if (isNaN(gr)){
            gr = "";
        }
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    } else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)){
            rad = "";
        }
        document.getElementById("grados").value = (rad*180)/Math.PI;
    }
}