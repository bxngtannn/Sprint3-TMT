
const listadoProductos = [
    {
        id: 1,
        titulo: 'Microondas smart',
        descripcion: 'Capacidad 28L. Con Grill. Pantalla digital LED. Potencia 900W. Interior ceramico. 6 Niveles de coccion. Descongelado rapido. 3 Menues de coccion automatica. Plato giratorio de vidrio de 31.8cm de diametro. Traba de seguridad. Color Silver.',
        precio: '8.000',
        img: 'micro2.jpg'
    },
    {
        id: 2,
        titulo: 'Sillon de dos cuerpos',
        descripcion: 'Sillon 2 cuerpos',
        precio: '35.000',
        img: 'sillon2.jpg'
    },
    {
        id: 3,
        titulo: 'TV LG 16k USB 1.0',
        descripcion: 'El distintivo cuerpo metálico muestra líneas puras y curvas. LG UHD TV muestra elegancia que sorprende. - Nuevo sistema de audio envolvente de LG con hasta 7 canales para mejor inmersión. - Ultra Luminance y Local Dimming aumentan el brillo y mejoran el detalle al ajustar la luz posterior y dividir la imagen en bloques de contraste independiente. - El Efecto HDR de LG usa un proceso de imagen que transforma el contenido normal a calidad HDR aumentando el contraste. - LG UHD TV permite reproducir contenido premium HDR perfeccionado por Dolby Vision. También es compatible con HDR10 y HLG. La tecnología exclusiva de LG de Active HDR permite optimizar la calidad de imagen cuadro por cuadro. - LG Magic Remote te permite controlar tu televisor de forma rápida, simple e incluso con tu propia voz. Gracias al puntero incorporado, podrás acceder a las aplicaciones con tan sólo apuntar y cliquear. Y para no perder ningún detalle, presiona la lupa de tu Magic Remote y has Zoom en vivo al contenido que estás viendo.',
        precio: '100.000.000',
        img: 'pantallaPlana.jpg'
    }
]

const mainController = {
    home: (req, res) => {
        res.render("home", { });
    },
    producto: (req, res) => {
        let producto = listadoProductos.find(producto => producto.id == req.params.productoId);
        res.render("productDetail", { producto : producto });
    },
    cart: (req, res) => {
        res.render("productCart", {  });
    },
    login: (req, res) => {
        res.render("login", {  });
    },
    register: (req, res) => {
        res.render("register", {  });
    }
    // detalle: (req, res) => {
    // let productofinal = listadoProductos.find(producto => producto.id == req.params.productoId);
    // console.log(productofinal)
    // console.log(productofinal);
    // res.render("productDetail", { productofinal });
    // },
};

module.exports = mainController;