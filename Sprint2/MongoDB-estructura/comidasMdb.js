db.createCollection("clientes");
db.createCollection("productos");
db.createCollection("tiendas");
db.clientes.insertMany([
    {
    nombre:"Juan", 
    apellido:"Alonso",
    direccion: {
        calle:"Rambla de Prim",
        numero:33,
        cp:08019,
        localidad:"Barcelona",
        provincia:"Barcelona",
    },
    telefono:"+34600332839",
    pedidos: [
        {
        fecha_hora: ISODate('2022-10-19T18:58:20.197Z'),
        reparto:true,
        empleado_reparto:"Gabriel Perez",
        hora_entrega: ISODate('2022-10-19T19:08:20.197Z'),
        producto:[{nombre:"Hamburguesa 8 quesos", cantidad:2}],
        total: 30,
        tienda:"El Pollo Bar",
        },
        {
        fecha_hora: ISODate('2022-10-20T18:58:20.197Z'),
        reparto:true,
        empleado_reparto:"Gabriel Perez",
        hora_entrega: ISODate('2022-10-20T19:09:00.107Z'),
        producto:[{nombre:"Hamburguesa 8 Quesos", cantidad:1},{nombre:"Coca Cola Zero", cantidad:1}],
        total:18,
        tienda:"El Pollo Bar",
        },
    ],
    },
    {
    nombre:"Pedro Pablo", 
    apellido:"Delamar",
    direccion: {
        calle:"Gaona",
        numero:143,
        cp:08029,
        localidad:"Badalona",
        provincia:"Barcelona",
    },
    telefono:"+34608345679",
    pedidos: [
        {
        fecha_hora: ISODate('2022-10-19T19:58:20.197Z'),
        reparto:true,
        empleado_reparto:"Gabriel Perez",
        hora_entrega: ISODate('2022-10-19T20:08:20.197Z'),
        producto:[{nombre:"Pizza Pronta", cantidad:1},{nombre:"Agua", cantidad:1}],
        total:22,
        tienda:"El Pollo Bar",
        },
    ],
    },
]);

db.productos.insertMany([
    {
    tipo:"Hamburguesa",
    nombre:"Hamburguesa 8 Quesos",
    descripcion:"Hamburguesa de Carne Vacuna, con 8 tipos de quesos. Si queres saber que tipos de quesos son probala.",
    imagen:"https://comidas.com.es/img/hamb8q.jpg",
    precio:15,
},
{
    tipo:"Hamburguesa",
    nombre:"Hamburguesa 12 Quesos",
    descripcion:"Hamburguesa de Carne Vacuna, con 12 tipos de quesos. Si queres saber que tipos de quesos son probala.",
    imagen:"https://comidas.com.es/img/hamb12q.jpg",
    precio:22,
},
{
    tipo:"Pizza",
    categoria:["Pizzas Italianas"],
    nombre:"Pizza Pronta",
    descripcion:"Una pizza que sale rapido, queso y salsa de tomate.",
    imagen:"https://comidas.com.es/img/pp.jpg",
    precio:20,
},
{
    tipo:"Bebida",
    nombre:"Agua",
    descripcion:"Agua Ives 330cl.",
    imagen:"https://comidas.com.es/img/aguai.jpg",
    precio:2,
},
{
    tipo:"Bebida",
    nombre:"Coca Cola Zero",
    descripcion:"Coca Cola Zero 330cl.",
    imagen:"https://comidas.com.es/img/ccz330.jpg",
    precio:3,
}]
);
db.tiendas.insertOne({
    tienda:"El Pollo Bar",
    direccion: {
        calle:"Robador",
        numero:23,
        cp:08010,
        localidad:"Barcelona",
        provincia:"Barcelona",
    },
    empleados: [
    {
        nombre:"Gabriel Perez",
        nif:2323232,
        telefono:"+34600234606",
        puesto:"Reparto",
    },
    {
        nombre:"Julian Perez",
        nif:2323233,
        telefono:"+34600234608",
        puesto:"Cocina",
    }
    ]}
    );