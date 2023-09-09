const nowDate2 = Date.now()
const time = document.getElementById('time')
time.innerText = nowDate2

const date = new Date('September 10, 2023 01:15:00')
const today = date.getDay() + 1
const arr = [
  {
    id: 1,
    day: 'Sunday',
  },
  {
    id: 2,
    day: 'Monday',
  },
  {
    id: 3,
    day: 'Tuesday',
  },
  {
    id: 4,
    day: 'Wednesday',
  },
  {
    id: 5,
    day: 'Thursday',
  },
  {
    id: 6,
    day: 'Friday',
  },
  {
    id: 7,
    day: 'Saturday',
  },
]

const nn = arr.filter(({ id, day }) => {
  return id == today
})

const nnn = nn[0]

const day = document.getElementById('day')
day.innerText = nnn.day
