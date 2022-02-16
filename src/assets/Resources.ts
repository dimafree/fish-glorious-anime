import * as PIXI from "pixi.js";
import {ResourceBack} from "./ResourceBack";
import {ResourceFrame} from "./ResourceFrame";

export class Resources extends PIXI.Sprite{
	constructor() {
		super();
		//
		const res = this.addChild(new PIXI.Sprite(PIXI.Texture.from("images/res.png")));
		res.x = 404;

		const animrect1 = this.addChild(new ResourceBack());
		animrect1.x = 434;
		animrect1.y = 68;
		setInterval(()=>{animrect1.play();}, 3500);
		const animframe1 = this.addChild(new ResourceFrame(1));
		animframe1.x = 422;
		animframe1.y = 56;

		const animrect2 = this.addChild(new ResourceBack());
		animrect2.x = 807;
		animrect2.y = 68;
		setTimeout(()=>{
			setInterval(()=>{animrect2.play();}, 3500);
		}, 1000);
		const animframe2 = this.addChild(new ResourceFrame(2));
		animframe2.x = 795;
		animframe2.y = 56;

		const animrect3 = this.addChild(new ResourceBack());
		animrect3.x = 1180;
		animrect3.y = 68;
		setTimeout(()=>{
			setInterval(()=>{animrect3.play();}, 3500);
		}, 2000);
		const animframe3 = this.addChild(new ResourceFrame(3));
		animframe3.x = 1168;
		animframe3.y = 56;

		const animrect4 = this.addChild(new ResourceBack());
		animrect4.x = 1553;
		animrect4.y = 68;
		setTimeout(()=>{
			setInterval(()=>{animrect4.play();}, 3500);
		}, 3000);
		const animframe4 = this.addChild(new ResourceFrame(4));
		animframe4.x = 1541;
		animframe4.y = 56;

		const bal = this.addChild(new PIXI.Sprite(PIXI.Texture.from("images/balance.png")));
		bal.x = 125;
		bal.y = 980;
		//
		const styletext = new PIXI.TextStyle({
			fontFamily: "Patua One",
			fontSize: "52px",
			fill: "0xffffff",
			"lineJoin": "round",
			"stroke": "#405563",
			"strokeThickness": 5,
		});

		const styletext2 = new PIXI.TextStyle({
			fontFamily: "Patua One",
			fontSize: "52px",
			fill: "0xF8EAC4",
			"lineJoin": "round",
			"stroke": "#405563",
			"strokeThickness": 5,
		});

		const styletext3 = new PIXI.TextStyle({
			fontFamily: "Patua One",
			fontSize: "52px",
			fill: "0xFEF3F0",
			"lineJoin": "round",
			"stroke": "#405563",
			"strokeThickness": 5,
		});

		const styletext4 = new PIXI.TextStyle({
			fontFamily: "Patua One",
			fontSize: "52px",
			fill: "0xffffff",
			"lineJoin": "round",
			"stroke": "#405563",
			"strokeThickness": 5,
		});


		const txt = this.addChild(new PIXI.Text("123456789", styletext));
		txt.x = 450;
		txt.y = 75;

		const txt2 = this.addChild(new PIXI.Text("123456789", styletext2));
		txt2.x = 850;
		txt2.y = 75;

		const txt3 = this.addChild(new PIXI.Text("123456789", styletext));
		txt3.x = 1200;
		txt3.y = 75;

		const txt4 = this.addChild(new PIXI.Text("123456789", styletext3));
		txt4.x = 1600;
		txt4.y = 75;

		const txt5 = this.addChild(new PIXI.Text("999999.99", styletext4));
		txt5.x = 300;
		txt5.y = 985;
	}


}