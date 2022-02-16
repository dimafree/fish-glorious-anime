import * as PIXI from "pixi.js";

/**
 *  Creates the Renderer
 *
 *  @returns {PIXIRenderer}
 */
const initRenderer = () => {
    // Create the renderer (auto detect Canvas / WebGL)
    const renderer = PIXI.autoDetectRenderer({
			width:1920,
			height: 1080,
			antialias: true,
			transparent: true,
			autoDensity: true,
			resolution: 1
    });
    // Style the renderer
    renderer.view.className = "renderArea";
    //renderer.stage.interactive = true;
    // Add to the DOM
    const domgame = document.getElementById("AppGame");
    if(domgame) {
			domgame.appendChild(renderer.view);
		}

    // Return the reference of the renderer
    return renderer;
};

export default initRenderer;
