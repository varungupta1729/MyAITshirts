import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#ffffff',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './black logo.png',
    fullDecal: './black logo.png',
});

export default state;