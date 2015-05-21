\subsection{Lastenheft (Auszug)}
\label{app:Lastenheft}
Im folgenden Auszug aus dem Lastenheft werden die Anforderungen definiert, die die Testumgebung erfüllen muss.


Die Anforderungen orientieren sich an einem minimalen Testszenario, welches von Anforderer gewünscht ist: der Bestellung eines Produkts im Onlineshop. 

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

**Fähigkeiten der Tests**

Daraus abgeleitet muss ein Test folgende Anforderungen erfüllen:

* Seiten aufrufen 
* Seitenaufruf mit BasicAuth
* HTTP und HTTPS Verbindungen
* Überprüfen, ob DOM-Element auf Seite vorhanden.
* Navigieren der Seite und Identifizierung von Elementen mit Hilfe von CSS-Selektoren[^cssselect], XPATH[^xpath], oder dem Inhalt von Elementen 
* Website anhand von Links navigieren
* Javascript ausführen
* Formulare wie z.B. das Anmeldeformular oder das Adressformular im Shop im Browser ausfüllen und absenden. Der Test soll die gleiche Javascript-basierte Validierung erfahren wie der Nutzer auch. Das bedeutete dass Formularinhalte client-seitig überprüft werden. Der einfache Versand von vorausgefüllten HTTP-POST-Request, ohne das Ausfüllen von Formularfeldern, genügt nicht.
* Session-Handling 
* Logging des Testergebnis mit Ausgabe von Kommentaren im Testskript


[^xpath]: XML Abfragesprache, um Teile eines XML-Dokumentes zu adressieren
[^cssselect]:  Syntax in Cascading Stylesheets, um Teile eines HTML-Dokumentes zu adressieren
<!--
####Optional:
* Dateidownload
* Dateiupload
* -->


**Fähigkeiten des Testrunner**

Zusätzlich zu den Fähigkeiten der Tests gibt es Anforderungen an den Testrunner und seine Integration: 



* Der Testrunner muss auf mindestens einer der bestehenden Servern lauffähig sein (Syseleven: Gentoo Linux, md Rechenzentrum Düsseldorf: Suse Linux oder Ubuntu, Amazon EC2 virtuelle Instanz mit Ubuntu)
* Die Testläufe müssen aus dem CD-System *Go* ausgelöst werden können.
* Die Testumgebung muss Erfolg oder Misserfolg eines Tests als Rückgabewert liefern können.
* Die Testumgebung muss im Fehlerfall oder auf explizite Anweisung Screenshots der Seite erstellen
* Es können Testbedingungen für den Test bereitgestellt werden. z.B. in Form von Datenbankabfragen die vorab Testnutzer und Testdaten anlegen oder wiederherstellen.
* Eine Testsuite muss aus dem CD-System heraus gewählt werden können.
* Es können Parameter aus dem CD-System an das Testsystem zur verfeinerten Steuerung der Testtiefe oder Auswahl von Tests weiter gereicht werden. 
* Es muss eine Historie von Testergebnissen und Artefakten und Testlogs von alten Testläufen aufbewahrt werden
* Es müssen aktuelle Testskripte aus der Versionsverwaltung _svn.gravis.de_ ausgecheckt werden können
* Es muss eine maschinenlesbare Auswertung von Testläufen erstellt werden. 


**Abgrenzung**

* Tests müssen während der Laufzeit nicht grafisch angezeigt werden
