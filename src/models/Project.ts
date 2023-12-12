export interface singleImgAndInfo {
	img: string;
	title: string;
}

export interface Project {
	id: number;
	title: string;
	imgAndInfo: singleImgAndInfo[];
	bodyText: string[];
}