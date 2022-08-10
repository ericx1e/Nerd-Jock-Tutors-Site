window.onscroll = function (e) {
    if (window.scrollY < 10) {
        document.getElementById("navbar").className = "navbar"
    } else {
        document.getElementById("navbar").className = "navbar_shadow"
    }

    // document.getElementById("navbar").style.backgroundColor = rgb(window.scrollY, 255, 255)
    // console.log(window.scrollY)
}
