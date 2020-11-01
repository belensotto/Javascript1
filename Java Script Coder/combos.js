// Compra de Combos//

alert("Bienvenidx a Justa!")

nombreCliente = prompt("Ingresa tu nombre")

var conocerProductos

conocerProductos = prompt("¿Ya conoces nuestros productos?")

if(conocerProductos == "si"){alert( "Hola " + nombreCliente + ", " + "gracias por volver!")}
else{var infoProductos = prompt("¿Te gustaría conocernos primero o te sentis listx para comprar?")}

if(infoProductos=="conocerlos primero"){alert(" Podes acceder a www.instagram.com/justapan_ para conocer más ")}
else{alert("Adelante, siempre podes visitar nuestras redes :)")}


function Combo(nombreCombo, precio, cantidad, foto, prodID) {
    this.nombreCombo = nombreCombo;
    this.precio = precio;
    this.cantidad = cantidad;
    this.foto = foto;
    this.prodID = prodID;

    this.comprar(combo);

}
 
var misCombos = ["Burger Box","Home Sandwich","Picada","Quesos","Desayuno","Brunch","Experiencia Gourmet","Pizzas"]

var comboBurger = new Combo ("Burger Box",2000,1,src,001)
var comboSandwich = new Combo ("Home Sandwich",1500,1,src,002)
var comboPicada = new Combo ("Picada",2700,1,src,003)
var comboQuesos = new Combo ("Quesos",2500,1,src,004)
var comboDesayuno = new Combo ("Desayuno",1800,1,src,005)
var comboBrunch = new Combo ("Brunch",3000,1,src,006)
var comboGourmet = new Combo ("Experiencia Gourmet", 2700,1,src,007)
var comboPizzas = new Combo ("Pizzas",1500,1,src,008)
