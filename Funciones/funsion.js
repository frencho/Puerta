/*window.addEventListener('load',menu,true);*/
        
function menu()
{
    document.getElementById('hamburger').style.marginLeft="0px";
    document.getElementById('hamburger').style.transition=".5s all";
    
    document.getElementById('acercaDe').style.marginLeft="-550px";
    document.getElementById('acercaDe').style.transition=".3s all";
}

function cerrarMenu()
{
    document.getElementById('hamburger').style.marginLeft="-250px";
    document.getElementById('hamburger').style.transition=".5s all";
    
    document.getElementById('acercaDe').style.marginLeft="-550px";
    document.getElementById('acercaDe').style.transition=".3s all";
}

function hola()
{
    alert('Hola Mundo');
}

function acerca()
{
    document.getElementById('hamburger').style.marginLeft="-250px";
    document.getElementById('hamburger').style.transition=".5s all";
    
    document.getElementById('acercaDe').style.marginLeft="10%";
}

function abrir()
{
    alert('Se esta abriendo la puerta... :D');
}

function cerrar()
{
    alert('Se esta cerrando la puerta... :D');
}