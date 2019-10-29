import swift from "assets/badges/swift.png";
import redux from "assets/badges/redux.png";
import react from "assets/badges/react.png";
import node from "assets/badges/node.png";
import java from "assets/badges/java.png";
import html from "assets/badges/html.png";
import javascript from "assets/badges/javascript.png";
import css3 from "assets/badges/css3.png";
import illustrator from "assets/badges/illustrator.png";
import photoshop from "assets/badges/photoshop.png";
import aftereffects from "assets/badges/aftereffects.png";

export function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

export function getCookie(c_name) {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

export function preloadWorkImages() {
  let badges = [
    swift,
    redux,
    react,
    node,
    java,
    html,
    javascript,
    css3,
    illustrator,
    photoshop,
    aftereffects,
  ];
  badges.forEach((badge) => {
    const img = new Image();
    img.src = badge;
  });
}

export default {
  preloadWorkImages,
  getCookie,
  setCookie
}
