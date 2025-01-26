let isOpen = false;

window.openNav = function () {
    isOpen = !isOpen;
    if (isOpen) {
        document.getElementById("mySidenav").style.width = "0";

    }
    else{
        document.getElementById("mySidenav").style.width = "250px";
    }
};

window.closeNav = function () {
    isOpen = !isOpen;
    document.getElementById("mySidenav").style.width = "0";
};