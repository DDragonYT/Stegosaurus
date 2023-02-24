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

function nextStage() {
    window.localStorage.setItem('level',Number(localStorage.level)+1);
    window.location.href = "loading0.html";
}

function badButtonClicked(){
    alert('Wrong');
    close();
}

function goodButtonClicked(){
    nextStage();
}

function checkpassword() {
    var password = document.getElementById("password");
    var pass = password.value;
    if(pass == "WE6822TD6O"){
    }else{
        location.reload();
    }
  }

function newGame(){
    window.localStorage.setItem('level',1);
    window.location.href = "loading0.html";
}

function continueGame(){
    console.log(level);
    window.location.href = "stage"+localStorage.level+".html";
}