var mainMenu = "#menu";
var naslovna = '//*[@id="menu"]/li[1]/a';
var oNama = '//*[@id="menu"]/li[2]/a';
var sustavZaKvalitetu = '//*[@id="menu"]/li[3]/a';
var odsjeciKatedre = '//*[@id="menu"]/li[4]/a';
var nastava = '//*[@id="menu"]/li[5]/a';
var studiji = '//*[@id="menu"]/li[6]/a';
var knjiznica = '//*[@id="menu"]/li[7]/a';
var izdavackaDjelatnost = '//*[@id="menu"]/li[8]/a';
var znanstveniPortal = '//*[@id="menu"]/li[9]/a';
var centarZaKarijere = '//*[@id="menu"]/li[10]/a';
var assert = require("assert");

describe("Main Menu", function() {
 beforeEach(function() {
 browser.url("./");
 });

 it("Otvaranje", function() {
 $(mainMenu).waitForExist(90000);
 });

 it("Naslovna", function() {
 $(naslovna).click();
 var naslovnaURL = "https://www.ffos.unios.hr/";
 var currentURL = browser.getUrl();
 assert.equal(naslovnaURL, currentURL);
 });

 it("O nama", function() {
 $(oNama).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
 opciPodaci.click();
 var opciPodaciURL = "https://www.ffos.unios.hr/misija-i-vizija";
 var currentURL = browser.getUrl();
 assert.equal(opciPodaciURL, currentURL);
 browser.back();
 //

 $(oNama).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
 opciPodaci.moveTo();
 var padajuciIzbornik2 = $('//*[@id="menu"]/li[2]/ul/li[1]/ul');
 padajuciIzbornik2.waitForExist(90000);

 var misijaIVizija = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[1]/a');
 misijaIVizija.click();
 var misijaIVizijaURL = "https://www.ffos.unios.hr/misija-i-vizija";
 var currentURL = browser.getUrl();
 assert.equal(misijaIVizijaURL, currentURL);
 browser.back();
 //

 $(oNama).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
 opciPodaci.moveTo();
 var padajuciIzbornik2 = $('//*[@id="menu"]/li[2]/ul/li[1]/ul');
 padajuciIzbornik2.waitForExist(90000);

 var uprava = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[2]/a');
 uprava.click();
 var upravaURL = "https://www.ffos.unios.hr/uprava";
 var currentURL = browser.getUrl();
 assert.equal(upravaURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
 opciPodaci.moveTo();
 var padajuciIzbornik2 = $('//*[@id="menu"]/li[2]/ul/li[1]/ul');
 padajuciIzbornik2.waitForExist(90000);

 var nastavnici = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[3]/a');
 nastavnici.click();
 var nastavniciURL = "https://www.ffos.unios.hr/nastavnici";
 var currentURL = browser.getUrl();
 assert.equal(nastavniciURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
 opciPodaci.moveTo();
 var padajuciIzbornik2 = $('//*[@id="menu"]/li[2]/ul/li[1]/ul');
 padajuciIzbornik2.waitForExist(90000);

 var sluzbe = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[4]/a');
 sluzbe.click();
 var sluzbeURL = "https://www.ffos.unios.hr/fakultetske-sluzbe";
 var currentURL = browser.getUrl();
 assert.equal(sluzbeURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var padajuciIzbornik = $('.dropper-menu');
 padajuciIzbornik.waitForExist(90000);
 var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
 opciPodaci.moveTo();
 var padajuciIzbornik2 = $('//*[@id="menu"]/li[2]/ul/li[1]/ul');
 padajuciIzbornik2.waitForExist(90000);

 var imenik = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[5]/a');
 imenik.click();
 var imenikURL = "https://www.ffos.unios.hr/telefonski-imenik";
 var currentURL = browser.getUrl();
 assert.equal(imenikURL, currentURL);
 browser.back();

 //

 $(oNama).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var oNamaURL = "https://www.ffos.unios.hr/misija-i-vizija";
 var currentURL = browser.getUrl();
 assert.equal(oNamaURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var suradnja = $('//*[@id="menu"]/li[2]/ul/li[2]/a');
 suradnja.click();
 var suradnjaURL = "https://www.ffos.unios.hr/suradnja";
 var currentURL = browser.getUrl();
 assert.equal(suradnjaURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var dokumenti = $('//*[@id="menu"]/li[2]/ul/li[3]/a');
 dokumenti.click();
 var dokumentiURL = "https://www.ffos.unios.hr/dokumenti";
 var currentURL = browser.getUrl();
 assert.equal(dokumentiURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var javnaNabava = $('//*[@id="menu"]/li[2]/ul/li[4]/a');
 javnaNabava.click();
 var javnaNabavaURL = "https://www.ffos.unios.hr/javna-nabava";
 var currentURL = browser.getUrl();
 assert.equal(javnaNabavaURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var pristupInf = $('//*[@id="menu"]/li[2]/ul/li[5]/a');
 pristupInf.click();
 var pristupInfURL = "https://www.ffos.unios.hr/pravo-na-pristup-informacijama";
 var currentURL = browser.getUrl();
 assert.equal(pristupInfURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var zastitaPodataka = $('//*[@id="menu"]/li[2]/ul/li[6]/a');
 zastitaPodataka.click();
 var zastitaPodatakaURL = "https://www.ffos.unios.hr/zastita-osobnih-podataka";
 var currentURL = browser.getUrl();
 assert.equal(zastitaPodatakaURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var planZgrade = $('//*[@id="menu"]/li[2]/ul/li[7]/a');
 planZgrade.click();
 var planZgradeURL = "https://www.ffos.unios.hr/plan-zgrade";
 var currentURL = browser.getUrl();
 assert.equal(planZgradeURL, currentURL);
 browser.back();

 //

 $(oNama).moveTo();
 var faq = $('//*[@id="menu"]/li[2]/ul/li[8]/a');
 faq.click();
 var faqURL = "https://www.ffos.unios.hr/faq";
 var currentURL = browser.getUrl();
 assert.equal(faqURL, currentURL);
 browser.back();
 });

 it("Sustav za kvalitetu", function() {
 $(sustavZaKvalitetu).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
 naslov.waitForExist(90000);
 var sustavZaKvalitetuURL = "https://www.ffos.unios.hr/sustav-za-kvalitetu";
 var currentURL = browser.getUrl();
 assert.equal(sustavZaKvalitetuURL, currentURL);
 browser.back();
 });

 it("Odsjeci i katedre", function() {
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = '//*[@id="menu"]/li[4]/ul';
 $('//*[@id="menu"]/li[4]/ul/li[1]').waitForExist(90000);
 $('//*[@id="menu"]/li[4]/ul/li[1]').moveTo();
 var engleski = $('//*[@id="menu"]/li[4]/ul/li[1]/a');
 engleski.click();
 var engleskiURL = "https://www.ffos.unios.hr/anglistika";
 var currentURL = browser.getUrl();
 assert.equal(engleskiURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var filozofija = $('//*[@id="menu"]/li[4]/ul/li[2]/a');
 filozofija.click();
 var filozofijaURL = "https://www.ffos.unios.hr/filozofija";
 var currentURL = browser.getUrl();
 assert.equal(filozofijaURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var hrvatski = $('//*[@id="menu"]/li[4]/ul/li[3]/a');
 hrvatski.click();
 var hrvatskiURL = "https://www.ffos.unios.hr/hrvatski";
 var currentURL = browser.getUrl();
 assert.equal(hrvatskiURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var infoZnanosti = $('//*[@id="menu"]/li[4]/ul/li[4]/a');
 infoZnanosti.click();
 var infoZnanostiURL = "https://www.ffos.unios.hr/infoznanosti";
 var currentURL = browser.getUrl();
 assert.equal(infoZnanostiURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var madarski = $('//*[@id="menu"]/li[4]/ul/li[5]/a');
 madarski.click();
 var madarskiURL = "https://www.ffos.unios.hr/mađarski";
 var currentURL = browser.getUrl();
 assert.equal(madarskiURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var germanistika = $('//*[@id="menu"]/li[4]/ul/li[6]/a');
 germanistika.click();
 var germanistikaURL = "https://www.ffos.unios.hr/germanistika";
 var currentURL = browser.getUrl();
 assert.equal(germanistikaURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var pedagogija = $('//*[@id="menu"]/li[4]/ul/li[7]/a');
 pedagogija.click();
 var pedagogijaURL = "https://www.ffos.unios.hr/pedagogija";
 var currentURL = browser.getUrl();
 assert.equal(pedagogijaURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var povijest = $('//*[@id="menu"]/li[4]/ul/li[8]/a');
 povijest.click();
 var povijestURL = "https://www.ffos.unios.hr/povijest";
 var currentURL = browser.getUrl();
 assert.equal(povijestURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var psihologija = $('//*[@id="menu"]/li[4]/ul/li[9]/a');
 psihologija.click();
 var psihologijaURL = "https://www.ffos.unios.hr/psihologija";
 var currentURL = browser.getUrl();
 assert.equal(psihologijaURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var sociologija = $('//*[@id="menu"]/li[4]/ul/li[10]/a');
 sociologija.click();
 var sociologijaURL = "https://www.ffos.unios.hr/sociologija";
 var currentURL = browser.getUrl();
 assert.equal(sociologijaURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var zajednickiSadrzaj = $('//*[@id="menu"]/li[4]/ul/li[11]/a');
 zajednickiSadrzaj.click();
 var zajednickiSadrzajURL = "https://www.ffos.unios.hr/kzs";
 var currentURL = browser.getUrl();
 assert.equal(zajednickiSadrzajURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).moveTo();
 var padajuciIzbornik3 = $('//*[@id="menu"]/li[4]/ul');
 padajuciIzbornik3.waitForExist(90000);
 var cjelozivotnoUcenje = $('//*[@id="menu"]/li[4]/ul/li[12]/a');
 cjelozivotnoUcenje.click();
 var cjelozivotnoUcenjeURL = "https://www.ffos.unios.hr/cjelozivotno-ucenje";
 var currentURL = browser.getUrl();
 assert.equal(cjelozivotnoUcenjeURL, currentURL);
 browser.back();

 //
 $(odsjeciKatedre).waitForExist();
 $(odsjeciKatedre).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var odsjeciKatedreURL = "https://www.ffos.unios.hr/odsjeci-i-katedre";
 var currentURL = browser.getUrl();
 assert.equal(odsjeciKatedreURL, currentURL);
 browser.back();
 });

 it("Nastava", function() {
 $(nastava).moveTo();
 var padajuciIzbornik4 = $('//*[@id="menu"]/li[5]/ul');
 padajuciIzbornik4.waitForExist(90000);

 var nastavniKalendar = $('//*[@id="menu"]/li[5]/ul/li[1]/a');
 nastavniKalendar.click();
 var nastavniKalendarURL = "https://www.ffos.unios.hr/nastavni-kalendar";
 var currentURL = browser.getUrl();
 assert.equal(nastavniKalendarURL, currentURL);
 browser.back();

 $(nastava).moveTo();

 var padajuciIzbornik4 = $('//*[@id="menu"]/li[5]/ul');
 padajuciIzbornik4.waitForExist(90000);

 var izvedbeniPlan = $('//*[@id="menu"]/li[5]/ul/li[2]/a');
 izvedbeniPlan.click();
 var izvedbeniPlanURL = "https://www.ffos.unios.hr/izvedbeni-planovi-nastave";
 var currentURL = browser.getUrl();
 assert.equal(izvedbeniPlanURL, currentURL);
 browser.back();
 
 $(nastava).moveTo();
 var padajuciIzbornik4 = $('//*[@id="menu"]/li[5]/ul');
 padajuciIzbornik4.waitForExist(90000);

 var rasporedSati = $('//*[@id="menu"]/li[5]/ul/li[3]/a');
 rasporedSati.click();
 var rasporedSatiURL = "https://www.ffos.unios.hr/raspored-sati/";
 var currentURL = browser.getUrl();
 assert.equal(rasporedSatiURL, currentURL);
 browser.back();
 });

 it("Studiji", function() {
 $(studiji).moveTo();
 var padajuciIzbornik5 = $('//*[@id="menu"]/li[6]/ul');
 padajuciIzbornik5.waitForExist(90000);

 var bolonja = $('//*[@id="menu"]/li[6]/ul/li[1]/a');
 bolonja.click();
 var bolonjaURL = "https://www.ffos.unios.hr/bolonjski-programi";
 var currentURL = browser.getUrl();
 assert.equal(bolonjaURL, currentURL);
 browser.back();

 $(studiji).moveTo();
 var padajuciIzbornik5 = $('//*[@id="menu"]/li[6]/ul');
 padajuciIzbornik5.waitForExist(90000);

 var studijskiProgrami = $('//*[@id="menu"]/li[6]/ul/li[2]/a');
 studijskiProgrami.click();
 var studijskiProgramiURL = "https://www.ffos.unios.hr/studijski-programi";
 var currentURL = browser.getUrl();
 assert.equal(studijskiProgramiURL, currentURL);
 browser.back();

 $(studiji).moveTo();
 var padajuciIzbornik5 = $('//*[@id="menu"]/li[6]/ul');
 padajuciIzbornik5.waitForExist(90000);

 var cjelozivotnoUcenje2 = $('//*[@id="menu"]/li[6]/ul/li[3]/a');
 cjelozivotnoUcenje2.click();
 var cjelozivotnoUcenje2URL = "https://www.ffos.unios.hr/cjelozivotno-ucenje/";
 var currentURL = browser.getUrl();
 assert.equal(cjelozivotnoUcenje2URL, currentURL);
 browser.back();

 $(studiji).moveTo();
 var padajuciIzbornik5 = $('//*[@id="menu"]/li[6]/ul');
 padajuciIzbornik5.waitForExist(90000);

 var poslijediplomski = $('//*[@id="menu"]/li[6]/ul/li[4]/a');
 poslijediplomski.click();
 var poslijediplomskiURL = "https://www.ffos.unios.hr/svi-doktorski-studiji-jezikoslovlje-knjizevnost-i-kulturni-identitet-pedagogija/naslovnica";
 var currentURL = browser.getUrl();
 assert.equal(poslijediplomskiURL, currentURL);
 browser.back();
 });

 it("Knjižnica", function() {
 $(knjiznica).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
 naslov.waitForExist(90000);
 var knjiznicaURL = "https://www.ffos.unios.hr/knjiznica";
 var currentURL = browser.getUrl();
 assert.equal(knjiznicaURL, currentURL);
 browser.back();
 });

 it("Izdavačka djelatnost", function() {
 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var casopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/a');
 casopisi.moveTo();
 var padajuciIzbornik7 = '//*[@id="menu"]/li[8]/ul/li[1]/ul';
 $(padajuciIzbornik7).waitForExist(90000);

 var anafora = $('//*[@id="menu"]/li[8]/ul/li[1]/ul/li[1]/a');
 anafora.click();
 var anaforaURL = "https://www.ffos.unios.hr/anafora";
 var currentURL = browser.getUrl();
 assert.equal(anaforaURL, currentURL);
 browser.back();

 //

 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var casopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/a');
 casopisi.moveTo();
 var padajuciIzbornik7 = '//*[@id="menu"]/li[8]/ul/li[1]/ul';
 $(padajuciIzbornik7).waitForExist(90000);

 var jezikoslovlje2 = $('//*[@id="menu"]/li[8]/ul/li[1]/ul/li[2]/a');
 jezikoslovlje2.click();
 var jezikoslovlje2URL = "https://www.ffos.unios.hr/jezikoslovlje";
 var currentURL = browser.getUrl();
 assert.equal(jezikoslovlje2URL, currentURL);
 browser.back();

 //

 $(izdavackaDjelatnost).moveTo();
 

 var casopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/a');
 casopisi.moveTo();
 var padajuciIzbornik7 = $('//*[@id="menu"]/li[8]/ul/li[1]/ul');
 padajuciIzbornik7.waitForExist(90000);

 var ostaliCasopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/ul/li[3]/a');
 ostaliCasopisi.click();
 var ostaliCasopisiURL = "https://www.ffos.unios.hr/ostali-casopisi";
 var currentURL = browser.getUrl();
 assert.equal(ostaliCasopisiURL, currentURL);
 browser.back();

 //

 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var studentskiCasopisi = $('//*[@id="menu"]/li[8]/ul/li[2]/a');
 studentskiCasopisi.moveTo();
 var padajuciIzbornik8 = '//*[@id="menu"]/li[8]/ul/li[2]/ul';
 $(padajuciIzbornik8).waitForExist(90000);

 var kick = $('//*[@id="menu"]/li[8]/ul/li[2]/ul/li[1]/a');
 kick.click();
 var kickURL = "https://www.ffos.unios.hr/kick";
 var currentURL = browser.getUrl();
 assert.equal(kickURL, currentURL);
 browser.back();

 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var studentskiCasopisi = $('//*[@id="menu"]/li[8]/ul/li[2]/a');
 studentskiCasopisi.moveTo();
 var padajuciIzbornik8 = '//*[@id="menu"]/li[8]/ul/li[2]/ul';
 $(padajuciIzbornik8).waitForExist(90000);

 var libros = $('//*[@id="menu"]/li[8]/ul/li[2]/ul/li[2]/a');
 libros.click();
 var librosURL = "https://www.ffos.unios.hr/libros";
 var currentURL = browser.getUrl();
 assert.equal(librosURL, currentURL);
 browser.back();
 //
 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var udzbenici = $('//*[@id="menu"]/li[8]/ul/li[3]/a');
 udzbenici.click();
 var udzbeniciURL = "https://www.ffos.unios.hr/udzbenici-i-prirucnici";
 var currentURL = browser.getUrl();
 assert.equal(udzbeniciURL, currentURL);
 browser.back();

 //
 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var znanstveneKnjige = $('//*[@id="menu"]/li[8]/ul/li[4]/a');
 znanstveneKnjige.click();
 var znanstveneKnjigeURL = "https://www.ffos.unios.hr/znanstvene-knjige";
 var currentURL = browser.getUrl();
 assert.equal(znanstveneKnjigeURL, currentURL);
 browser.back();

 //
 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var zbornici = $('//*[@id="menu"]/li[8]/ul/li[5]/a');
 zbornici.click();
 var zborniciURL = "https://www.ffos.unios.hr/zbornici";
 var currentURL = browser.getUrl();
 assert.equal(zborniciURL, currentURL);
 browser.back();

 //
 $(izdavackaDjelatnost).moveTo();
 var padajuciIzbornik6 = $('//*[@id="menu"]/li[8]/ul');
 padajuciIzbornik6.waitForExist(90000);

 var biblioteke = $('//*[@id="menu"]/li[8]/ul/li[6]/a');
 biblioteke.click();
 var bibliotekeURL = "https://www.ffos.unios.hr/biblioteke";
 var currentURL = browser.getUrl();
 assert.equal(bibliotekeURL, currentURL);
 browser.back();
 });

 it("Znanstveni portal", function() {
 $(znanstveniPortal).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
 naslov.waitForExist(90000);
 var znanstveniPortalURL = "https://www.ffos.unios.hr/znanstveni-portal";
 var currentURL = browser.getUrl();
 assert.equal(znanstveniPortalURL, currentURL);
 browser.back();
 });

 it("Centar za karijere", function() {
 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var dogadanja = $('//*[@id="menu"]/li[10]/ul/li[1]/a');
 dogadanja.click();
 var dogadanjaURL = "https://www.ffos.unios.hr/dogadanja-i-aktivnosti";
 var currentURL = browser.getUrl();
 assert.equal(dogadanjaURL, currentURL);
 browser.back();

 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var alumni = $('//*[@id="menu"]/li[10]/ul/li[2]/a');
 alumni.click();
 var alumniURL = "https://www.ffos.unios.hr/alumni-udruga-ffos";
 var currentURL = browser.getUrl();
 assert.equal(alumniURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var priceOUspjehu = $('//*[@id="menu"]/li[10]/ul/li[3]/a');
 priceOUspjehu.click();
 var priceOUspjehuURL = "https://www.ffos.unios.hr/price-o-uspjehu";
 var currentURL = browser.getUrl();
 assert.equal(priceOUspjehuURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var erasmus = '//*[@id="menu"]/li[10]/ul/li[4]/a';

 var padajuciIzbornik10 = $('//*[@id="menu"]/li[10]/ul/li[4]/ul');
 padajuciIzbornik10.moveTo();
 var iskustva = $('//*[@id="menu"]/li[10]/ul/li[4]/ul/li/a');
 iskustva.click();
 var iskustvaURL = "https://www.ffos.unios.hr/iskustva-studenata-koji-su-sudjelovali-u-erasmus-mobilnosti";
 var currentURL = browser.getUrl();
 assert.equal(iskustvaURL, currentURL);
 browser.back();

 erasmus.click();
 var erasmusURL = "https://www.ffos.unios.hr/referada/erasmus";
 var currentURL = browser.getUrl();
 assert.equal(erasmusURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var karijerniMentor = $('//*[@id="menu"]/li[10]/ul/li[5]/a');
 karijerniMentor.click();
 var karijerniMentorURL = "https://www.ffos.unios.hr/unajmi-karijernog-mentora";
 var currentURL = browser.getUrl();
 assert.equal(karijerniMentorURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var strucnaPraksa = $('//*[@id="menu"]/li[10]/ul/li[6]/a');
 strucnaPraksa.click();
 var strucnaPraksaURL = "https://www.ffos.unios.hr/strucna-praksa";
 var currentURL = browser.getUrl();
 assert.equal(strucnaPraksaURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var izvannastavneAktivnosti = $('//*[@id="menu"]/li[10]/ul/li[7]/a');
 izvannastavneAktivnosti.click();
 var izvannastavneAktivnostiURL = "https://www.ffos.unios.hr/izvannastavne-aktivnosti-29-08-2018";
 var currentURL = browser.getUrl();
 assert.equal(izvannastavneAktivnostiURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var tipsAndTricks = $('//*[@id="menu"]/li[10]/ul/li[8]/a');
 tipsAndTricks.click();
 var tipsAndTricksURL = "https://www.ffos.unios.hr/tips-tricks";
 var currentURL = browser.getUrl();
 assert.equal(tipsAndTricksURL, currentURL);
 browser.back();
 //

 $(centarZaKarijere).moveTo();
 var padajuciIzbornik9 = $('//*[@id="menu"]/li[10]/ul');
 padajuciIzbornik9.waitForExist(90000);

 var kontakt = $('//*[@id="menu"]/li[10]/ul/li[9]/a');
 kontakt.click();
 var kontaktURL = "https://www.ffos.unios.hr/kontaktiraj-nas";
 var currentURL = browser.getUrl();
 assert.equal(kontaktURL, currentURL);
 browser.back();

 /* Stranice kontaktiraj nas, tips and tricks, izvannastavne aktivnosti, stručna praksa
 i unajmi karijernog mentora su prazne sto se sadrzaja tice */

 //
 $(centarZaKarijere).click();
 var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
 naslov.waitForExist(90000);
 var centarZaKarijereURL = "https://www.ffos.unios.hr/centar-za-karijere";
 var currentURL = browser.getUrl();
 assert.equal(centarZaKarijereURL, currentURL);
 });
});