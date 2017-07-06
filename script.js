/**
 * Created by yogyatamehtani on 06-07-2017.
 */
$(document).ready(function () {
    //your code here
    var xxv = document.getElementById('LiveCurrency').value;
    var xxt = document.getElementById('xxto').value;

        $.ajax({
            url: 'https://api.fixer.io/latest',
            dataType: 'json',
            data: {
                base: 'EUR',

            },

            rates: {
                "GBP": 0.87735,
                "USD": 1.1329,


            },
            success: function(data){

                $("#LiveCurrency").val(data.rates.IDR);
                var xxv = document.getElementById('LiveCurrency').value;




                    if (xxt == 'EUR') {

                        var amountInUSD = xxv * data.rates.USD;
                        $("#xratediv1").append(amountInUSD);
                        console.log(amountInUSD);
                        var amountInGBD= xxv* data.rates.GBP;$("#xratediv2").append(amountInGBD);
                        var amountInAUD =xxv* data.rates.AUD; $("#xratediv3").append(amountInAUD);
                        var amountInNZD =xxv* data.rates.NZD;$("#xratediv4").append(amountInNZD);
                    }


            }, fail: function (e) {
                console.log(e);
            }, error: function (err) {
                console.log(err)
            },



        })




});

