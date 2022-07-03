var handlemenu = document.getElementsByClassName('header_menu--list');
var handlelayout = document.getElementsByClassName('header_menu--auth');
var hendleClose = document.getElementsByClassName('menu_close');
var iconclose = document.getElementsByClassName('menu_reponsive')
var dos = document.getElementById('display');
console.log(dos);
    function handletongle()
    {
        
        dos.style.display = 'none'
        iconclose[0].style.display = 'none';
        handlemenu[0].style.visibility = 'visible';
        handlelayout[0].style.visibility = 'visible';
        hendleClose[0].style.visibility = 'visible';
        handlemenu[0].style.right = "0";
        handlemenu[0].style.left = "0";
        handlemenu[0].style.top = "0";
        handlemenu[0].style.bottom = "0";
        
     
       
    }

    function handleclose()
    {
        dos.style.display = 'block'
        handlemenu[0].style.visibility = 'hidden';
        handlelayout[0].style.visibility = 'hidden';
        hendleClose[0].style.visibility = 'hidden';
        handlemenu[0].style.right = "100px";
        handlemenu[0].style.left = "100px";
        handlemenu[0].style.top = "100px";
        handlemenu[0].style.bottom = "100px";
        iconclose[0].style.display = 'block'
    }