import * as PIXI from "pixi.js";
import {gsap} from "gsap";
import {Ray} from "./Ray";

export class Light2 extends PIXI.Sprite{
	//fon2mask:PIXI.Graphics;
	cont:PIXI.Sprite;
	constructor() {
		super();
		//
		this.startAnimation = this.startAnimation.bind(this);
		this.cont = this.addChild(new PIXI.Sprite());
		this.cont.x = 960;
		this.cont.y = -450;
		this.cont.addChild(new Ray());
		this.cont.addChild(new Ray());
		this.cont.addChild(new Ray());
		this.cont.addChild(new Ray());
		this.cont.addChild(new Ray());
		this.cont.addChild(new Ray());

		//this.startAnimation(this.startAnimation);
	}


	startAnimation(callback:any) {
		gsap.to(this.cont, {
			duration: 3,
			alpha: (this.cont.alpha===1?0:1),
			onComplete: callback
		});
	}
}