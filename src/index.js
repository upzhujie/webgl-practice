const canvas = document.querySelector('#canvas')
const gl = canvas.getContext('webgl')

gl.clearColor(0.0, 0.0, 0.0, 1.0)

gl.clear(gl.COLOR_BUFFER_BIT)


// // 顶点着色器源
// const vertexSource = `
//   vec2 position = vec2(0.0)

//   void main() {
//     gl_Position = vec4(position, 0.0, 1.0)
//   }
// `

// // 片元着色器
// const fragmentSource = `
//   void main() {
//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0)
//   }
// `

//