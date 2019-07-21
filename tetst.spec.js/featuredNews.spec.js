var assert = require("assert");
/*var url = require('url');*/

describe("Izdvojene vijesti", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
       var news = $("#featured-news");
        news.waitForExist(90000);
    });

    it("Prvi članak", function() {
        var news1 = $('//*[@id="featured-news"]/div/div/div[2]');
         news1.waitForExist(90000);

       /*  var gumb = '//*[@id="featured-news"]/div/div/div[2]/div/div[4]/a';
         $(gumb).click();
        
        var currentURL = browser.getUrl();
        assert.notEqual(url, currentURL); 
        
        Kako provjeriti da se klikom na gumb mijenja URL, bez unaprijed definirane url adrese
        koja se očekuje?
        
        */

     });

     

     it("Drugi članak", function() {
        var news2 = '//*[@id="featured-news"]/div/div/div[3]';
         $(news2).waitForExist(90000);
     });

     it("Treći članak", function() {
        var news3 = '//*[@id="featured-news"]/div/div/div[4]';
         $(news3).waitForExist(90000);
     });

     it("Četvrti članak", function() {
        var news4 = '//*[@id="featured-news"]/div/div/div[5]';
         $(news4).waitForExist(90000);
     });

    

   
});