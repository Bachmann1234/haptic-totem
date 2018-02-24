import { vibration } from "haptics";

function go() {
  vibration.start("ring");
  setTimeout(go, Math.floor((Math.random() * 100000) + 5000));
}

go();