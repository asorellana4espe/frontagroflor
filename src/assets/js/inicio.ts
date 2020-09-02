var control = 1;

function menu(){
    let options_user = document.getElementById('useroptions'),
        menu_options = document.getElementById('usermenu');

    if(control ==1){
        options_user.classList.add('active');
        menu_options.classList.add('active');
        control++;
    }else{
        options_user.classList.remove('active');
        menu_options.classList.remove('active');
        control=1;
    }
}

function menuActive(option){
    let conf = document.getElementsByClassName('activoMenu')[0],
        newActivo = document.getElementById(option);
        conf.classList.remove('activoMenu');
        newActivo.classList.add('activoMenu');
}


    
