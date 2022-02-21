import * as PIXI from "pixi.js";
import {ButtonItem} from "./ButtonItem";
import {BigButton} from "./BigButton";
import {EE} from "../Game";

export class Buttons extends PIXI.Sprite{
	logout:ButtonItem;
	big1:BigButton;
	big2:BigButton;
	big3:BigButton;
	cont:PIXI.Sprite;
	constructor() {
		super();
		//
		this.onResize = this.onResize.bind(this);
		EE.addListener("RESIZE", this.onResize);
		//
		/*const b1 = this.addChild(new ButtonItem("images/burger.png"));
		b1.x = 23;
		b1.y = 988;*/
		const s1 = this.addChild(new ButtonItem("images/set.png"));
		s1.x = 213;
		s1.y = 10;
		/*const u1 = this.addChild(new ButtonItem("images/user.png"));
		u1.x = 32;
		u1.y = 10;*/

		this.logout = this.addChild(new ButtonItem("images/logout.png"));
		this.logout.x = 1500;
		this.logout.y = 975;

		this.cont = this.addChild(new PIXI.Sprite());

		this.big1 = this.cont.addChild(new BigButton(1));
		this.big1.x = 0;
		this.big1.y = 245;

		this.big2 = this.cont.addChild(new BigButton(2));
		this.big2.x = 0;
		this.big2.y = 445;

		this.big3 = this.cont.addChild(new BigButton(3));
		this.big3.x = 0;
		this.big3.y = 645;
	}

	onResize(data:any) {
		const stage_w = (data.w/data.scale);
		this.logout.x = stage_w - 320;
		let hght = (data.h/data.scale);
		//
		let yy_l = hght - 105;
		if(yy_l<975) yy_l = 975;
		this.logout.y = yy_l;
		//
		let yy_b = (hght - 1080)/2;
		if(yy_b<0) yy_b = 0;
		this.cont.y = yy_b;
	}


}