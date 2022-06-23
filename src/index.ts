let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo2 = document.getElementById("rotulo2");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

rotulo.innerHTML = "Precio del producto:";
rotulo2.innerHTML = "Cantidad de procuctos:";

btnEnv.addEventListener("click", () => {
  let precio: number = Number(dato.value);
  let cantidad: number = Number(dato2.value);
  let precioTotal: number = Number(precio) * Number(cantidad);
  let descuento: number = Number(precioTotal) * 0.1;
  if (precioTotal >= 1000) {
    console.log("El precio con descuento es: ", +precioTotal - descuento);
  } else {
    console.log("El precio sin descuento es: ", +precioTotal);
  }
});
