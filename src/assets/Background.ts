import * as PIXI from "pixi.js";
//import { Bubble } from "./Bubble";
//import {Light1} from "./Light1";
//import {Light2} from "./Light2";
import { Panels } from "./Panels";

export class Background extends PIXI.Sprite{
	//fon2mask:PIXI.Graphics;
	cont:PIXI.Sprite;
	constructor() {
		super();
		//

		this.cont = this.addChild(new PIXI.Sprite());
		this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/back.jpg")));
		//this.cont.addChild(new Light1());
		//this.cont.addChild(new Light2());
		/*for(let i=0;i<20;i++) {
			this.cont.addChild(new Bubble());
		}*/
		this.cont.addChild(new Panels());
	}


}