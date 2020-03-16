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
    })

    let sidebarNavStatus = false;

    sidebarNav = function () {
        let getSidebar = document.querySelector('.nav-sidebar');
        let getUl = document.querySelector('.nav-sidebar ul');
        let getA = document.querySelectorAll('.nav-sidebar a');
        let menuBtn = document.querySelector('.btn-toggle');

        let menuIcon = (url) => {
            menuBtn.style.background = 'url('+url+') no-repeat';
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

}

// () => { // naslych dla 1-wszego popupa
//                 a.p.eventOut[0] = e => {
//                     let area = a.r(a.p.popup[0]),
//                         x = e.clientX,
//                         y = e.clientY;
//                     // console.log('%c area:', 'background: #ffcc00; color: #003300', area, x, y)
//                     if (!(area.left < x && area.right > x && area.top < y && area.bottom > y)) {
//                         a.p.close(0)
//                         console.log('%cyou are outside of area:', 'background: red; color: #003300')
//                     } else {
//                         console.log('%cyou are on area:', 'background: green; color: #003300')
//                     }
//                 }
//                 document.body.addEventListener('click', a.p.eventOut[0])
//                 console.log('%c document.body:', 'background: #ffcc00; color: #003300', document.body)
//             },


{/* changing cursor style onclick
    
    <script language="Javascript">
	function example_change_cursor() {
		document.body.style.cursor = document.getElementById('example-cursor').options[document.getElementById('example-cursor').selectedIndex].value;
	}
	function example_restore_cursor() {
		document.body.style.cursor = 'default';
	}
</script>
<select id="example-cursor">
	<option>default</option>
	<option>crosshair</option>
	<option>e-resize</option>
	<option>help</option>
	<option>move</option>
	<option>n-resize</option>
	<option>ne-resize</option>
	<option>nw-resize</option>
	<option>pointer</option>
	<option>progress</option>
	<option>s-resize</option>
	<option>se-resize</option>
	<option>sw-resize</option>
	<option>text</option>
	<option>w-resize</option>
	<option>wait</option>
</select>
<input type="button" onclick="example_change_cursor()" value="Change Cursor" />
<input type="button" onclick="example_restore_cursor()" value="Restore Default" /> 


<head>
<style type="text/css">

body {
	cursor:default;
}
</style>

<script type="text/javascript">
function change() {
    document.body.style.cursor="help";
}
</script>
</head>

<body>

<div onclick="change()">
Click here!
</div>

</body>


document.body.style.cursor="url('first.cur'),help";



<html>
<head>
<style type="text/css">
body { cursor:default; } </style> 
<script type="text/javascript"> 
function change() { 
document.body.style.cursor=(document.body.style.cursor=="help") ? "default" : "help"; 
} 
</script> 
</head> 
<body> 
<div onmousedown="change()" onmouseup="change()"> Click here! </div> 
Blah
Blah
Blah
</body>
</html>
*/}
