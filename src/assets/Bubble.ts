import * as PIXI from "pixi.js";
import {gsap} from "gsap";

export class Bubble extends PIXI.Sprite{
	cont:PIXI.Sprite;
	bubble:PIXI.Sprite;
	dur:any;
	amplitude:any = 0.8;
	constructor() {
		super();
		//
		this.startAnimation = this.startAnimation.bind(this);
		this.bounceAnimation = this.bounceAnimation.bind(this);
		this.cont = this.addChild(new PIXI.Sprite());
		this.bubble = this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/bubble.png")));
		setTimeout(this.startAnimation, Math.random()*1000)
		this.bounceAnimation();
	}

	bounceAnimation() {
		gsap.to(this.cont, {
			duration:Math.random(),
			x: Math.random()*20,
			onComplete: ()=> {
				gsap.to(this.cont, {
					duration: Math.random(),
					x: Math.random()*20*-1,
					onComplete: this.bounceAnimation
				});
			}
		});
	}
	startAnimation() {
		gsap.killTweensOf(this.bubble);
		this.bubble.scale.set(Math.random());
		this.bubble.y = 1200;
		this.bubble.x = Math.floor(Math.random() * 1800) + 100;
		this.dur = Math.floor(Math.random() * 8) + 3;
		gsap.to(this.bubble, {
			duration: this.dur,
			delay:Math.random(),
			y: -100,
			onComplete: this.startAnimation
		});
	}

}