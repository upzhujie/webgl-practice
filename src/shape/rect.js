function drawRect(gl, matrix) {
  const points = [
    0.0, 0.0, 1.0, 1.0, 0.0,
    1.0, 0.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 0.0, 1.0, 1.0,
    0.0, 1.0, 1.0, 1.0, 1.0
  ]

  const n = utils.initVertexBuffers(gl, points, matrix)

  gl.drawArrays(gl.TRIANGLE_FAN, 0, n)
}