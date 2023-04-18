let carro = []; 


function cargarUnItem() {

    const nuevoItem = new Item(); 
    nuevoItem.nombre = prompt("antes de que pueda comprar en nuestra tienda por favor diganos como se llama");
    nuevoItem.producto = prompt("Ingrese el nombre del comic/manga que quiera llevar de la tienda");
    nuevoItem.precio = Number(prompt("Ingrese el precio del producto elegido"));
    nuevoItem.cantidad = Number(prompt("Ingrese la cantidad que quiera llevar del producto"));
    nuevoItem.lugar = prompt("por favor diganos a donde debemos entragar su pedido(especifique lo mas que pueda)");

    return nuevoItem;
}

const cargarItems = () => {
    let seguir;
    let nuevoItem;
    do {
        nuevoItem= cargarUnItem();
        carro.push(nuevoItem); 
        seguir = prompt('¿Desea comprar algun otro producto? s/no');

    }while (seguir == 's');
}


function mostrarCarro() {
    let ticket = '';
    let totalTicket = 0;
        carro.forEach((item) => {
            ticket = ticket + `nommbre del cliente:  ${item.nombre} \nnombre del producto: ${item.producto} \n precio del producto: ${item.precio} \n cantidad del producto: ${item.cantidad} \n lugar de entraga del pedido: ${item.lugar} \n subtotal de la compra realizada: ${item.subTotal()} \n\n`;
        });

    totalTicket = carro.reduce((total,item) => {
        return total + item.subTotal();
    },0);

    alert(ticket + `Total: ${totalTicket}`);
    
}

cargarItems();
mostrarCarro();