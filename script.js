console.log(img.height);
document.addEventListener('scroll', function() {

    img.style.top = `${window.scrollY * 0.5}px`;
    var str = img.style.top;
    len = parseFloat(str.substr(0, str.length - 2));

    if (len <= 717) second.style.top = `${window.scrollY}px`;

})