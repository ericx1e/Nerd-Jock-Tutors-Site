window.onscroll = function (e) {
    if (window.scrollY < 10) {
        document.getElementById("navbar").className = "navbar"
    } else {
        document.getElementById("navbar").className = "navbar_shadow"
    }
    // console.log(window.scrollY)
}