db.createCollection("usuarios");
db.createCollection("artistas");
db.usuarios.insertMany([
{
    premium:true,
    email:"pedrito@hotmail.com",
    password:"Otirdep",
    user_name:"pedrito",
    fecha_nacimiento: ISODate('1990-10-14T14:55:20.122Z'),
    sexo: "masculino",
    pais:"España",
    cp:09087,
    suscripcion:{
        fecha_inicio:ISODate('2022-10-01T14:55:20.122Z'),
        fecha_renovacion:ISODate('2022-12-01T14:55:20.122Z'),
        forma_pago: {
            numero_tarjeta: 2323232323232,
            mes_anio: "11/25",
            cod_Seguridad:"223"
        },
        pagos: [
        {
            fecha:ISODate('2022-10-01T14:55:20.122Z'),
            total:20
        },
        {
            fecha:ISODate('2022-11-01T14:55:20.122Z'),
            total:20
        }]
    },
    playlists:[{
        titulo:"uno",
        n_canciones:2,
        fecha_creacion:ISODate('2021-05-03T14:53:23.122Z'),
        desactivada: true,
        fecha_desactivada:ISODate('2021-05-03T15:53:23.122Z'),
        compartida: [{
            user_name:"mabel22",
            cancion:"quisiera ser un pez",
            fecha:ISODate('2018-04-03T14:53:23.122Z'),
        },
        {
            user_name:"rollingadcorazon",
            cancion:"Mi Perro Dinamita",
            fecha:ISODate('2018-04-03T14:53:23.122Z')
        }
        ]
    }],
    seguidos:[{
        nombre_artista:"Los Redondos",
    },
    {
        nombre_artista:"Las Pelotas",
    }
    ],
    favoritos:[{
        titulo_album:"Ñanfifrulifralifru",
        titulo_cancion:"Mi Perro Dinamita"
    }]
},
{
    premium:false,
    email:"luislang@hotmail.com",
    password:"mcm12",
    user_name:"langelotti",
    fecha_nacimiento: ISODate('1992-10-14T14:55:20.122Z'),
    sexo: "masculino",
    pais:"España",
    cp:09083,
    seguidos:[{
        nombre_artista:"Los Redondos",
    }
    ],
}]);
db.artistas.insertMany([
    {
    nombre:"Los Redondos",
    imagen:"https://spoty.com/img/los_redondos.jpg",
    albumes:[{
        titulo:"Ñanfifrulifralifru",
        anio_publicacion:ISODate('1920-08-14T14:55:20.122Z'),
        imagen_portada:"https://spoty.com/img/niamfi.jpg",
        canciones:[{
            titulo:"Mi Perro Dinamita",
            duracion:230,
            reproducciones:23232345,
        },
        {
            titulo:"Yo No Me Cai Del Cielo",
            duracion:433,
            reproducciones:2321,
        }
        ]
    }],
    artistas_similares: [{
        nombre_artista:"Las Pelotas"
    }]
    },
    {
        nombre:"Las Pelotas",
        imagen:"https://spoty.com/img/las_pelotas.jpg",
        albumes:[{
            titulo:"Pelotas Very Best",
            anio_publicacion:ISODate('2020-08-14T14:55:20.122Z'),
            imagen_portada:"https://spoty.com/img/pelotasbest.jpg",
            canciones:[{
                titulo:"Panamericana",
                duracion:130,
                reproducciones:12,
            }
            ]
        }],
        artistas_similares: [{
            nombre_artista:"Los Redondos"
        }]
        }
])