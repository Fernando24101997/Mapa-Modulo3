var cartaregion = document.getElementsByClassName('card-title');
var atractivos = document.getElementById('atractivos');
var imgregion = document.getElementById('img-r');
var contenedor = document.getElementsByClassName('container');

const Regiones= [
    [Nombre='Arica y Parinacota',Atractivos='nose1', Imagen='/img/arica.jpg'],
    [Nombre='Tarapaca',Atractivos='nose2',Imagen='/img/tarapaca.jpg'],
    [Nombre='Antofagasta',Atractivos='nose3', Imagen='/img/antofagasta.jpg'],
    [Nombre='Atacama',Atractivos='nose4',Imagen='/img/atacama.jpg'],
    [Nombre='Coquimbo',Atractivos='nose5',Imagen='/img/coquimbo.jpg'],
    [Nombre='Valparaiso',Atractivos='nose6',Imagen='/img/valparaiso.jpg'],
    [Nombre='Metropolitana',Atractivos='nose7',Imagen='/img/metropolitana.jpg'],
    [Nombre='Libertador General Bernardo O\'Higgins',Atractivos='nose8',Imagen='/img/libertadorO.jpg'],
    [Nombre='Maule',Atractivos='nose9',Imagen='/img/maule.jpg'],
    [Nombre='Ñuble',Atractivos='nose10',Imagen='/img/ñuble.jpg'],
    [Nombre='Bio-Bio',Atractivos='nose11',Imagen='/img/biobio.jpg'],
    [Nombre='Araucania',Atractivos='nose12',Imagen='/img/araucania.jpg'],
    [Nombre='Rios',Atractivos='nose13',Imagen='/img/rios.jpg'],
    [Nombre='Lagos',Atractivos='nose14',Imagen='/img/lagos.jpg'],
    [Nombre='Aysen',Atractivos='nose15',Imagen='/img/aysen.jpg'],
    [Nombre='Magallanes y de la Antartica Chilena',Atractivos='nose16',Imagen='/img/magallanes.jpg'],
]


function mostrar_carta(region){

    contenedor[0].style.display="block";
    cartaregion[0].textContent = 'Región: ' + Regiones[region][0];
    atractivos.textContent = 'Atractivos: ' + Regiones[region][1];
    imgregion.src = Regiones[region][2];
}

function ocultar_region(){
    contenedor[0].style.display="none";
    cartaregion[0].textContent = 'Región:';
    atractivos.textContent = 'Atractivos:';
}
