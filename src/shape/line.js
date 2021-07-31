

function drawLine(gl) {
  const points = utils.getRandomArray(4)
  const n = utils.initVertexBuffers(gl, points)
  gl.drawArrays(gl.LINES, 0, n)
}

