$(document).ready(function() {

        $.ajax({
          'url': 'http://157.230.17.132:4027/sales',
          'method': 'GET',
          'success': function(data) {
              var sales = data;
                // oggetto senza contenuto {}
              for (var i = 0; i < sales.length; i++) {
                  var sale = sales[i];

                  var mese = moment(sale.date, "DD/MM/YYYY").format('MMMM');
                  // console.log(mese);
                  var vendite = (sale.amount);
                  // console.log(vendite);

                  var vendite_mese = [
                      {
                        "mese": mese,
                        "vendite": vendite
                  }
              ];
              console.log(vendite_mese);

              } // ciclo for
            },
            'error': function() {
                alert('si è verificato un errore');
          }
      });
})
