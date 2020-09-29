// configure the Similarity Test here
var TestConfig = {
  "TestName": "Speaker Similarity Test",
  "RateScalePng": "img/scale_100.svg",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 20,
  "RateMaxValue": 100,
  "RateDefaultValue":20,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Similarity Test 1",
      "TestID": "jvs002_p226",
      "Files": {
            "Source": "eval/ref/jvs002/VOICEACTRESS100_005.wav",
            "Target": "eval/ref/p226/p226_018.wav",
            "1": "eval/int/jvs002_p226_0.wav",
            "2": "eval/int/jvs002_p226_1.wav",
            "3": "eval/int/jvs002_p226_2.wav",
            "4": "eval/int/jvs002_p226_3.wav",
            "5": "eval/int/jvs002_p226_4.wav",
            "6": "eval/int/jvs002_p226_5.wav",
            "7": "eval/int/jvs002_p226_6.wav",
            "8": "eval/int/jvs002_p226_7.wav",
            "9": "eval/int/jvs002_p226_8.wav",
            "10": "eval/int/jvs002_p226_9.wav",
            "11": "eval/int/jvs002_p226_10.wav"                    
        }
    }    
  ]
}
