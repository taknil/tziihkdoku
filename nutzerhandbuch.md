#Benutzerhandbuch zu Front-End-Test mit casperJS
Um kontinuierlich die Funktionsfähigkeit des GRAVIS Onlineshop und weiterer Web-System zu überprüfen werden Front-End-Test durchgeführt.
Es sollen nicht nur einzelne Codesegmente getestet werden sondern die Nutzererfahrung des Kunden nachgestellt werden. Dazu wird der Onlineshop in einem voll funktionsfähigen Browser getestet. Die aktuelle Testumgebung benutzt hierfür phantomJS als Browser und casperJS als Testframework zur Fernsteuerung des Browsers.
Tests werden in JavaScript programmiert. Eine Aufnahme von Tests im Browser ist begrenzt möglich.
 
Es werden Testsuiten erstellt die häufige Nutzungszenarien im Onlineshop nachempfinden. Gängige Abläufe wurde bereits für die Selenium Testumgebung definiert und können als Orientierung genutzt werden.

Zur vereinfachten Nutzung wurde eine Testumgebung auf einem Server installiert und in Go integriert. Front-End-Tests können auf Knopfdruck durchgehführt werden.

##Tests ausführen
###Auf der Kommandozeile
In der Kommandozeile ist es sehr einfach Tests auszuführen. `casperjs test /path/to/file.js` 
Das 1 Argument muss immer `test`sein.
Wenn der angegebenen Pfad ein Ordner ist werden alle .js Dateien darin nacheinander ausgeführt.
Um die Ausgabe auf der Kommandozeile zu Kontrollieren können mehrere Parameter und Optionen angegeben Werdern.
`--verbose=true` Schaltet die Ausgabe von Schritten ein
`--log-level=[debug|info|warning|error]`  entscheidet (absteigend) den Detailgrad der Ausgabe.
Eigene Optionen die in den Test verwendet werden solle werden einfach mit `--myfancyoption=bar` angegeben.

Mehr Details verrät  die [OnlineDoku zu Kommandozeilennutzung](http://casperjs.readthedocs.org/en/latest/cli.html)

###im CI/CD System
In Go  gibt es eine Pipeline namens [Iamacapserpipeline](https://manager.gravis.de/go/tab/pipeline/history/UL.iamacasperpieline).
Diese Führt Tests auf Go Agentenservern mit der Ressource CasperJs aus.

##Tests erstellen
Die Tests werden in Javascript, gegen das `tester`-Modul von casperJS geschrieben. Auf Wunsch ist es auch möglich tests in CoffeeScript zu schreiben.

http://casperjs.readthedocs.org/en/latest/index.html

Es ist möglich Test ähnlich wie in der Selenium IDE, im Chrome browser mit einer Erweiterung namens [Ressurrectio](https://chrome.google.com/webstore/detail/resurrectio/kicncbplfjgjlliddogifpohdhkbjogm) Tests aufzunehmen. Die Erweiterung ist aber mittlerweile vernachlässigt und erstellt unübersichtlichen Code. Dieser sollte höchstens als Grundlage für einen handgeschriebenen Test dienen.

In CasperJS werden Tests gegen das 

##Testrunner installieren
Um Test zu erstellen ist es empfohlen casperJS und PhantomJS auf der Entwicklermaschine zu installieren.
PhantomJS 2.0.x ist nach aktuellem Kenntnisstand noch nickt einsetzbar. PhantomJS 1.9.8 wird empfohlen, casperJS hat bis jetzt keine Probleme mit Aufwärtskompatibilität sodass in Zukunft ohne Probleme ein Update möglich sein sollte. Binaries für die manuelle Installation sind unter https://bitbucket.org/ariya/phantomjs/downloads/ zu finden. Auf Grunde enormer Abhängigkeiten von Webkit und QT ist davon abzusehen PhantomJS selber zu kompilieren. 

Casperjs kann einfach per `brew`auf MacOS installiert werden.

alternativ auch direkt von github

    $ cd /usr/local
    $ git clone git://github.com/n1k0/casperjs.git
    $ cd casperjs
    $ ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs
    
    
Die online Dokumentation ist auch sehr hilfreiche. http://casperjs.readthedocs.org/en/latest/installation.html

Nach Installation mit `casperjs selftest` Funktionsfähigkeit überprüfen.