\subsection{Lastenheft (Auszug)}
\label{app:Lastenheft}
Es folgt ein Auszug aus dem Lastenheft mit Fokus auf die Anforderungen:



Die Anforderungen orientieren sich an einem minimalen Testszenario, der Bestellung eines Produkts im Webshop. 

**Testszenario**:

+ Seite des Shop aufrufen
+ prüfen ob richtige Seite
+ Anmeldeformular finden
+ einloggen
+ Produktseite aufrufen
+ Produkt in den Warenkorb legen
+ zum Warenkorb navigieren
+ Adresse auswählen 
+ Bezahlen
+ Bestellung abschicken.

**Testfähigkeiten**

Daraus abgeleitet muss ein Test folgende Anforderungen erfüllen:

* Seiten aufrufen 
* Seitenaufruf mit BasicAuth
* HTTP und HTTPS Verbindungen
* Überprüfen ob Element auf Seite vorhanden.
* Navigieren der Seite und Identifizierung von Elementen mit Hilfe von XPATH[^xpath], CSS-Selektoren [^cssselect] oder dem Inhalt von Elementen 
* Website anhand von Links navigieren
* Javascript ausführen
* Formulare wie z.B. das Anmeldeformular oder das Adressformular im Shop im Browser ausfüllen und absenden. Der Test soll die gleiche Javascript-basierte Validierung erfahren wie der Nutzer auch. Der einfache Versand von vorausgefüllten HTTP-POST-Request genügt nicht.
<!-- * Session-Handling für log-in -->
* Logging des Testergebnis mit Ausgabe von Kommentaren im Testskript


[^xpath]: XML Abfragesprache, um Teile eines XML-Dokumentes zu adressieren
[^cssselect]:  Syntax in Cascading Stylesheets, um Teile eines HTML-Dokumentes zu adressieren
<!--
####Optional:
* Dateidownload
* Dateiupload
* -->


**Umgebungsfähigkeiten**

Zusätzlich zu den Fähigkeiten der Tests gibt es Anforderungen an die Testumgebung und ihre Integration. : 



* Die Testmgebung muss auf mindestens einer der bestehenden Serverumgebungen lauffähig sein (Syseleven: Gentoo Linux, md Rechenzentrum Düsseldorf: Suse Linux oder Ubuntu, Amazon EC2 virtuelle Instanz mit Ubuntu)
* Die Testläufe müssen aus dem CI/CD System *Go* ausgelöst werden können.
* Die Testumgebung muss Erfolg oder Misserfolg eines Tests als Rückgabewert liefern können.
* Die Testumgebung muss im Fehlerfall oder auf explizite Anweisung Screenshots der Seite erstellen
* Es können Testbedingungen für den Test bereitgestellt werden. z.B. in Form von Datenbankabfragen die vorab Testnutzer und Testdaten anlegen oder wiederherstellen.
* Es können Parameter aus dem CI/CD-System an das Testsystem zur verfeinerten Steuerung der Testtiefe oder Auswahl von Testobjekten weiter gereicht werden.
* Es muss eine Historie von Testergebnissen und Artefakten und Testlogs von alten Testläufen aufbewahrt werden
* Es müssen aktuelle Testskripte aus der Versionsverwaltung _svn.gravis.de_ ausgecheckt werden können
* Eine Testsuite muss aus dem CI/CD System heraus gewählt werden können.
* Es muss eine maschinenlesbare Auswertung von Tests erstellt werden. 



