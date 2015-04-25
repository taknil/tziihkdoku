#Pflichtenheft (Auszug)
>//ich bin ein Lösungskonzept, quasi, glaube ich

Im folgenden Auszug aus dem Pflichtenheft wird die geplante Umsetzung der im Lastenheft definierten Anforderungen beschrieben
###Umsetzung der Anforderungen Test-Runtime

* Als Browser der Testumgebung wird PhantomJS[^phantomjsweb] gewählt. Die Installation erfolgt über die Paketverwaltung der jeweiligen Distribution, das heißt portage[^portageweb] für Gentoo, APT[^aptweb] auf Ubuntu, brew[^brewweb] auf MacOS. `ich möchte das extra ansprechen, muss aber nicht im Pflichtenheft sein ->` Es werden die Binärdateien aus den jeweiligen Repositories genutzt. Zum Projektzeitpunkt wird PhantomJS 1.9.8 verteil.  PhantomJS sollte nicht selbst kompiliert werden da es enorm viele Abhängigkeiten hat, was viele zusätzliche Fehlerquellen mit sich ziehen kann, und weil der Kompiliervorgang auch einem modernen Applikationsserver mehrere Stunden dauert. Da PhantomJS 2.0.0 auf dem Macintosh noch nicht startet und für linux nicht compiliert und die Tests und Testsuiten auf solchen Rechnern erstellt werden sollen, ist es empfohlen bei der stabilen Version 1.9.8 zu bleiben die sowohl unter Linux als auch Mac und Windows eingesetzt werden kann.

     #asert you are on a 32 bit system
    cd /usr/local/share
    sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-i686.tar.bz2
    sudo tar xjf phantomjs-1.9.8-linux-i686.tar.bz2
    sudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/local/share/phantomjs
    sudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/local/bin/phantomjs
    sudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/bin/phantomjs


*  Als Test Runtime wird casperJS[^casperjsweb] genutzt, es steht ebenfalls in den gängigen Repositories zur Verfügung und muss nicht selbst kompiliert werden.
>//ätsch, in portage nicht, da muss man das selber auschecken. code steht hier temporär

    $ git clone git://github.com/n1k0/casperjs.git
    $ cd casperjs
    $ ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs


* casperJS wird mit einem _tester_ Modul ausgeliefert, welches für Unit- und funktionale Tests genutzt werden kann und eine API zur Verfügung stellt welche `vollständig? - muss ich das beweisen?` den Anforderungen an Testfähigkeiten aus dem Lastenheft genügt.

* Tests werden in Javascript oder Coffeescript[^coffeescriptweb]: geschrieben und nutzen die Funktionalität des _tester_ Modul von GhostJS zum abtasten der jeweiligen Seite und Funktionalität des _utilis_ Modul zum verarbeiten der Eingabeparameter und Ausgabe.    
Eine Aufnahme von Testabläufen ist mit den der Chrome-extension _resurrectio_[^resurrectioweb] möglich, diese gibt nach der Ausgabe den Quellcode eines Test als Javascript aus. _resurrectio_ wird seid 2013 nicht mehr gewartet sodass damit erstellte Tests nicht den vollen Funktionsumfang von Ghostjs `$currentversion  , 1.0 beta 3` ausnutzen können.
* Test werden als JavaScript-Dateien gespeichert

Bildschrimfotos werden wie folgt erstellt.
https://github.com/casperjs/responsive-screenshots


[^phantomjsweb]:phantomjs.org/headless-testing.html
[^portageweb]:packages.gentoo.org/package/sys-apps/portage
[^aptweb]:wiki.ubuntuusers.de/APT
[^brewweb]:brew.sh
[^casperjsweb]:
[^casperjstestermodule]:http://casperjs.readthedocs.org/en/latest/modules/tester.html
[^casperjstesting]:http://casperjs.readthedocs.org/en/latest/testing.html#testing
[^resurrectioweb]:https://github.com/casperjs/resurrectio
[^coffeescriptweb]:coffescript.org coffescript ist eine Sprache die nach Javascript, genauer ECMAScript 3, transcompiliert werden kann. Sie inspiriert sich von anderen Programmiersprachen wie Ruby oder Python und ist als syntactic sugar für JavaScript zu verstehen 
* 

###Umsetzung der Anforderungen Integration ins CI/CD System
* Die Flusskontrolle `Die Logik ?` für Deployment- und Integrationsprozesse wird definiert mit Hilfe von ANT Skripten. Einzelne Aufgaben werden in sogenannte Pipelines verpackt. `Dieser Punkt kommt in den Flusstext, nicht Pflichtenheft`
* Es wird in Go eine neue Pipelinegruppe angelegt mit je einer Pipeline pro zu testender Serverumgebung. Hier sind es 3 für das _Integration_, _Stage_ und _Echt_‌system. Dazu werden neue Tags `XML-Knoten?` für Pipelines in die `go.xml` eingefügt. Der teaminternen Nomenklatur folgend heißen die Pipelines dann etwas "UI.Test.ghostjs" und "UL.Test.ghostjs"
>// Todo: Name klären

* Es wird eine neue ghostjs.xml Datei erstellt die sämtliche ANT-Targets enthalten wird die für Regressionstests notwendig sind. Diese beinhalten u.a. : 
	* Vor-
	* und nachbereitende Datenbankabfragen die Nutzerdaten von und für die Testnutzer der Regressionstests wie etwas Adressänderungen oder das löschen von Testkonten.
	* Das auslösen der Test
	* Das Abholen und Aufbereitung der Testartefakte
	* Die Auswertung der Testergebnisse
	 	
* Umgebungsvariablen werden in Go vergeben, die Basispfade für Testdateien und Artefakte festlegen, sowie Zugangsdaten für vor- und nachbereitende Datenbankzugriffe



* Phantom kann config file, von bashscript aufgerufen werden
* casper kann config file
*  bar



