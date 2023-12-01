import { proxy } from "valtio";
import img from "../assets/blacklogo.png"
const state = proxy({
    intro: true,
    color: '#ffffff',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: img,
    fullDecal: img,
});

export default state;