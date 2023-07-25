Para insertar una imagen de fondo:

body{
    background-image: url("")
}

## Flexbox y Grid

Flexbox: Los elementos hijos se pueden re-ubicar. Para ubicar un elemento al lado del otro. En los headers se usa. En párrafo al lado del texto. 

Trabajamos en el eje Y.

La PROP FLEXBOX SE APLICA A LOS **CONTENEDORES** PADRES!! Los contenedores no se manejan en y. 

En un elemento contenedor (section), se usa el display "flex". Por defecto, el flex-direction es column. Si se pone flex, los contenedores quedan uno al lado del otro.

Comando *flex-grow* en css en vez de width. 

*flex-wrap: wrap* las que no entran pasan  a la linea de abajo!! Se adapta siempre al ancho del dipsoitivo (es responsive).

Formularios:

Datos de contacto! Empieza con un titulo (en general fuera del formulario). Hay un input (pide dato a cleinte). Cada campo es un input.

*placeholder=* para que aparezca el nombre dentro de la cajita.

*display flex* siempre que el contenido este en columnas. elementos uno al lado del otro. **Siempre va en contenedores**. 

en lo elementos flex nunca va margin!!

## Responsive designe

adaptabilidad a cada dispositivo. diseño adaptable al dispositivo donde se abra la web.

se aplica en el css. es algo visual de la web.

@main (ancho maximo)

@main (max-width: -px) {
    main {
        prop que cambia
    }
}

## Maquetado WEB e intro a la deploy

Requisitos
1. Repo de github
2. Hosting de vercel (*https://vercel.com/*). Deja hacer deply gratuito.   

## Bootstrap

Es una libreria de CSS. Toma estilos prestados con clases. Siempre es mejor estilos propios, no es recomendable usar porque alguna vez puede perder el soporte. 

A veces se usa bootstrap para añadir contenedores responsive y no hacerlo manualmente. Para estructurar contenedores de forma fácil. 

Su fuerte también son los componentes. Fragmentos de codigo q resuelven ciertas funcionalidades 
