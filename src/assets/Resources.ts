import * as PIXI from "pixi.js";
import {ResourceBack} from "./ResourceBack";
import {ResourceFrame} from "./ResourceFrame";
import {EE} from "../Game";

export class Resources extends PIXI.Sprite{
	cont:PIXI.Sprite;
	bal:PIXI.Sprite;
	txt5:PIXI.Sprite;
	constructor() {
		super();
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
		//
		this.onResize = this.onResize.bind(this);
		EE.addListener("RESIZE", this.onResize);
		this.cont = this.addChild(new PIXI.Sprite());
		const res = this.cont.addChild(new PIXI.Sprite(PIXI.Texture.from("images/res.png")));
		res.x = 404;

		const animrect1 = this.cont.addChild(new ResourceBack());
		animrect1.x = 434;
		animrect1.y = 68;
		setInterval(()=>{animrect1.play();}, 3500);
		const animframe1 = this.cont.addChild(new ResourceFrame(1));
		animframe1.x = 422;
		animframe1.y = 56;

		const animrect2 = this.cont.addChild(new ResourceBack());
		animrect2.x = 807;
		animrect2.y = 68;
		setTimeout(()=>{
			setInterval(()=>{animrect2.play();}, 3500);
		}, 1000);
		const animframe2 = this.cont.addChild(new ResourceFrame(2));
		animframe2.x = 795;
		animframe2.y = 56;

		const animrect3 = this.cont.addChild(new ResourceBack());
		animrect3.x = 1180;
		animrect3.y = 68;
		setTimeout(()=>{
			setInterval(()=>{animrect3.play();}, 3500);
		}, 2000);
		const animframe3 = this.cont.addChild(new ResourceFrame(3));
		animframe3.x = 1168;
		animframe3.y = 56;

		const animrect4 = this.cont.addChild(new ResourceBack());
		animrect4.x = 1553;
		animrect4.y = 68;
		setTimeout(()=>{
			setInterval(()=>{animrect4.play();}, 3500);
		}, 3000);
		const animframe4 = this.cont.addChild(new ResourceFrame(4));
		animframe4.x = 1541;
		animframe4.y = 56;

		this.bal = this.addChild(new PIXI.Sprite(PIXI.Texture.from("images/balance.png")));
		this.bal.x = 125;
		this.bal.y = 980;
		//

		const txt = this.cont.addChild(new PIXI.Text("123456789", styletext));
		txt.x = 450;
		txt.y = 75;

		const txt2 = this.cont.addChild(new PIXI.Text("123456789", styletext2));
		txt2.x = 850;
		txt2.y = 75;

		const txt3 = this.cont.addChild(new PIXI.Text("123456789", styletext));
		txt3.x = 1200;
		txt3.y = 75;

		const txt4 = this.cont.addChild(new PIXI.Text("123456789", styletext3));
		txt4.x = 1600;
		txt4.y = 75;

		this.txt5 = this.addChild(new PIXI.Text("999999.99", styletext4));
		this.txt5.x = 300;
		this.txt5.y = 985;
	}

	onResize(data:any) {
		this.cont.x = Math.max((data.w/data.scale) - 1920, 0);
		//
		const hght = (data.h/data.scale);
		//
		let yy_b = hght - 100;
		if(yy_b<980) yy_b = 980;
		this.bal.y = yy_b;
		this.txt5.y = this.bal.y + 5;
	}


}