import * as PIXI from "pixi.js";
import {EE, SELECTED_PART, UPDATE_BIG_BUTTONS} from "../Game";
import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import {Games} from "../common/Config";
import {gsap} from "gsap";

let max_left:number = 0;
let width_mask:number = 1520;

export class HubIcons extends PIXI.Sprite{
	cont:PIXI.Sprite;
	total_width_cont:number = 0;
	headcont:PIXI.Sprite;
	msk:PIXI.Graphics;

	constructor() {
		super();
		//
		this.updateHub = this.updateHub.bind(this);
		this.onResize = this.onResize.bind(this);
		EE.addListener("RESIZE", this.onResize);
		//
		this.headcont = this.addChild(new PIXI.Sprite());
		this.headcont.x = 400;
		this.cont = this.headcont.addChild(new PIXI.Sprite());
		this.cont.interactive = true;
		(this.cont as any).dragging = false;
		this.cont
			.on('mousedown', this.onDragStart)
			.on('touchstart', this.onTouchStart)
			// events for drag end
			.on('mouseup', this.onDragEnd)
			.on('mouseupoutside', this.onDragEnd)
			.on('touchend', this.onDragEnd)
			.on('touchendoutside', this.onDragEnd)
			// events for drag move
			.on('mousemove', this.onDragMove)
			.on('touchmove', this.onTouchMove);

		//this.cont.mask = this.headcont.addChild(new PIXI.Graphics()).beginFill(0x0000ff, 1).drawRect(0,-10,1520,720).endFill();
		this.msk = this.headcont.addChild(new PIXI.Graphics()).beginFill(0x0000ff, 1).drawRect(0,-10,1520,720).endFill();
		this.cont.mask = this.msk;
		EE.addListener(UPDATE_BIG_BUTTONS, this.updateHub);
	}

	onResize(data:any) {
		this.cont.x = 0;
		//width_mask = (data.w/data.scale) - 400;
		this.msk.width = (data.w/data.scale) - 400;
		//max_left = (this.cont.getBounds().width)*-1;
	}

	onDragStart(e:any)
	{
		(this as any).data = e.data;
		(this as any).dragging = true;
		(this as any).offset = { x: this.position.x - e.data.originalEvent.pageX, y: this.y - e.data.originalEvent.pageY };
	}

	onTouchStart(e:any)
	{
		(this as any).data = e.data;
		(this as any).dragging = true;
		const startcoord = (this as any).data.getLocalPosition(this.parent);
		(this as any).offset = { x: this.position.x - startcoord.x, y: 0 };
	}

	onDragEnd()
	{
		(this as any).dragging = false;
		(this as any).data = null;
		//
		const curx = this.position.x;
		let endx = curx - curx%390;
		if(curx>0) endx = 0;
		if(endx<max_left) endx = max_left - max_left%390;
		gsap.to(this.position, {
			duration: 0.5,
			x: endx
		});
	}

	onDragMove(e:any)
	{
		if ((this as any).dragging)
		{
			this.position.x = e.data.originalEvent.pageX + (this as any).offset.x;
			this.position.y = 0;
		}
	}

	onTouchMove()
	{
		if ((this as any).dragging)
		{
			const newPosition = (this as any).data.getLocalPosition(this.parent);
			this.position.x = newPosition.x + (this as any).offset.x;
			this.position.y = 0;
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
		this.total_width_cont = xx;
		if(xx > width_mask) {
			max_left = (xx - width_mask)*-1;
		}
	}


}