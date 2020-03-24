let sidebarNav;

window.onload = () => {

    const langHover = document.querySelectorAll('.languages li');

    for (let lh of langHover) {
        lh.addEventListener('mouseover', (event) => {
            setTimeout(() => {
                event.target.style.color = "#aab9ce";
            }, 70);
        }, false);

        lh.addEventListener('click', (event) => {
            setTimeout(() => {
                event.target.style.color = "#aab9ce";
            }, 100);
        }, false);

        lh.addEventListener('mouseout', (event) => {
            setTimeout(() => {
                event.target.style.color = "black";
            }, 100);
        }, false);
    }

    // const angelPic = document.querySelectorAll('.picture');

    // for (let p of angelPic) {
    //     p.addEventListener('mouseover', (event) => {
    //         setTimeout(() => {
    //             event.target.style.opacity = ".8";
    //         }, 70);
    //     }, false);

    //     p.addEventListener('click', (event) => {
    //         setTimeout(() => {
    //             event.target.style.height = "100vh";
    //             event.target.style.width = "100vh";
    //         }, 100);
    //     }, false);

    //     p.addEventListener('mouseout', (event) => {
    //         setTimeout(() => {
    //             event.target.style.opacity = "1";
    //         }, 100);
    //     }, false);
    // }

    window.addEventListener('scroll', (e) => {
        let menu = document.querySelectorAll('.navv')[0],
            logoHeight = document.querySelector('.logo').height,
            menuFixed = false;

        if (window.scrollY > logoHeight) {
            if (!menuFixed) {
                menu.style.top = "0px";
                menu.style.position = 'fixed';
                menuFixed = true;
            }
        } else {
            menu.style.top = logoHeight.bottom;
            menu.style.position = 'relative';
            menuFixed = false;
        }
    });

    let sidebarNavStatus = false;

    sidebarNav = function () {
        let getSidebar = document.querySelector('.nav-sidebar');
        let getUl = document.querySelector('.nav-sidebar ul');
        let getA = document.querySelectorAll('.nav-sidebar a');
        let menuBtn = document.querySelector('.btn-toggle');

        let menuIcon = (url) => {
            menuBtn.style.background = 'url(' + url + ') no-repeat';
            menuBtn.style.backgroundSize = '80%';
            menuBtn.style.position = 'absolute';
            menuBtn.style.top = "0px";
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
        }

        else if (sidebarNavStatus === true) {
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

    for (let item of ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7', 'pic8']) {
        let img = document.getElementById(item);
        let parent = img.closest('.pic-container');
        let modal = parent.querySelector(".modal");

        let captionText = modal.querySelector(".caption");
        let close = modal.querySelector(".close");
        let modalImg = modal.querySelector(".modal-content");

        close.onclick = () => {
            modal.style.display = "none";
        }

        img.onclick = () => {
            modal.style.display = "block";
            modalImg.src = img.src; // data-src=" ... src do dużego zdjęcia ... "
            captionText.innerHTML = img.alt;
        }

        window.onclick = function(event) {
            let myModal = document.getElementById("myModal");;
            if (event.target == myModal) {
              myModal.style.display = "none";
            }
          } 
    }

}
