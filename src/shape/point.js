function drawPoint(gl) {
  const a_position = gl.getAttribLocation(gl.program, 'a_position')
  const u_fragcolor = gl.getUniformLocation(gl.program, 'u_fragcolor')
  gl.vertexAttrib3f(a_position, getRandom(), getRandom(), getRandom())
  gl.uniform4f(u_fragcolor, getRandom(), getRandom(), getRandom(), getRandom())
  gl.drawArrays(gl.POINT, 0, 1)
}

window.utils = {
  ...window.utils, 
  drawPoint
}