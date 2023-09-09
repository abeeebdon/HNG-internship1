function changing() {
  const day = Date.now()
  const time = document.getElementById('time')
  time.innerText = day
}
changing()
setInterval(changing, 1)
const date = new Date()
const today = date.getDay()
console.log(today)
const arr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const day = document.getElementById('day')
day.innerText = arr[today]
