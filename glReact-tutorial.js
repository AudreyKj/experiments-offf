/*

gl-react 
https://gl-react-cookbook.surge.sh/hellogl
- gl-react is a React library to write and compose WebGL shaders.

- in gl-react you need to statically define "shaders":
- fragment shader in GLSL language (OpenGL Shading Language)
(GLSL code gets compiled and run on the GPU)

*/

const shaders = Shaders.create({
    helloGL: {
      frag: GLSL`
  precision highp float;
  varying vec2 uv;
  void main() {
    gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
  }
  `
  // the main() function is called FOR EACH PIXELS
  // the varying uv is a vec2 where x and y respectively varying from 0.0 to 1.0.
  // we set in output the pixel color using the vec4(r,g,b,a) format.
  // see GLSL_ES_Specification_1.0.17
    }
  });

  