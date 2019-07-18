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
        var facebookURL= "https://www.facebook.com/ffosijek/";
        var currentURL = browser.getUrl();
        assert.equal(facebookURL, currentURL);
    });

    it("Pretplata", function() {
        $(pretplata).click();
        var pretplataURL= "https://www.facebook.com/ffosijek/";
        var currentURL = browser.getUrl();
        assert.equal(pretplataURL, currentURL);
    }); 

    

    it("Nagradeni studenti", function() {
        $(nagradeniStudenti).click();
        var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
        naslov.waitForExist(90000);
        nagradeniStudentiURL= "https://www.ffos.unios.hr/nagradeni-i-pohvaljeni-studenti";
        var currentURL = browser.getUrl();
        assert.equal(nagradeniStudentiURL, currentURL);
    });

    it("Zelim citati", function() {
        $(zelimCitati).click();

      /*  Na stranici javlja grešku pa ne mogu prema nekom elementu */
        
        var zelimCitatiURL= "https://www.ffos.unios.hr/facebook.com/IJaZelimCitati";
        var currentURL = browser.getUrl();
        assert.equal(zelimCitatiURL, currentURL);
    });

    it("Saint Petersburg", function() {
        $(saintPetersburg).click();
        var naslov = $('/html/body/div[1]/div/div[2]/div[3]/h1');
        naslov.waitForExist(90000);
        var saintPetersburgURL= "http://www.saint-petersburg.com/";
        var currentURL = browser.getUrl();
        assert.equal(saintPetersburgURL, currentURL);
    });

    it("Skupovi", function() {
        $(skupovi).click();
        var naslov = $('//*[@id="page"]/div/div/div[1]/h3');
        naslov.waitForExist(90000);
        var skupoviURL= "https://www.ffos.unios.hr/znanstveni-i-strucni-skupovi-na-ffos-u";
        var currentURL = browser.getUrl();
        assert.equal(skupoviURL, currentURL);
    }); 
    
    it("PPDMI", function() {
        $(ppdmi).click();
        var welcome =$('//*[@id="page"]/div/div/div[2]/div[1]');
        welcome.waitForExist(90000);
        var ppdmiURL= "https://www.ffos.unios.hr/pedagosko-psiholosko-didakticko-metodicku-izobrazba/naslovna";
        var currentURL = browser.getUrl();
        assert.equal(ppdmiURL, currentURL);
    });

    
    it("Squirrel Mail", function() {
        $(mail).click();
        var login = $('/html/body/form/table/tbody/tr/td/center/table');
        login.waitForExist(90000);
        var mailURL= "https://knjiga.ffos.hr/webmail/src/login.php";
        var currentURL = browser.getUrl();
        assert.equal(mailURL, currentURL);
    }); 

    

    it("Moodle", function() {
        $(moodle).click();
        var login = $('//*[@id="inst28"]/div[2]');
        login.waitForExist(90000);
        var moodleURL= "https://moodle.ffos.hr/";
        var currentURL = browser.getUrl();
        assert.equal(moodleURL, currentURL);
    });
    
    

   it("Nastavnicki portal", function() {
    $(nastavnickiPortal).click();
    var login = $('/html/body/div/section/div/div/div[2]/div/div/div[1]/div');
    login.waitForExist(90000);
    var nastavnickiPortalURL= "https://www.isvu.hr/nastavnici/prijava";
    var currentURL = browser.getUrl();
    assert.equal(nastavnickiPortalURL, currentURL);
});



it("Repozitorij", function() {
    $(repozitorij).click();
    var login = $('header-top');
    login.waitForExist(90000);
    var repozitorijURL= "https://repozitorij.ffos.hr/";
    var currentURL = browser.getUrl();
    assert.equal(repozitorijURL, currentURL);
});



it("Studomat", function() {
    $(studomat).click();
    var login = $('/html/body/div/div[2]/div');
    login.waitForExist(90000);
    var studomatURL= "https://www.isvu.hr/studomat/hr/prijava";
    var currentURL = browser.getUrl();
    assert.equal(studomatURL, currentURL);
});



it("STUC", function() {
    $(stuc).click();
    var header = $('#main-header');
    header.waitForExist(90000);
    var stucURL= "http://www.stucos.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(stucURL, currentURL);
});

it("GISKO", function() {
    $(gisko).click();
    var header = $('.td-header-menu-wrap');
    header.waitForExist(90000);
    var giskoURL= "https://www.gskos.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(giskoURL, currentURL);
});
  
it("Sveučiliste", function() {
    $(sveuciliste).click();
    var header = $('.navbar.navbar-inverse.main-color-2-bg');
    header.waitForExist(90000);
    var sveucilisteURL= "http://www.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(sveucilisteURL, currentURL);
});

it("Sokrat preddiplomski", function() {
    $(preddiplomski).click();
    var login =$('#header_logged_in');
    login.waitForExist(90000);
    var preddiplomskiURL= "https://sokrat.ffos.hr/obrasci/preddiplomski/";
    var currentURL = browser.getUrl();
    assert.equal(preddiplomskiURL, currentURL);
});



it("Sokrat diplomski", function() {
    $(diplomski).click();
    var login = $('#glavni_sadrzaj');
    login.waitForExist(90000);
    var diplomskiURL= "https://sokrat.ffos.hr/obrasci/diplomski/";
    var currentURL = browser.getUrl();
    assert.equal(diplomskiURL, currentURL);
});



it("Sokrat obrane", function() {
    $(obrane).click();
    var login = $('#glavni_sadrzaj');
    login.waitForExist(90000);
    var obraneURL= "https://sokrat.ffos.hr/obrasci/obrane/";
    var currentURL = browser.getUrl();
    assert.equal(obraneURL, currentURL);
});
  
 it("Poslijediplomski", function() {
    $(poslijediplomski).click();
    var login = $('#form');
    login.waitForExist(90000);
    var poslijediplomskiURL= "https://sokrat.ffos.hr/pds/login.php";
    var currentURL = browser.getUrl();
    assert.equal(poslijediplomskiURL, currentURL);
});

it("MZO", function() {
    $(mzo).click();
    var header = $('//*[@id="menu"]/ul/li[3]/a');
    header.waitForExist(90000);
    var mzoURL= "https://mzo.gov.hr/";
    var currentURL = browser.getUrl();
    assert.equal(mzoURL, currentURL);
});


it("HAZU", function() {
    $(hazu).click();
    var header = $('#header');
    header.waitForExist(90000);
    var hazuURL= "http://info.hazu.hr/hr/";
    var currentURL = browser.getUrl();
    assert.equal(hazuURL, currentURL);
});

it("Unios Glasnik", function() {
    $(glasnik).click();
    /* link vodi na error 404*/
    var glasnikURL= "http://www.unios.hr/glasnik/index.html";
    var currentURL = browser.getUrl();
    assert.equal(glasnikURL, currentURL);
    
});

it("Filozofski u eteru", function() {
    $(ffosUEteru).click();
    
    var ffosUEteruURL= "https://www.facebook.com/filozofskiueteru/";
    var currentURL = browser.getUrl();
    assert.equal(ffosUEteruURL, currentURL);
});


it("Unios Radio", function() {
    $(radio).click();
    var menu = $('#menu-main-menu');
    menu.waitForExist(90000);
    var radioURL= "http://radio.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(radioURL, currentURL);
});

it("Memo Q", function() {
    $(memo).click();
    var menu = $('.inner980.main-nav');
    menu.waitForExist(90000);
    var memoURL= "https://www.memoq.com/en/";
    var currentURL = browser.getUrl();
    assert.equal(memoURL, currentURL);
});

it("Zaba", function() {
    $(zaba).click();
    var menu = $('.header-main-row');
    menu.waitForExist(90000);
    var zabaURL= "https://www.zaba.hr/home/paket-za-mlade";
    var currentURL = browser.getUrl();
    assert.equal(zabaURL, currentURL);
});




});