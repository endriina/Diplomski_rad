var header = '//*[@id="top-header"]/div[1]/div/ul'; 
var prijava = '//*[@id="top-header"]/div[1]/div/ul/li[4]/form';
/*var formaZaPrijavu = $(".login-panel.panel.panel-default");*/
var search = "#search";
var rezultat = "#li-search";
var assert = require("assert");

describe("Header", function() {

    beforeEach(function() {
      browser.url("./");
    });

    it("Otvaranje", function() {
        $(header).waitForExist(90000);
       });

    
    it("Search", function(){
      $(search).waitForExist(15000);
      let input = $('.form-control.search')
      input.addValue('test')
      console.log(input.getValue()); 

    }); 

    it("Prijava", function(){
      $(prijava).waitForExist(15000);

     let mail = $('//*[@id="top-header"]/div[1]/div/ul/li[4]/form/div[3]/input')
      mail.addValue('test@test.hr')
      console.log(mail.getValue());
      
      let pass = $('//*[@id="top-header"]/div[1]/div/ul/li[4]/form/div[2]/input')
      pass.addValue('test')
      console.log(pass.getValue());

      let gumbPrijava =$('//*[@id="top-header"]/div[1]/div/ul/li[4]/form/div[1]/button');
      gumbPrijava.click();

      let alert =$(".item.login-warning.alert.alert-warning");
      alert.waitForExist(90000);
    }); 

  



});