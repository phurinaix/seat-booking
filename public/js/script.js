var seats = document.querySelectorAll('.seat');
var seatNumber = document.querySelector('#seat_number');
var arr = [];

for (const seat of seats) {
  seat.addEventListener('click', selectSeat);
}

function selectSeat () {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  seatNumber.value = this.firstChild.innerHTML;
}

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    var n_array = JSON.parse(http.response);
    for (const n of n_array) {
      document.getElementsByClassName('seat')[n.n_seat - 1].style.backgroundColor = 'red';
      arr.push(n.n_seat);
    }
  }
}
http.open('GET', 'http://localhost:8080/api/book', true);
http.send();

function validate () {
  if (seatNumber.value.length == 0) {
    alert('Please choose seat');
    return false;
  }
  if (arr.indexOf(parseInt(seatNumber.value)) != -1) {
    alert('The given seat is alreayd taken');
    return false;
  }
  return true;
}