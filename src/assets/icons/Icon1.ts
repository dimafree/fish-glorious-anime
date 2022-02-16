import * as PIXI from "pixi.js";
import { GameItemType } from "../../common/types";
import {imagesLoader} from "../../common/Utils";

export class Icon1 extends PIXI.Sprite{
	cont:PIXI.Sprite;
	piccont:PIXI.Sprite;

	constructor(data:GameItemType) {
		super();
		//
		this.cont = this.addChild(new PIXI.Sprite());
		const fon = this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/icon1.png")));
		fon.x = -6;
		fon.y = -6;
		//
		this.piccont = this.cont.addChild(new PIXI.Sprite());
		this.piccont.mask = this.cont.addChild(new PIXI.Graphics()).beginFill(0x0000ff, 1).moveTo(4,35)
			.lineTo(9,21).lineTo(21,13).lineTo(163,0).lineTo(327,13).lineTo(339,23).lineTo(342,38)
			.lineTo(342,663).lineTo(337,676).lineTo(323,687).lineTo(174,699).lineTo(19,687).lineTo(10,676).lineTo(2.8,665).lineTo(4,35)
			.endFill();
		this.piccont.addChild(new PIXI.Sprite(imagesLoader.resources[String(data.img)].texture));
		//
		const json0 = PIXI.Loader.shared.resources["images/anim/a1.json"].spritesheet;
		const array0:any = [];
		if(json0) {
			Object.keys(json0.textures).sort().forEach((key) => {
				array0.push(json0.textures[key]);
			});
		}

		const animate0 = new PIXI.AnimatedSprite(array0);
		animate0.animationSpeed = 0.5;
		animate0.loop = true;
		animate0.y = -3;
		this.cont.addChild(animate0);
		animate0.play();
		//
		const hot = this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/hot.png")));
		hot.x = -5;
		hot.y = -5;
		//
		const star = this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/star.png")));
		star.x = 310;
		star.y = -10;
		//
		function clickThis() {
			console.log(data.id);
		}
		this.on('click', clickThis);
		this.on('tap', clickThis);
		//
		this.interactive = true;
		this.buttonMode = true;

	}

}