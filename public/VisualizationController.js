var vid1 = document.getElementById("ours");
var vid2 = document.getElementById("others");
var bitrateArray1 = [];
var bitrateArray2 = [];
var chunkDuration = 4.08;
var plotInterval = 500;
var durationLength = 500;
var translationLength = -1;
// var timestamp1 = Date.now();
// var timestamp_lastpoint1 = Date.now();
// var timestamp2 = Date.now();
// var timestamp_lastpoint2 = Date.now();

/**************************
******bitrate ours*********
**************************/

var n = 100,
    random = d3.random.normal(0, 0),
    data = d3.range(n).map(random);

var margin = {top: 20, right: 20, bottom: 30, left: 75},
    width = 712 - margin.left - margin.right,
    height = 225 - margin.top - margin.bottom;
var x = d3.scale.linear()
    .domain([0, n-1])
    .range([0, width]);
var y = d3.scale.linear()
    .domain([0, 3000])
    .range([height, 0]);

var line = d3.svg.line()
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });

//append the graph

var svg = d3.select(".bitrate #player1").append("svg")
    .attr("class","visual")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

//x-axis
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.svg.axis().scale(x).orient("bottom").ticks(0));

//y-axis
svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left").ticks(5).tickValues([350,600,1000,2000,3000]));

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + 22)
    .text("Time");

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("x", -20)
    .attr("y", 10)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Bitrate (kbps)");

var path = svg.append("g")
    .attr("clip-path", "url(#clip)")
    .append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

/**************************
******bitrate others*********
**************************/

var n2 = 100,
    random = d3.random.normal(0, 0),
    data2 = d3.range(n2).map(random);

var y = d3.scale.linear()
            .domain([0, 3000])
            .range([height, 0]);

var line2 = d3.svg.line()
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });

//append the graph
var svg = d3.select(".bitrate #player2").append("svg")
    .attr("class","visual")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

//x-axis
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.svg.axis().scale(x).orient("bottom").ticks(0));

//y-axis
svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left").ticks(5).tickValues([350,600,1000,2000,3000]));

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + 22)
    .text("Time");

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("x", -20)
    .attr("y", 10)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Bitrate (kbps)");

var path2 = svg.append("g")
    .attr("clip-path", "url(#clip)")
    .append("path")
    .datum(data2)
    .attr("class", "line")
    .attr("d", line2);


/**************************
******push bitrate*********
**************************/

var repeatBitrate1;
var repeatBitrate2;
var statsInterval = 1000;
var updateStats1;
var updateStats2;



function startBitrateVisual(playerid) {
    if (playerid == 1) {
	repeatBitrate1 = setInterval(function(){
	    bitrateVisual1();
	}, plotInterval);
	updateStats1 = setInterval(function(){
	    updatePlaybackStats1();
	}, statsInterval);
	
    } else {
	repeatBitrate2 = setInterval(function(){
	    bitrateVisual2();
	}, plotInterval);
	updateStats2 = setInterval(function(){
	    updatePlaybackStats2();
	}, statsInterval);
	
    }
}

// var repeatBitrate = setInterval(function(){
//     bitrateVisual();
//     },1000);

function pushBitrate(bitrate, id) {
    if(id == 1) {bitrateArray1.push(bitrate);}
    else {bitrateArray2.push(bitrate);}
}

function bitrateVisual1(){
    // var t = 0;
    var index1 = Math.floor(vid1.currentTime/chunkDuration);
    console.log("1: currentTime: "+ vid1.currentTime + ", index: " + index1 + ", bitrate: " + bitrateArray1[index1] + ", paused: "+ vid1.paused + ", playbackRate: "+ vid1.playbackRate);
    // var index2 = Math.floor(vid2.currentTime/4);

    if (vid1.paused == false && vid1.playbackRate != 0) {
	if (bitrateArray1[index1] === undefined) {
    	    data.push(bitrateArray1[index1-1]);
	} else {
	    data.push(bitrateArray1[index1]);
	}
    } else {
	data.push(0);
    }
    path
        .attr("d", line)
        .attr("transform", null)
        .transition()
        .duration(durationLength)
        .ease("linear")
        .attr("transform", "translate(" + x(translationLength) + ",0)")
    data.shift();  
}

function bitrateVisual2(){
    // var t = 0;
    // var index1 = Math.floor(vid1.currentTime/4);
    var index2 = Math.floor(vid2.currentTime/chunkDuration);
    console.log("2: currentTime: "+ vid2.currentTime + ", index: " + index2 + ", bitrate: " + bitrateArray2[index2]);
    // data.push(bitrateArray1[index1]);

    if (vid2.paused == false && vid2.playbackRate != 0) {
	if (bitrateArray2[index2] === undefined) {
    	    data2.push(bitrateArray2[index2-1]);
	} else {
    	    data2.push(bitrateArray2[index2]);
	}
    } else {
	data2.push(0);
    }
    path2
        .attr("d", line2)
        .attr("transform", null)
        .transition()
        .duration(durationLength)
        .ease("linear")
        .attr("transform", "translate(" + x(translationLength) + ",0)")
    data2.shift();
}

/**************************
****** stop pushing *******
**************************/

$("#ours").bind("ended", function() {
    clearInterval(repeatBitrate1);
    clearInterval(updateStats1);
    //clearInterval(repeatBitrate2);
});

$("#others").bind("ended", function() {
    //clearInterval(repeatBitrate1);
    clearInterval(repeatBitrate2);
    clearInterval(updateStats2);
});

// $("#ours #others").bind("ended", function() {
//     clearInterval(repeatBitrate1);
//     clearInterval(repeatBitrate2);
// });


function updatePlaybackStats1() {
    var index1 = Math.floor(vid1.currentTime/chunkDuration);
    var result, rebufTime;

    result = getStatsFromBitrateArray(bitrateArray1, index1);
    console.log("playerstats: index:"+ index1+ ", avgBitrate: "+result.avgBitrate+", rateChange:"+result.rateChange);
    // avg bitrate
    var v1 = document.getElementById("avgbitrate1"); 
    while( v1.firstChild ) {
	v1.removeChild( v1.firstChild );
    }
    v1.appendChild( document.createTextNode(Math.round(result.avgBitrate)) );
    // bitrate change
    var v2 = document.getElementById("ratechange1"); // 
    while( v2.firstChild ) {
	v2.removeChild( v2.firstChild );
    }
    v2.appendChild( document.createTextNode(Math.round(result.rateChange)) );

    rebufTime = getRebufferTimeOffline(rebufferStartArray1, rebufferEndArray1, (Date.now()-startTime1)/1000);
	//getRebufferTimeOffline(rs, re, currTime)
    // alert("rebuffer time");
    // rebuffer time
    var v3 = document.getElementById("rebuf1"); // 
    while( v3.firstChild ) {
	v3.removeChild( v3.firstChild );
    }
    v3.appendChild( document.createTextNode(rebufTime) );
}

function updatePlaybackStats2() {
    var index2 = Math.floor(vid2.currentTime/chunkDuration);
    var result, rebufTime;

    result = getStatsFromBitrateArray(bitrateArray2, index2);
    console.log("playerstats: index:"+ index2+ ", avgBitrate: "+result.avgBitrate+", rateChange:"+result.rateChange);
    // avg bitrate
    var v1 = document.getElementById("avgbitrate2"); 
    while( v1.firstChild ) {
	v1.removeChild( v1.firstChild );
    }
    v1.appendChild( document.createTextNode(Math.round(result.avgBitrate)) );
    // bitrate change
    var v2 = document.getElementById("ratechange2"); // 
    while( v2.firstChild ) {
	v2.removeChild( v2.firstChild );
    }
    v2.appendChild( document.createTextNode(Math.round(result.rateChange)) );

    rebufTime = getRebufferTimeOffline(rebufferStartArray2, rebufferEndArray2, (Date.now()-startTime2)/1000);
    // alert("rebuffer time");
    // rebuffer time
    var v3 = document.getElementById("rebuf2"); // 
    while( v3.firstChild ) {
	v3.removeChild( v3.firstChild );
    }
    v3.appendChild( document.createTextNode(rebufTime) );
}

function resetPlaybackStats() {
	// avg bitrate
    var v1 = document.getElementById("avgbitrate1"); 
    while( v1.firstChild ) {
	v1.removeChild( v1.firstChild );
    }
    v1.appendChild( document.createTextNode(0) );
    // bitrate change
    var v2 = document.getElementById("ratechange1"); // 
    while( v2.firstChild ) {
	v2.removeChild( v2.firstChild );
    }
    v2.appendChild( document.createTextNode(0) );

    rebufTime = 0;//getRebufferTimeOffline();
    // alert("rebuffer time");
    // rebuffer time
    var v3 = document.getElementById("rebuf1"); // 
    while( v3.firstChild ) {
	v3.removeChild( v3.firstChild );
    }
    v3.appendChild( document.createTextNode(0) );

	// avg bitrate
    v1 = document.getElementById("avgbitrate2"); 
    while( v1.firstChild ) {
	v1.removeChild( v1.firstChild );
    }
    v1.appendChild( document.createTextNode(0) );
    // bitrate change
    v2 = document.getElementById("ratechange2"); // 
    while( v2.firstChild ) {
	v2.removeChild( v2.firstChild );
    }
    v2.appendChild( document.createTextNode(0) );

    rebufTime = 0;//getRebufferTimeOffline();
    // alert("rebuffer time");
    // rebuffer time
    v3 = document.getElementById("rebuf2"); // 
    while( v3.firstChild ) {
	v3.removeChild( v3.firstChild );
    }
    v3.appendChild( document.createTextNode(0) );


    clearInterval(repeatBitrate1);
    clearInterval(updateStats1);

    clearInterval(repeatBitrate2);
    clearInterval(updateStats2);

    bitrateArray1 = [];
    bitrateArray2 = [];

}

function getStatsFromBitrateArray(bitArray, currentIndex) {
    var totalBitrate = 0;
    var totalInstability = 0;
    if (bitArray[currentIndex]=== undefined) {
	currentIndex = currentIndex - 1;
    }
    if (currentIndex < 0) {
	currentIndex = 0;
    }
    for (var i = 0; i <= currentIndex; i++) {
	totalBitrate = totalBitrate + bitArray[i];
	if (i > 0) {
	    totalInstability = totalInstability + Math.abs(bitArray[i] - bitArray[i-1]);
	}
    }
    return {
	avgBitrate: totalBitrate/(currentIndex+1),
	rateChange: currentIndex==0? 0 :totalInstability/(currentIndex)
    };
}


function getRebufferTimeOffline(rs, re, currTime) { 
    // offline version: compute from offline table
    // TBD
	//alert(currTime);
	rebufTime = 0;	
	for (var i=1; i<rs.length; i++) {
		if (currTime <= rs[i]) {
			break;
		} else if (currTime>=re[i]) {
			// this event has passed
			rebufTime = rebufTime + re[i]-rs[i];	
		} else {
			// during a event
			rebufTime = rebufTime + currTime - rs[i];
		}
	}

    return rebufTime.toFixed(2);
}

