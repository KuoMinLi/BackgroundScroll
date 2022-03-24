window.onload = () => {
    console.log('welcome')
    var maindiv = document.getElementById('main');
    var middle = document.getElementById('middle');
    var tm = document.getElementById('tm');
    var middleTop = middle.offsetTop || middle.getBoundingClientRect().top;
    var tmTop = tm.offsetTop;

    window.addEventListener("scroll", function(event){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

        if (scrollTop < middleTop){
            maindiv.style.backgroundImage = "url(./img1.jpg)"           
        } else if (scrollTop > middleTop){
            maindiv.style.backgroundImage = "url(./img2.jpg)"
        }
    })
}
