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
    $(topMenu).waitForExist(90000);
  });

  it("Prijava", function() {
    $(prijava).click();
    let forma = $("/html/body/div/div[1]/form/div/div[2]");
    forma.waitForExist(90000);

    let prijavaURL = "https://www.ffos.unios.hr/login";
    let currentURL = browser.getUrl();
    assert.equal(prijavaURL, currentURL);
  });

  it("Studenti", function() {
    $(studenti).moveTo();
    let padajuciIzbornikStudenti = $(".dropper-menu");
    padajuciIzbornikStudenti.waitForExist(90000);

    let infPaketi = $('//*[@id="top-menu"]/li[2]/ul/li[1]');
    infPaketi.click();
    let content = $('//*[@id="page"]/div/div/div[2]/div');
    content.waitForExist(9000);
    let infPaketiURL =
      "https://www.ffos.unios.hr/informacijski-paket-za-studente-10-09-2018";
    let currentURL = browser.getUrl();
    assert.equal(infPaketiURL, currentURL);
    browser.back();
    //
    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    let zbor = $('//*[@id="top-menu"]/li[2]/ul/li[2]');
    zbor.click();
    let naslovZbor = $('//*[@id="page"]/div/div/div[1]/h3[2]');
    naslovZbor.waitForExist(9000);
    let zborURL = "https://www.ffos.unios.hr/studentski-zbor";
    let currentURL = browser.getUrl();
    assert.equal(zborURL, currentURL);
    browser.back();
    //
    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    let referada = $('//*[@id="top-menu"]/li[2]/ul/li[3]');
    referada.click();
    let referadaURL = "https://www.ffos.unios.hr/referada";
    let currentURL = browser.getUrl();
    assert.equal(referadaURL, currentURL);
    browser.back();
    //
    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    let satZaStudente = $('//*[@id="top-menu"]/li[2]/ul/li[4]');
    satZaStudente.click();
    let naslovSatZaStudente = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovSatZaStudente.waitForExist(90000);
    let satZaStudenteURL =
      "https://www.ffos.unios.hr/prodekanski-sat-za-studente";
    let currentURL = browser.getUrl();
    assert.equal(satZaStudenteURL, currentURL);
    browser.back();
    //
    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);
    

    let molbeIPrigovori = $('//*[@id="top-menu"]/li[2]/ul/li[5]');
    molbeIPrigovori.click();
    let naslovMolbeIPrigovori = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovMolbeIPrigovori.waitForExist(90000);
    let molbeIPrigovoriURL =
      "https://www.ffos.unios.hr/povjerenstvo-za-nastavu-i-studentska-pitanja";
    let currentURL = browser.getUrl();
    assert.equal(molbeIPrigovoriURL, currentURL);
    browser.back();
    //
    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    let pravobranitelj = $('//*[@id="top-menu"]/li[2]/ul/li[6]');
    pravobranitelj.click();
    let naslovPravobranitelj = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovPravobranitelj.waitForExist(90000);
    let pravobraniteljURL =
      "https://www.ffos.unios.hr/studentski-pravobranitelj";
    let currentURL = browser.getUrl();
    assert.equal(pravobraniteljURL, currentURL);
    browser.back();
    //
    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    let studentProdekan = $('//*[@id="top-menu"]/li[2]/ul/li[7]');
    studentProdekan.click();
    let naslovProdekan = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovProdekan.waitForExist(90000);
    let studentProdekanURL = "https://www.ffos.unios.hr/student-prodekan";
    let currentURL = browser.getUrl();
    assert.equal(studentProdekanURL, currentURL);
    browser.back();
    //

    $(studenti).moveTo();
  
    padajuciIzbornikStudenti.waitForExist(90000);

    let izvannastavneAktivnosti = $('//*[@id="top-menu"]/li[2]/ul/li[8]');
    izvannastavneAktivnosti.moveTo();

    let pohvala = $('//*[@id="top-menu"]/li[2]/ul/li[8]/ul/li[1]');
    pohvala.moveTo();
    pohvala.click();
    let naslovPohvale = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovPohvale.waitForExist(90000);
    let pohvalaURL =
      "https://www.ffos.unios.hr/kandidatura-za-pohvalu-za-izvannastavne-aktivnosti";
    let currentURL = browser.getUrl();
    assert.equal(pohvalaURL, currentURL);
    browser.back();

    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    
    izvannastavneAktivnosti.moveTo();

    let kluboviIIzdanja = $('//*[@id="top-menu"]/li[2]/ul/li[8]/ul/li[2]/a');
    kluboviIIzdanja.moveTo();
    kluboviIIzdanja.click();
    let naslovKluboviIIzdanja = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovKluboviIIzdanja.waitForExist(90000);
    let kluboviIIzdanjaURL =
      "https://www.ffos.unios.hr/studentski-klubovi-i-izdanja";
    let currentURL = browser.getUrl();
    assert.equal(kluboviIIzdanjaURL, currentURL);
    browser.back();

    $(studenti).moveTo();
    
    padajuciIzbornikStudenti.waitForExist(90000);

    let sustavZaKvalitetu = $('//*[@id="top-menu"]/li[2]/ul/li[11]');
    padajuciIzbornikStudenti.scrollIntoView();
    sustavZaKvalitetu.click();
    let sustavZaKvalitetuURL =
      "https://www.ffos.unios.hr/sustav-za-kvalitetu-studenti";
    let currentURL = browser.getUrl();
    assert.equal(sustavZaKvalitetuURL, currentURL);
    browser.url("./");
    $(topMenu).waitForExist(90000);

    //
    $(studenti).moveTo();
    $(studenti).click();
    let naslovStudenti = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovStudenti.waitForExist(90000);
    let studentiURL = "https://www.ffos.unios.hr/odlazna-mobilnost-studenata";
    let currentURL = browser.getUrl();
    assert.equal(studentiURL, currentURL);
    browser.back();
  });

  it("Buducim studentima", function() {
    $(buducimStudentima).moveTo();
    let padajuciIzbornikBuducimStudentima = $(".dropper-menu");
    padajuciIzbornikBuducimStudentima.waitForExist(90000);

    let zastoFFOS = $('//*[@id="top-menu"]/li[3]/ul/li[1]');
    zastoFFOS.click();
    //Logo na ovoj stranici vodi na stranice pravnog fakulteta. Zasto????
    let zastoFFOSURL = "https://www.ffos.unios.hr/upisiffos/index.html";
    let currentURL = browser.getUrl();
    assert.equal(zastoFFOSURL, currentURL);

    let meni = $('//*[@id="menuToggle"]');
    meni.click();
    let pocetna = $('//*[@id="theMenu"]/div[1]/a');
    pocetna.click();

    $(buducimStudentima).moveTo();
    let upisi = $('//*[@id="top-menu"]/li[3]/ul/li[2]/a');
    upisi.moveTo();

    let upisStudenata = $('//*[@id="top-menu"]/li[3]/ul/li[2]/ul/li[1]/a');
    upisStudenata.click();
    let upisStudenataURL =
      "https://www.ffos.unios.hr/upis-studenata-u-akademsku-godinu-20192020";
    let currentURL = browser.getUrl();
    assert.equal(upisStudenataURL, currentURL);
    browser.back();

    $(buducimStudentima).moveTo();
    upisi.moveTo();
    let upisDiplomski = $('//*[@id="top-menu"]/li[3]/ul/li[2]/ul/li[2]/a');
    upisDiplomski.click();
    let upisDiplomskiURL =
      "https://www.ffos.unios.hr/upisi-na-diplomske-sveucilisne-studije";
    let currentURL = browser.getUrl();
    assert.equal(upisDiplomskiURL, currentURL);
    browser.back();

    $(buducimStudentima).click();
    let naslovBuducimStudentima = $('//*[@id="page"]/div/div/div[1]/h3');
    naslovBuducimStudentima.waitForExist(90000);
    let buducimStudentimaURL =
      "https://www.ffos.unios.hr/zasto-studirati-na-filozofskom-fakultetu-u-osijeku";
    let currentURL = browser.getUrl();
    assert.equal(buducimStudentimaURL, currentURL);
    browser.back();
  });

  it("Kontakt", function() {
    $(kontakt).moveTo();
    let kontaktDown = $('//*[@id="top-menu"]/li[4]/ul/li[1]/a');
    kontaktDown.click();
    let kontaktDownURL = "https://www.ffos.unios.hr/kontakt";
    let currentURL = browser.getUrl();
    assert.equal(kontaktDownURL, currentURL);
    browser.back();

    $(kontakt).moveTo();
    let gdjeSmo = $('//*[@id="top-menu"]/li[4]/ul/li[2]/a');
    gdjeSmo.click();
    let gdjeSmoURL = "https://www.ffos.unios.hr/gdje-smo";
    let currentURL = browser.getUrl();
    assert.equal(gdjeSmoURL, currentURL);
    browser.back();
  });

  it("Galerija", function() {
    $(galerija).moveTo();
    let promocije = $('//*[@id="top-menu"]/li[5]/ul/li[1]/a');
    promocije.moveTo();
    let prvostupnici = $('//*[@id="top-menu"]/li[5]/ul/li[1]/ul/li[1]/a');
    prvostupnici.click();
    let prvostupniciURL = "https://www.ffos.unios.hr/promocija-prvostupnika";
    let currentURL = browser.getUrl();
    assert.equal(prvostupniciURL, currentURL);
    browser.back();

    $(galerija).moveTo();
    
    promocije.moveTo();
    let magistri = $('//*[@id="top-menu"]/li[5]/ul/li[1]/ul/li[2]/a');
    magistri.click();
    let magistriURL = "https://www.ffos.unios.hr/promocija-magistara";
    let currentURL = browser.getUrl();
    assert.equal(magistriURL, currentURL);
    browser.back();

    $(galerija).moveTo();
    let dogadanjaISkupovi = $('//*[@id="top-menu"]/li[5]/ul/li[2]/a');
    dogadanjaISkupovi.click();
    let dogadanjaISkupoviURL = "https://www.ffos.unios.hr/dogadanja-i-skupovi";
    let currentURL = browser.getUrl();
    assert.equal(dogadanjaISkupoviURL, currentURL);
    browser.back();
  });

  it("Arhiva", function() {
    $(arhiva).click();
    let formaArhiva = $("/html/body/div/div[1]/form/div/div[2]");
    formaArhiva.waitForExist(90000);
    let arhivaURL = "https://www.ffos.unios.hr/arhiva/login";
    let currentURL = browser.getUrl();
    assert.equal(arhivaURL, currentURL);
    browser.back();
  });

  it("Intranet", function() {
    $(intranet).click();
    let formaIntranet = $("/html/body/div/div[1]/div/div[2]");
    formaIntranet.waitForExist(90000);

    let intranetURL = "https://sokrat.ffos.hr/ff-intranet/login.php";
    let currentURL = browser.getUrl();
    assert.equal(intranetURL, currentURL);

    let mail = $("/html/body/div/div[1]/div/div[2]/form/input[1]");
    mail.addValue("mail");
    console.log("******************" + mail.getValue());

    let input = $("/html/body/div/div[1]/div/div[2]/form/input[2]");
    input.addValue("pass");
    console.log("******************" + input.getValue());

    let gumbPrijava = $("/html/body/div/div[1]/div/div[2]/form/input[3]");
    gumbPrijava.click();

    let greska = $("/html/body/div/div[1]/div/div[1]");
    greska.waitForExist(90000);
    assert.equal(greska.getText(), "Nepostojeće korisničko ime!");

    //
    mail.clearValue();
    value = mail.getValue();
    assert(value === "");
    //

    let formaStudenti = $("/html/body/div/div[2]/div[1]/div/div");
    formaStudenti.waitForExist(90000);

    let mail1 = $("/html/body/div/div[2]/div[1]/div/div/div/form/input[1]");
    mail1.addValue("mail");
    console.log("******************" + mail1.getValue());

    let pass1 = $("/html/body/div/div[2]/div[1]/div/div/div/form/input[2]");
    pass1.addValue("pass");
    console.log("******************" + pass1.getValue());

    let gumbPrijavaStudenti = $(
      "/html/body/div/div[2]/div[1]/div/div/div/form/input[3]"
    );
    gumbPrijavaStudenti.click();

    let greska1 = $("/html/body/div/div/div/div[1]");
    greska1.waitForExist(90000);

    //
    mail.clearValue();
    value = mail.getValue();
    assert(value === "");
    //

    let mail2 = $("/html/body/div/div/div/div[2]/form/input[1]");
    mail2.addValue("eeskic@ffos.hr");
    console.log("******************" + mail2.getValue());

    let pass2 = $("/html/body/div/div/div/div[2]/form/input[2]");
    pass2.addValue("uWJtDSqj");
    console.log("******************" + pass2.getValue());

    let gumbPrijavaStudenti2 = $("/html/body/div/div/div/div[2]/form/input[3]");
    gumbPrijavaStudenti2.click();

    let provjera = $(".text-primary.logged-user");
    provjera.waitForExist(9000);

    browser.navigateTo("https://sokrat.ffos.hr/ff-intranet/login.php");

    let formaMentori = $("/html/body/div/div[2]/div[3]/div/div");
    formaMentori.waitForExist(90000);

    let mail3 = $("/html/body/div/div[2]/div[3]/div/div/div/form/input[1]");
    mail3.addValue("mail");
    console.log(mail.getValue());

    let pass3 = $("/html/body/div/div[2]/div[3]/div/div/div/form/input[2]");
    pass3.addValue("pass");
    console.log(pass3.getValue());

    let gumbPrijavaMentori = $(
      "/html/body/div/div[2]/div[3]/div/div/div/form/input[3]"
    );
    gumbPrijavaMentori.click();

    let greska2 = $("/html/body/div/div/div/div[1]");
    greska2.waitForExist(90000);
  });
});
