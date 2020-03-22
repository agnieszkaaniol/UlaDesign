window.onload = () => {

    const menu = document.querySelectorAll('.navv')[0],
        backgroundPic = document.querySelectorAll('.main-background')[0],
        text = document.querySelectorAll('.main-title')[0],
        heroPic = document.querySelector('.main-angel'),
        logo = document.querySelector('.logo');

    let imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
        mountainsPic = document.querySelector('.main-forest'),
        imgWidth = document.querySelector('.main-forest').getBoundingClientRect().width,
        menuFixed = false,
        sidebarNavStatus = false;


    // changing src code

    if (imgWidth < 769) {
            mountainsPic.src = "img/BgM.png",
            heroPic.src = "img/HeroM.png";
            logo.src = "img/bMale.png";
    } else {
            mountainsPic.src = "img/BgD.png",
            heroPic.src = "img/HeroD.png";
            logo.src = "img/b.PNG";
    }

    window.addEventListener("resize", () => {

        imgHeight = document.querySelector('.main-background').getBoundingClientRect().height;
        imgWidth = document.querySelector('.main-forest').getBoundingClientRect().width;

        if (imgWidth < 769) {
                mountainsPic.src = "img/BgM.png",
                heroPic.src = "img/HeroM.png";
                logo.src = "img/bMale.png";
        } else {
                mountainsPic.src = "img/BgD.png",
                heroPic.src = "img/HeroD.png";
                logo.src = "img/b.PNG";
        }
    });

    {
        let scrolled = -document.body.getBoundingClientRect().top,
        ratePic = scrolled * (-0.3),
        rateText = scrolled * (0.55);

        heroPic.style.transform = 'translate3d(0px, ' + ratePic + 'px, 0px)';
        text.style.transform = 'translate3d(0px, ' + rateText + 'px, 0px)';

        if (scrolled > imgHeight * .76923) {
            if (!menuFixed) {
                menu.style.position = 'fixed';
                menu.style.top = '0';
                menuFixed = true;
            }
        } else {
            if (menuFixed) {
                menu.style.position = 'relative';
                menu.style.top = 'auto';
                menuFixed = false;
            }
            backgroundPic.style.top = (scrolled / 2.8) + 'px';
        }
    }

    sidebarNav = function () {
        let getSidebar = document.querySelector('.nav-sidebar');
        let getUl = document.querySelector('.nav-sidebar ul');
        let getA = document.querySelectorAll('.nav-sidebar a');
        let menuBtn = document.querySelector('.btn-toggle');
    
        let menuIcon = (url) => {
            menuBtn.style.background = 'url('+url+') no-repeat';
            menuBtn.style.backgroundSize = '80%';
            menuBtn.style.position = 'absolute';
            menuBtn.style.backgroundPosition = 'top center';
        }

        if (sidebarNavStatus === false) {
            getUl.style.visibility = "visible";
            getSidebar.style.width = "200px";
            getSidebar.style.backgroundColor = "var(--white)";
            menuIcon('icons/close.png');
    
            let arrayLength = getA.length;
            for (let i = 0; i < arrayLength; i++) {
                getA[i].style.opacity = "1";
            }
            
            sidebarNavStatus = true;
        } else {
            getUl.style.visibility = "hidden";
            getSidebar.style.width = "0px";
            getSidebar.style.backgroundColor = "rgba(255, 255, 255, .01";
            menuIcon('icons/menu1.png');
    
            let arrayLength = getA.length;
            for (let i = 0; i < arrayLength; i++) {
                getA[i].style.opacity = "0";
            }
    
            sidebarNavStatus = false;
        }
    }

    // fixed menu code, parallax code

    window.addEventListener('scroll', (e) => {
        let menu = document.querySelectorAll('.navv')[0],
            imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
            scrolled = window.pageYOffset,
            ratePic = scrolled * (-0.3),
            rateText = scrolled * (0.55);

        if (window.scrollY > imgHeight * .76923) {
            if (!menuFixed) {
                menu.style.position = 'fixed';
                menu.style.top = '0';
                menuFixed = true;
            }
        } else {
            if (menuFixed) {
                menu.style.position = 'relative';
                menu.style.top = 'auto';
                menuFixed = false;
            }
            backgroundPic.style.top = (window.scrollY / 2.8) + 'px';
        }

        heroPic.style.transform = 'translate3d(0px, ' + ratePic + 'px, 0px)';
        text.style.transform = 'translate3d(0px, ' + rateText + 'px, 0px)';

        if (menu.style.position = "fixed") {
            menu.style.visibility = "visible";
        }
    })

    // language hover code

    const langHover = document.querySelectorAll('.languages li');

    for (let lh of langHover) {
        lh.addEventListener('mouseover', (event) => {
            setTimeout(() => {
                event.target.style.color = "grey";
            }, 70, event);
        }, false);

        lh.addEventListener('click', (event) => {
            setTimeout(() => {
                event.target.style.color = "black";
            }, 100, event);
        }, false);

        lh.addEventListener('mouseout', (event) => {
            setTimeout(() => {
                event.target.style.color = "white";
            }, 100, event);
        }, false);
    }

    // Regulamin modal code

    const modal = document.getElementById("myModal"),
    reg = document.getElementById("regulamin"),
    close = document.getElementsByClassName("close")[0];

    reg.onclick = () => {
        modal.style.display = "block";
    }

    close.onclick = () => {
        modal.style.display = "none";
    }
}


