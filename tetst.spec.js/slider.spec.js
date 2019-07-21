var assert = require("assert");


describe("Slider", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
       var news = $("#slider");
        news.waitForExist(90000);
    });



    it("Prvi članak", function() {
        var news1 = $(".slide-left");
         news1.waitForExist(90000);
     });

     it("Drugi članak", function() {
        var news2 = $(".slide-right-top");
         news2.waitForExist(90000);
     });

     it("Treći članak", function() {
        var news3 = $(".slide-right-bottom");
         news3.waitForExist(90000);
     });

     


    /*
        Kako provjeriti da se klikom na naslov (h3) mijenja URL, bez unaprijed definirane url adrese
        koja se očekuje?
     
     */

    

   
});