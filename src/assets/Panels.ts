import * as PIXI from "pixi.js";
import {gsap} from "gsap";

export class Panels extends PIXI.Sprite{
	l1:PIXI.Sprite;
	r1:PIXI.Sprite;
	l2:PIXI.Sprite;
	r2:PIXI.Sprite;

	constructor() {
		super();
		//
		this.line1Animation = this.line1Animation.bind(this);
		this.round1Animation = this.round1Animation.bind(this);
		this.line2Animation = this.line2Animation.bind(this);
		this.round2Animation = this.round2Animation.bind(this);

		this.addChild(new PIXI.Sprite(PIXI.Texture.from("images/panels.png")));
		const cont1 = this.addChild(new PIXI.Sprite());
		const cont2 = this.addChild(new PIXI.Sprite());
		cont2.y = 964;

		this.r1 = cont1.addChild(new PIXI.Sprite(PIXI.Texture.from("images/rounds1.png")));
		this.l1 = cont1.addChild(new PIXI.Sprite(PIXI.Texture.from("images/line.png")));
		this.l1.y = 111;
		this.l2 = cont2.addChild(new PIXI.Sprite(PIXI.Texture.from("images/line.png")));
		this.r2 = cont2.addChild(new PIXI.Sprite(PIXI.Texture.from("images/rounds1.png")));
		this.line1Animation();
		this.round1Animation();
		this.line2Animation();
		this.round2Animation();

		const cont1mask = this.addChild(new PIXI.Graphics());
		cont1mask.beginFill(0xff00ff, 1).drawRect(0, 0, 1920, 116).endFill();
		const cont2mask = this.addChild(new PIXI.Graphics());
		cont2mask.beginFill(0xff00ff, 1).drawRect(0, 964, 1920, 116).endFill();

		cont1.mask = cont1mask;
		cont2.mask = cont2mask;
	}

	line2Animation() {
		this.l2.x = -67;
		gsap.to(this.l2, {
			duration: 0.5,
			x: -6,
			ease: "none",
			onComplete: this.line2Animation
		});
	}

	round1Animation() {
		this.r1.x = -39;
		this.r1.y = -12;
		gsap.to(this.r1, {
			duration: 1,
			x: -83,
			y: -135,
			ease: "none",
			onComplete: this.round1Animation
		});
	}

	round2Animation() {
		this.r2.x = -39;
		this.r2.y = -12;
		gsap.to(this.r2, {
			duration: 1,
			x: -83,
			y: -135,
			ease: "none",
			onComplete: this.round2Animation
		});
	}

	line1Animation() {
		this.l1.x = -6;
		gsap.to(this.l1, {
			duration: 0.5,
			x: -67,
			ease: "none",
			onComplete: this.line1Animation
		});
	}

}