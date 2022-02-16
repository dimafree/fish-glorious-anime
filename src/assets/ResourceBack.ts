import * as PIXI from "pixi.js";

export class ResourceBack extends PIXI.Sprite{
	cont:PIXI.Sprite;
	animate:PIXI.AnimatedSprite;
	constructor() {
		super();
		//
		this.cont = this.addChild(new PIXI.Sprite());
		//
		this.play = this.play.bind(this);
		//
		const json0 = PIXI.Loader.shared.resources["images/anim/res1.json"].spritesheet;
		const array0:any = [];
		if(json0) {
			Object.keys(json0.textures).sort().forEach((key) => {
				array0.push(json0.textures[key]);
			});
		}

		this.animate = new PIXI.AnimatedSprite(array0);
		this.animate.animationSpeed = 0.5;
		this.animate.loop = false;
		this.cont.addChild(this.animate);
		//animate0.play();

	}

	play() {
		this.animate.gotoAndPlay(1);
	}

}