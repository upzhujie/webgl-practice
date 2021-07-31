
const canvas = document.querySelector('#canvas')
const gl = canvas.getContext('webgl')

// gl.clearColor(1.0, 1.0, 0.0, 1.0)

// gl.clear(gl.COLOR_BUFFER_BIT)

const VertexSHADER_SOURCE = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`

const FragmentSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_fragcolor;
  void main() {
    gl_FragColor = u_fragcolor;
  }
`

utils.clear(gl)

utils.initShaders(gl, VertexSHADER_SOURCE, FragmentSHADER_SOURCE)

const u_fragcolor = gl.getUniformLocation(gl.program, 'u_fragcolor')

gl.uniform4f(u_fragcolor, ...utils.getRandomArray(4))

// drawPoint(gl)

drawLine(gl)

drawTriangle(gl)

drawRect(gl)

drawCircle(gl)



// const a_position = gl.getAttribLocation(gl.program, 'a_position')

// gl.vertexAttrib3f(a_position, 0.0, 0.5, 0.0)

// initShaders(gl, VertexSHADER_SOURCE, FragmentSHADER_SOURCE)


// gl.vertexAttrib3f(a_position, 0.0, 0.0, 0.0)
// gl.uniform4f(u_fragcolor, 0.0, 1.0, 0.0, 1.0)
// gl.drawArrays(gl.POINTS, 0, 1)


