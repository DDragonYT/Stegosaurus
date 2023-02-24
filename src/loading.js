function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

window.onload = function() {
    sleep(2000).then(() => { window.location.href = "stage"+localStorage.level+".html";; });
}