import * as PIXI from "pixi.js";
import {ButtonItem} from "./ButtonItem";
import {BigButton} from "./BigButton";

export class Buttons extends PIXI.Sprite{
	constructor() {
		super();
		//
		const b1 = this.addChild(new ButtonItem("images/burger.png"));
		b1.x = 23;
		b1.y = 988;
		const s1 = this.addChild(new ButtonItem("images/set.png"));
		s1.x = 213;
		s1.y = 10;
		const u1 = this.addChild(new ButtonItem("images/user.png"));
		u1.x = 32;
		u1.y = 10;

		const out1 = this.addChild(new ButtonItem("images/logout.png"));
		out1.x = 1500;
		out1.y = 975;


		const big1 = this.addChild(new BigButton(1));
		big1.x = 0;
		big1.y = 245;

		const big2 = this.addChild(new BigButton(2));
		big2.x = 0;
		big2.y = 445;

		const big3 = this.addChild(new BigButton(3));
		big3.x = 0;
		big3.y = 645;
	}


}