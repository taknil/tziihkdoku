

###PhantomJS
Als Browser der Testumgebung wird PhantomJS[^phantomjsweb] gewählt.     
Die Installation erfolgt über die Paketverwaltung der jeweiligen Distribution, das heißt portage[^portageweb] für Gentoo, APT[^aptweb] auf Ubuntu, brew[^brewweb] auf MacOS X.     
Es werden die Binärdateien aus den jeweiligen Repositories genutzt. Zum Projektzeitpunkt wird PhantomJS 1.9.8 verteilt.       
PhantomJS sollte nicht selbst kompiliert werden da es enorm viele Abhängigkeiten hat, was viele zusätzliche Fehlerquellen mit sich ziehen kann, und weil der Kompiliervorgang auch einem modernen Applikationsserver mehrere Stunden dauert.      
Da PhantomJS 2.0.0 auf dem Macintosh noch nicht startet und für linux nicht kompiliert, ist es empfohlen bei der stabilen Version 1.9.8 zu bleiben die sowohl unter Linux als auch Mac und Windows eingesetzt werden kann.

Als Server der alle zu testenden Webshops erreichen kann, wurde der "manager" Server als Installationsort ausgewählt.
Auf dem "manger"-Server, einem 32-bit System mit Gentoo Linux, war eine Installation mit Hilfe von `portage` nicht möglich da es selber kompilieren möchte, die Abhängigkeiten aber nicht alle aufgelöst werden konnten.
Der Hauptentwickler von PhantomJS bietet auf bitbucket vorkompilierte PhantomJS Versionen an. Diese wird in das Verzeichnis  `/usr/local/share` extrahiert und anschließend werden Symlinks dorthin in den Pfad gesetzt.

    cd /usr/local/share
    sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-i686.tar.bz2
    sudo tar xjf phantomjs-1.9.8-linux-i686.tar.bz2
    sudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/local/share/phantomjs
    sudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/local/bin/phantomjs
    sudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/bin/phantomjs



###casperJS
Als Test-Runtime wird casperJS[^casperjsweb] genutzt, es steht ebenfalls in den Repositories der gängigen Paketverwaltungen zur Verfügung und muss nicht selbst kompiliert werden.
Unter MacOS X werden die Quellen für `brew` aktualisiert, anschließend die neuste developer-evaluation-Version installiert.

    $ brew update
    $ brew install casperjs --devel
    
Unter gentoo Linux wird über die Paketverwaltung nur eine alte Version von casperJS angeboten. Hier muss der aktuelle Code aus der Versionsverwaltung geladen werden.
Dazu wurde `git clone` verwendet. Anschließend ein symbolischer Link in ein Verzeichnis aus dem Pfad erstellt. 

	$ cd /usr/local
    $ git clone git://github.com/n1k0/casperjs.git
    $ cd casperjs
    $ ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs


###Funktionstest

Es wurde überprüft ob die gewünschten Versionen der Software installiert wurde.

    it@manager ~ $ echo "phantomJS: $(phantomjs --version)" && echo "casperJS: $(casperjs --version)"
      phantomJS: 1.9.8
      casperJS: 1.1.0-beta3

Die Funktionsfähigkeit von casperJS wird mit dem Selbsttest überprüft.

    $ casperjs selftest
       […]
       PASS 1030 tests executed in 25.753s, 1030 passed, 0 failed, 0 dubious, 5 skipped.
       

###Konfiguration in *Go*
Im der Weboberfläche von *Go*, der Agentenkonfigurationsseite, wurde dem Entsprechenden Agentenserver "manager" eine neue Ressource mit dem Namen "casperjs" hinzugefügt.
Erst jetzt kann *casperJS* auch aus Go heraus tatsächlich genutzt werden.



[^phantomjsweb]:phantomjs.org/headless-testing.html
[^portageweb]:packages.gentoo.org/package/sys-apps/portage
[^aptweb]:wiki.ubuntuusers.de/APT
[^brewweb]:brew.sh
[^casperjsweb]:casperjs.org
[^casperjstestermodule]:http://casperjs.readthedocs.org/en/latest/modules/tester.html
[^casperjstesting]:http://casperjs.readthedocs.org/en/latest/testing.html#testing
