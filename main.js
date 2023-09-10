function changing() {
  const date = new Date()
  const time = document.getElementById('time')
  const UTCHours = date.getUTCHours() + 1
  const UTCMinutes = date.getUTCMinutes()
  const UTCSeconds = date.getUTCSeconds()
  const UTCmilliseconds = date.getUTCMilliseconds()
  time.innerText =
    UTCHours + ':' + UTCMinutes + ':' + UTCSeconds + ':' + UTCmilliseconds
}
changing()
setInterval(changing, 3000)
// ......... Show Day-------------------------
const day = document.getElementById('day')
const today = new Date().getDay()
const arr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

day.innerText = arr[today]
