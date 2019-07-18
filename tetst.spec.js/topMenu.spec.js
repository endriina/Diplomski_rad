var topMenu = "#top-menu";
var prijava = '//*[@id="top-menu"]/li[1]/a';
var studenti = '//*[@id="top-menu"]/li[2]/a';
var buducimStudentima = '//*[@id="top-menu"]/li[3]/a';
var kontakt = '//*[@id="top-menu"]/li[4]/a';

var galerija = '//*[@id="top-menu"]/li[5]/a';
var forum = '//*[@id="top-menu"]/li[6]/a';
var aaiedu = '//*[@id="top-menu"]/li[7]/a';
var arhiva = '//*[@id="top-menu"]/li[8]/a';
var intranet = '//*[@id="top-menu"]/li[9]/a';
var assert = require("assert");

describe("Top Menu", function() {
 beforeEach(function() {
 browser.url("./");
 });

 it("Otvaranje", function() {
 $(topMenu).waitForExist(90000);
 });

 it("Prijava", function() {
 $(prijava).click();
 var forma = $('/html/body/div/div[1]/form/div/div[2]');
 forma.waitForExist(90000);

 var prijavaURL = "https://www.ffos.unios.hr/login";
 var currentURL = browser.getUrl();
 assert.equal(prijavaURL, currentURL);
 });

 it("Studenti", function() {
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var infPaketi = $('//*[@id="top-menu"]/li[2]/ul/li[1]');
 infPaketi.click();
 var content =$('//*[@id="page"]/div/div/div[2]/div');
 content.waitForExist(9000);
 var infPaketiURL = "https://www.ffos.unios.hr/informacijski-paket-za-studente-10-09-2018";
 var currentURL = browser.getUrl();
 assert.equal(infPaketiURL, currentURL);
 browser.back();
 //
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var zbor = $('//*[@id="top-menu"]/li[2]/ul/li[2]');
 zbor.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
 naslov.waitForExist(9000);
 var zborURL = "https://www.ffos.unios.hr/studentski-zbor";
 var currentURL = browser.getUrl();
 assert.equal(zborURL, currentURL);
 browser.back();
 //
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var referada = $('//*[@id="top-menu"]/li[2]/ul/li[3]');
 referada.click();
 var referadaURL = "https://www.ffos.unios.hr/referada";
 var currentURL = browser.getUrl();
 assert.equal(referadaURL, currentURL);
 browser.back();
 //
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var satZaStudente = $('//*[@id="top-menu"]/li[2]/ul/li[4]');
 satZaStudente.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var satZaStudenteURL = "https://www.ffos.unios.hr/prodekanski-sat-za-studente";
 var currentURL = browser.getUrl();
 assert.equal(satZaStudenteURL, currentURL);
 browser.back();
 //
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var molbeIPrigovori = $('//*[@id="top-menu"]/li[2]/ul/li[5]');
 molbeIPrigovori.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var molbeIPrigovoriURL = "https://www.ffos.unios.hr/povjerenstvo-za-nastavu-i-studentska-pitanja";
 var currentURL = browser.getUrl();
 assert.equal(molbeIPrigovoriURL, currentURL);
 browser.back();
 //
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var pravobranitelj = $('//*[@id="top-menu"]/li[2]/ul/li[6]');
 pravobranitelj.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var pravobraniteljURL = "https://www.ffos.unios.hr/studentski-pravobranitelj";
 var currentURL = browser.getUrl();
 assert.equal(pravobraniteljURL, currentURL);
 browser.back();
 //
 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 
 var studentProdekan = $('//*[@id="top-menu"]/li[2]/ul/li[7]');
 studentProdekan.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var studentProdekanURL = "https://www.ffos.unios.hr/student-prodekan";
 var currentURL = browser.getUrl();
 assert.equal(studentProdekanURL, currentURL);
 browser.back();
 //

 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var izvannastavneAktivnosti = $('//*[@id="top-menu"]/li[2]/ul/li[8]');
 izvannastavneAktivnosti.moveTo();

 var pohvala = $('//*[@id="top-menu"]/li[2]/ul/li[8]/ul/li[1]/a');
 pohvala.moveTo();
 pohvala.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var pohvalaURL = "https://www.ffos.unios.hr/kandidatura-za-pohvalu-za-izvannastavne-aktivnosti";
 var currentURL = browser.getUrl();
 assert.equal(pohvalaURL, currentURL);
 browser.back();

 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var izvannastavneAktivnosti = $('//*[@id="top-menu"]/li[2]/ul/li[8]');
 izvannastavneAktivnosti.moveTo();

 var kluboviIIzdanja = $('//*[@id="top-menu"]/li[2]/ul/li[8]/ul/li[2]/a');
 kluboviIIzdanja.moveTo();
 kluboviIIzdanja.click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var kluboviIIzdanjaURL ="https://www.ffos.unios.hr/studentski-klubovi-i-izdanja";
 var currentURL = browser.getUrl();
 assert.equal(kluboviIIzdanjaURL, currentURL);
 browser.back();

 

 
 /*
        $(studenti).moveTo();
        var padajuciIzbornik = ".dropper-menu";
        $(padajuciIzbornik).waitForExist(90000);
        var savjetovaliste = '//*[@id="top-menu"]/li[2]/ul/li[9]';
        $(savjetovaliste).click();
        var savjetovalisteURL= "https://www.unios.hr/studenti/psiholosko-savjetovaliste/";
        var currentURL = browser.getUrl();
        assert.equal(savjetovalisteURL, currentURL);
        // Savjetovalište link daje poruku "Web lokacija ne može pružiti sigurnu vezu"
        browser.back();

        $(studenti).moveTo();
        var padajuciIzbornik = ".dropper-menu";
        $(padajuciIzbornik).waitForExist(90000);
        var pojmovnik = '//*[@id="top-menu"]/li[2]/ul/li[10]';
        $(pojmovnik).click();
        var pojmovnikURL= "https://web.ffos.hr/download/sto.pdf";
        var currentURL = browser.getUrl();
        assert.equal(pojmovnikURL, currentURL);
        // Pojmovnik link daje poruku "Web lokacija ne može pružiti sigurnu vezu"
        browser.back();
        
        Browser ova dva linka prepoznaje kao nesigurnu vezu, stoga se one ne mogu automaski testirati.
        */

 $(studenti).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var sustavZaKvalitetu = $('//*[@id="top-menu"]/li[2]/ul/li[11]');
 sustavZaKvalitetu.click();
 var sustavZaKvalitetuURL = "https://www.ffos.unios.hr/sustav-za-kvalitetu-studenti";
 var currentURL = browser.getUrl();
 assert.equal(sustavZaKvalitetuURL, currentURL);
 browser.back();
 //

    /* $(studenti).moveTo();
        var padajuciIzbornik = ".dropper-menu";
        $(padajuciIzbornik).waitForExist(90000);
        var radio = '//*[@id="top-menu"]/li[2]/ul/li[12]';
        $(radio).click();
        var radioURL= "https://radio.unios.hr";
        var currentURL = browser.getUrl();
        assert.equal(radioURL, currentURL);
        // Radio link daje poruku "Web lokacija ne može pružiti sigurnu vezu- ssl certifikat"
        browser.back();*/

 $(studenti).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var studentiURL = "https://www.ffos.unios.hr/odlazna-mobilnost-studenata";
 var currentURL = browser.getUrl();
 assert.equal(studentiURL, currentURL);
 browser.back();
 });

 it("Buducim studentima", function() {
 $(buducimStudentima).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);

 var zastoFFOS = $('//*[@id="top-menu"]/li[3]/ul/li[1]');
 zastoFFOS.click();
 //Logo na ovoj stranici vodi na stranice pravnog fakulteta. Zasto????
 var zastoFFOSURL = "https://www.ffos.unios.hr/upisiffos/index.html";
 var currentURL = browser.getUrl();
 assert.equal(zastoFFOSURL, currentURL);
 

 var meni = $('//*[@id="menuToggle"]');
 meni.click();
 var pocetna = $('//*[@id="theMenu"]/div[1]/a');
 pocetna.click();

 $(buducimStudentima).moveTo();
 var upisi = $('//*[@id="top-menu"]/li[3]/ul/li[2]/a');
 upisi.moveTo();

 var upisStudenata = $('//*[@id="top-menu"]/li[3]/ul/li[2]/ul/li[1]/a');
 upisStudenata.click();
 var upisStudenataURL = "https://www.ffos.unios.hr/upis-studenata-u-akademsku-godinu-20192020";
 var currentURL = browser.getUrl();
 assert.equal(upisStudenataURL, currentURL);
 browser.back();

 $(buducimStudentima).moveTo();
 $(upisi).moveTo();
 var upisDiplomski = $('//*[@id="top-menu"]/li[3]/ul/li[2]/ul/li[2]/a');
 upisDiplomski.click();
 var upisDiplomskiURL = "https://www.ffos.unios.hr/upisi-na-diplomske-sveucilisne-studije";
 var currentURL = browser.getUrl();
 assert.equal(upisDiplomskiURL, currentURL);
 browser.back();

 $(buducimStudentima).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var buducimStudentimaURL = "https://www.ffos.unios.hr/zasto-studirati-na-filozofskom-fakultetu-u-osijeku";
 var currentURL = browser.getUrl();
 assert.equal(buducimStudentimaURL, currentURL);
 browser.back();
 });

 it("Kontakt", function() {
 $(kontakt).moveTo();
 var kontaktDown = $('//*[@id="top-menu"]/li[4]/ul/li[1]/a');
 kontaktDown.click();
 var kontaktDownURL = "https://www.ffos.unios.hr/kontakt";
 var currentURL = browser.getUrl();
 assert.equal(kontaktDownURL, currentURL);
 browser.back();

 $(kontakt).moveTo();
 var gdjeSmo = $('//*[@id="top-menu"]/li[4]/ul/li[2]/a');
 gdjeSmo.click();
 var gdjeSmoURL = "https://www.ffos.unios.hr/gdje-smo";
 var currentURL = browser.getUrl();
 assert.equal(gdjeSmoURL, currentURL);
 browser.back();
 });

 it("Galerija", function() {
 $(galerija).moveTo();
 var promocije = $('//*[@id="top-menu"]/li[5]/ul/li[1]/a');
 promocije.moveTo();
 var prvostupnici = $('//*[@id="top-menu"]/li[5]/ul/li[1]/ul/li[1]/a');
 prvostupnici.click();
 var prvostupniciURL = "https://www.ffos.unios.hr/promocija-prvostupnika";
 var currentURL = browser.getUrl();
 assert.equal(prvostupniciURL, currentURL);
 browser.back();

 $(galerija).moveTo();
 var promocije = $('//*[@id="top-menu"]/li[5]/ul/li[1]/a');
 promocije.moveTo();
 var magistri = $('//*[@id="top-menu"]/li[5]/ul/li[1]/ul/li[2]/a');
 magistri.click();
 var magistriURL = "https://www.ffos.unios.hr/promocija-magistara";
 var currentURL = browser.getUrl();
 assert.equal(magistriURL, currentURL);
 browser.back();

 $(galerija).moveTo();
 var dogadanjaISkupovi = $('//*[@id="top-menu"]/li[5]/ul/li[2]/a');
 dogadanjaISkupovi.click();
 var dogadanjaISkupoviURL = "https://www.ffos.unios.hr/dogadanja-i-skupovi";
 var currentURL = browser.getUrl();
 assert.equal(dogadanjaISkupoviURL, currentURL);
 browser.back();
 });

 /* it("Forum", function(){
 $(forum).click();
 var forumURL= "https://ffos.freeforums.org";
 var currentURL = browser.getUrl();
 assert.equal(forumURL, currentURL);

 }); 

 it("AaiEdu", function() {
 $(aaiedu).click();
 var aaieduURL = "https://ldap.ffos.hr/ldap/";
 var currentURL = browser.getUrl();
 assert.equal(aaieduURL, currentURL);
 browser.back();
 });

 Forum i AaiEdu ne znam kako testirati jer kad ih otvorim forum više ne postoji, a za AaiEdu
 nemam pristup, tj. piše forbidden pa sam tu samo po URL-u. 
 Ne može se testirati zbog mreže, AAIEDU se može samo na ffos mreži, a forum uopce ne postoji.
 */

 it("Arhiva", function() {
 $(arhiva).click();
 var forma = $('/html/body/div/div[1]/form/div/div[2]');
 forma.waitForExist(90000);
 var arhivaURL = "https://www.ffos.unios.hr/arhiva/login";
 var currentURL = browser.getUrl();
 assert.equal(arhivaURL, currentURL);
 browser.back();
 });

 it("Intranet", function() {
 $(intranet).click();
 var forma = $('/html/body/div/div[1]/div/div[2]');
 forma.waitForExist(90000);

 var intranetURL = "https://sokrat.ffos.hr/ff-intranet/login.php";
 var currentURL = browser.getUrl();
 assert.equal(intranetURL, currentURL);
 

 let mail = $("/html/body/div/div[1]/div/div[2]/form/input[1]");
 mail.addValue("mail");
 console.log(mail.getValue());

 let input = $("/html/body/div/div[1]/div/div[2]/form/input[2]");
 input.addValue("pass");
 console.log(input.getValue());

 var gumbPrijava = $("/html/body/div/div[1]/div/div[2]/form/input[3]");
 gumbPrijava.click();

 var greska = $("/html/body/div/div[1]/div/div[1]");
 greska.waitForExist(90000);
 assert.equal($(greska).getText(), "Nepostojeće korisničko ime!");

 //
 mail.clearValue()
 value = mail.getValue()
 assert(value === '');
 //

 var formaStudenti = $("/html/body/div/div[2]/div[1]/div/div");
 formaStudenti.waitForExist(90000);

 let mail1 = $("/html/body/div/div[2]/div[1]/div/div/div/form/input[1]");
 mail.addValue("mail");
 console.log(mail1.getValue());

 let pass1 = $("/html/body/div/div[2]/div[1]/div/div/div/form/input[2]");
 pass1.addValue("pass");
 console.log(pass1.getValue());

 var gumbPrijavaStudenti = $("/html/body/div/div[2]/div[1]/div/div/div/form/input[3]");
 gumbPrijavaStudenti.click();

 var greska = $("/html/body/div/div/div/div[1]");
 greska.waitForExist(90000);

//
mail.clearValue()
value = mail.getValue()
assert(value === '');
//

 let mail2 = $("/html/body/div/div/div/div[2]/form/input[1]");
 mail2.addValue("eeskic@ffos.hr");
 console.log(mail2.getValue());

 let pass2 = $("/html/body/div/div/div/div[2]/form/input[2]");
 pass2.addValue("uWJtDSqj");
 console.log(pass2.getValue());

 var gumbPrijavaStudenti2 =$("/html/body/div/div/div/div[2]/form/input[3]");
 gumbPrijavaStudenti2.click();

 var provjera = $(".text-primary.logged-user");
 provjera.waitForExist(9000);

 browser.navigateTo("https://sokrat.ffos.hr/ff-intranet/login.php");

 var formaMentori = $("/html/body/div/div[2]/div[3]/div/div");
 formaMentori.waitForExist(90000);

 let mail3 = $("/html/body/div/div[2]/div[3]/div/div/div/form/input[1]");
 mail.addValue("mail");
 console.log(mail.getValue());

 let pass3 = $("/html/body/div/div[2]/div[3]/div/div/div/form/input[2]");
 pass3.addValue("pass");
 console.log(pass3.getValue());

 var gumbPrijavaMentori = $("/html/body/div/div[2]/div[3]/div/div/div/form/input[3]");
 gumbPrijavaMentori.click();

 var greska2 = $("/html/body/div/div/div/div[1]");
 greska2.waitForExist(90000);
 });

 
});
