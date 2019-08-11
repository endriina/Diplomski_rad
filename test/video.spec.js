

describe("Video", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
    let video = $('//*[@id="video"]/div[1]/div/div[2]');
        video.waitForExist(90000);
    });

    it("Pokretanje", function() {
        let videoPlay = $("#playback-button");
        videoPlay.click();

        let videoYT = $('//*[@id="cboxOverlay"]');
        videoYT.waitForExist(90000);

        
        

    });
});