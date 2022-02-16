import {RENDERER, stage} from "./Game";

const responsiveModule = () => {
	const isResp:boolean=true;
	const respDim:string='height';
	const isScale:boolean=true;
	const scaleType:number=1;
	const mainDiv = document.getElementById("AppGame");
	const resizeCanvas = () => {
		const w = 1920;
		const h = 1080;
		const iw = window.innerWidth;
		//const iw = Math.min(window.innerWidth, 1920);
		const ih = window.innerHeight;
		//const ih = Math.min(window.innerHeight, 1080);
		const pRatio:number = 1;
		const xRatio=iw/w;
		const yRatio=ih/h;
		let sRatio:number=1;

		if(isResp) {
			if((respDim==='width' && lastW===iw) || (respDim==='height'&&lastH===ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType===1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType===2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}
		//
		if(mainDiv) {
			//RENDERER.resize(w * sRatio, ih);
			RENDERER.resize(window.innerWidth, ih);
			stage.scale.set(pRatio * sRatio);
			mainDiv.style.left = ((iw - (w * sRatio)) / 2) + "px";
		}
		lastW = iw;
		lastH = ih;
		lastS = sRatio;
	}
	let lastW:number;
	let lastH:number;
	let lastS:number=1;
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
};

export default responsiveModule;