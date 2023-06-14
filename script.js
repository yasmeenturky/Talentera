const menuBtn =  document.getElementById("menu-btn");
        menuBtn.addEventListener('click', () =>  {
                 document.querySelector('nav .navigation ul').classList.add('active');
             
        });
        
const btnClose =  document.getElementById("menu-close");
btnClose.addEventListener('click', function() {
    if (document.querySelector('nav .navigation ul.active') !== null) {
            document.querySelector('nav .navigation ul.active').classList.remove('active');
        }
});