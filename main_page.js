document.oncontextmenu=new Function("return false;return false")
document.onkeydown = function (e) {
    console.log(e.key);
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
        }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
        }
}

badButton.addEventListener('click', badButtonClicked);

function badButtonClicked(){
    alert('wrong');
    close();
}

function goodButtonClicked(){
    window.location.href = "loading1.html";
}
