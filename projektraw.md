##Vorwort


###Der Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Unternehmen der Freenet Group. Sie vertreibt hauptsächlich Mobilfunkprodukte wie Vertäge und Mobilfunk-Endgeräte sowie dazu passendes Zubehör, betreibt aber keine eigene Mobilfunkinfrastruktur. Bereits seit 2011 bestand eine Kooperation mit der GRAVIS Computervertriebsgesellschaft, meinem ursprünglichen Ausbildungsbetrieb. Diese Kooperation mündete Ende 2012 in einer vollständigen Übernahme und einer anschließenden Integration mehrerer Abteilungen wie der Logistik und IT in den mobilcom-debitel Konzern. Infolgedessen ist die md verantwortlich für den Betrieb der GRAVIS Onlinepräsenz. Die mobilcom-debitel


Quelle: http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple

#Einleitung
Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer Laufzeitumgebung für funktionale Front-End-Tests der betreuten Onlineshops, dem GRAVIS Onlineshop und dem MDS Onlineshop. Diese Umgebung soll in das Continuous-Delivery System _Go_ eingebunden werden um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das Entwicklungsteam “Vertrieb Onlineshop CMS” welches eine geringere Arbeitslast beim Einsatz dieses System zum Testen erwartet.

##Projektumfeld
Das Projekt wurde im Rahmen der Ausbildung zum Fachinformatiker mit der Fachrichtung Anwendungsentwicklung durchgeführt.
Bedarfsträger für das Projekt ist das Unternehmen mobilcom-debitel GmbH selbst da es als Maßname für die Qualitässicherung dienen soll.
Auftraggeber des Projektes ist die Abteilung _Vertrieb Onlineshop CMS_. Die Abteilung beschäftig einen Testingenieur der neben der Abnahme von neuen Features auch immer wieder sehr zeitaufwändig Regessionstests durchführt. Um den hohen Qualitätsstandarts gerecht zu werden sind diese Test notwendig, halten aber die Abnahme von neuen Features auf. Durch die hohe Wiederholungsrate ist es möglich dass Fehler übersehen werden oder erst nach dem Deployment entdeckt werden. Zudem werden Testläufe und Fehlerfälle in der Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich eine Statistik über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt es keine technische Möglichkeit die das Ausrollen von fehlerhaftem Code auf dem Echtsystem verhindert. 

##Projektziel
Im Rahmen des Projekt soll eine Laufzeitumgebung für Front-End- Test bereitgestellt werden. Diese muss in das Continuous-Delivery System GO (im folgenden CI/CD System) eingebunden werden damit vollautomatische Testszenarien damit ausgeführt werden können. Die Testingumgebung muss betriebsbereit dem Team “Vertreib Onlineshop CMS” übergeben werden.

##Projektbegründung
* Wer will das warum haben?

* Wer ist daran interessiert


##Projektschnittstellen
Nein, nicht Softwareschnittstellen. Schnittstelle des Projekt

* Schnittstelle zu Go (muss go agent laufen lassen)
* Schnittstelle zum Web (explizit zugriff von aussen)
* Schnittstelle zur Versionsverwaltung
* Schnittstelle zu ec2

##Projektabgrenzung
Die Erstellung von Tests oder Testzenarien über einen Bespieltest hinaus ist nicht Teil des Projektes. Andere Testarten wie etwa Performancetests muss das System nicht leisten.
Eine eigene Benutzeroberfläche muss nicht erstellt werden da die Steuerung ausschließlich aus dem CI/CD System heraus erfolgt welches ein eigenes Webinterface zur Verfügung stellt.

#Projektplanung

##Projketphasen

##Abweichung vom Projektantrag

##Ressourcenplanung
personal
HW
SW


##Entwicklungsprozess

#Analysephase

##Ist-Analyse
Auftraggeber des Projektes ist die Abteilung _Vertrieb Onlineshop CMS_. Die Abteilung beschäftig einen Testingenieur der neben der Abnahme von neuen Features auch immer wieder sehr zeitaufwändig Regessionstests durchführt. Um den hohen Qualitätsstandarts gerecht zu werden sind diese Test notwendig, halten aber die Abnahme von neuen Features auf. Durch die hohe Wiederholungsrate ist es möglich dass Fehler übersehen werden oder erst nach dem Deployment entdeckt werden. Zudem werden Testläufe und Fehlerfälle in der Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich eine Statistik über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt es keine technische Möglichkeit die das Ausrollen von fehlerhaftem Code auf dem Echtsystem verhindert. 

##Wirschaftlichkeitsanalyse

###Make or Buy Entscheidung
Es kann Standardsoftware für Tests genutzt werden: phantom.js und ghost.js || selenium webdriver / ghostdriver.
Die integration in der CI/CD System aber muss selbst programmiert werde da Go wenig verbreitet ist und bisher keine Integration solcher Art publik gemacht wurde. Da Go open-source und die API gut Dokumentiert ist , kann eine Integration aus eigener Kraft erfolgen.

###Projektkosten
Die Projektkosten, die bei der Entwicklung des Projektes anfallen, sollen im Folgenden kalkuliert werden. Dafür müssen neben den Personalkosten für den Entwickler und  weitere Mitarbeiter auch noch die Aufwendungen für die Ressourcen berücksichtigt werden. Da Kalkulation wird anhand von branchenüblichen Stundensätzen durchgeführt. Der Stundensatz eines Auszubildenden im 3. Lehrjahr beträgt demzufolge _6,79€/h_, der eines Mitarbeiters _28,45€/h_ . Als Gemeinkosten für Ressourcennutzung im Unternehmen (Hardware und Software, Büroarbeitsplatz etc.) wurde ein pauschaler Stundensatz von 15 € angenommen.



\begin{figure}
\[ \frac{1000 \frac{€}{Monat} * 12\frac{Monate}{Jahr} }{ (8\frac{h}{Tag} *221\frac{Tage}{Jahr} )}=  6,79\frac{€}{h} \]
\caption{Kosten eines Auszubildenden}
\end{figure}



| Vorgang | Zeit | Kosten pro Stunde | Kosten |
| :------------ | -------------: | :------------ | --------: |
| Entwicklungskosten | 70h  | 6,79€ + 15€ | 1525,30€|
| Fachgespräch mit Ausbilder | 4h  | 1 FTE + infra| 173,80€|
| Entwicklungskosten | 1h  | 1 FTE + infra| 43,45€|
| Nutzerschulung | 2h  | 3 FTE + infra| 130,35€|
|\vtop{\hbox{\strut Projektkosten}\hbox{\strut Gesamt}}|||2389,35 €|




###Amortisationsdauer
Im Folgenden Abschnitt soll ermittelt werden, ab welchen Zeitpunkt sich die Integration der Testumgebung amortisiert hat. Anhand dieses Wertes kann beurteilt werden ob die Umsetzung des Projektes sinnvoll ist aus wirtschaftlicher Sicht und sich auf Dauer Kostenvorteil ergeben. Die Anschaffungskosten dividiert durch die Kostenersparnis berechnet die Amortisationsdauer die durch das Projekt erreicht wird.




Durch die Automatisierung von immer wiederkehrenden Tests lässt sich Arbeitszeit des Testers einsparen. Dadurch würden sich die Personalkosten reduzieren lassen.




//todo Tabelle mit Zeiten für Regressionstest
//test on stage pre-deployment , test on live post-deployment, deployment bi-weekly
 Regressionstest Staging: 45min
+Regressionstest Echt-System: 45min
* 25€/h (Tester)+ 15€/h infra





Regressionstest der Kernfunktionalitäten der Online-Shop erfolgen immer zu einem Deployment, einmal vorher in der Staging Umgebung und einmal im Echtsystem um eine fehlerfreie Funktionalität zu bestätigen.
Momentan wird im Zweiwöchen Zyklus deployt. Dadurch ergäbe sich eine Amortisationsdauer von
//formel   
 
---> $17monate$

Erst duch den einsatz von Automatisierten Test aber wird ein neues Vorgehen möglich: Es sollen nicht mehr zwei-wöchentlich Deployments erfolgen sondern kontinuierlich, also täglich.
Durch die neue Anzahl von maximal 5 Deployments pro Woche ergibt sich eine neue minimale Amortisationsdauer
    
---> $2monate$




##Nutzwertanalyse

manueller Tester | phantom.js+ selenium webdriver | phantom.js + ghost.js
:----------- | :-----------: | -----------:
3         | 3       | 4
3        | 1        | 1



###Nicht-monetäre Vorteile

* kann beliebig oft laufen
* ermöglicht veränderung von Deployment und Integrationsverhalten
* erhöht Vertrauen in den Code    

##Anwendungsfälle
pre- &
post- deployment
test nach jedem Check-in / stündlich

##Qualitätsanforderungen



## Lastenheft / Fachkonzept

# Entwurfsphase

##Zielplatform
gentoo GNU/Linux 

##Architekturdesign

##*more*

##Maßnamen zur Qualitässicherung

* Der Beispieltext

##Pflichtenheft

#Implementierungsphase

##Implementierte Datenstrukturen

##Implementierung der Benutzeroberfläche
* Ausgelöst wird in Go
* Keine Eigene GUI
* Ergebnisse in ANT boolen in GO
* Testartifacts werden in Go geladen

##Implementierung der Geschäftslogik

#Abnahmnephase

#Einführungsphase

#Dokumentation

#Fazit

##Soll/Ist Vergleich

##Lessons learned

##Ausblick

---------

#Anahang

##Detaillierte Zeitplanung

##lastenheft

##Datenmodell

##Benutzeroberfläche