window.addEventListener('scroll',reveal);
function reveal() {
    var reveals=document.querySelectorAll('.reveal')
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll',revealx);
function revealx() {
    var revealsx=document.querySelectorAll('.revealx')
    for(var i=0;i<revealsx.length;i++){
        var windowheightx=window.innerHeight;
        var revealxtop=revealsx[i].getBoundingClientRect().top;
        var revealxpoint=150;
        if(revealxtop<windowheightx-revealxpoint){
            revealsx[i].classList.add('active');
        }
        else{
            revealsx[i].classList.remove('active');
        }
    }
}