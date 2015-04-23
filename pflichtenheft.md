#Pflichtenheft (Auszug)
Im folgenden Auszug aus dem Pflichtenheft wird die geplante Umsetzung der im Lastenheft definierten Anforderungen beschrieben
###Umsetzung der Anforderungen Test-Runtime

* Als Browser der Testumgebung wird PhantomJS[^phantomjsweb] gewählt. Die Installation erfolgt über die Paketverwaltung der jeweiligen Distribution, das heißt portage[^portageweb] für Gentoo, APT[^aptweb] auf Ubuntu, brew[^brewweb] auf MacOS. `ich möchte das extra ansprechen, muss aber nicht im Pflichtenheft sein ->` Es werden die Binärdateien aus den jeweiligen Repositories genutzt. Zum Projektzeitpunkt wird PhantomJS 1.9.8 verteil.  PhantomJS sollte nicht selbst kompiliert werden da es enorm viele Abhängigkeiten hat, was viele zusätzliche Fehlerquellen mit sich ziehen kann, und weil der Kompiliervorgang auch einem modernen Applikationsserver mehrere Stunden dauert. Da PhantomJS 2.0.0 auf dem Macintosh noch nicht startet und die Tests und Testsuiten auf solchen Rechnern erstellt werden sollen, ist es empfohlen bei der stabilen Version 1.9.8 zu bleiben die sowohl unter Linux als auch Mac und Windows eingesetzt werden kann.
*  Als Test Runtime wird casperJS[^casperjsweb] genutzt, es steht ebenfalls in den gängigen Repositories zur Verfügung und muss nicht selbst kompiliert werden.
* casperJS wird mit einem "tester" Modul ausgeliefert, welches für Unit und funktionale Tests genutzt werden kann und eine API zur Verfügung stellt welche `vollständig?` den Anforderungen an Testfähigkeiten aus dem Lastenheft genügt.

[^phantomjsweb]:phantomjs.org/headless-testing.html
[^portageweb]:packages.gentoo.org/package/sys-apps/portage
[^aptweb]:wiki.ubuntuusers.de/APT
[^brewweb]:brew.sh
[^casperjsweb]:
[^casperjstestermodule]:http://casperjs.readthedocs.org/en/latest/modules/tester.html
*

###Umsetzung der Anforderungen Integration ins CI/CD System
* Phantom kann config file, von bashscript aufgerufen werden
* casper kann config file
*  bar



