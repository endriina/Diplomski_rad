

describe("Video", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
       var video = $('//*[@id="video"]/div[1]/div/div[2]');
        video.waitForExist(90000);
    });

    it("Pokretanje", function() {
        var video = $("#playback-button");
        video.click();

        var videoYT = $('//*[@id="cboxOverlay"]');
        videoYT.waitForExist(90000);

        
        

    });
});