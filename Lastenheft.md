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

Daraus abgeleitete Funktionalitäten:

**Testfähigkeiten**

* Seiten aufrufen
* Überprüfen ob Element auf Seite vorhanden.
* Navigieren der Seite und Identifizierung von Elementen mit Hilfe von XPATH[^xpath], CSS-Selektoren [^cssselect] oder dem Inhalt von Elementen 
* Website anhand von Links navigieren
* Javascript ausführen
* Formulare wie z.B. das Anmeldeformular oder das Adressformular im Shop im Browser ausfüllen und absenden. Der Test soll die gleiche Javascript Validierung erfahren wie der Nutzer auch. Der einfache Versand von vorausgefüllten HTTP Post-Request genügt nicht.
* HTTPS Verbindungen
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

Zusätzlich zu den Fähigkeiten der Tests gibt es Anforderungen an die Testumgebung und ihre Integration. Die Umgebung: 



* Muss auf mindestens einer der bestehenden Serverumgebungen lauffähig sein (Syseleven: Gentoo Linux, md Rechenzentrum Düsseldorf: Suse Linux oder Ubuntu, Amazon EC2 virtuelle Instanz mit Ubuntu)
* muss aus dem CI/CD System ausgelöst werden können.
* muss Erfolg Misserfolg eines Test als Rückgabewert liefern können.
* muss im Fehlerfall oder auf explizite Anweisung Screenshots der Seite erstellen, abspeichern und als Artefakt vorhalten können.
* muss die Seite rendern, das heißt Darstellung muss berechnet werden
* kann Testbedingungen für den Test bereitstellen in Form von Datenbankabfragen die vorab Testnutzer und Daten anlegen oder wiederherstellen.
* kann Parameter aus dem CI/CD-System an das Testsystem zur verfeinerten Steuerung der Testtiefe oder Auswahl von Testobjekten weiterreichen.

* muss Historie von Testergebnissen und Artefakten und Testlogs von alten Testläufen aufbewahren


* muss aktuelle Testskripte, aus der Versionsverwaltung _svn.gravis.de_ auschecken können



