db.createCollection("usuario");
db.usuario.insertMany([
    {
        email:"dardo@gmail.com",
        password:"DarditoCampeon1993",
        nombre_usuario:"dardito93",
        fecha_nacimiento: ISODate('1993-03-19T18:58:20.197Z'),
        sexo:"masculino"
        pais:"Bolivia",
        cp:1929,
        videos: [{
            titulo:"cumpleaños de la abuela pocha 2002",
            descripcion:"Resumen del cumple de la abuela Pocha en la casa de Dardidito antes de que se quede viuda",
            tamaño:200,
            nombre_archivo:"cumple_pocha_2002.mp4",
            duracion: 120,
            thumbnail: "https://yutub.com/vid/img/cumple_pocha2222.jpg/",
            reproducciones:2,
            likes:[
            {
                nombre_usuario:"pochainmortal",
                like_dislike:true,
                fecha_hora: ISODate('2004-09-19T19:58:10.197Z')
            },
            {
                nombre_usuario:"gabypajarito",
                like_dislike:true,
                fecha_hora: ISODate('2004-09-19T19:48:10.197Z')
            }],
            estado:true,
            etiquetas:[
                {
                    nombre:"cumple pochita 2002"
                },
                {
                    nombre:"pochita inmortal 2002"
                }
            ],
            fecha_publicacion: ISODate('2004-08-19T19:48:10.197Z')
        }],//fin videos
        canales: [
            {
                nombre_canal:"dardo atr",
                descripcion:"el mejor material inedito de interneeee",
                fecha_creacion: ISODate('2004-07-19T19:48:10.197Z'),
                videos:[{titulo:"cumpleaños de la abuela pocha 2002"}]
            }
        ],
        suscripciones: [{nombre_canal:"Bartolo Tv"}],
        playlists: [
            {
            nombre:"playslist 01",
            fecha_creacion: ISODate('2008-07-19T19:48:10.197Z'),
            estado:true,
            videos:[{titulo:"cumpleaños de la abuela pocha 2002"}]
            }
        ],
        comentarios:[
            {
                titulo_video:"cumpleaños de la abuela pocha 2002",
                texto:"Muy bueno negrito me cage de risa en el final",
                fecha_hora: ISODate('2008-07-19T19:48:10.197Z'),
                likes_usuarios: [
                    {nombre_usuario:"gabypajarito"}
                ]
            }
        ]
    },
    {
        email:"pochainmortal@gmail.com",
        password:"pochita123",
        nombre_usuario:"pochainmortal",
        fecha_nacimiento: ISODate('1933-01-19T18:58:20.197Z'),
        sexo:"Femenino"
        pais:"Bolivia",
        cp:1929,
        suscripciones: [{nombre_canal:"dardo atr"}],
        comentarios:[
            {
                titulo_video:"cumpleaños de la abuela pocha 2002",
                texto:"que liindo recuerdo, lastima que el tio se emborracho y arruino el momento de la torta, los amo!",
                fecha_hora: ISODate('2008-07-19T19:48:10.197Z'),
                likes_usuarios: [
                    {nombre_usuario:"dardito93"}
                ]
            }
        ]
    }
]);