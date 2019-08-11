var assert = require("assert");


describe("Slider", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
    let news = $("#slider");
        news.waitForExist(90000);
    });



    it("Prvi članak", function() {
        let news1 = $(".slide-left");
         news1.waitForExist(90000);
     });

     it("Drugi članak", function() {
        let news2 = $(".slide-right-top");
         news2.waitForExist(90000);
     });

     it("Treći članak", function() {
        let news3 = $(".slide-right-bottom");
         news3.waitForExist(90000);
     });

     


   

    

   
});