var poveznice = ".col-lg-3.col-md-3.col-sm-3.col-xs-12.hidden-xs.leftSep";
var facebook = ".test_1";
var pretplata = ".test_2";
var nagradeniStudenti ='//*[@id="main-news"]/div/div/div[3]/a[1]';
var zelimCitati ='//*[@id="main-news"]/div/div/div[3]/a[2]';
var saintPetersburg ='//*[@id="main-news"]/div/div/div[3]/a[3]';
var skupovi ='//*[@id="main-news"]/div/div/div[3]/a[4]';
var ppdmi ='//*[@id="main-news"]/div/div/div[3]/a[5]';
var mail ='//*[@id="main-news"]/div/div/div[3]/a[6]';
var moodle ='//*[@id="main-news"]/div/div/div[3]/a[7]';
var nastavnickiPortal ='//*[@id="main-news"]/div/div/div[3]/a[8]';
var repozitorij ='//*[@id="main-news"]/div/div/div[3]/a[9]';
var studomat ='//*[@id="main-news"]/div/div/div[3]/a[10]';
var stuc ='//*[@id="main-news"]/div/div/div[3]/a[11]';
var gisko ='//*[@id="main-news"]/div/div/div[3]/a[12]';
var sveuciliste ='//*[@id="main-news"]/div/div/div[3]/a[13]';
var preddiplomski ='//*[@id="main-news"]/div/div/div[3]/a[14]';
var diplomski ='//*[@id="main-news"]/div/div/div[3]/a[15]';
var obrane ='//*[@id="main-news"]/div/div/div[3]/a[16]';
var poslijediplomski ='//*[@id="main-news"]/div/div/div[3]/a[17]';
var mzo ='//*[@id="main-news"]/div/div/div[3]/a[18]';
var hazu ='//*[@id="main-news"]/div/div/div[3]/a[19]';
var glasnik ='//*[@id="main-news"]/div/div/div[3]/a[20]';
var ffosUEteru ='//*[@id="main-news"]/div/div/div[3]/a[21]';
var radio ='//*[@id="main-news"]/div/div/div[3]/a[22]';
var memo ='//*[@id="main-news"]/div/div/div[3]/a[23]';
var zaba ='//*[@id="main-news"]/div/div/div[3]/a[24]';
var assert = require("assert");

describe("Poveznice", function() {

    beforeEach(function() {
      browser.url("./");
    });
   


   it("Otvaranje", function() {
        $(poveznice).waitForExist(90000);
    }); 

    it("Facebook", function() {
        $(facebook).click();
        let facebookURL= "https://www.facebook.com/ffosijek/";
        let currentURL = browser.getUrl();
        assert.equal(facebookURL, currentURL);
    });

    it("Pretplata", function() {
        $(pretplata).click();
        let pretplataURL= "https://www.facebook.com/ffosijek/";
        let currentURL = browser.getUrl();
        assert.equal(pretplataURL, currentURL);
    }); 

    

    it("Nagradeni studenti", function() {
        $(nagradeniStudenti).click();
        let naslov = $('//*[@id="page"]/div/div/div[1]/h3');
        naslov.waitForExist(90000);
        nagradeniStudentiURL= "https://www.ffos.unios.hr/nagradeni-i-pohvaljeni-studenti";
        let currentURL = browser.getUrl();
        assert.equal(nagradeniStudentiURL, currentURL);
    });

    it("Zelim citati", function() {
        $(zelimCitati).click();

        /*Na stranici javlja grešku pa ne mogu prema nekom elementu */
        
        let zelimCitatiURL= "https://www.ffos.unios.hr/facebook.com/IJaZelimCitati";
        let currentURL = browser.getUrl();
        assert.equal(zelimCitatiURL, currentURL);
    });

    it("Saint Petersburg", function() {
        $(saintPetersburg).click();
        let naslov = $('/html/body/div[1]/div/div[2]/div[3]/h1');
        naslov.waitForExist(90000);
        let saintPetersburgURL= "http://www.saint-petersburg.com/";
        let currentURL = browser.getUrl();
        assert.equal(saintPetersburgURL, currentURL);
    });

    it("Skupovi", function() {
        $(skupovi).click();
        let naslov = $('//*[@id="page"]/div/div/div[1]/h3');
        naslov.waitForExist(90000);
        let skupoviURL= "https://www.ffos.unios.hr/znanstveni-i-strucni-skupovi-na-ffos-u";
        let currentURL = browser.getUrl();
        assert.equal(skupoviURL, currentURL);
    }); 
    
    it("PPDMI", function() {
        $(ppdmi).click();
        let welcome =$('//*[@id="page"]/div/div/div[2]/div[1]');
        welcome.waitForExist(90000);
        let ppdmiURL= "https://www.ffos.unios.hr/pedagosko-psiholosko-didakticko-metodicku-izobrazba/naslovna";
        let currentURL = browser.getUrl();
        assert.equal(ppdmiURL, currentURL);
    });

    
    
    it("Squirrel Mail", function() {
        $(mail).click();
        let loginMail = $('/html/body/form/table/tbody/tr/td/center/table/tbody/tr[2]/td/table');
        loginMail.waitForExist(90000);
        let mailURL= "https://knjiga.ffos.hr/webmail/src/login.php";
        let currentURL = browser.getUrl();
        assert.equal(mailURL, currentURL);
    }); 

    
    it("Moodle", function() {
        $(moodle).click();
        let loginMoodle = $('//*[@id="inst28"]/div[2]');
        loginMoodle.waitForExist(90000);
        let moodleURL= "https://moodle.ffos.hr/";
        let currentURL = browser.getUrl();
        assert.equal(moodleURL, currentURL);
    });
    
    

   it("Nastavnicki portal", function() {
    $(nastavnickiPortal).click();
    let loginNP = $('/html/body/div/section/div/div/div[2]/div/div/div[1]/div');
    loginNP.waitForExist(90000);
    let nastavnickiPortalURL= "https://www.isvu.hr/nastavnici/prijava";
    let currentURL = browser.getUrl();
    assert.equal(nastavnickiPortalURL, currentURL);
});



it("Repozitorij", function() {
    $(repozitorij).click();
    let pregledavanje = $('//*[@id="menu-2834-2"]/a');
    pregledavanje.waitForExist(60000);
    let repozitorijURL= "https://repozitorij.ffos.hr/";
    let currentURL = browser.getUrl();
    assert.equal(repozitorijURL, currentURL);
});



it("Studomat", function() {
    $(studomat).click();
    let loginStudomat = $('/html/body/div/div[2]/div');
    loginStudomat.waitForExist(90000);
    let studomatURL= "https://www.isvu.hr/studomat/hr/prijava";
    let currentURL = browser.getUrl();
    assert.equal(studomatURL, currentURL);
});



it("STUC", function() {
    $(stuc).click();
    let headerSTUC = $('#main-header');
    headerSTUC.waitForExist(90000);
    let stucURL= "http://www.stucos.unios.hr/";
    let currentURL = browser.getUrl();
    assert.equal(stucURL, currentURL);
});

it("GISKO", function() {
    $(gisko).click();
    let headerGISKO = $('.td-header-menu-wrap');
    headerGISKO.waitForExist(90000);
    let giskoURL= "https://www.gskos.unios.hr/";
    let currentURL = browser.getUrl();
    assert.equal(giskoURL, currentURL);
});
  
it("Sveučiliste", function() {
    $(sveuciliste).click();
    let headerUNIOS = $('.navbar.navbar-inverse.main-color-2-bg');
    headerUNIOS.waitForExist(90000);
    let sveucilisteURL= "http://www.unios.hr/";
    let currentURL = browser.getUrl();
    assert.equal(sveucilisteURL, currentURL);
});

it("Sokrat preddiplomski", function() {
    $(preddiplomski).click();
    let loginPreddiplomski =$('#header_logged_in');
    loginPreddiplomski.waitForExist(90000);
    let preddiplomskiURL= "https://sokrat.ffos.hr/obrasci/preddiplomski/";
    let currentURL = browser.getUrl();
    assert.equal(preddiplomskiURL, currentURL);
});



it("Sokrat diplomski", function() {
    $(diplomski).click();
    let loginDiplomski = $('#glavni_sadrzaj');
    loginDiplomski.waitForExist(90000);
    let diplomskiURL= "https://sokrat.ffos.hr/obrasci/diplomski/";
    let currentURL = browser.getUrl();
    assert.equal(diplomskiURL, currentURL);
});



it("Sokrat obrane", function() {
    $(obrane).click();
    let loginObrane = $('#glavni_sadrzaj');
    loginObrane.waitForExist(90000);
    let obraneURL= "https://sokrat.ffos.hr/obrasci/obrane/";
    let currentURL = browser.getUrl();
    assert.equal(obraneURL, currentURL);
});
  
 it("Poslijediplomski", function() {
    $(poslijediplomski).click();
    let loginPoslijediplomski = $('#form');
    loginPoslijediplomski.waitForExist(90000);
    let poslijediplomskiURL= "https://sokrat.ffos.hr/pds/login.php";
    let currentURL = browser.getUrl();
    assert.equal(poslijediplomskiURL, currentURL);
});

it("MZO", function() {
    $(mzo).click();
    let headerMZO = $('//*[@id="menu"]/ul/li[3]/a');
    headerMZO.waitForExist(90000);
    let mzoURL= "https://mzo.gov.hr/";
    let currentURL = browser.getUrl();
    assert.equal(mzoURL, currentURL);
});


it("HAZU", function() {
    $(hazu).click();
    let headerHAZU = $('#header');
    headerHAZU.waitForExist(90000);
    let hazuURL= "http://info.hazu.hr/hr/";
    let currentURL = browser.getUrl();
    assert.equal(hazuURL, currentURL);
});

it("Unios Glasnik", function() {
    $(glasnik).click();
   /* link vodi na error 404 */
    let glasnikURL= "http://www.unios.hr/glasnik/index.html";
    let currentURL = browser.getUrl();
    assert.equal(glasnikURL, currentURL);
    
});

it("Filozofski u eteru", function() {
    $(ffosUEteru).click();
    
    let ffosUEteruURL= "https://www.facebook.com/filozofskiueteru/";
    let currentURL = browser.getUrl();
    assert.equal(ffosUEteruURL, currentURL);
});


it("Unios Radio", function() {
    $(radio).click();
    let menuRadio = $('#menu-main-menu');
    menuRadio.waitForExist(90000);
    let radioURL= "http://radio.unios.hr/";
    let currentURL = browser.getUrl();
    assert.equal(radioURL, currentURL);
});

it("Memo Q", function() {
    $(memo).click();
    let menuMemo = $('.HeroContent__title');
    menuMemo.waitForExist(90000);
    let memoURL= "https://www.memoq.com/";
    let currentURL = browser.getUrl();
    assert.equal(memoURL, currentURL);
});

it("Zaba", function() {
    $(zaba).click();
    let menuZABA = $('.header-main-row');
    menuZABA.waitForExist(90000);
    let zabaURL= "https://www.zaba.hr/home/paket-za-mlade";
    let currentURL = browser.getUrl();
    assert.equal(zabaURL, currentURL);
});




});