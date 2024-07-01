const currentTimeUTC = document.getElementById('currentTimeUTC')
const currentDay = document.getElementById('currentDay')

function updateTime() {
  const now = new Date()
  const utcTime = now.toUTCString()
  const day = now.toLocaleString('en-US', { weekday: 'long' })
  currentTimeUTC.textContent = utcTime
  currentDay.textContent = day
}

setInterval(updateTime, 1000)
