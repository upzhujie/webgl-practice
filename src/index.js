const canvas = document.querySelector('#canvas')
const gl = canvas.getContext('webgl')

// gl.clearColor(1.0, 1.0, 0.0, 1.0)

// gl.clear(gl.COLOR_BUFFER_BIT)

const VertexSHADER_SOURCE = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
    gl_PointSize = 5.0;
  }
`

const FragmentSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_fragcolor;
  void main() {
    gl_FragColor = u_fragcolor;
  }
`
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT);

const Vshader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource( Vshader, VertexSHADER_SOURCE )
gl.compileShader(Vshader)

const Fshader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource( Fshader, FragmentSHADER_SOURCE )
gl.compileShader( Fshader )

const program = gl.createProgram()
gl.attachShader(program, Vshader)
gl.attachShader(program, Fshader)

gl.linkProgram(program)

gl.useProgram(program)
gl.program = program

const a_position = gl.getAttribLocation(gl.program, 'a_position')
const u_fragcolor = gl.getUniformLocation(gl.program, 'u_fragcolor')
console.log('u_fragcolor: ', u_fragcolor);
console.log('a_position: ', a_position);

gl.vertexAttrib3f(a_position, 0.0, 0.5, 0.0)
gl.uniform4f(u_fragcolor, 1.0, 1.0, 0.0, 1.0)

// initShaders(gl, VertexSHADER_SOURCE, FragmentSHADER_SOURCE)


console.log('gl.POINTS: ', gl.POINTS);
gl.drawArrays(gl.POINTS, 0, 1)

gl.vertexAttrib3f(a_position, 0.0, 0.0, 0.0)
gl.uniform4f(u_fragcolor, 0.0, 1.0, 0.0, 1.0)
gl.drawArrays(gl.POINTS, 0, 1)


/** * Create a program object and make current * @param gl GL context * @param vshader a vertex shader program (string) * @param fshader a fragment shader program (string) * @return true, if the program object was created and successfully made current */ 
function initShaders(gl, vshader, fshader) { 
  var program = createProgram(gl, vshader, fshader); 
  if (!program) { 
    console.log('无法创建程序对象'); 
    return false; 
  } 
  gl.useProgram(program); 
  gl.program = program; 
  return true; 
}
 /** * Create the linked program object * @param gl GL context * @param vshader a vertex shader program (string) * @param fshader a fragment shader program (string) * @return created program object, or null if the creation has failed */ 
 function createProgram(gl, vshader, fshader) { 
   // 创建着色器对象 
   var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader); 
   var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader); 
   if (!vertexShader || !fragmentShader) { return null; } 
   // 创建程序对象 
   var program = gl.createProgram(); 
   if (!program) { return null; } 
   // 为程序对象分配顶点着色器和片元着色器 
   gl.attachShader(program, vertexShader); 
   gl.attachShader(program, fragmentShader); 
   // 连接着色器 
   gl.linkProgram(program); 
   // 检查连接 
   var linked = gl.getProgramParameter(program, gl.LINK_STATUS); 
   if (!linked) { 
     var error = gl.getProgramInfoLog(program); 
    console.log('无法连接程序对象: ' + error); 
    gl.deleteProgram(program); 
    gl.deleteShader(fragmentShader); 
    gl.deleteShader(vertexShader); 
    return null; 
  } 
  return program; 
} 
/** * 创建着色器对象 * @param gl GL context * @param type the type of the shader object to be created * @param source shader program (string) * @return created shader object, or null if the creation has failed. */ 
function loadShader(gl, type, source) { 
  // 创建着色器对象 
  var shader = gl.createShader(type); 
  if (shader == null) { 
    console.log('无法创建着色器');
    return null; 
  } 
  // 设置着色器源代码 
  gl.shaderSource(shader, source); 
  // 编译着色器 
  gl.compileShader(shader); 
  // 检查着色器的编译状态 
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS); 
  if (!compiled) { 
    var error = gl.getShaderInfoLog(shader); 
    console.log('Failed to compile shader: ' + error); 
    gl.deleteShader(shader); 
    return null; 
  } 
  return shader; 

}


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