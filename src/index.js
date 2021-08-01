
const canvas = document.querySelector('#canvas')
const gl = canvas.getContext('webgl')

// gl.clearColor(1.0, 1.0, 0.0, 1.0)

// gl.clear(gl.COLOR_BUFFER_BIT)

// const VertexSHADER_SOURCE = `
//   attribute vec4 a_position;
//   uniform mat4 u_xformMatrix;
//   attribute vec4 a_color;
//   varying vec4 v_color;
//   void main() {
//     gl_Position = u_xformMatrix * a_position;
//     v_color = a_color;
//   }
// `

// const FragmentSHADER_SOURCE = `
//   precision mediump float;
//   uniform vec4 u_fragcolor;
//   varying vec4 v_color;
//   void main() {
//     gl_FragColor = v_color;
//   }
// `
const VertexSHADER_SOURCE = `
  attribute vec4 a_position;
  uniform mat4 u_xformMatrix;
  attribute vec2 a_texcoord;
  varying vec2 v_texcoord;
  void main() {
    gl_Position = u_xformMatrix * a_position;
    v_texcoord = a_texcoord;
  }
`

const FragmentSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_fragcolor;
  varying vec2 v_texcoord;
  uniform sampler2D u_sampler;
  void main() {
    gl_FragColor = texture2D(u_sampler, v_texcoord);
  }
`

utils.initShaders(gl, VertexSHADER_SOURCE, FragmentSHADER_SOURCE)

const matrix = [
  1.0, 0.0, 0.0, 0.0,
  0.0, 1.0, 0.0, 0.0,
  0.0, 0.0, 1.0, 0.0,
  0.0, 0.0, 0.0, 1.0,
]

let n = 0
// setInterval(() => {
  utils.clear(gl)
  
  
  // const u_fragcolor = gl.getUniformLocation(gl.program, 'u_fragcolor')
  
  // gl.uniform4f(u_fragcolor, ...[1.0, 1.0, 0.0, 1.0]) //...utils.getRandomArray(4))
  
  // drawPoint(gl)
  
  // drawLine(gl)
  
  // drawTriangle(gl)
  
  const translate = (1.0 / 120 * n).toFixed(3)

  matrix[12] = translate
  matrix[13] = translate
  matrix[14] = translate
  // console.log('matrix: ', matrix);
  // drawRect(gl)
  drawImage(gl)
  n++
  if(n > 120) {
    n = 0
  }
  // drawCircle(gl)
  
  // translate

// }, 17)






// const a_position = gl.getAttribLocation(gl.program, 'a_position')

// gl.vertexAttrib3f(a_position, 0.0, 0.5, 0.0)

// initShaders(gl, VertexSHADER_SOURCE, FragmentSHADER_SOURCE)


// gl.vertexAttrib3f(a_position, 0.0, 0.0, 0.0)
// gl.uniform4f(u_fragcolor, 0.0, 1.0, 0.0, 1.0)
// gl.drawArrays(gl.POINTS, 0, 1)


