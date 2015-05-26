
var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1680, height: 1080};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
   this.captureSelector("screenshot_onerror.png", "html");
});
casper.test.begin('casperJS sample test', function(test) {
  // casper.open('http://www.gravis.de/index.php?cl=fcfatsearch_productlist&searchparam=125924');
  casper.start('http://www.gravis.de/Notebooks-und-Desktops/Apple-MacBook-Air/Apple-MacBook-Air-13-Zoll/Apple-MacBook-Air-13-Zoll-1-6-GHz-256-GB-SSD-4-GB-RAM.html');
   casper.waitForSelector(x("//*[contains(text(), \'Preis inkl. Mehrwertsteuer\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Preis inkl. Mehrwertsteuer,\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Preis inkl. Mehrwertsteuer\')]"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'In den Warenkorb\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'In den Warenkorb\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'In den Warenkorb\')]"));
   });
   casper.waitForSelector("#details_action_tobasket span",
       function success() {
           test.assertExists("#details_action_tobasket span","hinzufuege zum Warenkorb");
           this.click("#details_action_tobasket span");
       },
       function fail() {
           test.assertExists("#details_action_tobasket span");
   });
   casper.waitForSelector(x("id('la_basket_tobasket')"),
       function success() {
           test.assertExists(x("id('la_basket_tobasket')"),"navigiere zum Warenkorb");
           this.click(x("id('la_basket_tobasket')"));
       },
       function fail() {
           test.assertExists(x("id('la_basket_tobasket')"));
   });
   casper.waitForSelector(".op_container.basket.first",
       function success() {
           test.assertExists(".op_container.basket.first");
           this.click(".op_container.basket.first");
       },
       function fail() {
           test.assertExists(".op_container.basket.first");
   });
   casper.waitForSelector(x("//*[contains(text(), \'Produkte im Warenkorb\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Produkte im Warenkorb\')]"));
           this.echo(this.getTitle());
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Produkte im Warenkorb\')]"));
   });
   casper.waitForSelector(x("//input[@value='Zur Kasse gehen' and not(@disabled)]"),
       function success() {
           test.assertExists(x("//input[@value='Zur Kasse gehen' and not(@disabled)]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Zur Kasse gehen' and not(@disabled)]"));
   });
   
   casper.waitForSelector("form input[type=submit][value='Zur Kasse gehen']",
       function success() {
           test.assertExists("form input[type=submit][value='Zur Kasse gehen']");
           this.click("form input[type=submit][value='Zur Kasse gehen']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Zur Kasse gehen']");
   });
   casper.waitForSelector("input[name='lgn_usr']",
       function success() {
           this.sendKeys("input[name='lgn_usr']", "newslettertester2@gravis.de");
       },
       function fail() {
           test.assertExists("input[name='lgn_usr']");
   });
   casper.waitForSelector("input[name='lgn_pwd']",
       function success() {
           this.sendKeys("input[name='lgn_pwd']", "XXX");
       },
       function fail() {
           test.assertExists("input[name='lgn_pwd']");
   });
casper.then(function() {
       this.captureSelector("screenshotac.png", "html");
       this.echo("Im before login");
       this.echo(this.getTitle());
   });

   casper.waitForSelector("form#user_old input[type=submit][value='Anmelden']",
       function success() {
           test.assertExists("form#user_old input[type=submit][value='Anmelden']");
           this.click("form#user_old input[type=submit][value='Anmelden']");
       },
       function fail() {
           test.assertExists("form#user_old input[type=submit][value='Anmelden']");
   });
   [...]
	casper.wait(3000, function() {
    this.echo("Nutzer ist angemeldet");
});
	
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });
   
   casper.run(function() {test.done();});
});