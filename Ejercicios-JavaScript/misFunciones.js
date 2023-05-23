/**
 * Convierte unidaddes entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el ususario
 */

convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if (valor.includes(",")){
        valor = valor.replace(",",".");
    }

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
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Number(yar).toFixed(2);
    document.lasUnidades.unid_metro.value = Number(met).toFixed(2);

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

/**
 * Muestra u oculta un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input del html
 */

let mostrar_ocultar = (id) => {
    if(id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Suma dos inputs introducidos por el usuario
 * @method sumar
 */

let sumar = () => {
    //Agregar verificacion de letras para no obtener resultado NaN
    let res, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value);
    s2 = Number(document.operacionesMat.sum_num2.value);
    res = s1 + s2;
    document.getElementById("totalS").innerHTML = res;
    document.operacionesMat.sum_total.value = res;
}

/**
 * Resta dos inputs introducidos por el usuario
 * @method restar
 */

let restar = () => {
    let res, r1, r2;
    r1 = Number(document.operacionesMat.res_num1.value);
    r2 = Number(document.operacionesMat.res_num2.value);
    res = r1 - r2;
    document.getElementById("totalR").innerHTML = res;
    document.operacionesMat.res_total.value = res;
}

let multiplicar = () => {
    let res, m1, m2;
    m1 = Number(document.operacionesMat.mul_num1.value);
    m2 = Number(document.operacionesMat.mul_num2.value);
    res = m1*m2;
    document.getElementById("totalM").innerHTML = res;
    document.operacionesMat.mul_total.value = res;
}

let dividir = () => {
    let res, d1, d2;
    d1 = Number(document.operacionesMat.div_num1.value);
    d2 = Number(document.operacionesMat.div_num2.value);
    res = d1/d2;
    document.getElementById("totalD").innerHTML = res;
    document.operacionesMat.div_total.value = res;
}



/**
 * genera URL para ir a la segunda web
 * @method generarUrl
 */

let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

/**
 * carga el valor de la distancia y la unidad
 * @method cargarValor
 */

let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancai").value;
    const uni = document.getElementsByName("unidades")[0].value;

    window.open("web2.html");
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
}

let cargarLS = () =>{
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}


