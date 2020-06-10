$(document).ready(function() {
  $.ajax({
      'url': '157.230.17.132:4027/sales',
      'method': 'GET',
      'success': function(data) {
          console.log(data);
        },
        'error': function() {
          console.log('errore');
      }
  })
})
// "sales": [
//     {
//     "id": 1,
//     "salesman": "Marco",
//     "amount": 9000,
//     "date": "12/02/2017"
//     },
//     {
//     "id": 2,
//     "salesman" : "Giuseppe",
//     "amount": 1000,
//     "date": "12/04/2017"
//      }
//   ]
