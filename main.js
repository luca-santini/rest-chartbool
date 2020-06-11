$(document).ready(function() {

        // qui ce prima il giorno e poi il mese quindi devo inserigli i caratteri che gli permettono di transiletterla nel formato europeo delle date
        moment.locale('it');
        // var data = moment('11/06/2020, DD/MM/YY');
        // console.log(data.format('MMM'));

        var url_api = 'http://157.230.17.132:4027/sales';
        $.ajax({
          'url': url_api,
          'method': 'GET',
          'success': function(vendite) {
              var vendite_mensili = {
                  'gennaio': 0,
                  'febbraio': 0,
                  'marzo': 0,
                  'aprile': 0,
                  'maggio': 0,
                  'giugno': 0,
                  'agosto': 0,
                  'settembre': 0,
                  'ottobre': 0,
                  'novembre': 0,
                  'dicembre': 0
                }
              for (var i = 0; i < vendite.length; i++) {
                 // recupero la vendita corrente
                 var vendita_corrente = vendite[i];
                 // recupero l'importo della vendita corrente
                 var importo_corrente = vendita_corrente.amount;
                 // recupero la data della vendita corrente
                 var data_corrente = vendita_corrente.date;
                 //
                 var data_corrente_moment = moment(data_corrente, 'DD/MM/YYYY');
                 //
                 var mese_corrente = data_corrente_moment.format('MMMM');
                 //
                 vendite_mensili[mese_corrente] += importo_corrente;
              }
              console.log(vendite_mensili);
              var mesi = Object.keys(vendite_mensili);
              var dati_mesi = Object.values(vendite_mensili);

              var myChart = new Chart($('#grafico-vendite-mensili')[0].getContext('2d'), {
                type: 'line',
                data: {
                labels: mesi,
                datasets: [{
                    label: 'importi vendite 2017',
                    data: dati_mesi,
                    backgroundColor: [
                        'rgb(255, 99, 132)'
                    ],
                    borderColor: [
                        'rgb(75, 192, 192)'
                    ],
                    borderWidth: 1
                }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });

            },
            'error': function() {
                console.log('si è verificato un errore');
          }
      });
});
