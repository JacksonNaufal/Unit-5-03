document.getElementById('report').addEventListener('click', reportResults)
document.getElementById('button').addEventListener('click', button)
document.getElementById('paragraph').addEventListener('click', paragraph)
document.getElementById('para').addEventListener('click', para)

function reportResults () {
  alert(document.getElementById('input').value)
}

function button () {
  document.getElementById('background').style.backgroundColor = 'red'
  document.getElementById('paragraph').innerHTML =
  'Click Mario!!'
  document.getElementById('paragraph').style.color = 'orange'
  document.getElementById('paragraph').style.fontSize = '250%'
}

function para () {
  document.getElementById('picture').src =
  'mario.jpg'
}
