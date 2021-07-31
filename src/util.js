(() => {
/**
 * 初始化着色器
 * @param {canvas.getContext('webgl')} gl webgl context
 * @param {*} vShader vertex shader source code
 * @param {*} fShader fragment shader source code
 */
const initShaders = function (gl, vShader, fShader) {
  const program = createProgram(gl, vShader, fShader)
  if(!program) throw 'Create program failed'
  gl.useProgram(program)
  gl.program = program
}

/**
 * 创建program
 * @param {*}} gl 
 * @param {*} vShader 
 * @param {*} fShader 
 */
const createProgram = function (gl, vShader, fShader) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vShader)
  const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fShader)
  
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragShader)

  gl.linkProgram(program)

  return program
}

/**
 * 创建shader实例
 * @param {*} gl 
 * @param {*} type 
 * @param {*} source 
 */
const createShader = function (gl, type, source) {
  var shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

const initVertexBuffers = function (gl, _array) {
  const vertices = new Float32Array(_array)

  // 创建缓冲区对象
  const vertexBuffer = gl.createBuffer()

  // 绑定缓冲区对象到目标中
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

  // 传入顶点数据至缓冲区
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

  // 获取顶点传入数据位置
  const a_position = gl.getAttribLocation(gl.program, 'a_position')

   // 将缓冲区对象分配给a_position变量
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0)

  // 链接a_position变量与分配给他的缓冲区对象
  gl.enableVertexAttribArray(a_position)

  return _array.length / 2
}

const clear = function (gl) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
}

const getRandom = function () {
  return Math.random().toFixed(1)
}

const getRandomArray = function (len) {
  if(!len > 0) throw 'error'
  const res = []
  for(let i = 0; i < len; i ++) {
    res.push(getRandom())
  }
  return res
}

const exportFN = { initShaders, clear, getRandom, initVertexBuffers, getRandomArray }
window.utils = window.utils ? {
  ...window.utils,
  ...exportFN
}: { ...exportFN }

})()