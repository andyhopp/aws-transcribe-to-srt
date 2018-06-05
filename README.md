# aws-transcribe-to-srt

This utility takes the JSON produced from [Amazon AWS Transcribe](https://aws.amazon.com/transcribe/) and outputs an SRT file suitable for video playback or providing as input to Elastic Transcoder.

By default, the SRT file is saved to `output.srt`.

## Running:

    node index.js [[path to input JSON file] [path to output SRT file]]

    -- or --

    npm start


### Prompt for input:
    node index.js 

### Supply the input filename but write to the default output file (output.srt):
    node index.js asrOutput.json

### Supply both the input filename and the output filename:
    node index.js asrOutput.json myFile.srt

## Contributing:
Contributors are more than welcome! Just fork and create pull requests.
