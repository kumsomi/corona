// alert("hi")
const messageForm = document.getElementById('input-form')
const messageInput = document.getElementById('input-country')
const cont=document.getElementById('overall-stats-country')


messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value;
    // console.log(message);
    var c=message.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '); 
    // console.log("c"+c);

    c=c.charAt(0).toUpperCase() + c.slice(1); 
    mainCountry=c;
    cont.innerHTML=c;
    getInfoUpdate();
    setTimeout(function(){ 
        chart.data.datasets[0].data=[];
        chart.data.datasets[0].data=confirmed;
        chart.data.datasets[1].data=[];
        chart.data.datasets[1].data=recovered;
        chart.data.datasets[2].data=[];
        chart.data.datasets[2].data=deceased;
        
        
        
        
        chart.update();
        // console.log("chart initialized");
        a=parseInt(dailconf);
        // a=100;
        dataArray=[parseInt(dailconf),parseInt(dailrec),parseInt(daildec)];
        myChart.data.datasets[0].data=[];
        myChart.data.datasets[0].data=dataArray;
        
        myChart.update();
        // console.log(a) 
        },
        300
        );
    
    messageInput.value = ''
  })



//   const url = 'https://pomber.github.io/covid19/timeseries.json';
     function getInfoUpdate(){
        // var response = await fetch(url);
        // var data = await response.json();
        // console.log(data);
        confirmed=[];
        recovered=[];
        deceased=[];

        var series_data = data[mainCountry];
        var len_data = series_data.length
        for(var i=len_data-31;i<len_data;i++){
            var date = series_data[i].date;
            var confirm = series_data[i].confirmed;
            var recover = series_data[i].recovered;
            var death = series_data[i].deaths;
            // dates.push(date);
            confirmed.push(parseInt(confirm));
            recovered.push(parseInt(recover));
            deceased.push(parseInt(death));
        }
      var l=len_data-1;

    rec.innerHTML=series_data[l].recovered;
    rec_plus.innerHTML=parseInt(series_data[l].recovered)-parseInt(series_data[l-1].recovered);
    rec_plus.innerHTML="+"+rec_plus.innerHTML;
    // console.log("rec "+parseInt(series_data[l].recovered));
    // console.log("rec-1 "+parseInt(series_data[l-5].recovered));
    
    conf.innerHTML=series_data[l].confirmed;
    conf_plus.innerHTML=parseInt(series_data[l].confirmed)-parseInt(series_data[l-1].confirmed);
    conf_plus.innerHTML="+"+conf_plus.innerHTML;
    
    dec.innerHTML=series_data[l].deaths;
    dec_plus.innerHTML=parseInt(series_data[l].deaths)-parseInt(series_data[l-1].deaths);
    dec_plus.innerHTML="+"+dec_plus.innerHTML;

    //  conf.innerHTML=series_data[l].totalconfirmed;
    //  conf_plus.innerHTML="+"+series_data[l].dailyconfirmed;
    
    //  dec.innerHTML=series_data[l].totaldeceased;
    //  dec_plus.innerHTML="+"+series_data[l].dailydeceased;
    
     act.innerHTML=parseInt(series_data[l].confirmed)-parseInt(series_data[l].recovered);
     act_plus.innerHTML="+"+parseInt(series_data[l].confirmed)-parseInt(series_data[l-1].confirmed)-parseInt(series_data[l].recovered)+parseInt(series_data[l-1].recovered);
     act_plus.innerHTML="+"+act_plus.innerHTML;

     dailrec=series_data[l].recovered-series_data[l-1].recovered;
      dailconf=series_data[l].confirmed-series_data[l-1].confirmed;
     daildec=series_data[l].deaths-series_data[l-1].deaths;
     

    }
    