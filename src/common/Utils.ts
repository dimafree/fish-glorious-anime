import * as PIXI from "pixi.js";
import { Games } from "./Config";

export let imagesLoader:PIXI.Loader;

export function getUniqId() {
	return `id${Date.now().toString().substr(7)}`;
}

export function typeText(textObject:PIXI.Text, text:string, _onUpdate?:any) {
	textObject.alpha = 1;
	textObject.text = "";
	let j=0;
	const type = setInterval(() => {
		textObject.text+=text.charAt(j);
		j++;
		if(_onUpdate !== undefined) _onUpdate();
		if(j===text.length) {
			clearInterval(type);
		}
	}, 50);
}
export async function loadJsonData(): Promise<[]> {
	return new Promise((resolve) => {
		let jsonPath = 'config.json';
		const jsonLoader = new PIXI.Loader();
		jsonLoader.add('items', jsonPath);
		jsonLoader.onError.add((err: any, _loader: PIXI.Loader, resource: any) => {
			resolve([]);
			console.error('Error loading config.json: ' + err.message + '\nURL : ' + resource.url);
		});
		jsonLoader.load(async (_loader, resources) => {
			imagesLoader = PIXI.Loader.shared;
			imagesLoader.add("images/buttons/b1.json");
			imagesLoader.add("images/buttons/b2.json");
			imagesLoader.add("images/buttons/b3.json");
			imagesLoader.add("images/anim/res1.json");
			imagesLoader.add("images/anim/res2.json");
			imagesLoader.add("images/anim/colorframe1/res2.json");
			imagesLoader.add("images/anim/colorframe2/res2.json");
			imagesLoader.add("images/anim/colorframe3/res2.json");
			imagesLoader.add("images/anim/colorframe4/res2.json");
			imagesLoader.add("images/anim/a1.json");
			imagesLoader.add("images/anim/a2.json");
			imagesLoader.add("images/anim/hot3.json");
			imagesLoader.add("images/anim/new.json");

			const data = (resources as any).items.data.games;
			if (data) {
				const part1 = data.part1;
				const part2 = data.part2;
				const part3 = data.part3;
				let i=0;
				for (const item of part1) {
					Games.push({ part: "1", img: 'game1'+i, id: item.id, size: item.size, tag: item.tag });
					imagesLoader.add('game1'+i, item.src);
					i++;
				}
				i=0;
				for (const item of part2) {
					Games.push({ part: "2", img: 'game2'+i, id: item.id, size: item.size, tag: item.tag });
					imagesLoader.add('game2'+i, item.src);
					i++;
				}
				i=0;
				for (const item of part3) {
					Games.push({ part: "3", img: 'game3'+i, id: item.id, size: item.size, tag: item.tag });
					imagesLoader.add('game3'+i, item.src);
					i++;
				}
			}
			imagesLoader.onComplete.add(() => {
				PIXI.utils.clearTextureCache();
				resolve([]);
			});
			imagesLoader.load();
		});
	});
}
