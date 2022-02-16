import * as PIXI from "pixi.js";
import {gsap} from "gsap";

export class Light1 extends PIXI.Sprite{
	//fon2mask:PIXI.Graphics;
	cont:PIXI.Sprite;
	constructor() {
		super();
		//
		this.startAnimation = this.startAnimation.bind(this);
		this.cont = this.addChild(new PIXI.Sprite());
		this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/light2.png")));

		this.startAnimation(this.startAnimation);
	}


	startAnimation(callback:any) {
		gsap.to(this.cont, {
			duration: Math.floor(Math.random() * 4) + 1,
			alpha: (this.cont.alpha===1?0:1),
			onComplete: callback
		});
	}
}