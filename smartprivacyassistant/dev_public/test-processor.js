class RecorderWorkletProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super()
    }
    // @ts-ignore 
    process(inputs, output, parameters) {
        /**
        * @type {Float32Array} length 128 Float32Array(128)
        * non-interleaved IEEE754 32-bit linear PCM 
        * with a nominal range between -1 and +1, 
        * with each sample between -1.0 and 1.0.
        * the sample rate depends on the audioContext and is variable
        */
        const inputChannel = inputs[0][0];  //inputChannel Float32Array(128)
        const { postMessage } = this.port;
        console.log(inputChannel);
        postMessage(inputChannel)  // float32Array sent as byte[512] 
        return true; // always do this!
    }
};