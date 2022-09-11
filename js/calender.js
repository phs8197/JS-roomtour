const popupCalendar = document.querySelector("#calendar-popup");
const calendarBtn = document.querySelector(".calendar-btn");
const closedCalendar = document.querySelector("#calendar-closed");
const yearAndMonth = document.getElementById('calendar-year-month');
const goPrev = document.getElementById('go-prev');
const goNext = document.getElementById('go-next');

const MONTH = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let year;
let month;

function setDate(year, month){
  const TodayYear = new Date().getFullYear();
  const TodayMonth = new Date().getMonth();
  const TodayDate = new Date().getDate();
  yearAndMonth.innerText = `${MONTH[month]}, ${year}`

  days = document.getElementsByClassName('calendar-day');
  firstDayOfWeek = new Date(year, month, 1).getDay();
  numberOfDays = getNumberOfDays(year, month);

  Array.from(days).forEach(day=>{
    day.innerText=''
    day.id = ''
    // day.id.remove('calendar-today')
  })
  for(let i =  0; i < numberOfDays; i++){
    days[i + firstDayOfWeek].innerText = i + 1;
    if(TodayYear == year && TodayMonth == month && TodayDate == i + 1){
      days[i + firstDayOfWeek].id = 'calendar-today'
    }
    if((i+firstDayOfWeek) % 7 == 0){
      days[i + firstDayOfWeek].classList.add('calendar-sunday')
    }else if((i+firstDayOfWeek) % 7 == 6){
      days[i + firstDayOfWeek].classList.add('calendar-saturday')
    }
  }
}

function goPrevMonth(){
  if(month == 0){
    month = 11
    year = year - 1
  } else{
    month = month - 1
  }
  setDate(year, month);
}

function goNextMonth(){
  if(month == 11){
    month = 0
    year = year + 1
  } else{
    month = month + 1
  }
  setDate(year, month);
}

function getNumberOfDays(year, month){
  const date1 = new Date(year, month, 1);
  const date2 = new Date(year, month+1, 1);
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}


function handlePopup() {
  year = new Date().getFullYear();
  month = new Date().getMonth();
  setDate(year, month)
  popupCalendar.classList.remove("hidden");
}

function handleClosed() {
  popupCalendar.classList.add("hidden");
}

calendarBtn.addEventListener("click", handlePopup);
closedCalendar.addEventListener("click", handleClosed);
goPrev.addEventListener("click", goPrevMonth);
goNext.addEventListener("click", goNextMonth);