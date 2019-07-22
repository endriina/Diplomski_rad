var topMenu = "#top-menu";
var prijava = '//*[@id="top-menu"]/li[1]/a';
var formaZaPrijavu =".login-panel.panel.panel-default"
var assert = require("assert");


describe("Main Page", function() {

    beforeEach(function() {
      browser.url("./");
    });
   
  /*  it("Glavna stranica ucitava potrebne elemente", function() {
     $(topMenu).waitForExist();
    });

    */

    it("Otvaranje", function() {
        $(topMenu).waitForExist(90000);
        $(prijava).click();
        $(formaZaPrijavu).waitForExist(90000);
        var prijavaURL= "https://www.ffos.unios.hr/login";
        var currentURL = browser.getUrl();
        assert.equal(prijavaURL, currentURL);
       });

});