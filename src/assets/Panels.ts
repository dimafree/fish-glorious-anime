import * as PIXI from "pixi.js";
import {gsap} from "gsap";
import {EE} from "../Game";

export class Panels extends PIXI.Sprite{
	l1:PIXI.Sprite;
	r1:PIXI.Sprite;
	l2:PIXI.Sprite;
	r2:PIXI.Sprite;
	back:PIXI.Sprite;
	back1:PIXI.Sprite;
	back2:PIXI.Sprite;
	cont1:PIXI.Sprite;
	cont2:PIXI.Sprite;
	cont1mask:PIXI.Graphics;
	cont2mask:PIXI.Graphics;
	defaultY:number = 964;

	constructor() {
		super();
		//
		this.line1Animation = this.line1Animation.bind(this);
		this.round1Animation = this.round1Animation.bind(this);
		this.line2Animation = this.line2Animation.bind(this);
		this.round2Animation = this.round2Animation.bind(this);
		this.onResize = this.onResize.bind(this);
		EE.addListener("RESIZE", this.onResize);
		this.back = this.addChild(new PIXI.Sprite());
		this.back1 = this.back.addChild(new PIXI.Sprite(PIXI.Texture.from("images/panel1.png")));
		this.back2 = this.back.addChild(new PIXI.Sprite(PIXI.Texture.from("images/panel2.png")));
		this.cont1 = this.addChild(new PIXI.Sprite());
		this.cont2 = this.addChild(new PIXI.Sprite());

		this.r1 = this.cont1.addChild(new PIXI.Sprite(PIXI.Texture.from("images/rounds1.png")));
		this.l1 = this.cont1.addChild(new PIXI.Sprite(PIXI.Texture.from("images/line.png")));
		this.l1.y = 111;
		this.l2 = this.cont2.addChild(new PIXI.Sprite(PIXI.Texture.from("images/line.png")));
		this.r2 = this.cont2.addChild(new PIXI.Sprite(PIXI.Texture.from("images/rounds1.png")));
		this.line1Animation();
		this.round1Animation();
		this.line2Animation();
		this.round2Animation();

		this.cont1mask = this.addChild(new PIXI.Graphics());
		this.cont1mask.beginFill(0xff00ff, 1).drawRect(0, 0, 1920, 116).endFill();
		this.cont2mask = this.addChild(new PIXI.Graphics());
		this.cont2mask.beginFill(0xff00ff, 1).drawRect(0, 0, 1920, 116).endFill();

		this.cont2.y = this.cont2mask.y = this.back2.y = this.defaultY;

		this.cont1.mask = this.cont1mask;
		this.cont2.mask = this.cont2mask;
	}

	onResize(data:any) {
		this.back.width = this.cont1mask.width = this.cont2mask.width = (data.w/data.scale);
		this.cont1.x = this.cont2.x = (this.back.width - 1920)/2;
		//
		let yy = (data.h/data.scale) - 116;
		if(yy<this.defaultY) yy = this.defaultY;
		this.cont2.y = this.cont2mask.y = this.back2.y = yy;
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
			duration: 5,
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
			duration: 5,
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