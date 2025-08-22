/**
* +===============================================================+
* |  __  __          _____ _   _      __  __ ______ _   _ _    _  |
* | |  \/  |   /\   |_   _| \ | |    |  \/  |  ____| \ | | |  | | |
* | | \  / |  /  \    | | |  \| |    | \  / | |__  |  \| | |  | | |
* | | |\/| | / /\ \   | | | . ` |    | |\/| |  __| | . ` | |  | | |
* | | |  | |/ ____ \ _| |_| |\  |    | |  | | |____| |\  | |__| | |
* | |_|  |_/_/    \_\_____|_| \_|    |_|  |_|______|_| \_|\____/  |
* +===============================================================+
*/

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("mySidenav").style.border = "#ffffff30 1px outset";
  document.getElementById("mySidenav").style.overflowY = "visible"
  document.getElementById("main").style.marginLeft = "60px";
  document.getElementById("main").style.marginRight = "-60px";
  document.getElementById("main").style.opacity = "0.5";
  document.getElementById("main").style.scale = "0.9";
  document.getElementById("container").style.backdropFilter = "blur(0px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.border = "#ffffff30 0px outset";
  document.getElementById("mySidenav").style.overflowY = "hidden"
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("main").style.opacity = "1";
  document.getElementById("main").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    CloseNavKey();
}
});
function CloseNavKey() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.border = "#ffffff30 0px outset";
  document.getElementById("mySidenav").style.overflowY = "hidden"
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("main").style.opacity = "1";
  document.getElementById("main").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
        }

/**
* +===========================================================================+
* |  ____ _______ _    _ ______ _____       __  __ ______ _   _ _    _  _____ |
* | / __ \__   __| |  | |  ____|  __ \     |  \/  |  ____| \ | | |  | |/ ____||
* || |  | | | |  | |__| | |__  | |__) |    | \  / | |__  |  \| | |  | | (___  |
* || |  | | | |  |  __  |  __| |  _  /     | |\/| |  __| | . ` | |  | |\___ \ |
* || |__| | | |  | |  | | |____| | \ \     | |  | | |____| |\  | |__| |____) ||
* | \____/  |_|  |_|  |_|______|_|  \_\    |_|  |_|______|_| \_|\____/|_____/ |
* +===========================================================================+
*
* +======================================================+
* |   _____          _      _      ______ _______     __ |
* |  / ____|   /\   | |    | |    |  ____|  __ \ \   / / |
* | | |  __   /  \  | |    | |    | |__  | |__) \ \_/ /  |
* | | | |_ | / /\ \ | |    | |    |  __| |  _  / \   /   |
* | | |__| |/ ____ \| |____| |____| |____| | \ \  | |    |
* |  \_____/_/    \_\______|______|______|_|  \_\ |_|    |
* +======================================================+
*/

function openGallery() {
  document.getElementById("Personal").style.width = "0";
  document.getElementById("Personal").style.border = "#ffffff30 0px outset";
  document.getElementById("Personal").style.overflowY = "hidden"
  document.getElementById("Tools").style.width = "0";
  document.getElementById("Tools").style.border = "#ffffff30 0px outset";
  document.getElementById("Tools").style.overflowY = "hidden"
  document.getElementById("Galleries").style.width = "300px";
  document.getElementById("Galleries").style.border = "#ffffff30 1px outset";
  document.getElementById("Galleries").style.overflowY = "visible"
  document.getElementById("mainwithmenu").style.marginLeft = "60px";
  document.getElementById("mainwithmenu").style.marginRight = "-60px";
  document.getElementById("mainwithmenu").style.opacity = "0.5";
  document.getElementById("mainwithmenu").style.scale = "0.9";
  document.getElementById("container").style.backdropFilter = "blur(0px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeGallery() {
  document.getElementById("Galleries").style.width = "0";
  document.getElementById("Galleries").style.border = "#ffffff30 0px outset";
  document.getElementById("Galleries").style.overflowY = "hidden"
  document.getElementById("mainwithmenu").style.marginLeft = "0";
  document.getElementById("mainwithmenu").style.marginRight = "0";
  document.getElementById("mainwithmenu").style.opacity = "1";
  document.getElementById("mainwithmenu").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}


document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeGalleryKey();
}
});
function closeGalleryKey() {
  document.getElementById("Galleries").style.width = "0";
  document.getElementById("Galleries").style.border = "#ffffff30 0px outset";
  document.getElementById("Galleries").style.overflowY = "hidden"
  document.getElementById("mainwithmenu").style.marginLeft = "0";
  document.getElementById("mainwithmenu").style.marginRight = "0";
  document.getElementById("mainwithmenu").style.opacity = "1";
  document.getElementById("mainwithmenu").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
        }

/**
* +============================================================+
* |  _____  ______ _____   _____  ____  _   _          _       |
* | |  __ \|  ____|  __ \ / ____|/ __ \| \ | |   /\   | |      |
* | | |__) | |__  | |__) | (___ | |  | |  \| |  /  \  | |      |
* | |  ___/|  __| |  _  / \___ \| |  | | . ` | / /\ \ | |      |
* | | |    | |____| | \ \ ____) | |__| | |\  |/ ____ \| |____  |
* | |_|    |______|_|  \_\_____/ \____/|_| \_/_/    \_\______| |
* +============================================================+
*/

function openPersonal() {
  document.getElementById("Galleries").style.width = "0";
  document.getElementById("Galleries").style.border = "#ffffff30 0px outset";
  document.getElementById("Galleries").style.overflowY = "hidden"
  document.getElementById("Tools").style.width = "0";
  document.getElementById("Tools").style.border = "#ffffff30 0px outset";
  document.getElementById("Tools").style.overflowY = "hidden"
  document.getElementById("Personal").style.width = "300px";
  document.getElementById("Personal").style.border = "#ffffff30 1px outset";
  document.getElementById("Personal").style.overflowY = "visible"
  document.getElementById("mainwithmenu").style.marginLeft = "60px";
  document.getElementById("mainwithmenu").style.marginRight = "-60px";
  document.getElementById("mainwithmenu").style.opacity = "0.5";
  document.getElementById("mainwithmenu").style.scale = "0.9";
  document.getElementById("container").style.backdropFilter = "blur(0px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closePersonal() {
  document.getElementById("Personal").style.width = "0";
  document.getElementById("Personal").style.border = "#ffffff30 0px outset";
  document.getElementById("Personal").style.overflowY = "hidden"
  document.getElementById("mainwithmenu").style.marginLeft = "0";
  document.getElementById("mainwithmenu").style.marginRight = "0";
  document.getElementById("mainwithmenu").style.opacity = "1";
  document.getElementById("mainwithmenu").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closePersonalKey();
}
});
function closePersonalKey() {
  document.getElementById("Personal").style.width = "0";
  document.getElementById("Personal").style.border = "#ffffff30 0px outset";
  document.getElementById("Personal").style.overflowY = "hidden"
  document.getElementById("mainwithmenu").style.marginLeft = "0";
  document.getElementById("mainwithmenu").style.marginRight = "0";
  document.getElementById("mainwithmenu").style.opacity = "1";
  document.getElementById("mainwithmenu").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
        }


/**
* +==============================================+
* |      _______ ____   ____  _       _____      |
* |     |__   __/ __ \ / __ \| |     / ____|     |
* |        | | | |  | | |  | | |    | (___       |
* |        | | | |  | | |  | | |     \___ \      |
* |        | | | |__| | |__| | |____ ____) |     |
* |        |_|  \____/ \____/|______|_____/      |
* +==============================================+
*/

function openTools() {
  document.getElementById("Galleries").style.width = "0";
  document.getElementById("Galleries").style.border = "#ffffff30 0px outset";
  document.getElementById("Galleries").style.overflowY = "hidden"
  document.getElementById("Personal").style.width = "0";
  document.getElementById("Personal").style.border = "#ffffff30 0px outset";
  document.getElementById("Personal").style.overflowY = "hidden"
  document.getElementById("Tools").style.width = "300px";
  document.getElementById("Tools").style.border = "#ffffff30 1px outset";
  document.getElementById("Tools").style.overflowY = "visible"
  document.getElementById("mainwithmenu").style.marginLeft = "60px";
  document.getElementById("mainwithmenu").style.marginRight = "-60px";
  document.getElementById("mainwithmenu").style.opacity = "0.5";
  document.getElementById("mainwithmenu").style.scale = "0.9";
  document.getElementById("container").style.backdropFilter = "blur(0px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeTools() {
  document.getElementById("Tools").style.width = "0";
  document.getElementById("Tools").style.border = "#ffffff30 0px outset";
  document.getElementById("Tools").style.overflowY = "hidden"
  document.getElementById("mainwithmenu").style.marginLeft = "0";
  document.getElementById("mainwithmenu").style.marginRight = "0";
  document.getElementById("mainwithmenu").style.opacity = "1";
  document.getElementById("mainwithmenu").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeToolsKey();
}
});
function closeToolsKey() {
  document.getElementById("Tools").style.width = "0";
  document.getElementById("Tools").style.border = "#ffffff30 0px outset";
  document.getElementById("Tools").style.overflowY = "hidden"
  document.getElementById("mainwithmenu").style.marginLeft = "0";
  document.getElementById("mainwithmenu").style.marginRight = "0";
  document.getElementById("mainwithmenu").style.opacity = "1";
  document.getElementById("mainwithmenu").style.scale = "1";
  document.getElementById("container").style.backdropFilter = "blur(5px)";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
        }

/**
* +==========================================================+
* |                                                          |
* |       _____      _ _                 _ _     _           |
* |      / ____|    | | |               (_) |   | |          |
* |     | |     ___ | | | __ _ _ __  ___ _| |__ | | ___      |
* |     | |    / _ \| | |/ _` | '_ \/ __| | '_ \| |/ _ \     |
* |     | |___| (_) | | | (_| | |_) \__ \ | |_) | |  __/     |
* |      \_____\___/|_|_|\__,_| .__/|___/_|_.__/|_|\___|     |
* |                           | |                            |
* |       __ _ _ __ ___  _   _|_|__  ___                     |
* |      / _` | '__/ _ \| | | | '_ \/ __|                    |
* |     | (_| | | | (_) | |_| | |_) \__ \                    |
* |      \__, |_|  \___/ \__,_| .__/|___/                    |
* |       __/ |               | |                            |
* |      |___/                |_|                            |
* |                                                          |
* +==========================================================+
*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
