
function autotype(){
    var text = 'Web Designer  &  Developer';
    var c = 0;


    return function(){
        if (c < text.length){
            document.getElementById('tet').innerHTML += text.charAt(c);
            c++;

            setTimeout(arguments.callee, 200);
        }
    }
}

    document.addEventListener('DOMContentLoaded' , function (){
        autotype()();
    })


/*about js */ 
function tgglAbtMe(){
    var x = document.getElementById('skills');
    x.classList.toggle('hidden');
}   

/*wrk ex js*/ 
function wehideopen(){
    let x = document.getElementById('we').style.display;

    if(x==='none'){
        document.getElementById('we').style.display = 'block';
    }else{
        document.getElementById('we').style.display = 'none';
    }
}
function toggleWorkExperience() {
    var x = document.getElementById('we');
    x.classList.toggle('hidden');
}

