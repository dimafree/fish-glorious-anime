import * as PIXI from "pixi.js";

export class ResourceFrame extends PIXI.Sprite{
	cont:PIXI.Sprite;
	animate:PIXI.AnimatedSprite;
	constructor(num:number) {
		super();
		//
		this.cont = this.addChild(new PIXI.Sprite());
		//
		const json0 = PIXI.Loader.shared.resources[`images/anim/colorframe${num}/res2.json`].spritesheet;
		const array0:any = [];
		if(json0) {
			Object.keys(json0.textures).sort().forEach((key) => {
				array0.push(json0.textures[key]);
			});
		}

		this.animate = new PIXI.AnimatedSprite(array0);
		this.animate.animationSpeed = 0.5;
		this.animate.loop = true;
		this.cont.addChild(this.animate);
		this.animate.play();

	}

}