#Einleitung


## Der Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Unternehmen
der Freenet Group. Sie vertreibt hauptsächlich Mobilfunkprodukte wie
Vertäge und Mobilfunk-Endgeräte sowie dazu passendes Zubehör, betreibt
aber keine eigene Mobilfunkinfrastruktur. Bereits seit 2011 bestand eine
Kooperation mit der GRAVIS Computervertriebsgesellschaft, meinem
ursprünglichen Ausbildungsbetrieb. Diese Kooperation mündete Ende 2012
in einer vollständigen Übernahme[^grauebernahme] und einer anschließenden
Integration mehrerer Abteilungen wie der Logistik und IT in den
mobilcom-debitel Konzern. Infolgedessen ist die md verantwortlich für
den Betrieb der GRAVIS Onlinepräsenz. Die mobilcom-debitel verfügt über
mehrere Verwaltungsstandorte. Der Sitz der ehemaligen GRAVIS-IT in
Berlin am Ernst-Reuter-Platz konnte erhalten werden. Dort sind weiterhin
Abteilungen die GRAVIS-Systeme betreuen ansässig.

Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer
Laufzeitumgebung für funktionale Front-End-Tests der betreuten
Onlineshops, dem GRAVIS Onlineshop und dem MDS Onlineshop. Diese
Umgebung soll in das Continuous-Delivery System *Go* eingebunden, werden
um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das
Entwicklungsteam *Vertrieb Onlineshop CMS*, welches eine geringere
Arbeitslast beim Einsatz dieses System zum Testen erwartet.

[^grauebernahme]:Pressemitteilung zur Übernahme von GRAVIS durch md http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple


##Das Projekt

>unklar wo dieser § hin soll

Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer Laufzeitumgebung für funktionale Front-End-Tests der betreuten Onlineshops, dem GRAVIS Onlineshop und dem MDS Onlineshop. Diese Umgebung soll in das Continuous-Delivery System _Go_ eingebunden, werden um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das Entwicklungsteam _Vertrieb Onlineshop CMS_, welches eine geringere Arbeitslast beim Einsatz dieses System zum Testen erwartet.

##Projektumfeld


Das Projekt wurde im Rahmen der Ausbildung zum Fachinformatiker mit der
Fachrichtung Anwendungsentwicklung durchgeführt. Bedarfsträger für das
Projekt ist das Unternehmen mobilcom-debitel GmbH selbst, da es als
Maßname für die Qualitässicherung dienen soll. Auftraggeber des
Projektes ist die Abteilung *Vertrieb Onlineshop CMS*. Die Abteilung
beschäftigt einen Testingenieur, der neben der Abnahme von neuen
Features auch immer wieder sehr zeitaufwändig Regressionstests
durchführt. Um dem hohen Qualitätsstandart gerecht zu werden, sind
diese Test notwendig, halten aber die Abnahme von neuen Features
zeitlich auf. Durch die hohe Wiederholungsrate der Regressionstests ist
es möglich, dass bei manueller Testdurchführung Fehler übersehen  oder erst nach dem Deployment entdeckt werden. Zudem werden zur Zeit Testläufe und Fehlerfälle in der
Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich
eine Statistik, über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt
es keine technische Möglichkeit, die das Ausrollen von fehlerhaftem Code
auf dem Echtsystem verhindert.

##Projektziel


Im Rahmen des Projekt soll eine Laufzeitumgebung für Front-End-Tests
bereitgestellt werden. Diese muss in das Continuous-Delivery System
\acs{Go} (im folgenden CI/CD System) eingebunden werden, damit
vollautomatische Testszenarien damit ausgeführt werden können. Die
Test-Umgebung muss betriebsbereit dem Team *Vertreib Onlineshop CMS*
übergeben werden.

##Projektschnittstellen


Da das Projekt innerhalb des Teams stattfindet, knüpft es nur an interne
Prozesse, also Abnahme und Deployment der Software, und technische
Systeme an. Eine Auswertung durch das *Quality Assurance Team* im
Unternehmen erfolgt nicht. Die Testumgebung wird verknüpft mit Go,
testet dabei über eine Webverbindung den Onlineshop und muss auf das
hausinterne Versionsverwaltungssystem (SVN) zugreifen können, um dort
aktuelle Tests abzuholen.

##Projektabgrenzung


Die Erstellung von Tests oder Testzenarien für einen produktiven Einsatz
ist nicht Teil des Projektes. Andere Testarten wie etwa
Performancetests, muss das System nicht leisten.\
Eine eigene Benutzeroberfläche muss nicht erstellt werden, da die
Steuerung ausschließlich aus dem \acs{CI/CD} System heraus erfolgt
welches ein eigenes Webinterface zur Verfügung stellt.
<!-- eine (graphische) Aufbereitung der Testartefakte erfolgt nicht-->

#Projektplanung


##Projektphasen


Für die Umsetzung des Projekt stehen 70h zur Verfügung. Diese wurden
bereits vor Projektbeginn in verschiedende Phasen aufgeteilt, die den
typischen Phasen in der Softwareentwicklung entsprechen. Eine grobe
Zeitplanung sowie die Hauptphasen enthält die folgenden Tabelle.

  Projektphase              Geplante Zeit
  ----------------------- ---------------
  Analysephase                        10h
  Entwurfsphase                        7h
  Implementierungsphase               40h
  Abnahme                              1h
  Einführung                           2h
  Dokumentation                       10h



Die Hauptphasen können in kleineren Unterpunkten detailiert werden. Eine
detailierte Übersicht befindet sich im Anhang "Detaillierte Zeitplanung"

>Tabelle mit Latex Formatierung folgt im Anhang

  Projektphase                                                         Detailzeit   Phasenzeit
  ------------------------------------------------------------------ ------------ ------------
  Analysephase                                                                             10h
  Problemanalyse & Besprechung                                                 3h 
  Analyse der Anforderung                                                      3h 
  Analyse des IST-Zustand der bisherigen Testingumgebung                       0h 
  Analyse des IST-Zustand Einbindung in das CI/CD System                       4h 
  Entwurfsphase                                                                             7h
  Lösungskonzept erstellen                                                     4h 
  Wahl eines Testrunner                                                        3h 
  Implementierungsphase                                                                    40h
  Installation Test-Runtime                                                    3h 
  Erstellen Beispieltestsuite                                                  2h 
  Testing der Runtime                                                          2h 
  Implementieren der Schnittstelle vom Testsystem zum CI/CD System            30h 
  Erstellung von ANT Targets	                                               12h 
  Einrichtung der Pipeline zur Testausführung                                 12h 
  Einsatz von Umgebungsvariablen                                               4h 
  Erweiterung des Bespieltest um Screenshots                                   2h 
  Pipeline um Artefaktensammlung erweitern                                     6h
  Pipeline um Screenshotsammlung erweitern                                     6h
  Testen der Schnittstelle Testsystem zum CI/CD System                         3h 
  Abnahme                                                                                   1h
  Einführung                                                                                2h
  Übergaben des Systems an das Team                                            2h 
  Dokumentation                                                                            10h



##Abweichung vom Projektantrag


Die Analysephase wurde im Projektantrag mit insgesamt 13h angegeben. Tatsächlich habe ich nur 10h gebraucht.
 Nach der Besprechung mit dem Projektanforderer waren die Anforderungen klar genug abgesteckt sodass die Phase der Analyse der alten, defekten Testumgebung entfallen konnte. 
 Einzelnen Abweichungen innerhalb des Zeitplans entstanden durch Erleichterungen bzw. Blockaden
die erst bei der Realisierung der einzelnen Teilschritte erkenntlich wurden. Die tatsächlich benötigte Zeit für das Projekt entsprach
somit der vorher veranschlagten Planzeit. Siehe detaillierte Zeitplanung.

##Ressourcenplanung


Personal:
* 1 Entwickler: Umsetzung des Projekt
* 1 Softwarestratege / Projektleiter "Testing" für Anforderungsaufnahme, technische Rücksprachen und Abnahme
* 1 Team *Vertrieb Onlineshop CMS* für einführende Schulung 
* Hardware:
	 Es soll keine zusätzliche Hardware für das Projekt angeschafft werden. Zum Einsatz kommt die Testumgebung auf den vorhandenen Serversystemen. Dem Entwickler steht ein Arbeitsplatzrecher (MacBookPro) zur Verfügung auf dem die Entwicklung und Evaluation von Software stattfinden soll.
	 * Software: 
	Es soll für die Testumgebung ausschließlich kostenfreie und/oder open-source Software mit einer Lizenz die kommerzielle Nutzung erlaubt eingesetzt werden. Die Software Go ist von GRAVIS lizensiert und verursacht im Rahmen des Projekt keine zusätzlichen Kosten. Go ist mittlerweile auch open-source und könnte bei Bedarf angepasst werden.
###Liste der eingesetzen Software
* MacOS X* Gentoo GNU/Linux* Ubuntu GNU/Linux 14.04* Oracle VirtualBox* SublimeText2 als Texteditor* git & svn zur Versionsverwaltung der Projektsoftware, -Dokumentation und Tests. * phantomJS als Headless Browser* casperJS als Testrunner* ghostdriver als Testrunner* Thoughtworks Go also CI/CD Platform* SeleniumIDE Plugin für Firefox* pandoc, pdflatex, MacTeX, MacDown, Mou zur Erstellung der Projektdokumentation

##Entwicklungsprozess


Für die Realisierung des Projektes habe ich mich für ein Vorgehen, das
an den klassischen Wasserfall Prozess angelehnt  ist, entschieden.
Ermöglicht wird dies durch den Umstand dass die Anforderungen klar
definiert sind und sich im Zeitraum der Realisierung nicht signifikant
ändern werden. In der Entwurfsphase wurde die Vorgehensweise der
Entwicklung klar aufgestellt sodass ständige Rückfragen wie etwa in
einem agilen Prozess nicht nötig sind. Es wird eine Nutzerschulung für
alle potentielle Nutzer am Ende des Projekt geben sodass eine
Eingewöhnung der Nutzer mit der Testumgebung schon während der
Entwicklung nicht notwendig ist. Eine Aufnahme der Entwicklung in den
agilen Regelprozess erschien nicht sinnvoll.

#Analysephase


##Ist-Analyse


Zum Zeitpunkt des Projektbegin werden Regressionstests also Front-End-Tests ausschließlich
manuell von Testingenieuren oder Entwicklern aus dem Team vorgenommen. Bei bevorstehendem Ausspiel muss der Testingenieur seine aktuelle Aufgabe niederlegen und den gewünschten Softwarestand auf dem Staging-System testen. Ein Handzeichen und eine mündliche Abstimmung mit dem Team signalisieren dann die Bereitschaft zum Ausspiel. Anschließend müssen die Tests im Echt-System wiederholt werden um sicher zu gehen dass das Ausspiel erfolgreich war. Tritt hier ein Fehler auf muss geklärt werden ob der Fehler vorher übersehen wurde (menschlicher Faktor) oder die Umgebungsparameter ursächlich sind. Oft ist dies nicht mehr nachvollziehbar. 
  

 Zudem werden Testläufe
und Fehlerfälle in der Regel nicht oder nicht ausführlich dokumentiert
und es ist nicht möglich eine Statistik über die Fehlerhäufigkeit zu
führen. Darüber hinaus gibt es keine technische Möglichkeit die das
Ausrollen von fehlerhaftem Code auf dem Echt-System verhindert.

 Zu einem früheren Zeitpunkt war eine Testumgebung auf Basis von Selenium in Betrieb genommen worden. Diese Testumgebung hing von Diensten dritter ab die mittlerweile eingestellt wurden. Für diese Umgebung wurden ursprünglich Testabläufe definiert die befolgt werden um alle Funktionalitäten zu testen. Diese Testabläufe werden nach besten gewissen bei manuellen Test befolgt.
 Das vertrauen in die Tests ist zu diesem Zeitpunkt nicht sehr hoch da in der Vergangenheit Funktionen an unerwarteter Stelle brachen und den gesamten Entwicklungsprozess aufgehalten haben.

##Wirschaftlichkeitsanalyse

Auf Grund der Probleme des momentanen Prozess, der im Abschnitt \ref Ist-Analysegeschildert wurde ist die Umsetzung des Projekt unbedingt erforderlich.


### Make or Buy Entscheidung

Front-End-Test von Web-Applikationen sind ein häufiger Anwendungsfall und es gibt viele Anbieter auf dem Mark und noch viel mehr experimentelle Ansätze dafür.

Es kann also Standardsoftware für Tests genutzt werden: phantomJS und
casperJS oder Selenium webdriver und ghostdriver bieten sich als Lösungen an.

Die Integration von Front-End-Test in das CI/CD-System *Go* ist eine Unternehmensspezifische Anforderung. Go ist ein wenig verbreitetes System und keine Integration solcher Art wurde bisher publik gemacht.
Da *Go* open-source und die API gut dokumentiert[^gowebdoku] ist , kann eine Integration aus
eigener Kraft erfolgen.

[^gowebdoku]:http://www.go.cd/documentation/user/current/

### Projektkosten

Die Projektkosten, die bei der Entwicklung des Projektes anfallen,
sollen im Folgenden kalkuliert werden. Dafür müssen neben den
Personalkosten für den Entwickler und weitere Mitarbeiter auch noch die
Aufwendungen für die Ressourcen berücksichtigt werden. Da Kalkulation
wird anhand von branchenüblichen Stundensätzen durchgeführt. Der
Stundensatz eines Auszubildenden im 3. Lehrjahr beträgt demzufolge
*6,79€/h* [^hourlyrate], der eines Mitarbeiters *28,45€/h* [^hourlyrate]. Als Gemeinkosten für
Ressourcennutzung im Unternehmen (Hardware und Software, Büroarbeitsplatz etc.) wurde ein berechneter Stundensatz von 7,90€/FTE von Controling mitgeteilt.
angenommen.

[^hourlyrate]: Stundensätze wurden aus dem Unternehmensinternen Controling bereitgestellt

\begin{figure}
\[ \frac{ \eur{1000}\mbox{/Monat} \cdot 12\frac{Monate}{Jahr} }{ (8\frac{h}{Tag} \cdot 221\frac{Tage}{Jahr} )}=  \eur{6,79}\mbox{/h} \]
\caption{Kosten eines Auszubildenden}
\end{figure}


  Vorgang                                                    Zeit Kosten pro Stunde        Kosten
  -------------------------------------------------------- ------ ------------------- -----------
  Entwicklungskosten                                          70h 6,79€ + 7,90€         1028,30€
  Fachgespräch mit Projektanforderer                           3h 28,45€ + 7,90€        109,05€
  Abnahmetest                                                  1h 28,45€ + 7,90€        36,35€
  Nutzerschulung  (4 Entwickler)                               2h 113,8€ + 31,60€       290,80€
  \vtop{\hbox{\strut Projektkosten}\hbox{\strut Gesamt}}                                1464,50 €

### Kostenersparnis

> ich habe die Amortisationsdauer ganz rausgenommen

Durch die Automatisierung von immer wiederkehrenden Tests lässt sich
Arbeitszeit des Testingenieuren einsparen. Dadurch würden sich die
Personalkosten reduzieren lassen. 

----------------------------
Testumgebung         Dauer

------------------   -------
Staging-System        45 min

live-System           45 min

------------------   -------

Für Regressionstests werden 45min veranschlagt. Pro Deployment wird einmal vorab auf dem Staging System getestet und nach dem Ausspiel noch einmal im Echtestem. Beim aktuellen Vorgehen wird alle 2 Wochen ausgespielt was eine Ersparnis von $ 2 \cdot 45min \cdot \frac{2 Deployments}{Monat} \cdot 28,45\frac{\euro}{h} = 85,35\frac{\euro}{Monat} $    
Der Einsatz automatisierter Tests aber ermöglicht ein neues Vorgehen mit höherer Kadenz mit bis zu 3 Deployments pro Woche, also ca 12 Deployments pro Monat. Dadurch ergibt sich eine Ersparnis von $ 2 * 45min * \frac{12 Deployments}{Monat} * 28,45\frac{\euro}{h} = 512,1\frac{\euro}{Monat} $.    
Tatsächlich aber wir der Tester in der gesparten Zeit anderweitig eingesetzt sodass sich keine reale Ersparnis ergibt.

###Nutzwertanalyse


> unfinished

  manueller Tester    phantom.js+ selenium webdriver    phantom.js + ghost.js
  ------------------ -------------------------------- -----------------------
  3                                 3                                       4
  3                                 1                                       1

### Nicht-monetäre Vorteile

*   Tests können beliebig oft laufen
*   ermöglicht Veränderung von Deployment und Integrationsverhalten
*   erhöht Vertrauen in den Code da Kernfunktionalität ständig getestet wird
*   Die Arbeit eines Testingenieuren oder Entwickler muss nicht für Front-End-Tests unterbrochen werden

##Anwendungsfälle


Im Laufe der Analysephase wurde mit dem Anforderer ein Anwendungsfalldiagramm (siehe Anhang) erstellt welches eine Übersicht der Anwedungesfälle gibt. Es gibt alle Funktionen an die aus Sicht des Endanwender benötigt werden wieder. Automatisierte Tests können als aktive und kontinuierliche Qualitätssicherungsmaßname genutzt werden. Der Entwickler kann sich entscheiden bereits auf der Integrationsumgebung den aktuellen Entwicklungsstand zu testen. Auf der anderen Seite kann können die Regressionstests auch direkt in den Deploymentprozess integriert werden und ggf. das Ausspiel von fehlerbehafteter Software verhindern wenn im Vorfeld bereits Testfälle fehlschlagen. Im Zusammenhang mit dem CI/CD System wird auch eine Historie der Softwarequalität vorgehalten.



##Lastenheft / Fachkonzept


#Entwurfsphase


##Zielplattform


Die Testumgebung soll auf den vorhandenen Servern, auf denen auch der
GRAVIS Onlineshop betrieben wird, betrieben werden können. Der Einsatz erfolgt auf den Servern des Hoster SysEleven (Berlin), auf einem konzerninternen Server im  Rechenzentrum in Düsseldorf oder einem Rechner im Büro der Entwickler in Berlin.

Die Abläufe werden, von Go vorgegeben, als ANT-Skripte beschrieben. 
Ausgaben und Artefakte werden in einer Ordnerstruktur auf dem Dateisystem gespeichert.

##Architekturdesign


Die Integration der Testumgebung  erfolgt mit ANT. Es wird eine XML Build-Datei erstellt die Targets, vergleichbar mit Funktionen in Programmiersprachen, definiert die durch Go in Pipelines gesteuert von ANT ausgeführt werden. Die Targets müssen die Gesamtheit der Aufgaben für einen Testlauf notwendig sind abbilden.
Die Targets warden hit Tasks, also Befehlen gefüllt die zusammen eine Aufgabe erledigen. ANT kann von sich aus häufig benötigte Aufgaben wie das Kopieren, Verschieben, Entpacken von Dateien selber ausführen und Variablen, hier Properties genannt, erstellen und einsetzen. Darüber hinaus können ANT-Skripte weitere Werkzeuge, wie etwa Shell-Skripte, Java Programme oder PHP-Scripte auslösen.

Die lose Kopplung der einzelnen Tasks erhöht die Wiederverwendbarkeit und  Austauschbarkeit. Es ist z.B. möglich den Test-Runner, also dessen Aufruf auszutauschen ohne die Vorbereitung oder Auswertung der Artefakte und Testergebnisse anpassen zu müssen. Außerdem können die einzelnen Komponenten durch die strikte Trennung einfacher getestet, gewartet und erweitert werden.

Die Folge der Anwendungsfälle wird in einer so genannten Pipeline definiert die synchron abzuarbeitende Targets   definiert. Eine Pipeline gliedert sich in mehrere Stages (Stufen) welche eigene Umgebungsvariablen und benötigte Ressourcen definieren, sowie die produzierten Artefakte auszeichnen.

Der Go-Server, welcher ein ANT-Skript auslöst ist in der Regel nicht der ausführende Server. Einzelne Server die alle notwendigen Ressourcen für die Ausführung einer Stage bereitstellen (im folgenden Agentenserver) melden sich mit ihrem Go-Agent beim Go-Server und bekommen aufgaben zugeteilt


###Versionsverwaltung
Bei diesem Projekt sind mehrere Komponenten involviert deren Entwicklung getrennt erfolgen kann. ANT-Skripte die Funktionalität für das CI/CD System bereitstellen werden in einem SVN-Repository "go" versioniert.
Die Testsuiten und deren Abhängigkeiten werden in einem separaten SVN-Repository "testing" verwaltet in dem bereits Code für Performancetests und Unit-Tests vorgehalten wird.
Im "testing" Repository bestimmt die Ordnerstruktur die Testsuite sodass später im ANT-Task nur noch der Pfad spezifiziert werden muss um eine Testsuite auszuwählen. Ich habe zur Demonstration 5 Testsuiten angelegt, 2 tiefgründige und 2 oberflächliche Testszenarien für jeweils das Echt- und Stagingsystem und eine "demo"-Testsuite die den Anforderungen entsprechend die Funktionalität der Testumgebung unter Beweis stellt.
\begin{figure}

    casperjs
    ├── setup
    │   ├── basicauth.js
    │   ├── init-casper-deep.sql 
    │   └── init-casper-shallow.sql
    └── tests
         ├── deep_live
         ├── deep_stage
         ├── demo
         │   ├── capture_gra_screenshot.js
         │   ├── testthesearch.js
         ├── shallow_live
         └── shallow_stage

\caption{Ordnerstruktur der Testsuiten im}
\label{fig:testingfolderstructure}
\end{figure}
      
 Die Aufspaltung der verschiedenen Codebasen bietet 2 Vorteile: der Zugriff auf den Code der Tests kann separat gewährt werden, ohne dass die Funktionalität des CI/CD System angepasst werden kann. Es können dritten problemlos Rechte eingeräumt werden Testsuiten zu erstellen ohne dass die gesamte Administration aus den Händen gegeben werden muss.
 In Go ist es möglich die Version und den Zweig von einzelner Materialien, also Code-Quellen separat einzustellen um sehr agil auf Anpassungen im Code zu reagieren.


##Entwurf der Benutzeroberfläche

Die Benutzer der Testumgebung sollen sich schnell zurecht finden und sind bereits gewohnt Go zu benutzen. Es kann darauf verzichtet werden zusätzliche Bedienelemente und -oberflächen einzuführen. Testläufe werden wie jede Pipeline in Go ausgelöst, entweder durch einen einfachen Klick in der Weboberfläche, siehe \ref{fig:goguitrigger}  oder als post-commit-hook des Testing Repositories.
Die Auswahl der Testsuite und die Konfiguration weiterer Optionen erfolgt in den Umgebungsvariablen der Pipeline, ebenfalls standardmäßig in der Weboberfläche zu erreichen.
Ausgaben von Testläufen werden in der standardmäßigen Ansicht einer Pipeline in Go sichtbar. Go sieht es vor eine zusätzliche Registerkarte in der Auswertung anzuzeigen in der Artefakte präsentiert werden können. In der Registerkarte kann

\begin{figure}
\centering
\includegraphicsKeepAspektratio{gouitrigger.png}{0.9}
\caption{Abbildung Go UI trigger pipeline}
\label{fig:goguitrigger}
\end{figure}

\begin{figure}
\centering
\includegraphicsKeepAspektratio{test_Job_Details_Go.png}{0.9}
\caption{Abbildung Go UI Pipeline Auswertung}
\label{fig:goguisummary}
\end{figure}

##Datenmodell

Um die Nachvollziehbarkeit von Testläufen zu gewährleisten werden in jedem Schritt der Testpipeline Ausgaben erzeugt
Gemäß der Praxis in Go werden Daten die aus den Test entstehen in Dateien auf dem Dateisystem des GO-Server hinterlegt. 
Eine Speicherung auf dem Go-Server und nicht dem Agentenserver garantiert eine nachhaltige Speicherung von Artefakten da bei mehrfacher Verfügbarkeit der benötigten Ressource der Agentenserver beliebig austauschbar ist.
Go leitet Ausgabe der ANT-Skripte in eine Datei namens `console.log` die  pro Stage, siehe \ref{fig:gofolderstructure}, einer Pipeline in einen eigenen Ordner angelegt wird.
In dieser Ausgabe finden sich alle Ausgaben der ANT Tasks und der Prozesse und Skripte die ANT Startet.
Zum Debugging beschriebt CasperJS auf Wunsch in die Standardausgabe (`--verbose=true --log-level=debug`) jeden einzelnen Schritt der im Browser gegangen wird, von HTTP-Request, Javascript-Operationen und Veränderungen des DOM.
Im produktiven Einsatz genügt das Log-Level`--log-level=error` bei dem nur Fehler ausgegeben werden. Dies mach das Log lesbarer und hilft bei der Fehlerdiagnose.

\begin{figure}

    /var/lib/go-server/artifacts/pipelines/UL.iamacasperpieline/14
    ├── postprocessing
    │   └── 1
    │       └── gather_artefacts
    │           └── cruise-output
    │               └── console.log
    ├── teststage
    │   └── 1
    │       └── runtests
    │           ├── cruise-output
    │           │   ├── console.log
    │           │   └── md5.checksum
    │           ├── testoutput
    │           │   ├── index.html
    │           │   └── result
    │           │       └── index.html
    │           └── tests
    │               └── artifacts
    └── prepare
        └── 1
            └── cleanup
                └── cruise-output
                    └── console.log


\caption{Ordnerstruktur der Artefakte}
\label{fig:gofolderstructure}
\end{figure}



Eine Datei im "JUNIT XML result Format" in der die Ergebnisse der Testläufe in Testsuiten gebündelt für jeden Testfall aufgelistet werden ist gefordert.  Das Schema dieses XML Austauschformat ist als de-facto Standard festgeschrieben [^junitxmlxsd] und wird von vielen *Unit* Testframeworks erstellt und von weiteren Systemen verarbeitet. Dieses Austauschformat ermöglicht in Zukunft tiefergehende Auswertung von Testergebnissen da es vollständig Maschinenlesbar ist.
CasperJS liefert mit dem Argument `--XUNIT=junit.xml` eine solche Datei.



CasperJS Tests sind sind so designt dass sie im Fehlerfalleine Screenshots der aktuellen Seite im PGN-Format aufnehmen. Auch damit lässt sich ein Problem leichter lokalisieren und visualisieren. Screenshots werden in der Ordner "artifacts" der jeweiligen Stage gespeichert und sind dadurch auch leicht im Webinterface von Go zu erreichen.
[^junitxmlxsd]:JUNIT XML result schema https://windyroad.com.au/dl/Open%20Source/JUnit.xsd




##Beispieltest

 >// Testlogik


##Maßnamen zur Qualitätssicherung

Es wird früh in der Implementierungsphase ein Beispieltest erstellt der
die Funktionalität des System beweisen kann. Der Code der Tests als auch
der Schnittstelle wird in SVN versionsverwaltet sodass es einfach
möglich ist funktionierende Versionen wiederherzustellen.
Go führt selbständig Pipelines an denen Änderungen vorgenommen wurden oder die Abhängigkeiten sich verändert haben sofort aus. Hierdurch bleibt kein Code ungetestet und Fehlerfälle sind leicht erkennbar. Im Büro des Entwicklungsteam steht ein Dashboard auf dem fehlgeschlagene Pipelines angezeigt werden. Das Entwicklerteam ist motiviert alle Anzeigewerte auf dem Dashboard "im grünen Bereich" zu halten und greift im Fehlerfall schnell ein. Der Verursacher des Fehler ist dank Integration der Versionsverwaltung in Go schnell ausfindig gemacht.
CasperJS Sefltest

##Pflichtenheft


#Implementierungsphase

##Setup
Versionvverwaltung
struktur der Ordner




Instalation Dokumentiert "Instalationsprotokoll"




###Installation Test-Runtime 
Nach der erfolgreichen Begutachtung von PhantomJS und casperJS auf der Entwicklermaschine mit MacOS, wo diese beiden Tools mit dem packetmanager "brew" rasch installiert waren ging es daran diese Anwendungen auf einem Server zu installieren. PhantomJS 1.9.8 ist ein Paket aus QTWebkit, der Rendering-Engine, einer Javascript laufzeitumgebung und QT4 als Wrapper. PhantomJS hat enorm viele Abhängigkeiten und es ist nicht empfohlen es selbst zu kompilieren da es wahrscheinlich ist dass mindestens eine Abhängigkeit zu Komplikationen führt. Im "brew" Paketsystem wurde also eine vorkompilierte Binärdatei verteilt und mit `brew install phantomjs` anschließend ohne Probleme installiert.   
 Auf dem Zeilserver mit Gentoo Linux wird das Paketverwaltungssystem "portage" genutzt.
Der analoge Befehl `emerge Phantoms` brachte allerdings eine enorme dependency-Liste zu Tage. Ich habe manuell versucht die Konflikte von Abhängigkeiten und Patch-Fehler zu lösen. Nach 2 Stunden war noch immer kein Ende in Sicht sodass ich mich entschied ein vorkompiliertes PhantomJS herunterzulassen und manuell zu installieren. 

CasperJS wurde über portage auch nur in einer sehr veralteten Version verteilt sodass ich auch hier eine manuelle Installation vornehmen musste. Ein `git clone` des aktuellen casperJS Quellcode von github brachte mich auf die gewünschte Version 1.1.0-beta3.

Trotz der erwarteten 2 Befehlszeilen und gefühlten 10 Minuten für die Installation der Software bin ich froh 3h dafür eingeplant zu haben da die Erfahrungen mit gentoo gelehrt haben dass immer mehr Zeit bei der Installation eingeplant werden muss da es immer Unstimmigkeiten mit Abhängigkeiten gibt.
   
###Erstellen der Beispieltestsuite
Das CasperJS Modul "tester" stellt die stellt die meisten in Lastenheft geforderten Funktionalität bereit. Mit Hilfe der sehr guten online Dokumentation von CasperJS und seiner Module [^casperdocstester] und entlang des Szenarios eines Kunden der im GRAVIS Online Shop einkaufen möchte wurde eine Bespieltestsuite geschrieben.
Es musste besondere Sorgfalt auf die Konvention der Tests in CasperJS gelegt werden, denn die Test werden in Javascript geschrieben und dies wird Asynchron ausgeführt wenn nicht explizit eine Schrittfolge mit `caserper.then()` definiert wird. Es wurden auch explizite Fehlerpunkte eingebaut die einen Test scheitern lassen um das Verhalten im Fehlerfall reproduzieren und testen zu können.

[^casperdocstester]:http://casperjs.readthedocs.org/en/latest/modules/tester.htm
   
###Testing der Runtime  
Nach der Überprüfung der Versionen wurde ein Selbsttest von casperjs auf dem Server durchgeführt. Der Selbsttest führt alle Funktionen in CasperJS einmal aus und diagnostiziert die vollständige Funktionsfähigkeit.    
Die auf dem Entwicklerrechner erstellten Javascript Tests wurden per sshFS[^sshfs], auf den Server übertragen. Dort wurden sie manuell mit dem Befehl `casperjs test /home/it/casperjs/ --log-level=debug --verbose=true` ausgeführt und die ausführliche Ausgabe beurteilt. Die übertragenen Tests funktionierten  einwandfrei und Test-Runntime attestierte sich volle Einsatzbereitschaft. 
Damit war der erste Meilenstein erreicht.


[^sshfs]:Abstraktion von sFTP auf dem Entwicklerrechner als FUSE-Dateisystem.
###Implementieren der Schnittstelle vom Testsystem zum CI/CD System  
Die neu hinzugewonnene Fähigkeit CasperJS wurde im Admin-Interface von Go dem Server namens "manager" hinzugefügt und kann von nun an als Ressource in Pipelines verlangt werden. Stages die diese Ressource verlangen werden dann automatisch dem "manager" Server zugeordnet.

###Erstellung von ANT Targets
Alle Anwendungsfälle aus dem Anwendungsfalldiagramm //ref die noch nicht in ANT zu Verfügung standen würden in einer neuen ANT build Datei als Tasks aufgenommen. Zusätzlich zu ein paar Hilfstasks die die Fehlerdiagnose vereinfachen sollten wurden diese Tasks implementiert. Im buildfile wurden Ordner für Artefakte, Screenshots und Tests als Properties definiert. Parameter der ANT Tasks wurden durch Properties und Umgebungsvariablen ausgefüllt sodass die Tasks mit maximaler Flexibilität eingesetzt werden können. Es wurden auch Nachbereitungstasks eingeführt die Artefakte bereinigen und einsammeln.
	 
###Einrichtung der Pipeline zur Testausführung 
Interaktive loginshell notwendig für casperjs Aufruf . Viel trial and error.

###Einsatz von Umgebungsvariablen   
Einrichtung der Umgebungsvariablen aus den vorher definierten Tasks in der Pipeline und der Umgebung

###Erweiterung des Bespieltest um Screenshots  

###Pipeline um Artefaktensammlung erweitern      

###Pipeline um Screenshotsammlung erweitern   

###Testen der Schnittstelle Testsystem zum CI/CD System   

#Testphase

in implementationsphase

#Abnahmephase



#Einführungsphase


###Schulung
Demo und Doku an die Hand geben

#Dokumentation


#Fazit


##Soll/Ist Vergleich


##Lessons learned


##Ausblick


* * * * *

#Anhang


Detaillierte Zeitplanung
------------------------

lastenheft
----------

Datenmodell
-----------

Benutzeroberfläche
------------------


    \\

