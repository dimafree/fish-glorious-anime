import {EE, stage} from "./Game";

const responsiveModule = () => {
	/*const isResp:boolean=true;
	const respDim:string='height';
	const isScale:boolean=true;
	const scaleType:number=1;
	const mainDiv = document.getElementById("AppGame");*/
	const anim_container = document.getElementById("AppGame");
	//const canvasdom = document.getElementsByClassName('renderArea');
	const dom_overlay_container = document.getElementById("dom_overlay_container");

	//(true,'both',true,1,[canvas,anim_container,dom_overlay_container]);
	const makeResponsive = () => {
		const domContainers = [anim_container,dom_overlay_container];
		//
		window.addEventListener('resize', resizeCanvas, false);
		window.addEventListener("orientationchange", resizeCanvas, false);
		resizeCanvas();
		function resizeCanvas() {
			const w = 1920;
			const h = 1080;
			const iw = document.documentElement.clientWidth;
			const ih = document.documentElement.clientHeight;
			//const iw = window.innerWidth;
			//const ih = window.innerHeight;
			const pRatio = 1;//window.devicePixelRatio || 1;
			const xRatio = iw/w;
			const yRatio = ih/h;
			let sRatio = Math.min(xRatio, yRatio);

			/*if(canvasdom) {
				canvasdom.width = w * pRatio * sRatio;
				canvasdom.height = h * pRatio * sRatio;
			}*/
			domContainers.forEach((container) => {
				const item:any = container;
				if(item) {
					item.style.width = w * sRatio + 'px';
					item.style.height = h * sRatio + 'px';
				}
			});
			stage.scale.set(pRatio * sRatio);
			//
			EE.emit("RESIZE", {w:iw, h:ih, scale: sRatio });
		}
	}
	makeResponsive();

/*
	const resizeCanvas = () => {
		const w = 1920;
		const h = 1080;
		const iw = document.documentElement.clientWidth;
		//const iw = window.innerWidth;
		//const iw = Math.min(window.innerWidth, 1920);
		const ih = document.documentElement.clientHeight;
		//const ih = window.innerHeight;
		console.log(document.documentElement.clientWidth, window.innerWidth);
		//const ih = Math.min(window.innerHeight, 1080);
		const tx = document.getElementById("test");
		if(tx) {
			tx.innerText = document.documentElement.clientWidth+"_"+window.innerWidth;
		}
		const pRatio:number = window.devicePixelRatio || 1;
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
			//RENDERER.resize(window.innerWidth, ih);
			RENDERER.resize(iw, ih);
			stage.scale.set(pRatio * sRatio);
			mainDiv.style.left = ((iw - (w * sRatio)) / 2) + "px";
		}
		lastW = iw;
		lastH = ih;
		lastS = sRatio;
	}
	console.log(resizeCanvas);



	let lastW:number;
	let lastH:number;
	let lastS:number=1;*/
	//window.addEventListener('resize', resizeCanvas);
	//resizeCanvas();
};

export default responsiveModule;