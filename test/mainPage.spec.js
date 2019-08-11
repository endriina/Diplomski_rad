var topMenu = "#top-menu";
var prijava = '//*[@id="top-menu"]/li[1]/a';
var formaZaPrijavu =".login-panel.panel.panel-default";
var assert = require("assert");


describe("Main Page", function() {

    beforeEach(function() {
      browser.url("./");
    });
   
  

    it("Otvaranje", function() {
        $(topMenu).waitForExist(90000);
        $(prijava).click();
        $(formaZaPrijavu).waitForExist(90000);
        let prijavaURL= "https://www.ffos.unios.hr/login";
        let currentURL = browser.getUrl();
        assert.equal(prijavaURL, currentURL);
       });

});