var assert = require("assert");


describe("Novosti i događanja", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
       let news = $("#main-news");
        news.waitForExist(90000);
    });

    it("Prvi članak", function() {
        let news1 = $('//*[@id="main-news"]/div/div/div[2]/div/div[1]');
         news1.waitForExist(90000);
     });

     it("Drugi članak", function() {
        let news2 = $('//*[@id="main-news"]/div/div/div[2]/div/div[2]');
         news2.waitForExist(90000);
     });

     it("Treći članak", function() {
        let news3 = $('//*[@id="main-news"]/div/div/div[2]/div/div[3]');
         news3.waitForExist(90000);
     });

     it("Četvrti članak", function() {
        let news4 = $('//*[@id="main-news"]/div/div/div[2]/div/div[4]');
         news4.waitForExist(90000);
     });

     it("Peti članak", function() {
        let news5 = $('//*[@id="main-news"]/div/div/div[2]/div/div[5]');
         news5.waitForExist(90000);
     });

     it("Šesti članak", function() {
        let news6 = $('//*[@id="main-news"]/div/div/div[2]/div/div[6]');
         news6.waitForExist(90000);
     });
     


    
    

   
});