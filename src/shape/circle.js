function drawCircle(gl) {
  const points = []


  points.push(0.0, 0.0)
  const R = 0.3

  for(let i = 0; i < 361; i ++) {
    const angle = i / 180 * Math.PI
    const x = R * Math.cos(angle).toFixed(5)
    const y = R * Math.sin(angle).toFixed(5)
    points.push(x, y)
  }

  const n = utils.initVertexBuffers(gl, points)

  gl.drawArrays(gl.TRIANGLE_FAN, 0, n)

}