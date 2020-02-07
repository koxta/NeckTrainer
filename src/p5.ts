import * as P5 from 'p5';
import * as ML5 from 'ml5';

const sketch = ( s: P5 ) => {  
  s.setup = () => {
    s.createCanvas(window.innerWidth, window.innerHeight);
  };

  s.windowResized = () => {
    s.resizeCanvas(window.innerWidth,window.innerHeight);
  }

  s.draw = () => {
    s.background(0);
    s.fill(255);
  };
};

export let p5 = new P5(sketch);
export function start(){
  p5 = new P5(sketch);
}
