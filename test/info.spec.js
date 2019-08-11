

describe("Podnožje", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
       let info = $('/html/body/footer');
        info.waitForExist(90000);
    });

   
});