var check=document.querySelector(".bandera");
check.addEventListener('click', idioma);

while (true){
    let u=1
    let id=check.checked
    console.log(u)
    if (id=undefined && u%2!=0){
        location.href="../es/principalEn.html"
        u=u+1
    }else{
        location.href="../es/principalEs.html"
        u=u+1
    }
}
