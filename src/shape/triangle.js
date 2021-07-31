
function drawTriangle(gl) {
  const points = utils.getRandomArray(6)

  const n = utils.initVertexBuffers(gl, points)

  gl.drawArrays(gl.TRIANGLES, 0, n)
}