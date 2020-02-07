import * as P5 from "p5";
import * as ML5 from "ml5";

import { renderCameraStream } from "./renderHelpers";
export let video: P5.Element;

const sketch = (s: P5) => {
	s.setup = () => {
		s.createCanvas(window.innerWidth, window.innerHeight);
		video = s.createCapture(s.VIDEO);
		video.hide();
	};

	s.windowResized = () => {
		s.resizeCanvas(window.innerWidth, window.innerHeight);
	};

	s.draw = () => {
		s.background(220);
		renderCameraStream();
	};
};

export let p5 = new P5(sketch);
