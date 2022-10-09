images = [
  "./img3/JORDAN-YELLOW.jpg",
  "./img3/JORDAN-12-STEALTH.jpg",
  "./img3/asics-banner.jpg",
  "./img3/AIR-FORCE-1-LOW-RETRO-‘COLOUR-OF-THE-MONTH-3.jpg",

];

let index = 0;

let banner = document.getElementById("image");
banner.src = images[0];

function show_image(initial) {
  if (initial == "left") {
    index--;
  } else {
    index++;
    index %= images.length - 1;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  banner.src = images[index];
}

setInterval(show_image, 3000);











