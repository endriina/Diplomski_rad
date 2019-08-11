var assert = require("assert");
/*var url = require('url');*/

describe("Izdvojene vijesti", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
       let news = $("#featured-news");
        news.waitForExist(90000);
    });

    it("Prvi članak", function() {
        let news1 = $('//*[@id="featured-news"]/div/div/div[2]');
         news1.waitForExist(90000);

     });

     

     it("Drugi članak", function() {
        let news2 = $('//*[@id="featured-news"]/div/div/div[3]');
         news2.waitForExist(90000);
     });

     it("Treći članak", function() {
        let news3 = $('//*[@id="featured-news"]/div/div/div[4]');
         news3.waitForExist(90000);
     });

     it("Četvrti članak", function() {
        let news4 = $('//*[@id="featured-news"]/div/div/div[5]');
         news4.waitForExist(90000);
     });

    

   
});