import * as PIXI from "pixi.js";

/**
 *  Creates the Renderer
 *
 *  @returns {PIXIRenderer}
 */
const initRenderer = () => {
    // Create the renderer (auto detect Canvas / WebGL)
    /*const renderer = PIXI.autoDetectRenderer({
			width:1920,
			height: 1080,
			antialias: true,
			backgroundAlpha: true,
			autoDensity: true,
			resolution: 1
    });
    renderer.view.className = "renderArea";
    */
		const renderer = new PIXI.Application({
			width: 1920,
			height: 1080,
			resolution: window.devicePixelRatio || 1,
			autoDensity: true,
			antialias: true,
			backgroundAlpha: true,
			resizeTo: window
		});
		renderer.view.className = "renderArea";

    const domgame = document.getElementById("AppGame");
    if(domgame) {
			domgame.appendChild(renderer.view);
			//
			let dom_overlay_container = document.createElement("div");
			dom_overlay_container.id = "dom_overlay_container";
			dom_overlay_container.style = "pointer-events:none; overflow:hidden; width:1920px; height:1080px; position: absolute; left: 0; top: 0; display: block;";
			domgame.appendChild(dom_overlay_container);
		}

    // Return the reference of the renderer
    return renderer.renderer;
};

export default initRenderer;
