import * as PIXI from "pixi.js";
import {EE, SELECTED_PART, UPDATE_BIG_BUTTONS} from "../Game";
import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import {Games} from "../common/Config";
import {gsap} from "gsap";

//let gameswidth;
//let gameseventdata:any;
let gamesoffset:{x:number, y:number};
let gamesdragging:boolean = false;
let max_left:number = 0;

export class HubIcons extends PIXI.Sprite{
	cont:PIXI.Sprite;
	headcont:PIXI.Sprite;

	constructor() {
		super();
		//
		this.updateHub = this.updateHub.bind(this);
		//
		this.headcont = this.addChild(new PIXI.Sprite());
		this.headcont.x = 400;
		this.cont = this.headcont.addChild(new PIXI.Sprite());
		this.cont.interactive = true;
		this.cont
			.on('mousedown', this.onDragStart)
			.on('touchstart', this.onDragStart)
			// events for drag end
			.on('mouseup', this.onDragEnd)
			.on('mouseupoutside', this.onDragEnd)
			.on('touchend', this.onDragEnd)
			.on('touchendoutside', this.onDragEnd)
			// events for drag move
			.on('mousemove', this.onDragMove)
			.on('touchmove', this.onDragMove);

		this.cont.mask = this.headcont.addChild(new PIXI.Graphics()).beginFill(0x0000ff, 1).drawRect(0,-10,1520,720).endFill();

		EE.addListener(UPDATE_BIG_BUTTONS, this.updateHub);
	}

	onDragStart(e:any)
	{
		gsap.killTweensOf(this);
		gamesoffset = { x: this.x - e.data.originalEvent.pageX, y: 0 };
		gamesdragging = true;
	}

	onDragEnd()
	{
		gamesdragging = false;
		const curx = this.x;
		let endx = curx - curx%390;
		if(curx>0) endx = 0;
		if(endx<max_left) endx = max_left - max_left%390;
		gsap.to(this, {
			duration: 0.5,
			x: endx
		});
	}

	onDragMove(e:any)
	{
		if (gamesdragging) {
			this.y = 0;
			this.x = e.data.originalEvent.pageX + gamesoffset.x;
		}
	}

	async updateHub() {
		gsap.killTweensOf(this.cont);
		await new Promise((resolve) => {
			gsap.to(this.cont, {
				duration: 0.5,
				alpha: 0,
				onComplete: ()=>{
					resolve(null);
				}
			});
		});
		this.cont.removeChildren();
		this.cont.x = 0;
		//
		gsap.to(this.cont, {
			duration: 0.3,
			alpha: 1
		});
		//
		const xx_plus = 390;
		let xx = 0;
		let yy = 0;
		let countsmall = 0;
		for (const game of Games) {
			if(Number(game.part)===SELECTED_PART) {
				let item;
				yy = 0;
				if(game.size==="big") {
					item = new Icon1(game);
				} else {
					item = new Icon2(game);
					countsmall++;
					if(countsmall===2) {
						xx-=xx_plus;
						yy=356;
						countsmall = 0;
					}
				}
				item.x = xx;
				item.y = yy;
				xx+=xx_plus;
				this.cont.addChild(item);
			}
		}
		if(xx > 1520) {
			max_left = (xx - 1520)*-1;
		}
	}


}