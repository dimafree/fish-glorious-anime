import * as PIXI from "pixi.js";
import {gsap} from "gsap";

export class Ray extends PIXI.Sprite{
	ray:PIXI.Sprite;
	dur:any;
	amplitude:any = 0.8;
	constructor() {
		super();
		//
		this.x = -120;
		//
		this.startAnimation = this.startAnimation.bind(this);
		this.step1 = this.step1.bind(this);
		this.step2 = this.step2.bind(this);
		this.step3 = this.step3.bind(this);

		const cont = this.addChild(new PIXI.Sprite());
		this.ray = cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/light.png")));
		this.startAnimation();
	}


	startAnimation() {
		gsap.killTweensOf(this.ray);
		this.ray.rotation = Math.random()*this.amplitude*(Math.random()>0.5?-1:1);
		this.ray.alpha = 0;
		this.dur = Math.floor(Math.random() * 5) + 2;
		this.step1();
		this.step2();
		this.step3();
	}

	step1() {
		gsap.to(this.ray, {
			duration: 0.5,
			alpha: Math.random()
		});
	}

	step2() {
		const endang = this.ray.rotation<0?Math.random()*this.amplitude:Math.random()*this.amplitude*-1;
		gsap.to(this.ray, {
			duration: this.dur,
			rotation: endang,
			onComplete: this.startAnimation
		});
	}

	step3() {
		gsap.to(this.ray, {
			duration: 0.5,
			delay: this.dur - 0.5,
			alpha: 0
		});
	}
}