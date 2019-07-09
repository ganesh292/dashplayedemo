/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

var FixedPathRule;

// Rule that selects the lowest possible bitrate
function FixedPathRuleClass(config) {
    let factory = dashjs.FactoryMaker;
    let SwitchRequest = factory.getClassFactoryByName('SwitchRequest');
    let ManifestModel = factory.getSingletonFactoryByName('ManifestModel')
    let DashMetrics = factory.getSingletonFactoryByName('DashMetrics')
    let context = this.context;
    let instance;

    let chunkCount = {
        video: 0,
        audio: 0
    };

    function setup() {
        // no state information to setup
    }

    // Always use lowest bitrate for now
    function getMaxIndex(rulesContext) {
        // here you can get some informations aboit metrics for example, to implement the rule
        const mediaType = rulesContext.getMediaInfo().type;
        const dashMetrics = DashMetrics(context).getInstance();
        const requests = dashMetrics.getHttpRequests(mediaType);
        const manifestModel = ManifestModel(context).getInstance();
        const adaptSet = manifestModel.getValue().Period.AdaptationSet;
        const numChunks = adaptSet.Representation[0].SegmentList.SegmentURL.length;
        const chunkIdx = rulesContext.getAbrController().getChunkCount(mediaType);

        if (requests.length != 0) {
            // There are a few cases that we want to return without making a new prediction
            // 1. previous request is an initialization segment
            // 2. streaming finished
            // 3. a switching occurs and initialization segment has been downloaded (chunkCount > chunkIdx)
            if (chunkCount[mediaType] >= numChunks || chunkCount[mediaType] > chunkIdx) {
                let switchRequest = SwitchRequest(context).create();
                switchRequest.quality = modelPrediction;
                switchRequest.reason = 'Fixed Path Rule';
                switchRequest.priority = SwitchRequest.PRIORITY.STRONG;
                return switchRequest;
            }
        }

        const abrController = rulesContext.getAbrController();
        let representations = abrController.getRepresentationLevels(mediaType);
        modelPrediction = representations[chunkCount[mediaType]];

        chunkCount[mediaType]++;
        // Ask to switch to the lowest bitrate
        let switchRequest = SwitchRequest(context).create();
        switchRequest.quality = modelPrediction;
        switchRequest.reason = 'Fixed Path Rule';
        switchRequest.priority = SwitchRequest.PRIORITY.STRONG;
        return switchRequest;
    }

    instance = {
        getMaxIndex: getMaxIndex
    };

    setup();

    return instance;
}

FixedPathRuleClass.__dashjs_factory_name = 'FixedPathRule';
FixedPathRule = dashjs.FactoryMaker.getClassFactory(FixedPathRuleClass);
