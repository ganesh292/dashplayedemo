var player;
var player2;
var isStarted = false;
var graphoptions = [];
var linedata = [];
var rebufferStartvid1;
var rebufferEndvid1;
var rebufferStartvid2;
var rebufferEndvid2;


var Bitrate = [];
var SSIM = [];
var RebufferingRate =   [];

var Bitrate2 = [];
var SSIM2 = [];
var RebufferingRate2 =   [];

var iter1 = 0;
var iter2= 0;

var selected = new Array();



// Initialize Chart1 and Chart2
var ctx = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0','1','2','3', '4','5','6','7','8','9', '10','11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            label: 'Bitrate',
            data:[],
            fontSize: 20,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(275,12,12,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(213,13,194,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            xAxis:'D',
            yAxisID: 'A',
            steppedLine:'after'

        },{
            label: 'VMAF',
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(15,120,12,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(213,13,194,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            yAxisID: 'B',
            pointHitRadius: 10,
            data: [],
            steppedLine:'after'
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                id: 'D',
                type: 'linear',
                // position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'Time',
                    fontSize: 24
                },
                ticks: {
                    max: 30,
                    min: 0,
                    fontSize: 15,
                    stepSize: 2
                }
            }],


          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
            scaleLabel: {
                display: true,
                labelString: 'Bitrate',
                fontSize: 24
              },
            ticks: {
                max: 10000,
                min: 0,
                fontSize: 20
              }
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            scaleLabel: {
                display: true,
                labelString: 'VMAF',
                fontSize: 24
              },
            ticks: {
              max: 100,
              min: 0,
              fontSize: 20
            }
          }]
        },
    legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            fontSize: 24
        }
    }
      }
});


var ctx = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0','1','2','3', '4','5', '6','7','8','9', '10','11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            label: 'Bitrate',
            data:[],
            fontSize: 20,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(275,12,12,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(213,13,194,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            xAxisID: 'C',
            yAxisID: 'A',
            steppedLine: 'after'

        },{
            label: 'VMAF',
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(15,120,12,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(213,13,194,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            yAxisID: 'B',
            pointHitRadius: 10,
            data: [],
            steppedLine:'after'
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes:[{
                id: 'C',
                type: 'linear',
                // position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'Time',
                    fontSize: 24
                },
                ticks: {
                    max: 30,
                    min: 0,
                    fontSize: 15,
                    stepSize:2
                }
            }],
          yAxes: [{
            id: 'A',
            // type: 'linear',
            position: 'left',
            scaleLabel: {
                display: true,
                labelString: 'Bitrate',
                fontSize: 24
              },
            ticks: {
                max: 6000,
                min: 0,
                fontSize: 20
              }
          }, {
            id: 'B',
            // type: 'linear',
            position: 'right',
            scaleLabel: {
                display: true,
                labelString: 'VMAF',
                fontSize: 24
              },
            ticks: {
              max: 100,
              min: 0,
              fontSize: 20
            }
          }]
        },
    legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            fontSize: 24
        }
    }
      }
});


// First Function call Time to play the video if not reset everything
function onStartResetButtonClicked() {
    if (!isStarted) {// not started yet
	document.getElementById("start_demo").innerText = "Reset";
    isStarted = true;
    $("input:checkbox[name=text]:checked").each(function() {
        selected.push($(this).val());
   });
	playVideo(selected);
    } else { // started
	document.getElementById("start_demo").innerText = "Start";
	isStarted = false;
	resetAll();
    }
}

function stopvideos(){
    document.getElementById("start_demo").innerText = "Start";
    isStarted = false;
	resetAll();
}


function resetAll() {
    
    player.reset();
    player2.reset();
	
    var vid1 = document.getElementById("ours");
    var vid2 = document.getElementById("others");
    vid1.load();
    vid2.load();
    vid1.currentTime = 0;
    vid2.currentTime = 0;
    
        // enable the menu
    document.getElementById("select_algo1").disabled = false;
    document.getElementById("select_algo2").disabled = false;
    // document.getElementById("select_trace").disabled = false;
    document.getElementById("start_demo").disabled = false;
    // document.getElementById("select_demotype").disabled = false;
    document.getElementById("select_video").disabled = false;
    // resetPlaybackStats();
    // clearAllTimeouts();
}
var pending = {};
function mySetTimeout(callback, delay) {
    var t;
    t = setTimeout(function () { delete pending[t]; callback() }, delay)
    pending[t] = 1;
}
function playVideo(selected) {

    var s1 = document.getElementById("select_algo1");
    var s2 = document.getElementById("select_algo2");
    var algo1 = s1.value;
    var algo2 = s2.value;

    // disable the menu
    document.getElementById("select_algo1").disabled = true;
    document.getElementById("select_algo2").disabled = true;
    document.getElementById("select_video").disabled = true;
    
    // Get Videoids to play
    var videoid = parseInt(document.getElementById("select_video").value);
    var url;

    if (videoid == 1) {
	url = "http://vision-pc18.uwaterloo.ca/DASH/01/manifest.mpd";
	// chunkDuration = 4.08;
    } else if (videoid == 2) {
	url = "http://vision-pc18.uwaterloo.ca/DASH/02/manifest.mpd";
	// chunkDuration = 4.003;
    } else if (videoid == 3) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/03/manifest.mpd";
        // chunkDuration = 4.003;
        }
    else if (videoid == 4) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/04/manifest.mpd";
        // chunkDuration = 4.003;
        }
        else if (videoid == 5) {
            url = "http://vision-pc18.uwaterloo.ca/DASH/05/manifest.mpd";
            // chunkDuration = 4.003;
            }
            else if (videoid == 6) {
                url = "http://vision-pc18.uwaterloo.ca/DASH/06/manifest.mpd";
                // chunkDuration = 4.003;
                }
    else if (videoid == 7) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/07/manifest.mpd";
        // chunkDuration = 4.003;
    }
    else if (videoid == 8) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/08/manifest.mpd";
        // chunkDuration = 4.003;
    }
    else if (videoid == 9) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/09/manifest.mpd";
        // chunkDuration = 4.003;
    }
    else if (videoid == 10) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/10/manifest.mpd";
        // chunkDuration = 4.003;
    }
    else if (videoid == 11) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/11/manifest.mpd";
        // chunkDuration = 4.003;
    }
    else if (videoid == 12) {
        url = "http://vision-pc18.uwaterloo.ca/DASH/12/manifest.mpd";
        // chunkDuration = 4.003;
    }
    // url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
    // start player
    player = dashjs.MediaPlayer().create();
    var trace1;
    
    trace1 = getPlaybackResult(videoid-1,algo1);
    rebufferStartvid1=trace1.rebufferStart;
    rebufferEndvid1 = trace1.rebufferEnd;
    
    // settings
    player.updateSettings({
        'streaming': {
            'abr': {
                'useDefaultABRRules': false,
                'device': 'hdtv',
                'representationLevels': {
                    'video': trace1.bitrate
                }
            }
        }
    })
    player.addABRCustomRule('qualitySwitchRules', 'FixedPathRule', FixedPathRule);

    player.initialize(document.querySelector("#ours"), url, true);

    player2 = dashjs.MediaPlayer().create();
    var trace2;
    trace2 = getPlaybackResult(videoid-1,algo2);
    rebufferStartvid2 = trace2.rebufferStart;
    rebufferEndvid2 = trace2.rebufferEnd;
    console.log(rebufferStartvid2);
    
    // settings
    player2.updateSettings({
        'streaming': {
            'abr': {
                'useDefaultABRRules': false,
                'device': 'hdtv',
                'representationLevels': {
                    'video': trace2.bitrate
                }
            }
        }
    })
    player2.addABRCustomRule('qualitySwitchRules', 'FixedPathRule', FixedPathRule);
    player2.initialize(document.querySelector("#others"), url, true);
    
    // debugger;
    var vid1 = document.getElementById("ours");
    var vid2 = document.getElementById("others");

    // vid2.play();
    // vid1.play();
    var iRebuffer;
    for (iRebuffer = 1; iRebuffer < rebufferStartvid1.length; iRebuffer++) { 
        console.log("In loop");
        
        mySetTimeout(function () { vid1.pause(); /*document.getElementById("isRebuf1").innerHTML = "Rebuffering"; */}, 1000 * rebufferStartvid1[iRebuffer]);
        mySetTimeout(function () { vid1.play(); /*document.getElementById("isRebuf1").innerHTML = ""; */}, 1000 * rebufferEndvid1[iRebuffer]);
    }

    for (iRebuffer = 1; iRebuffer < rebufferStartvid2.length; iRebuffer++) { // ignoring startup time
        mySetTimeout(function () { vid2.pause(); /*document.getElementById("isRebuf2").innerHTML = "Rebuffering"; */}, 1000 * rebufferStartvid2[iRebuffer]);
        mySetTimeout(function () { vid2.play(); /*document.getElementById("isRebuf2").innerHTML = ""; */}, 1000 * rebufferEndvid2[iRebuffer]);
    }


    displaychart1(videoid,algo1,selected)
    displaychart2(videoid,algo2,selected);
}


function displaychart1(videoid,algo,selected){

    $.ajax ({ 
        type: "GET",
        url: "data.json",
        success: function (response) {
            var i;
            
            for (i = 0; i < response.length; i++) { 
                if (( response[i].VideoId == videoid) && (response[i].Algorithm == algo))
                {
                    if (selected.indexOf("1") > -1)
                    {
                        Bitrate = eval(response[i].Bitrate)
                    }
                    if (selected.indexOf("2") > -1)
                    {
                        SSIM = eval(response[i].VMAF)
                    }
                    
                    break;     
                }
            }
                
           

        }
    
    });

    
}


function displaychart2(videoid,algo,selected){

    $.ajax ({ 
        type: "GET",
        url: "data.json",
        success: function (response) {
            var i;
            for (i = 0; i < response.length; i++) { 
                if (( response[i].VideoId == videoid) && (response[i].Algorithm == algo))
                {
                    if (selected.indexOf("1") > -1)
                    {
                        Bitrate2 = eval(response[i].Bitrate)
                    }
                    if (selected.indexOf("2") > -1)
                    {
                        SSIM2 = eval(response[i].VMAF)
                    }

                    
                    break;     
                }
            }
                


        }
    
    });

    
}

function addData(chart, data, labels) {
    
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label == labels)
        {            
            var temp_data={x:data.time,y:data.y};
            dataset.data.push(temp_data);
        }
    });
    chart.update();
}


$(others).on('playing', function(event){
    timeoutID1 = window.setInterval(function() {


if (selected.indexOf("1") > -1)
{
    addData(chart2, Bitrate2[iter2],'Bitrate')
}
if (selected.indexOf("2") > -1)
{
    addData(chart2, SSIM2[iter2],'VMAF')
}

// if (selected.indexOf("3") > -1)
// {
//     addData(chart2, Rebufferingrate2[iter1])
// }

iter2 = iter2 + 1
if (iter2 > 15)
{
    window.clearInterval(timeoutID1);
} 

}, 2000);
}).on('ended', function(event){
    console.log("video ended");
    window.clearInterval(timeoutID1);
});

$(ours).on('playing', function(event){
    timeoutID2 = window.setInterval(function() {

                
if (selected.indexOf("1") > -1)
{
    addData(chart1, Bitrate[iter1],'Bitrate')
}
if (selected.indexOf("2") > -1)
{
    addData(chart1, SSIM[iter1],'VMAF')
}

// if (selected.indexOf("3") > -1)
// {
//     addData(chart1, Rebufferingrate1[iter1])
// }

iter1 = iter1 + 1
if (iter1 > 15)
{
    window.clearInterval(timeoutID2);
}      
    }, 2000);
}).on('ended', function(event){
    console.log("video ended");
    window.clearInterval(timeoutID2);
});




