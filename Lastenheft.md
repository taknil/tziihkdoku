
#Anforderungen
Im folgenden Auszug aus dem Lastenheft werden die Anforderungen definiert, die die Testumgebung erfülen muss.

Die Anforderungen orientieren sich an einem minimalen/basis- Testscenario, der Bestellung eine Produkt im Webshop, welches vom Anforderer gewüscht ist. 

Testscenario:
Seite des Shop aufrufen, prüfen ob richtige Seite, Anmeldeformular finden, einlogen, Produktseite aufrufen, Produkt in den Warenkorb legen, zum Warenkorb navigieren, Adresse auswählen, Bezahlen, Bestellung abschicken.

Daraus abgeleitete Funktionalitäten:
###Testfähigkeiten
* Seiten aufraufen
* Überprüfen ob Element auf Seite vorhanden.
* Navigieren der Seite und Identifizierung von Elementen mit Hilfe von XPATH, CSS-Selektoren oder dem Inhalt von Elementen 
* Website anhand von Links navigieren
* Javascript ausführen
* Formulare wie z.B. das Anmeldeformular oder das Adressformular im Shop im Browser ausfüllen und absenden. Der Test soll die gleiche Javascript Validierung erfahren wie der Nutzer auch. Der einfache Versand von vorausgefüllten HTTP Post-Request genügt nicht.
* HTTPS Verbindungen
* Session-Handling für log-in
* Logging des Testergebnis mit Ausgabe von Kommentagen im Test

####Optional:
* Dateidownload
* Dateiupload


###Umgebungsfähigkeiten
Zusätzlich zu den Fähigkeiten der Tests gibt es Anforderungen an die Testumgebung und ihre Integration. Die Umgebung: 

* Muss auf mindestens einer der bestehenden Serverumgebungen lauffähig sein (Syseleven: Gentoo Linux, md Rechenzentrum Düsseldorf: Suse Linux oder Ubuntu, Amazon EC2 virtuelle Instanz mit Ubuntu)
* muss aus dem CI/CD System angesprochen / gestartet / ausgelöst werden können.
* muss Erfolg oder Fehlschlagen eines Test als Rückgabewert liefern können.
* muss im Fehlerfall oder auf explizite Anweisung Screenshots der Seite erstellen, abspeichern und als Artefakt vorhalten können.
* muss die Seite renden
* kann Daten für den Test bereitstellen in Form von Datenbankabfragen die vorab Testnutzer und Daten anlegen oder wiederherstellen.
* kann Parametern aus dem CI/CD-System an das Testsystem zur verfeinerten Steuerung der Testtiefe oder Auswahl von Testobjekten weiterreichen.
* muss nicht den Test graphisch während der Laufzeit anzeigen
* muss aus sich heraus oder in der Historie des CI/CD System Testergebnisse und Artefakte von alten Testläufen aufbewahren
* muss aktuelle Tests, also deren Quellcode, aus der Versionsverwaltung _svn.gravis.de_ auschecken können


#Nutzwertanalyse
