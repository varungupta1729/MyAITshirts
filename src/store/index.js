import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#ffffff',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './blacklogo.png',
    fullDecal: './blacklogo.png',
});

export default state;