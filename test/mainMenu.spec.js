var mainMenu = $("#menu");
var naslovna = $('//*[@id="menu"]/li[1]/a');
var oNama = $('//*[@id="menu"]/li[2]/a');
var sustavZaKvalitetu = $('//*[@id="menu"]/li[3]/a');
var odsjeciKatedre = $('//*[@id="menu"]/li[4]/a');
var nastava = $('//*[@id="menu"]/li[5]/a');
var studiji = $('//*[@id="menu"]/li[6]/a');
var knjiznica = $('//*[@id="menu"]/li[7]/a');
var izdavackaDjelatnost = $('//*[@id="menu"]/li[8]/a');
var znanstveniPortal = $('//*[@id="menu"]/li[9]/a');
var centarZaKarijere = $('//*[@id="menu"]/li[10]/a');
var padajuciIzbornikONama = $('//*[@id="menu"]/li[2]/ul');
var opciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/a');
var padajuciIzbornikOpciPodaci = $('//*[@id="menu"]/li[2]/ul/li[1]/ul');
var padajuciIzbornikOdsjeciIKatedre = $('//*[@id="menu"]/li[4]/ul');
var padajuciIzbornikNastava = $('//*[@id="menu"]/li[5]/ul');
var padajuciIzbornikStudiji = $('//*[@id="menu"]/li[6]/ul');
var padajuciIzbornikIzdavackaDjelatnost = $('//*[@id="menu"]/li[8]/ul');
var padajuciIzbornikCasopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/ul');
var padajuciIzbornikStudentskiCasopisi = $('//*[@id="menu"]/li[8]/ul/li[2]/ul');
var padajuciIzbornikCentarZaKarijere = $('//*[@id="menu"]/li[10]/ul');
var studentskiCasopisi = $('//*[@id="menu"]/li[8]/ul/li[2]/a');
var casopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/a');
var assert = require("assert");

describe("Main Menu", function() {
  beforeEach(function() {
    browser.url("./");
    mainMenu.waitForExist(90000);
  });

  it("Naslovna", function() {
    naslovna.click();
    let naslovnaURL = "https://www.ffos.unios.hr/";
    let currentURL = browser.getUrl();
    assert.equal(naslovnaURL, currentURL);
  });

  it("O nama", function() {
    
    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    
    opciPodaci.moveTo();
    opciPodaci.click();
    let opciPodaciURL = "https://www.ffos.unios.hr/misija-i-vizija";
    let currentURL = browser.getUrl();
    assert.equal(opciPodaciURL, currentURL);
    browser.back();
    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    
    opciPodaci.moveTo();
    
    padajuciIzbornikOpciPodaci.waitForExist(90000);

    let misijaIVizija = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[1]/a');
    misijaIVizija.click();

    let misijaIVizijaURL = "https://www.ffos.unios.hr/misija-i-vizija";
    let currentURL = browser.getUrl();
    assert.equal(misijaIVizijaURL, currentURL);
    browser.back();
    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    
    
    opciPodaci.moveTo();
    
    padajuciIzbornikOpciPodaci.waitForExist(90000);

    let uprava = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[2]/a');
    uprava.moveTo();
    uprava.click();

    let upravaURL = "https://www.ffos.unios.hr/uprava";
    let currentURL = browser.getUrl();
    assert.equal(upravaURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //
    /*var izdvojeneVijestiNaslov = $('//*[@id="featured-news"]/div/div/div[1]/h3');
    izdvojeneVijestiNaslov.scrollIntoView;*/

    oNama.moveTo();
   
    padajuciIzbornikONama.moveTo();
    padajuciIzbornikONama.scrollIntoView();
    
    
    
    opciPodaci.moveTo();
    
    padajuciIzbornikOpciPodaci.waitForExist(90000);


    let nastavnici = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[3]/a');
    nastavnici.moveTo();
    nastavnici.click();

    let nastavniciURL = "https://www.ffos.unios.hr/nastavnici";
    let currentURL = browser.getUrl();
    assert.equal(nastavniciURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    
    opciPodaci.moveTo();
    
    padajuciIzbornikOpciPodaci.waitForExist(90000);
    

    let sluzbe = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[4]/a');
    sluzbe.click();

    let sluzbeURL = "https://www.ffos.unios.hr/fakultetske-sluzbe";
    let currentURL = browser.getUrl();
    assert.equal(sluzbeURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    
    opciPodaci.moveTo();
    
    padajuciIzbornikOpciPodaci.waitForExist(90000);
    

    let imenik = $('//*[@id="menu"]/li[2]/ul/li[1]/ul/li[5]/a');
    imenik.click();

    let imenikURL = "https://www.ffos.unios.hr/telefonski-imenik";
    let currentURL = browser.getUrl();
    assert.equal(imenikURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.click();
    let naslov = $('//*[@id="page"]/div/div/div[1]/h3');
    naslov.waitForExist(90000);

    let oNamaURL = "https://www.ffos.unios.hr/misija-i-vizija";
    let currentURL = browser.getUrl();
    assert.equal(oNamaURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let suradnja = $('//*[@id="menu"]/li[2]/ul/li[2]/a');
    suradnja.click();

    let suradnjaURL = "https://www.ffos.unios.hr/suradnja";
    let currentURL = browser.getUrl();
    assert.equal(suradnjaURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo(); 
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let dokumenti = $('//*[@id="menu"]/li[2]/ul/li[3]/a');
    dokumenti.click();

    let dokumentiURL = "https://www.ffos.unios.hr/dokumenti";
    let currentURL = browser.getUrl();
    assert.equal(dokumentiURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let javnaNabava = $('//*[@id="menu"]/li[2]/ul/li[4]/a');
    javnaNabava.click();

    let javnaNabavaURL = "https://www.ffos.unios.hr/javna-nabava";
    let currentURL = browser.getUrl();
    assert.equal(javnaNabavaURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
   padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let pristupInf = $('//*[@id="menu"]/li[2]/ul/li[5]/a');
    pristupInf.click();

    let pristupInfURL = "https://www.ffos.unios.hr/pravo-na-pristup-informacijama";
    let currentURL = browser.getUrl();
    assert.equal(pristupInfURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let zastitaPodataka = $('//*[@id="menu"]/li[2]/ul/li[6]/a');
    zastitaPodataka.click();
    let zastitaPodatakaURL =
      "https://www.ffos.unios.hr/zastita-osobnih-podataka";
    let currentURL = browser.getUrl();
    assert.equal(zastitaPodatakaURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let planZgrade = $('//*[@id="menu"]/li[2]/ul/li[7]/a');
    planZgrade.click();
    let planZgradeURL = "https://www.ffos.unios.hr/plan-zgrade";
    let currentURL = browser.getUrl();
    assert.equal(planZgradeURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");

    //

    oNama.moveTo();
    
    padajuciIzbornikONama.waitForExist(90000);
    padajuciIzbornikONama.scrollIntoView();
    let faq = $('//*[@id="menu"]/li[2]/ul/li[8]/a');
    faq.click();

    let faqURL = "https://www.ffos.unios.hr/faq";
    let currentURL = browser.getUrl();
    assert.equal(faqURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");
  });





  
  it("Sustav za kvalitetu", function() {
    sustavZaKvalitetu.click();
    let naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
    naslov.waitForExist(90000);

    let sustavZaKvalitetuURL = "https://www.ffos.unios.hr/sustav-za-kvalitetu";
    let currentURL = browser.getUrl();
    assert.equal(sustavZaKvalitetuURL, currentURL);
    browser.url("https://www.ffos.unios.hr/");
  });

  it("Odsjeci i katedre", function() {
    odsjeciKatedre.moveTo();
    
    $('//*[@id="menu"]/li[4]/ul/li[1]').waitForExist(90000);
    $('//*[@id="menu"]/li[4]/ul/li[1]').moveTo();
    let engleski = $('//*[@id="menu"]/li[4]/ul/li[1]/a');
    engleski.click();
    let engleskiURL = "https://www.ffos.unios.hr/anglistika";
    let currentURL = browser.getUrl();
    assert.equal(engleskiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.moveTo();
    $('//*[@id="menu"]/li[4]/ul/li[1]').waitForExist(90000);
    $('//*[@id="menu"]/li[4]/ul/li[1]').moveTo();

    let filozofija = $('//*[@id="menu"]/li[4]/ul/li[2]/a');
    filozofija.click();
    let filozofijaURL = "https://www.ffos.unios.hr/filozofija";
    let currentURL = browser.getUrl();
    assert.equal(filozofijaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    $('//*[@id="menu"]/li[4]/ul/li[1]').waitForExist(90000);
    $('//*[@id="menu"]/li[4]/ul/li[1]').moveTo();
    $('//*[@id="menu"]/li[4]/ul/li[1]').scrollIntoView();

    let hrvatski = $('//*[@id="menu"]/li[4]/ul/li[3]/a');
    
    hrvatski.moveTo();
    hrvatski.click();
    let hrvatskiURL = "https://www.ffos.unios.hr/hrvatski";
    let currentURL = browser.getUrl();
    assert.equal(hrvatskiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let infoZnanosti = $('//*[@id="menu"]/li[4]/ul/li[4]/a');
    infoZnanosti.moveTo();
    infoZnanosti.click();

    let infoZnanostiURL = "https://www.ffos.unios.hr/infoznanosti";
    let currentURL = browser.getUrl();
    assert.equal(infoZnanostiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //ovo ne mpžemo testirati zbog palatala u linku
   /* $(odsjeciKatedre).waitForExist();
    $(odsjeciKatedre).moveTo();
    var padajuciIzbornikOdsjeciIKatedre = $('//*[@id="menu"]/li[4]/ul');
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    var madarski = $('//*[@id="menu"]/li[4]/ul/li[5]/a');
    madarski.click();
    var madarskiURL = "https://www.ffos.unios.hr/mađarski";
    var currentURL = browser.getUrl();
    assert.equal(madarskiURL, currentURL);
    browser.back(); */
  
    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let germanistika = $('//*[@id="menu"]/li[4]/ul/li[6]/a');
    germanistika.moveTo();
    germanistika.click();

    let germanistikaURL = "https://www.ffos.unios.hr/germanistika";
    let currentURL = browser.getUrl();
    assert.equal(germanistikaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let pedagogija = $('//*[@id="menu"]/li[4]/ul/li[7]/a');
    pedagogija.moveTo();
    pedagogija.click();

    let pedagogijaURL = "https://www.ffos.unios.hr/pedagogija";
    let currentURL = browser.getUrl();
    assert.equal(pedagogijaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let povijest = $('//*[@id="menu"]/li[4]/ul/li[8]/a');
    povijest.moveTo();
    povijest.click();

    let povijestURL = "https://www.ffos.unios.hr/povijest";
    let currentURL = browser.getUrl();
    assert.equal(povijestURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let psihologija = $('//*[@id="menu"]/li[4]/ul/li[9]/a');
    psihologija.moveTo();
    psihologija.click();

    let psihologijaURL = "https://www.ffos.unios.hr/psihologija/naslovna";
    let currentURL = browser.getUrl();
    assert.equal(psihologijaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let sociologija = $('//*[@id="menu"]/li[4]/ul/li[10]/a');
    sociologija.moveTo();
    sociologija.click();

    let sociologijaURL = "https://www.ffos.unios.hr/sociologija";
    let currentURL = browser.getUrl();
    assert.equal(sociologijaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let zajednickiSadrzaj = $('//*[@id="menu"]/li[4]/ul/li[11]/a');
    zajednickiSadrzaj.moveTo();
    zajednickiSadrzaj.click();

    let zajednickiSadrzajURL = "https://www.ffos.unios.hr/kzs";
    let currentURL = browser.getUrl();
    assert.equal(zajednickiSadrzajURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.moveTo();
    
    padajuciIzbornikOdsjeciIKatedre.waitForExist(90000);
    padajuciIzbornikOdsjeciIKatedre.scrollIntoView();
    let cjelozivotnoUcenje = $('//*[@id="menu"]/li[4]/ul/li[12]/a');
    cjelozivotnoUcenje.moveTo();
    cjelozivotnoUcenje.click();
    let cjelozivotnoUcenjeURL = "https://www.ffos.unios.hr/cjelozivotno-ucenje";
    let currentURL = browser.getUrl();
    assert.equal(cjelozivotnoUcenjeURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    odsjeciKatedre.waitForExist();
    odsjeciKatedre.click();
    let naslov = $('//*[@id="page"]/div/div/div[1]/h3');
    naslov.waitForExist(90000);
    let odsjeciKatedreURL = "https://www.ffos.unios.hr/odsjeci-i-katedre";
    let currentURL = browser.getUrl();
    assert.equal(odsjeciKatedreURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
  });








  it("Nastava", function() {
    nastava.moveTo();
    
    padajuciIzbornikNastava.waitForExist(90000);
    padajuciIzbornikNastava.scrollIntoView();

    let nastavniKalendar = $('//*[@id="menu"]/li[5]/ul/li[1]/a');
    nastavniKalendar.click();
    let nastavniKalendarURL = "https://www.ffos.unios.hr/nastavni-kalendar";
    let currentURL = browser.getUrl();
    assert.equal(nastavniKalendarURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    nastava.moveTo();

    
    padajuciIzbornikNastava.waitForExist(90000);
    padajuciIzbornikNastava.scrollIntoView();


    let izvedbeniPlan = $('//*[@id="menu"]/li[5]/ul/li[2]/a');
    izvedbeniPlan.click();
    let izvedbeniPlanURL = "https://www.ffos.unios.hr/izvedbeni-planovi-nastave";
    let currentURL = browser.getUrl();
    assert.equal(izvedbeniPlanURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    nastava.moveTo();
    
    padajuciIzbornikNastava.waitForExist(90000);
    padajuciIzbornikNastava.scrollIntoView();


    let rasporedSati = $('//*[@id="menu"]/li[5]/ul/li[3]/a');
    rasporedSati.click();
    let rasporedSatiURL = "https://www.ffos.unios.hr/raspored-sati";
    let currentURL = browser.getUrl();
    assert.equal(rasporedSatiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
  });






  it("Studiji", function() {
    studiji.moveTo();
    
    padajuciIzbornikStudiji.waitForExist(90000);
    padajuciIzbornikStudiji.scrollIntoView();


    let bolonja = $('//*[@id="menu"]/li[6]/ul/li[1]/a');
    bolonja.click();
    let bolonjaURL = "https://www.ffos.unios.hr/bolonjski-programi";
    let currentURL = browser.getUrl();
    assert.equal(bolonjaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    studiji.moveTo();
    
    padajuciIzbornikStudiji.waitForExist(90000);
    padajuciIzbornikStudiji.scrollIntoView();


    let studijskiProgrami = $('//*[@id="menu"]/li[6]/ul/li[2]/a');
    studijskiProgrami.click();
    let studijskiProgramiURL = "https://www.ffos.unios.hr/studijski-programi";
    let currentURL = browser.getUrl();
    assert.equal(studijskiProgramiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    studiji.moveTo();
    
    padajuciIzbornikStudiji.waitForExist(90000);
    padajuciIzbornikStudiji.scrollIntoView();


    let cjelozivotnoUcenjeMain = $('//*[@id="menu"]/li[6]/ul/li[3]/a');
    cjelozivotnoUcenjeMain.click();
    let cjelozivotnoUcenjeMainURL = "https://www.ffos.unios.hr/cjelozivotno-ucenje";
    let currentURL = browser.getUrl();
    assert.equal(cjelozivotnoUcenjeMainURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    studiji.moveTo();
    
    padajuciIzbornikStudiji.waitForExist(90000);
    padajuciIzbornikStudiji.scrollIntoView();


    let poslijediplomski = $('//*[@id="menu"]/li[6]/ul/li[4]/a');
    poslijediplomski.click();
    let poslijediplomskiURL = "https://www.ffos.unios.hr/svi-doktorski-studiji-jezikoslovlje-knjizevnost-i-kulturni-identitet-pedagogija/naslovnica";
    let currentURL = browser.getUrl();
    assert.equal(poslijediplomskiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
  });

  it("Knjižnica", function() {
    knjiznica.click();
    let naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
    naslov.waitForExist(90000);
    let knjiznicaURL = "https://www.ffos.unios.hr/knjiznica";
    let currentURL = browser.getUrl();
    assert.equal(knjiznicaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
  });







  it("Izdavačka djelatnost", function() {
    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);

    
    casopisi.moveTo();

    
    padajuciIzbornikCasopisi.waitForExist(90000);

    let anafora = $('//*[@id="menu"]/li[8]/ul/li[1]/ul/li[1]/a');
    anafora.click();
    let anaforaURL = "https://www.ffos.unios.hr/anafora";
    let currentURL = browser.getUrl();
    assert.equal(anaforaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //

    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();


    
    casopisi.moveTo();
    
    padajuciIzbornikCasopisi.waitForExist(90000);

    let jezikoslovlje2 = $('//*[@id="menu"]/li[8]/ul/li[1]/ul/li[2]/a');
    jezikoslovlje2.click();
    let jezikoslovlje2URL = "https://www.ffos.unios.hr/jezikoslovlje";
    let currentURL = browser.getUrl();
    assert.equal(jezikoslovlje2URL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //

    izdavackaDjelatnost.moveTo();

    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    
    casopisi.moveTo();
    
    padajuciIzbornikCasopisi.waitForExist(90000);

    let ostaliCasopisi = $('//*[@id="menu"]/li[8]/ul/li[1]/ul/li[3]/a');
    ostaliCasopisi.click();
    let ostaliCasopisiURL = "https://www.ffos.unios.hr/ostali-casopisi";
    let currentURL = browser.getUrl();
    assert.equal(ostaliCasopisiURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //

    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    
    studentskiCasopisi.moveTo();
    
    padajuciIzbornikStudentskiCasopisi.waitForExist(90000);

    let kick = $('//*[@id="menu"]/li[8]/ul/li[2]/ul/li[1]/a');
    kick.click();
    let kickURL = "https://www.ffos.unios.hr/kick";
    let currentURL = browser.getUrl();
    assert.equal(kickURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    
    studentskiCasopisi.moveTo();
    
    padajuciIzbornikStudentskiCasopisi.waitForExist(90000);

    let libros = $('//*[@id="menu"]/li[8]/ul/li[2]/ul/li[2]/a');
    libros.click();
    let librosURL = "https://www.ffos.unios.hr/libros";
    let currentURL = browser.getUrl();
    assert.equal(librosURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //
    izdavackaDjelatnost.moveTo();
   
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    let udzbenici = $('//*[@id="menu"]/li[8]/ul/li[3]/a');
    udzbenici.click();
    let udzbeniciURL = "https://www.ffos.unios.hr/udzbenici-i-prirucnici";
    let currentURL = browser.getUrl();
    assert.equal(udzbeniciURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    let znanstveneKnjige = $('//*[@id="menu"]/li[8]/ul/li[4]/a');
    znanstveneKnjige.click();
    let znanstveneKnjigeURL = "https://www.ffos.unios.hr/znanstvene-knjige";
    let currentURL = browser.getUrl();
    assert.equal(znanstveneKnjigeURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    let zbornici = $('//*[@id="menu"]/li[8]/ul/li[5]/a');
    zbornici.click();
    let zborniciURL = "https://www.ffos.unios.hr/zbornici";
    let currentURL = browser.getUrl();
    assert.equal(zborniciURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //
    izdavackaDjelatnost.moveTo();
    
    padajuciIzbornikIzdavackaDjelatnost.waitForExist(90000);
    padajuciIzbornikIzdavackaDjelatnost.scrollIntoView();

    let biblioteke = $('//*[@id="menu"]/li[8]/ul/li[6]/a');
    biblioteke.click();
    let bibliotekeURL = "https://www.ffos.unios.hr/biblioteke";
    let currentURL = browser.getUrl();
    assert.equal(bibliotekeURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
  });

  it("Znanstveni portal", function() {
    znanstveniPortal.click();
    let naslov = $('//*[@id="page"]/div/div/div[1]/h3[2]');
    naslov.waitForExist(90000);
    let znanstveniPortalURL = "https://www.ffos.unios.hr/znanstveni-portal";
    let currentURL = browser.getUrl();
    assert.equal(znanstveniPortalURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
  });
 



  it("Centar za karijere", function() {
    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let dogadanja = $('//*[@id="menu"]/li[10]/ul/li[1]/a');
    dogadanja.click();
    let dogadanjaURL = "https://www.ffos.unios.hr/dogadanja-i-aktivnosti";
    let currentURL = browser.getUrl();
    assert.equal(dogadanjaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let alumni = $('//*[@id="menu"]/li[10]/ul/li[2]/a');
    alumni.click();
    let alumniURL = "https://www.ffos.unios.hr/alumni-udruga-ffos";
    let currentURL = browser.getUrl();
    assert.equal(alumniURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let priceOUspjehu = $('//*[@id="menu"]/li[10]/ul/li[3]/a');
    priceOUspjehu.click();
    let priceOUspjehuURL = "https://www.ffos.unios.hr/price-o-uspjehu";
    let currentURL = browser.getUrl();
    assert.equal(priceOUspjehuURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let erasmus = $('//*[@id="menu"]/li[10]/ul/li[4]/a');
    erasmus.moveTo();

    let padajuciIzbornikErasmus = $('//*[@id="menu"]/li[10]/ul/li[4]/ul');
    padajuciIzbornikErasmus.moveTo();
    let iskustva = $('//*[@id="menu"]/li[10]/ul/li[4]/ul/li/a');
    iskustva.moveTo();
    iskustva.click();
    let iskustvaURL = "https://www.ffos.unios.hr/iskustva-studenata-koji-su-sudjelovali-u-erasmus-mobilnosti";
    let currentURL = browser.getUrl();
    assert.equal(iskustvaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    
    erasmus.click();
    let erasmusURL = "https://www.ffos.unios.hr/referada/erasmus";
    let currentURL = browser.getUrl();
    assert.equal(erasmusURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let karijerniMentor = $('//*[@id="menu"]/li[10]/ul/li[5]/a');
    karijerniMentor.click();
    let karijerniMentorURL = "https://www.ffos.unios.hr/unajmi-karijernog-mentora";
    let currentURL = browser.getUrl();
    assert.equal(karijerniMentorURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let strucnaPraksa = $('//*[@id="menu"]/li[10]/ul/li[6]/a');
    strucnaPraksa.click();
    let strucnaPraksaURL = "https://www.ffos.unios.hr/strucna-praksa";
    let currentURL = browser.getUrl();
    assert.equal(strucnaPraksaURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let izvannastavneAktivnostiCZK = $('//*[@id="menu"]/li[10]/ul/li[7]/a');
    izvannastavneAktivnostiCZK.click();
    let izvannastavneAktivnostiCZKURL = "https://www.ffos.unios.hr/izvannastavne-aktivnosti-29-08-2018";
    let currentURL = browser.getUrl();
    assert.equal(izvannastavneAktivnostiCZKURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let tipsAndTricks = $('//*[@id="menu"]/li[10]/ul/li[8]/a');
    tipsAndTricks.click();
    let tipsAndTricksURL = "https://www.ffos.unios.hr/tips-tricks";
    let currentURL = browser.getUrl();
    assert.equal(tipsAndTricksURL, currentURL);
    browser.url('https://www.ffos.unios.hr');
    //

    centarZaKarijere.moveTo();
    
    padajuciIzbornikCentarZaKarijere.waitForExist(90000);
    padajuciIzbornikCentarZaKarijere.scrollIntoView();

    let kontakt = $('//*[@id="menu"]/li[10]/ul/li[9]/a');
    kontakt.click();
    let kontaktURL = "https://www.ffos.unios.hr/kontaktiraj-nas";
    let currentURL = browser.getUrl();
    assert.equal(kontaktURL, currentURL);
    browser.url('https://www.ffos.unios.hr');

    

    //
    centarZaKarijere.click();
    let naslov = $('//*[@id="page"]/div/div/div[1]/h3');
    naslov.waitForExist(90000);
    let centarZaKarijereURL = "https://www.ffos.unios.hr/centar-za-karijere";
    let currentURL = browser.getUrl();
    assert.equal(centarZaKarijereURL, currentURL);
  });
  
});
