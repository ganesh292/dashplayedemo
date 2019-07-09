function getPlaybackResult(trace_id, algo_id) { 
    // given trace and algo, return the result (bitrate array and buffer events array)
    var result = [];
    for (var j = 0; j <= 11; j++) {
	    result[j] = [];
    }
    // trace 1
    // alg 1: yin2015qoe
    result[0][0] = {
    	bitrate: [3, 7, 7, 6, 6, 7, 7, 9, 8, 8, 9, 9, 8, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.580]
    };
    // alg 2: spiteri2016qoe
    result[0][1] = {
    	bitrate: [3, 7, 8, 3, 8, 4, 9, 7, 9, 7, 9, 7, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.580]
    };
    // alg 3: bentaleb2016qoe
    result[0][2] = {
    	bitrate: [3, 6, 6, 6, 8, 7, 7, 9, 8, 8, 9, 9, 8, 8, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.580]
    };
    // alg 4: ksqi
    result[0][3] = {
    	bitrate: [3, 6, 6, 6, 8, 7, 7, 9, 8, 8, 9, 8, 8, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.580]
    };
    // trace 2
    // alg 1: yin2015qoe
    result[1][0] = {
    	bitrate: [3, 5, 8, 7, 5, 6, 8, 8, 7, 6, 6, 9, 9, 8, 7],
    	rebufferStart: [0.000, 29.080],
    	rebufferEnd: [1.080, 29.360]
    };
    // alg 2: spiteri2016qoe
    result[1][1] = {
        bitrate: [3, 5, 8, 5, 7, 4, 9, 5, 8, 4, 8, 9, 9, 9, 5],
        rebufferStart: [0.000],
        rebufferEnd: [1.080]
    };
    // alg 3: bentaleb2016qoe
    result[1][2] = {
    	bitrate: [3, 5, 7, 6, 6, 7, 8, 7, 7, 6, 7, 9, 9, 7, 7],
    	rebufferStart: [0.000],
    	rebufferEnd: [1.080]
    };
    // alg 4: ksqi
    result[1][3] = {
    	bitrate: [3, 5, 7, 6, 6, 7, 7, 7, 7, 7, 6, 9, 9, 8, 7],
    	rebufferStart: [0.000],
    	rebufferEnd: [1.080]
    };
    // trace 3
    // alg 1: yin2015qoe
    result[2][0] = {
    	bitrate: [3, 1, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.280]
    };
    // alg 2: spiteri2016qoe
    result[2][1] = {
        bitrate: [3, 8, 4, 9, 4, 8, 9, 8, 9, 9, 8, 9, 9, 9, 9],
        rebufferStart: [0.000],
        rebufferEnd: [0.280]
    };
    // alg 3: bentaleb2016qoe
    result[2][2] = {
    	bitrate: [3, 8, 8, 6, 6, 8, 8, 8, 9, 9, 9, 9, 8, 9, 9],
    	rebufferStart: [0.000, 10.280],
    	rebufferEnd: [0.280, 10.460]
    };
    // alg 4: ksqi
    result[2][3] = {
    	bitrate: [3, 6, 7, 7, 8, 8, 8, 9, 9, 9, 8, 8, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.280]
    };
    // trace 4
    // alg 1: yin2015qoe
    result[3][0] = {
    	bitrate: [3, 8, 8, 7, 9, 9, 6, 6, 8, 9, 7, 8, 9, 9, 8],
    	rebufferStart: [0.000, 2.680, 4.760, 16.840],
    	rebufferEnd: [0.680, 2.760, 4.840, 16.920]
    };
    // alg 2: spiteri2016qoe
    result[3][1] = {
        bitrate: [3, 6, 9, 5, 9, 6, 8, 4, 9, 9, 9, 9, 7, 9, 8],
        rebufferStart: [0.000],
        rebufferEnd: [0.680]
    };
    // alg 3: bentaleb2016qoe
    result[3][2] = {
    	bitrate: [3, 6, 8, 7, 9, 8, 7, 7, 8, 9, 8, 9, 9, 9, 7],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.680]
    };
    // alg 4: ksqi
    result[3][3] = {
    	bitrate: [3, 6, 8, 7, 9, 8, 7, 7, 8, 9, 8, 9, 9, 9, 7],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.680]
    };
    // trace 5
    // alg 1: yin2015qoe
    result[4][0] = {
    	bitrate: [3, 3, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8],
    	rebufferStart: [0.000, 28.480],
    	rebufferEnd: [0.480, 28.560]
    };
    // alg 2: spiteri2016qoe
    result[4][1] = {
        bitrate: [3, 6, 5, 8, 4, 8, 3, 8, 4, 9, 4, 9, 5, 9, 8],
        rebufferStart: [0.000],
        rebufferEnd: [0.480]
    };
    // alg 3: bentaleb2016qoe
    result[4][2] = {
    	bitrate: [3, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 8, 8, 8, 8],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.480]
    };
    // alg 4: ksqi
    result[4][3] = {
    	bitrate: [3, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 8, 8, 8, 8],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.480]
    };
    // trace 6
    // alg 1: yin2015qoe
    result[5][0] = {
    	bitrate: [3, 7, 8, 6, 7, 8, 9, 9, 8, 8, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.180]
    };
    // alg 2: spiteri2016qoe
    result[5][1] = {
        bitrate: [3, 9, 6, 9, 5, 9, 6, 9, 5, 9, 9, 7, 9, 9, 9],
        rebufferStart: [0.000],
        rebufferEnd: [0.180]
    };
    // alg 3: bentaleb2016qoe
    result[5][2] = {
    	bitrate: [3, 8, 8, 6, 7, 7, 8, 9, 8, 9, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.180]
    };
    // alg 4: ksqi
    result[5][3] = {
    	bitrate: [3, 8, 6, 6, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.180]
    };
    // trace 7
    // alg 1: yin2015qoe
    result[6][0] = {
    	bitrate: [3, 9, 8, 9, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000, 2.280, 4.660, 7.040, 19.120],
    	rebufferEnd: [0.280, 2.660, 5.040, 7.120, 19.200]
    };
    // alg 2: spiteri2016qoe
    result[6][1] = {
        bitrate: [3, 6, 9, 7, 9, 9, 9, 9, 9, 8, 9, 9, 9, 9, 9],
        rebufferStart: [0.000],
        rebufferEnd: [0.280]
    };
    // alg 3: bentaleb2016qoe
    result[6][2] = {
    	bitrate: [3, 8, 8, 8, 8, 9, 8, 9, 9, 9, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000, 4.280],
    	rebufferEnd: [0.280, 4.460]
    };
    // alg 4: ksqi
    result[6][3] = {
    	bitrate: [3, 7, 8, 9, 8, 9, 8, 9, 9, 9, 9, 9, 9, 9, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.280]
    };
    // trace 8
    // alg 1: yin2015qoe
    result[7][0] = {
    	bitrate: [3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 8, 8, 9, 9, 9],
    	rebufferStart: [0.000, 28.380],
    	rebufferEnd: [0.380, 28.460]
    };
    // alg 2: spiteri2016qoe
    result[7][1] = {
        bitrate: [3, 8, 6, 9, 5, 9, 9, 9, 9, 7, 9, 5, 9, 7, 9],
        rebufferStart: [0.000, 2.380],
        rebufferEnd: [0.380, 2.460]
    };
    // alg 3: bentaleb2016qoe
    result[7][2] = {
    	bitrate: [3, 7, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.380]
    };
    // alg 4: ksqi
    result[7][3] = {
    	bitrate: [3, 7, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.380]
    };
    // trace 9
    // alg 1: yin2015qoe
    result[8][0] = {
    	bitrate: [3, 3, 4, 4, 4, 4, 3, 4, 5, 6, 6, 7, 8, 8, 8],
    	rebufferStart: [0.000, 28.680],
    	rebufferEnd: [0.680, 28.760]
    };
    // alg 2: spiteri2016qoe
    result[8][1] = {
        bitrate: [3, 3, 6, 2, 6, 2, 6, 3, 7, 4, 7, 3, 8, 5, 8],
        rebufferStart: [0.000],
        rebufferEnd: [0.680]
    };
    // alg 3: bentaleb2016qoe
    result[8][2] = {
    	bitrate: [3, 3, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 6, 6, 7],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.680]
    };
    // alg 4: ksqi
    result[8][3] = {
    	bitrate: [3, 3, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 6, 6, 7],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.680]
    };
    // trace 10
    // alg 1: yin2015qoe
    result[9][0] = {
    	bitrate: [3, 2, 2, 3, 3, 3, 2, 5, 6, 6, 6, 6, 6, 6, 6],
    	rebufferStart: [0.000, 28.780],
    	rebufferEnd: [0.780, 28.860]
    };
    // alg 2: spiteri2016qoe
    result[9][1] = {
        bitrate: [3, 5, 2, 6, 3, 5, 2, 6, 2, 6, 3, 7, 3, 7, 5],
        rebufferStart: [0.000],
        rebufferEnd: [0.780]
    };
    // alg 3: bentaleb2016qoe
    result[9][2] = {
    	bitrate: [3, 4, 5, 5, 4, 4, 4, 5, 5, 5, 5, 6, 5, 5, 5],
    	rebufferStart: [0.000, 18.780, 24.860, 26.940],
    	rebufferEnd: [0.780, 18.860, 24.940, 27.120]
    };
    // alg 4: ksqi
    result[9][3] = {
    	bitrate: [3, 4, 5, 5, 5, 4, 4, 4, 4, 5, 6, 6, 5, 5, 5],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.780]
    };
    // trace 11
    // alg 1: yin2015qoe
    result[10][0] = {
    	bitrate: [3, 1, 3, 3, 5, 6, 7, 4, 7, 7, 6, 7, 6, 6, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [1.180]
    };
    // alg 2: spiteri2016qoe
    result[10][1] = {
        bitrate: [3, 3, 4, 5, 4, 8, 5, 4, 5, 9, 4, 8, 3, 7, 8],
        rebufferStart: [0.000],
        rebufferEnd: [1.180]
    };
    // alg 3: bentaleb2016qoe
    result[10][2] = {
    	bitrate: [3, 2, 6, 4, 6, 6, 6, 4, 6, 6, 6, 8, 5, 5, 8],
    	rebufferStart: [0.000],
    	rebufferEnd: [1.180]
    };
    // alg 4: ksqi
    result[10][3] = {
    	bitrate: [3, 2, 6, 4, 6, 6, 6, 4, 6, 6, 6, 8, 5, 5, 9],
    	rebufferStart: [0.000],
    	rebufferEnd: [1.180]
    };
    // trace 12
    // alg 1: yin2015qoe
    result[11][0] = {
    	bitrate: [3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.980]
    };
    // alg 2: spiteri2016qoe
    result[11][1] = {
        bitrate: [3, 4, 4, 1, 5, 2, 5, 2, 5, 2, 6, 2, 6, 4, 6],
        rebufferStart: [0.000, 28.980],
        rebufferEnd: [0.980, 29.060]
    };
    // alg 3: bentaleb2016qoe
    result[11][2] = {
    	bitrate: [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5],
    	rebufferStart: [0.000, 26.980],
    	rebufferEnd: [0.980, 27.260]
    };
    // alg 4: ksqi
    result[11][3] = {
    	bitrate: [3, 4, 4, 4, 2, 4, 4, 3, 5, 4, 5, 5, 5, 5, 5],
    	rebufferStart: [0.000],
    	rebufferEnd: [0.980]
    };

    return result[trace_id][algo_id];
}
