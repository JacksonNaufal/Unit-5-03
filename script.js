document.getElementById('report').addEventListener('click', reportResults)
document.getElementById('button').addEventListener('click', button)
document.getElementById('para').addEventListener('click', para)

function reportResults () {
  alert(document.getElementById('input').value)
}
//Line 1s event listner, connects to lines 6s function, the event listener connects with the 'report' and 'click',report, and it then goes to the HTML finds the location, and the alert on line 7 is whats allowingt me to get the notification on the top of the screen.

function button () {
  document.getElementById('background').style.backgroundColor = 'red'
  document.getElementById('paragraph').innerHTML =
  'Click Mario!!'
  document.getElementById('paragraph').style.color = 'orange'
  document.getElementById('paragraph').style.fontSize = '250%'
}
// all these lines are using the same id except line 12, basically the event listner on line 3 knows that im using the code with the id of button, and its running the size, color, what it says, because of the get element by id, anf its also changing text because of the innerHTML (removed paragraph event listner on line 3 because it was not needed, now theres 3 listeners instead of four, because the paragraph was already defined by the button..

function para () {
  document.getElementById('picture').src =
  'mario.jpg'
}
// the event listner on line 3 connects with  the function on line 19 due to the para {

// } and its allowing it to find the id with picture, and to also use the img from the mario.jpg on the right side of my screen in files, the .src connects with it because its sourcing it out, and the picutre is the id of the image. 
