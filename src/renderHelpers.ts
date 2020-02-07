import { p5, video } from "./p5";
function flipCamera() {
	p5.translate(p5.width, 0); // move to far corner
	p5.scale(-1.0, 1.0); // flip x-axis backwards
}

export function renderCameraStream() {
	flipCamera();
	p5.image(video, 0, 0, 0, 0);
}
