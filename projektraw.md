#Einleitung

###Der Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Unternehmen der Freenet Group. Sie vertreibt hauptsächlich Mobilfunkprodukte wie Vertäge und Mobilfunk-Endgeräte sowie dazu passendes Zubehör, betreibt aber keine eigene Mobilfunkinfrastruktur. Bereits seit 2011 bestand eine Kooperation mit der GRAVIS Computervertriebsgesellschaft, meinem ursprünglichen Ausbildungsbetrieb. Diese Kooperation mündete Ende 2012 in einer vollständigen Übernahme[^mdkauftgra] und einer anschließenden Integration mehrerer Abteilungen wie der Logistik und IT in den mobilcom-debitel Konzern. Infolgedessen ist die md verantwortlich für den Betrieb der GRAVIS Onlinepräsenz. Die mobilcom-debitel verfügt über mehrere Verwaltungsstandorte, der Sitz der ehemaligen GRAVIS-IT in Berlin am Ernst-Reuter-Platz konnte erhalten werden. Dort sind weiterhin Abgteilungen die GRAVIS-Systeme betreuen ansässig.


[^mdkauftgra]: Pressemitteilung zur Übernahme von GRAVIS durch md http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple
\\



##Projektumfeld
Das Projekt wurde im Rahmen der Ausbildung zum Fachinformatiker mit der Fachrichtung Anwendungsentwicklung durchgeführt.
Bedarfsträger für das Projekt ist das Unternehmen mobilcom-debitel GmbH selbst, da es als Maßname für die Qualitässicherung dienen soll.
Auftraggeber des Projektes ist die Abteilung _Vertrieb Onlineshop CMS_. Die Abteilung beschäftigt einen Testingenieur, der neben der Abnahme von neuen Features auch immer wieder sehr zeitaufwändig Regressionstests  durchführt. Um den hohen Qualitätsstandarts gerecht zu werden, sind diese Test notwendig, halten aber die Abnahme von neuen Features zeitlich auf. Durch die hohe Wiederholungsrate der Regressionstests ist es möglich, dass Fehler übersehen werden oder erst nach dem Deployment entdeckt werden. Zudem werden zur Zeit Testläufe und Fehlerfälle in der Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich eine Statistik, über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt es keine technische Möglichkeit, die das Ausrollen von fehlerhaftem Code auf dem Echtsystem verhindert. 

##Projektziel
Im Rahmen des Projekt soll eine Laufzeitumgebung für Front-End-Tests bereitgestellt werden. Diese muss in das Continuous-Delivery System \acs{Go} (im folgenden CI/CD System) eingebunden werden, damit vollautomatische Testszenarien damit ausgeführt werden können. Die Testingumgebung muss betriebsbereit dem Team _Vertreib Onlineshop CMS_ übergeben werden.



##Projektschnittstellen
Da das Projekt innerhalb des Teams stattfindet, knüpft es nur an interne Prozesse, also Abnahme und Deployment der Software, und technische Systeme an. 
Eine Auswertung durch das _Quality Assurance Team_ im Unternehmen erfolgt nicht. Die Testumgebung wird verknüpft mit Go, testet dabei über eine Webverbindung den Onlineshop und muss auf das hausinterne Versionsverwaltungssystem (SVN) zugreifen können, um dort aktuelle Tests abzuholen. 


##Projektabgrenzung
Die Erstellung von Tests oder Testzenarien für einen produktiven Einsatz ist nicht Teil des Projektes. Andere Testarten wie etwa Performancetests, muss das System nicht leisten.    
Eine eigene Benutzeroberfläche muss nicht erstellt werden, da die Steuerung ausschließlich aus dem \acs{CI/CD} System heraus erfolgt welches ein eigenes Webinterface zur Verfügung stellt.
<!-- eine (graphische) Aufbereitung der Testartefakte erfolgt nicht-->

#Projektplanung

##Projektphasen
Für die Umsetzung des Projekt stehen 70h zur Verfügung. Diese wurden bereits vor Projektbeginn in verschiedende Phasen aufgeteilt, die den typischen Phasen in der Softwareentwicklung entsprechen. Eine grobe Zeitplanung sowie die Hauptphasen enthält die folgenden Tabelle.

| Projektphase | Geplante Zeit |
| :---- | ----: |
| Analysephase | 11h |
| Entwurfsphase | 7h |
| Implementierungsphase | 40h |
| Einführung | 2h |
| Dokumentation | 10h |

    
> //FUUU, es sind 73h die ich im Antrag angegeben habe. Muss ich wohl im [nächsten Abschnitt drauf eingehen](#Ressourcenplanung)

Die Hauptphasen können in kleineren Unterpunkten detailiert werden. Eine detailierte Übersicht

| Projektphase | Detailzeit | Phasenzeit |
| :---- | ----: | ----: |
| Analysephase | | 10h |
| Problemanalyse & Besprechung | 2h | |
| Analyse der Anforderung | 2h | |
| Analyse des IST-Zustand der bisherigen Testingumgebung | 2h | |
| Analyse des IST-Zustand Einbindung in das CI/CD System | 2h | |
| Entwurfsphase | | 8h |
| Wahl eines Test-Runtime| 4h ||
| Lösungskonzept erstellen| 4h  ||
| Implementierungsphase | | 40h |
| Installation Test-Runtime | 3h | |
|  Erstellen Beispieltest | 2h | |
|  Testing der Runtime | 2h | |
|  Implementieren der Schnittstelle vom Testsystem zum CI/CD System | 30h | |
| Detailphase der Implementation | 12h |  |
| Detailphase der Implementation | 4h |  | 
| Detailphase der Implementation | 4h |  |
| Detailphase der Implementation | 10h |  |
|  Testen der Schnittstelle Testsystem zum CI/CD System | 3h | |
| Einführung | | 2h |
|  Übergaben des Systems an das Team | 2h | |
| Dokumentation | | 10h |

> // Implementationsphase: Hier sollten unbedingt die Informationen aus dem Projektantrag auftauchen.



##Abweichung vom Projektantrag

> Die Analysephase wurde im Projektantrag mit insgesamt 13h angegeben. Tatsächlich habe ich nur 10h gebraucht. Einzelnen Abweichungen innerhalb des Zeitplans enstanden durch Erleichterungen bzw. Blockaden die erst bei der Realisierung der einzelnen Teilschritte erkenntlich wur- den. Die tatsächlich benötigte Zeit für das Projekt entsprach somit der vorher veran- schlagten Planzeit. Siehe detaillierte Zeitplanung.

##Ressourcenplanung

* Personal: 
	* Entwickler: Umsetzung des Projekt
	* 1 QA Mensch
* Hardware: Es soll keine zusätzliche Hardware für das Projekt angeschafft werden. Zum Einsatz kommt die Testumgebung auf den vorhandenen Serversystemen. Dem Entwickler steht ein Arbeitsplatzrecher (MacBookPro) zur Verfügung auf dem zur Entwicklung
* Software: Es soll für die Testumgebung ausschließlich kostenfreie und/oder open-source Software mit einer Lizenz die kommerzielle Nutzung erlaubt eingesetzt werden. Die Software Go ist von GRAVIS lizensiert und verursacht im Rahmen des Projekt keine zusätlichen Kosten. Go ist mittlerweile auch open-source und könnte bei Bedarf angepasst werden.

###Liste der eingesetzen Software
* MacOS X
* Gentoo GNU/Linux
* Ubuntu GNU/Linux 14.04
* Oracle VirtualBox
* SublimeText2 als Texteditor
* git, svn zur Versionsverwaltung der Projektsoftware, -Dokumentation und Tests.
* phantom.js als Headless Browser
* ghost.js als Testrunner
* ghostdriver als Testrunner
* Thoughtworks \acs{Go} also \acs{CI/CD} Platform
* SeleniumIDE Plugin für Firefox
* pandoc, pdflatex, MacTeX, MacDown zur Erstellung der Projektdokumentation


##Entwicklungsprozess

Für die Realisierung des Projektes habe ich mich für ein Vorgehen, das angelehnt an den klassischen Wasserfall Prozess ist, entschieden. Ermöglicht wird dies durch den Umstand dass die Anforderungen klar definiert sind und sich im Zeitraum der Realisierung nicht signifikant ändern werden. In der Entwurfsphase wurde die Vorgehensweise der Entwicklung klar aufgestellt sodass ständige Rückfragen wie etwa in einem agilen Prozess nicht nötig sind. Es wird eine Nutzerschulung für alle potentielle Nutzer am Ende des Projekt geben sodass eine Eingewöhnung der Nutzer mit der Testumgebung schon während der Entwicklung nicht notwändig ist. Eine Aufnahme der Entwicklung in den agilen Regelprozess erschien nicht sinvoll.

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
|\vtop{\hbox{\strut Projektkosten}\hbox{\strut Gesamt}}|||2xfa,ke €|




###Amortisationsdauer
Im Folgenden Abschnitt soll ermittelt werden, ab welchen Zeitpunkt sich die Integration der Testumgebung amortisiert hat. Anhand dieses Wertes kann beurteilt werden ob die Umsetzung des Projektes sinnvoll ist aus wirtschaftlicher Sicht und sich auf Dauer Kostenvorteil ergeben. Die Anschaffungskosten dividiert durch die Kostenersparnis berechnet die Amortisationsdauer die durch das Projekt erreicht wird.




Durch die Automatisierung von immer wiederkehrenden Tests lässt sich Arbeitszeit des Testers einsparen. Dadurch würden sich die Personalkosten reduzieren lassen.




//todo Tabelle mit Zeiten für Regressionstest
//test on stage pre-deployment , test on live post-deployment, deployment bi-weekly
 Regressionstest Staging: 45min
+Regressionstest Echt-System: 45min
* 25€/h (Tester)+ 15€/h infra

----------------------------
Testumgebung         Dauer

------------------   -------
Stagingsystem        45 min

Livesystem           45 min

------------------   -------


> // Daniel Sagt Amortisation nicht ausrechnen da 1000€ heute haben $\neq$ 1000€ morgen haben

Regressionstest der Kernfunktionalitäten der Online-Shop erfolgen immer zu einem Deployment, einmal vorher in der Staging Umgebung und einmal im Echtsystem um eine fehlerfreie Funktionalität zu bestätigen.
Momentan wird im Zweiwöchen Zyklus deployt. Dadurch ergäbe sich eine Amortisationsdauer von
//formel   
 
---> $17monate$






##Nutzwertanalyse

> //Ich will eigentlich 2 Nutzwertanalysen machen, hier eine "Eignungsprüfung", einmal fallen tools raus wie htmlunit

manueller Tester |  selenium webdriver | ghost.js | HTMLUnit |
:----------- | :-----------: | -----------: | --- :
3         | 3       | 4 | 8
3        | 1        | 1  | 9 


// Tabellen, vorselektion, entscheidung aus zwei


###Nicht-monetäre Vorteile

* kann beliebig oft laufen
* ermöglicht veränderung von Deployment und Integrationsverhalten
* erhöht Vertrauen in den Code    

##Anwendungsfälle
Im laufe der Analysephase wurde mit dem Anforderer ein Anwendungsfalldiagramm erstellt welches eine Übersicht der Anwedungesfällt gibt. Es gibt alle Funktionen an die aus sicht des Endanwender benötigt werden. 

Die Anforderungskriterien im Lastenheften wurden entlang einer User-Story 

pre- &
post- deployment
test nach jedem Check-in 

Tom will hier usecase Diagram

##Qualitätsanforderungen



## Lastenheft / Fachkonzept

# Entwurfsphase

>//habe auch hosted lösungen wie casperbox (tot) und ghostinspektor angesehen. Letzeres gefällt aber ist nicht eigene infrastruktur, keine Integration in GO möglich und kosten viel geld (geht so, aber mehr als budget 0€ für software) 

> //ich habe hier mehrere Software evaluiert und rausgefunden dass slimerjs (Gecko) nicht wirklich headless ist und immer noch einen XVFB (X-Window Virtual frame buffer) braucht.
> Die entscheidung Fiel dann auf phantom.js
> // versucht phantomjs 2 zum laufen zu kriegen: keine chance, kompiliert nicht auf Linux, starte nicht auf dem mac
>    – ok, nehme phantomjs1.9.8
> casperjs ist es geworden weil industristandart.

>//unabhängige entwickler (aus Philips Firma) haben von Dalekjs abgeraten da unfertig und kaum support vom entwickler, gar pullrequest für fixes wurden ignoriert.


>// grobe struktur für Test und Beispieltest angesehen. Casper ist schick.



##Zielplattform
Die Testumgebung soll auf den vorhandenen Servern, auf denen auch der GRAVIS Onlineshop betrieben wird, betrieben werden. Dort läuf aktuell ein gentoo GNU/Linux mit jeweils mindestens 2Gb RAM. 


->> Freiheit: Ich schlage vor egal auf welchem Unix da S11, EC2 oder RZdus 

##Architekturdesign
Als headless-Browser wurde Phantom.js gewählt. Phantom.js hat sich als quasi-Industriestandart[^phantomjscookbook] für Browseranwendungen in headless Umgebungen etabliert, verfügt von sich aus bereits über Funktionalitäten für Front-End Tests, bringt vor allem aber eine große Zahl unterstüzender Frameworks mit. Bei Phantom.js handelt es sich um die Webkit layout engine bekannt aus Apples Safari Browser gekoppelt mit einer Javascript runtime und einer Kapselung in QT. Eine alternative Anwendung die auf der Gecko layout engine des Firefox Browser aufbaut, slimer.js ist in seiner Architektur noch nicht gefestigt und konnte so nicht für den Einsatz in Betracht gezogen werden.

[^phantomjscookbook]: phantomjs cookbook, packt-publishing (2014)

Die Auswahl der Test-Runtime, mit der das Projekt realisiert werden soll wurde anhand einer Nutzwertanalyse durchgeführt.
 [...] Die Gewichtung[^nugewichtung] und Bewertung[^nubewertung] der Kriterien erfolgte entsprechend der Anforderungen an das Projekt, aber auch mit Ausblick an zukünftige Anwendungen und Erweiterungen

Hier auch Nutzwertanalyse zwischen Frameworks


a different table format

--------------------------------------------------------------
Kriterium        Gewichtung  pjhantom.js          pjhantom.js 
                              selenium webdriver   ghost.js 
----------------- ----------  -------------------  ------------
hipster faktor         4           23                    5

sexyness               4           3rt                   34

viscosität bei                    3m/sl                 3m/sl
Raumteperatur              4

Siedetemperatur        4           5                    34

open-sourceiness       4           23                    3434
----------------- ----------  -------------------  ------------



[^nugewichtung]: Gewichtung: 1 = verzichtbar , 2 = wünschenswert, 4 = erforderlich, 5 = unbeding erforderlich
[^nubewertung]: Bewertung: 0 = nicht vorhanden, 1 = mangelhaft, 2 = ausreichend, 3 = befriedigend, 4 = gut, 5 = sehr gut


##Maßnamen zur Qualitässicherung

Es wird früh in der Implementierungsphase ein Beispieltest erstellt der die Funktionalität des System beweisen kann. Der Code der Tests als auch der Schnittstelle wird in SVN versionsverwaltet sodass es einfach möglich ist funktionierende Versionen wiederherzustellen.

ggf Empfehlung zur Veriosnierung des Testrunner

##Pflichtenheft

> ist im Anhang zu finden

<!-- ##Implementierung der Benutzeroberfläche
* Ausgelöst wird in Go
* Keine Eigene GUI
* Ergebnisse in ANT boolen in Go
* Testartifacts werden in Go geladen

%##Implementierung der Geschäftslogik--->

#Implementierungsphase

> Hier erzähle ich was ich tatsächlich gemacht habe, auch welche Probleme aufgetreten sind



#Testphase

###Kritereien an Beispieltest

> Die können ggf auch in das Pflichtenheft

* 1 Fail
* 1 Success
* 1 Artefakterzeugung
* 1 Commentar / Beschreibung (Debug output für Step-by-Step debugging)
* HTTPS fähig ?
* Form submission "wie ein Mensch im grafischen Interface / in den Feldern" nicht nur ein HTTP-POST request.

-> Ziel ist eine Bestellung aufgeben zu können

#Abnahmnephase

Abgleich der Punkte aus Lastenheft, alle abgehakt? -> abgenommen.

#Einführungsphase

#Dokumentation

#Fazit

##Soll/Ist Vergleich

##Lessons learned

##Ausblick

---------
