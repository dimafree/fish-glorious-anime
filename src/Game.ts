import initRenderer from "./initRenderer";
import * as PIXI from "pixi.js";
//import StartAnimation from "./Animation";
import {loadJsonData} from "./common/Utils";
import {gsap} from "gsap";
import PixiPlugin from "gsap/src/PixiPlugin";
import responsiveModule from "./responsiveModule";
import EventEmitter from "eventemitter3";
import { Background } from "./assets/Background";
import {Resources} from "./assets/Resources";
import {Buttons} from "./assets/Buttons";
import {HubIcons} from "./assets/HubIcons";

export let stage:PIXI.Container;
export let RENDERER:PIXI.Renderer;
export let EE:EventEmitter;
export let SELECTED_PART:number=1;
export let UPDATE_BIG_BUTTONS:string="UPDATE_BIG_BUTTONS";

export function updateSelectButton(idd:number) {
	SELECTED_PART = idd;
	EE.emit(UPDATE_BIG_BUTTONS);
}
export async function setup() {
	await loadJsonData();
	RENDERER = initRenderer();
	stage = new PIXI.Container();
	EE = new EventEmitter();
	gsap.registerPlugin(PixiPlugin);
	PixiPlugin.registerPIXI(PIXI);
	//custom font load
	const WebFont = require('webfontloader');
	WebFont.load({
		google: {
			families: ['Patua One']
		}
	});
	stage.addChild(new Background());
	stage.addChild(new Resources());
	const hub = stage.addChild(new HubIcons());
	hub.y = 200;
	stage.addChild(new Buttons());
	//
	EE.emit(UPDATE_BIG_BUTTONS);
	//
	redraw(-1, RENDERER);
	//
	responsiveModule();
}

const redraw = (_time:number, renderer:PIXI.Renderer) => {
	requestAnimationFrame(t => redraw(t, renderer));
	renderer.render(stage);
};

