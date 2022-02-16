import * as PIXI from "pixi.js";
import {EE, SELECTED_PART, updateSelectButton, UPDATE_BIG_BUTTONS} from "../Game";

export class BigButton extends PIXI.Sprite{
	cont:PIXI.Sprite;
	pic:PIXI.Sprite;
	timeline:PIXI.AnimatedSprite;
	ID:number;

	constructor(idd:number) {
		super();
		//
		this.ID = idd;
		this.updateState = this.updateState.bind(this);
		this.tapDown = this.tapDown.bind(this);
		this.tapUp = this.tapUp.bind(this);
		this.clickThis = this.clickThis.bind(this);
		//
		this.cont = this.addChild(new PIXI.Sprite());
		this.pic = this.cont.addChild(new PIXI.Sprite());
		const json0 = PIXI.Loader.shared.resources[`images/buttons/b${this.ID}.json`].spritesheet;
		const array0:any = [];
		if(json0) {
			Object.keys(json0.textures).sort().forEach((key) => {
				array0.push(json0.textures[key]);
			});
		}

		this.timeline = new PIXI.AnimatedSprite(array0);
		this.timeline.animationSpeed = 0.5;
		this.timeline.loop = true;
		this.pic.addChild(this.timeline);

		this.on('pointerdown', this.tapDown);
		this.on('pointerup', this.tapUp);
		this.on('pointerupoutside', this.tapUp);
		this.on('pointercancel', this.tapUp);

		this.on('click', this.clickThis);
		this.on('tap', this.clickThis);
		//
		EE.addListener(UPDATE_BIG_BUTTONS, this.updateState);
		//
		this.interactive = true;
		this.buttonMode = true;

	}

	tapDown() {
		if(this.ID===SELECTED_PART) return;
		this.pic.y = (this.timeline.height - (this.timeline.height*0.9))/2;
		this.pic.scale.set(0.9);
	}

	tapUp() {
		if(this.ID===SELECTED_PART) return;
		this.pic.y = 0;
		this.pic.scale.set(1);
	}

	clickThis() {
		if(this.ID===SELECTED_PART) return;
		this.tapUp();
		updateSelectButton(this.ID);
		this.updateState();
	}

	updateState() {
		if(this.ID!==SELECTED_PART) {
			this.timeline.stop();
			this.timeline.gotoAndStop(1);
		} else {
			this.timeline.play();
		}
	}



}