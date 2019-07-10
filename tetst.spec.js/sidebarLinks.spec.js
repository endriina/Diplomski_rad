var poveznice = ".col-lg-3.col-md-3.col-sm-3.col-xs-12.hidden-xs.leftSep";
var facebook = ".test_1";
var pretplata = ".test_2";
var linkA ='//*[@id="main-news"]/div/div/div[3]/a[1]';
var linkB ='//*[@id="main-news"]/div/div/div[3]/a[2]';
var linkC ='//*[@id="main-news"]/div/div/div[3]/a[3]';
var linkD ='//*[@id="main-news"]/div/div/div[3]/a[4]';
var linkE ='//*[@id="main-news"]/div/div/div[3]/a[5]';
var linkF ='//*[@id="main-news"]/div/div/div[3]/a[6]';
var linkG ='//*[@id="main-news"]/div/div/div[3]/a[7]';
var linkH ='//*[@id="main-news"]/div/div/div[3]/a[8]';
var linkI ='//*[@id="main-news"]/div/div/div[3]/a[9]';
var linkK ='//*[@id="main-news"]/div/div/div[3]/a[10]';
var linkL ='//*[@id="main-news"]/div/div/div[3]/a[11]';
var linkM ='//*[@id="main-news"]/div/div/div[3]/a[12]';
var linkN ='//*[@id="main-news"]/div/div/div[3]/a[13]';
var linkO ='//*[@id="main-news"]/div/div/div[3]/a[14]';
var linkP ='//*[@id="main-news"]/div/div/div[3]/a[15]';
var linkR ='//*[@id="main-news"]/div/div/div[3]/a[16]';
var linkS ='//*[@id="main-news"]/div/div/div[3]/a[17]';
var linkT ='//*[@id="main-news"]/div/div/div[3]/a[18]';
var linkU ='//*[@id="main-news"]/div/div/div[3]/a[19]';
var linkV ='//*[@id="main-news"]/div/div/div[3]/a[20]';
var linkZ ='//*[@id="main-news"]/div/div/div[3]/a[21]';
var linkX ='//*[@id="main-news"]/div/div/div[3]/a[22]';
var linkY ='//*[@id="main-news"]/div/div/div[3]/a[23]';
var linkQ ='//*[@id="main-news"]/div/div/div[3]/a[24]';

var assert = require("assert");

describe("Main Menu", function() {

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

    

    it("Link A", function() {
        $(linkA).click();
        var naslov = '//*[@id="page"]/div/div/div[1]/h3';
        $(naslov).waitForExist(90000);
        var linkAURL= "https://www.ffos.unios.hr/nagradeni-i-pohvaljeni-studenti";
        var currentURL = browser.getUrl();
        assert.equal(linkAURL, currentURL);
    });

    it("Link B", function() {
        $(linkB).click();

      /*  Na stranici javlja grešku pa ne mogu prema nekom elementu */
        
        var linkBURL= "https://www.ffos.unios.hr/facebook.com/IJaZelimCitati";
        var currentURL = browser.getUrl();
        assert.equal(linkBURL, currentURL);
    });

    it("Link C", function() {
        $(linkC).click();
        var naslov = '/html/body/div[1]/div/div[2]/div[3]/h1';
        $(naslov).waitForExist(90000);
        var linkCURL= "http://www.saint-petersburg.com/";
        var currentURL = browser.getUrl();
        assert.equal(linkCURL, currentURL);
    });

    it("Link D", function() {
        $(linkD).click();
        var naslov = '//*[@id="page"]/div/div/div[1]/h3';
        $(naslov).waitForExist(90000);
        var linkDURL= "https://www.ffos.unios.hr/znanstveni-i-strucni-skupovi-na-ffos-u";
        var currentURL = browser.getUrl();
        assert.equal(linkDURL, currentURL);
    }); 
    
    it("Link E", function() {
        $(linkE).click();
        var welcome = '//*[@id="page"]/div/div/div[2]/div[1]';
        $(welcome).waitForExist(90000);
        var linkEURL= "https://www.ffos.unios.hr/pedagosko-psiholosko-didakticko-metodicku-izobrazba/naslovna";
        var currentURL = browser.getUrl();
        assert.equal(linkEURL, currentURL);
    });

    it("Link F", function() {
        $(linkF).click();
        var login = '/html/body/form/table/tbody/tr/td/center/table';
        $(login).waitForExist(90000);
        var linkFURL= "https://knjiga.ffos.hr/webmail/src/login.php";
        var currentURL = browser.getUrl();
        assert.equal(linkFURL, currentURL);
    }); 

    

    it("Link G", function() {
        $(linkG).click();
        var login = '//*[@id="inst28"]/div[2]';
        $(login).waitForExist(90000);
        var linkGURL= "https://moodle.ffos.hr/";
        var currentURL = browser.getUrl();
        assert.equal(linkGURL, currentURL);
    });
    
    

   it("Link H", function() {
    $(linkH).click();
    var login = '/html/body/div/section/div/div/div[2]/div/div/div[1]/div';
    $(login).waitForExist(90000);
    var linkHURL= "https://www.isvu.hr/nastavnici/prijava";
    var currentURL = browser.getUrl();
    assert.equal(linkHURL, currentURL);
});



it("Link I", function() {
    $(linkI).click();
    var login = "#header-top";
    $(login).waitForExist(90000);
    var linkIURL= "https://repozitorij.ffos.hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkIURL, currentURL);
});



it("Link K", function() {
    $(linkK).click();
    var login = '/html/body/div/div[2]/div';
    $(login).waitForExist(90000);
    var linkKURL= "https://www.isvu.hr/studomat/hr/prijava";
    var currentURL = browser.getUrl();
    assert.equal(linkKURL, currentURL);
});



it("Link L", function() {
    $(linkL).click();
    var header = "#main-header";
    $(header).waitForExist(90000);
    var linkLURL= "http://www.stucos.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkLURL, currentURL);
});

it("Link M", function() {
    $(linkM).click();
    var header = ".td-header-menu-wrap";
    $(header).waitForExist(90000);
    var linkMURL= "https://www.gskos.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkMURL, currentURL);
});
  
it("Link N", function() {
    $(linkN).click();
    var header = ".navbar.navbar-inverse.main-color-2-bg";
    $(header).waitForExist(90000);
    var linkNURL= "http://www.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkNURL, currentURL);
});

it("Link O", function() {
    $(linkO).click();
    var login = "#header_logged_in";
    $(login).waitForExist(90000);
    var linkOURL= "https://sokrat.ffos.hr/obrasci/preddiplomski/";
    var currentURL = browser.getUrl();
    assert.equal(linkOURL, currentURL);
});



it("Link P", function() {
    $(linkP).click();
    var login = "#glavni_sadrzaj";
    $(login).waitForExist(90000);
    var linkPURL= "https://sokrat.ffos.hr/obrasci/diplomski/";
    var currentURL = browser.getUrl();
    assert.equal(linkPURL, currentURL);
});



it("Link R", function() {
    $(linkR).click();
    var login = "#glavni_sadrzaj";
    $(login).waitForExist(90000);
    var linkRURL= "https://sokrat.ffos.hr/obrasci/obrane/";
    var currentURL = browser.getUrl();
    assert.equal(linkRURL, currentURL);
});
  
 it("Link S", function() {
    $(linkS).click();
    var login = "#form";
    $(login).waitForExist(90000);
    var linkSURL= "https://sokrat.ffos.hr/pds/login.php";
    var currentURL = browser.getUrl();
    assert.equal(linkSURL, currentURL);
});

it("Link T", function() {
    $(linkT).click();
    var header = "#page-header";
    $(header).waitForExist(90000);
    var linkTURL= "https://mzo.hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkTURL, currentURL);
});


it("Link U", function() {
    $(linkU).click();
    var header = "#header";
    $(header).waitForExist(90000);
    var linkUURL= "http://info.hazu.hr/hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkUURL, currentURL);
});

it("Link V", function() {
    $(linkV).click();
    /* link vodi na error 404*/
    var linkVURL= "http://www.unios.hr/glasnik/index.html";
    var currentURL = browser.getUrl();
    assert.equal(linkVURL, currentURL);
});

it("Link Z", function() {
    $(linkZ).click();
    
    var linkZURL= "https://www.facebook.com/filozofskiueteru/?_rdc=1&_rdr";
    var currentURL = browser.getUrl();
    assert.equal(linkZURL, currentURL);
});


it("Link X", function() {
    $(linkX).click();
    var menu = "#menu-main-menu";
    $(menu).waitForExist(90000);
    var linkXURL= "http://radio.unios.hr/";
    var currentURL = browser.getUrl();
    assert.equal(linkXURL, currentURL);
});

it("Link Y", function() {
    $(linkY).click();
    var menu = ".inner980.main-nav";
    $(menu).waitForExist(90000);
    var linkYURL= "https://www.memoq.com/en/";
    var currentURL = browser.getUrl();
    assert.equal(linkYURL, currentURL);
});

it("Link Q", function() {
    $(linkQ).click();
    var menu = ".header-main-row";
    $(menu).waitForExist(90000);
    var linkQURL= "https://www.zaba.hr/home/paket-za-mlade";
    var currentURL = browser.getUrl();
    assert.equal(linkQURL, currentURL);
});




});