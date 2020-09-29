var TestConfig = {
 "TestName": "Speech Naturalness Test",
 "LoopByDefault": false,
 "ShowFileIDs": false,
 "ShowResults": false,
 "EnableABLoop": true,
 "RandomizeTestOrder": true,
 "EnableOnlineSubmission": false,
 "MaxTestsPerRun": 24,
 "BeaqleServiceURL": "http://www.jaist.ac.jp/~s1820029/atsip/web_service/ab_test/beaqleJS_Service.php",
 "SupervisorContact": "tuanvu.ho@jaist.ac.jp",
 "AudioRoot": "",
 "Testsets": [
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_0025-jvs001-p225-vae-gan",
   "Files": {
    "A": "eval/vae/jvs001_p225_BASIC5000_0025.wav",
    "B": "eval/gan/jvs001_p225_BASIC5000_0025.wav",
    "X": "eval/ref/p225/p225_019.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_0025-jvs001-p226-vae-gan",
   "Files": {
    "A": "eval/vae/jvs001_p226_BASIC5000_0025.wav",
    "B": "eval/gan/jvs001_p226_BASIC5000_0025.wav",
    "X": "eval/ref/p226/p226_356.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_1356-jvs001-p225-vae-gan",
   "Files": {
    "A": "eval/vae/jvs001_p225_BASIC5000_1356.wav",
    "B": "eval/gan/jvs001_p225_BASIC5000_1356.wav",
    "X": "eval/ref/p225/p225_315.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_1356-jvs001-p226-vae-gan",
   "Files": {
    "A": "eval/vae/jvs001_p226_BASIC5000_1356.wav",
    "B": "eval/gan/jvs001_p226_BASIC5000_1356.wav",
    "X": "eval/ref/p226/p226_018.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_0025-jvs001-p225-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs001_p225_BASIC5000_0025.wav",
    "B": "eval/vae_gan/jvs001_p225_BASIC5000_0025.wav",
    "X": "eval/ref/p225/p225_299.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_0025-jvs001-p226-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs001_p226_BASIC5000_0025.wav",
    "B": "eval/vae_gan/jvs001_p226_BASIC5000_0025.wav",
    "X": "eval/ref/p226/p226_269.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_1356-jvs001-p225-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs001_p225_BASIC5000_1356.wav",
    "B": "eval/vae_gan/jvs001_p225_BASIC5000_1356.wav",
    "X": "eval/ref/p225/p225_337.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_1356-jvs001-p226-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs001_p226_BASIC5000_1356.wav",
    "B": "eval/vae_gan/jvs001_p226_BASIC5000_1356.wav",
    "X": "eval/ref/p226/p226_357.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_0025-jvs001-p225-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs001_p225_BASIC5000_0025.wav",
    "B": "eval/vae_gan/jvs001_p225_BASIC5000_0025.wav",
    "X": "eval/ref/p225/p225_282.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_0025-jvs001-p226-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs001_p226_BASIC5000_0025.wav",
    "B": "eval/vae_gan/jvs001_p226_BASIC5000_0025.wav",
    "X": "eval/ref/p226/p226_213.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_1356-jvs001-p225-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs001_p225_BASIC5000_1356.wav",
    "B": "eval/vae_gan/jvs001_p225_BASIC5000_1356.wav",
    "X": "eval/ref/p225/p225_171.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_BASIC5000_1356-jvs001-p226-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs001_p226_BASIC5000_1356.wav",
    "B": "eval/vae_gan/jvs001_p226_BASIC5000_1356.wav",
    "X": "eval/ref/p226/p226_013.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_008-jvs002-p225-vae-gan",
   "Files": {
    "A": "eval/vae/jvs002_p225_VOICEACTRESS100_008.wav",
    "B": "eval/gan/jvs002_p225_VOICEACTRESS100_008.wav",
    "X": "eval/ref/p225/p225_022.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_008-jvs002-p226-vae-gan",
   "Files": {
    "A": "eval/vae/jvs002_p226_VOICEACTRESS100_008.wav",
    "B": "eval/gan/jvs002_p226_VOICEACTRESS100_008.wav",
    "X": "eval/ref/p226/p226_078.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_018-jvs002-p225-vae-gan",
   "Files": {
    "A": "eval/vae/jvs002_p225_VOICEACTRESS100_018.wav",
    "B": "eval/gan/jvs002_p225_VOICEACTRESS100_018.wav",
    "X": "eval/ref/p225/p225_182.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_018-jvs002-p226-vae-gan",
   "Files": {
    "A": "eval/vae/jvs002_p226_VOICEACTRESS100_018.wav",
    "B": "eval/gan/jvs002_p226_VOICEACTRESS100_018.wav",
    "X": "eval/ref/p226/p226_037.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_008-jvs002-p225-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs002_p225_VOICEACTRESS100_008.wav",
    "B": "eval/vae_gan/jvs002_p225_VOICEACTRESS100_008.wav",
    "X": "eval/ref/p225/p225_149.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_008-jvs002-p226-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs002_p226_VOICEACTRESS100_008.wav",
    "B": "eval/vae_gan/jvs002_p226_VOICEACTRESS100_008.wav",
    "X": "eval/ref/p226/p226_370.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_018-jvs002-p225-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs002_p225_VOICEACTRESS100_018.wav",
    "B": "eval/vae_gan/jvs002_p225_VOICEACTRESS100_018.wav",
    "X": "eval/ref/p225/p225_064.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_018-jvs002-p226-vae-vae_gan",
   "Files": {
    "A": "eval/vae/jvs002_p226_VOICEACTRESS100_018.wav",
    "B": "eval/vae_gan/jvs002_p226_VOICEACTRESS100_018.wav",
    "X": "eval/ref/p226/p226_362.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_008-jvs002-p225-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs002_p225_VOICEACTRESS100_008.wav",
    "B": "eval/vae_gan/jvs002_p225_VOICEACTRESS100_008.wav",
    "X": "eval/ref/p225/p225_331.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_008-jvs002-p226-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs002_p226_VOICEACTRESS100_008.wav",
    "B": "eval/vae_gan/jvs002_p226_VOICEACTRESS100_008.wav",
    "X": "eval/ref/p226/p226_269.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_018-jvs002-p225-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs002_p225_VOICEACTRESS100_018.wav",
    "B": "eval/vae_gan/jvs002_p225_VOICEACTRESS100_018.wav",
    "X": "eval/ref/p225/p225_286.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_VOICEACTRESS100_018-jvs002-p226-gan-vae_gan",
   "Files": {
    "A": "eval/gan/jvs002_p226_VOICEACTRESS100_018.wav",
    "B": "eval/vae_gan/jvs002_p226_VOICEACTRESS100_018.wav",
    "X": "eval/ref/p226/p226_293.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_016-p225-jvs001-vae-gan",
   "Files": {
    "A": "eval/vae/p225_jvs001_p225_016.wav",
    "B": "eval/gan/p225_jvs001_p225_016.wav",
    "X": "eval/ref/jvs001/TRAVEL1000_0397.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_016-p225-jvs002-vae-gan",
   "Files": {
    "A": "eval/vae/p225_jvs002_p225_016.wav",
    "B": "eval/gan/p225_jvs002_p225_016.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_007.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_035-p225-jvs001-vae-gan",
   "Files": {
    "A": "eval/vae/p225_jvs001_p225_035.wav",
    "B": "eval/gan/p225_jvs001_p225_035.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_091.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_035-p225-jvs002-vae-gan",
   "Files": {
    "A": "eval/vae/p225_jvs002_p225_035.wav",
    "B": "eval/gan/p225_jvs002_p225_035.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_039.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_016-p225-jvs001-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p225_jvs001_p225_016.wav",
    "B": "eval/vae_gan/p225_jvs001_p225_016.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_026.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_016-p225-jvs002-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p225_jvs002_p225_016.wav",
    "B": "eval/vae_gan/p225_jvs002_p225_016.wav",
    "X": "eval/ref/jvs002/TRAVEL1000_0481.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_035-p225-jvs001-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p225_jvs001_p225_035.wav",
    "B": "eval/vae_gan/p225_jvs001_p225_035.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_065.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_035-p225-jvs002-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p225_jvs002_p225_035.wav",
    "B": "eval/vae_gan/p225_jvs002_p225_035.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_014.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_016-p225-jvs001-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p225_jvs001_p225_016.wav",
    "B": "eval/vae_gan/p225_jvs001_p225_016.wav",
    "X": "eval/ref/jvs001/BASIC5000_1140.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_016-p225-jvs002-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p225_jvs002_p225_016.wav",
    "B": "eval/vae_gan/p225_jvs002_p225_016.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_085.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_035-p225-jvs001-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p225_jvs001_p225_035.wav",
    "B": "eval/vae_gan/p225_jvs001_p225_035.wav",
    "X": "eval/ref/jvs001/TRAVEL1000_0647.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p225_035-p225-jvs002-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p225_jvs002_p225_035.wav",
    "B": "eval/vae_gan/p225_jvs002_p225_035.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_038.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_033-p226-jvs001-vae-gan",
   "Files": {
    "A": "eval/vae/p226_jvs001_p226_033.wav",
    "B": "eval/gan/p226_jvs001_p226_033.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_096.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_033-p226-jvs002-vae-gan",
   "Files": {
    "A": "eval/vae/p226_jvs002_p226_033.wav",
    "B": "eval/gan/p226_jvs002_p226_033.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_042.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_040-p226-jvs001-vae-gan",
   "Files": {
    "A": "eval/vae/p226_jvs001_p226_040.wav",
    "B": "eval/gan/p226_jvs001_p226_040.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_003.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_040-p226-jvs002-vae-gan",
   "Files": {
    "A": "eval/vae/p226_jvs002_p226_040.wav",
    "B": "eval/gan/p226_jvs002_p226_040.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_015.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_033-p226-jvs001-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p226_jvs001_p226_033.wav",
    "B": "eval/vae_gan/p226_jvs001_p226_033.wav",
    "X": "eval/ref/jvs001/BASIC5000_1635.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_033-p226-jvs002-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p226_jvs002_p226_033.wav",
    "B": "eval/vae_gan/p226_jvs002_p226_033.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_005.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_040-p226-jvs001-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p226_jvs001_p226_040.wav",
    "B": "eval/vae_gan/p226_jvs001_p226_040.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_063.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_040-p226-jvs002-vae-vae_gan",
   "Files": {
    "A": "eval/vae/p226_jvs002_p226_040.wav",
    "B": "eval/vae_gan/p226_jvs002_p226_040.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_019.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_033-p226-jvs001-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p226_jvs001_p226_033.wav",
    "B": "eval/vae_gan/p226_jvs001_p226_033.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_015.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_033-p226-jvs002-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p226_jvs002_p226_033.wav",
    "B": "eval/vae_gan/p226_jvs002_p226_033.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_023.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_040-p226-jvs001-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p226_jvs001_p226_040.wav",
    "B": "eval/vae_gan/p226_jvs001_p226_040.wav",
    "X": "eval/ref/jvs001/VOICEACTRESS100_061.wav"
   }
  },
  {
   "Name": "NaturalnessTest",
   "TestID": "AB_p226_040-p226-jvs002-gan-vae_gan",
   "Files": {
    "A": "eval/gan/p226_jvs002_p226_040.wav",
    "B": "eval/vae_gan/p226_jvs002_p226_040.wav",
    "X": "eval/ref/jvs002/VOICEACTRESS100_080.wav"
   }
  }
 ]
}