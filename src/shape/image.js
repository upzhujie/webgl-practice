
function drawImage(gl) {
  const texture = gl.createTexture()
  const u_sampler = gl.getUniformLocation(gl.program, 'u_sampler')
  console.log('u_sampler: ', u_sampler);

  const img = new Image()
  const points = [
    0.0, 0.0, 0.0, 0.0,
    1.0, 0.0, 1.0, 0.0,
    1.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 0.0, 1.0
  ]
  img.onload = () => {
    utils.initVertexBuffers(gl, points)
    initTex(gl, texture, u_sampler, img)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
  }
  img.src = '/src/images/1.jpg'
}

function initTex(gl, texture, sampler, image) {
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

  gl.uniform1i(sampler, 0)
}