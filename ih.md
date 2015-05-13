#Einleitung


## Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Tochterunternehmen
der Freenet Group AG. Das Unternehmen vertreibt hauptsächlich Mobilfunkprodukte wie
Vertäge und Mobilfunk-Endgeräte sowie dazu passendes Zubehör, betreibt
aber keine eigene Mobilfunkinfrastruktur. Seit 2011 bestand eine
Kooperation mit der GRAVIS Computervertriebsgesellschaft mbH, meinem
ursprünglichen Ausbildungsbetrieb. Diese Kooperation mündete Ende 2012
in einer vollständigen Übernahme[^grauebernahme] und einer anschließenden
Integration mehrerer Abteilungen wie  Logistik und IT in den
mobilcom-debitel Konzern. Infolgedessen ist der Freenet Konzern verantwortlich für
den Betrieb der GRAVIS Onlinepräsenz. Die mobilcom-debitel verfügt über
mehrere Standorte. Der Standort der ehemaligen GRAVIS-IT in
Berlin am Ernst-Reuter-Platz konnte erhalten werden. Einige der GRAVIS-IT-Systeme werden weiterhin von diesem Standort aus betreut.



[^grauebernahme]:Pressemitteilung zur Übernahme von GRAVIS durch md http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple


## Projekt


Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer Laufzeitumgebung für funktionale Front-End-Tests der betreuten Onlineshops, dem GRAVIS Onlineshop[^graweb] und dem MDS Onlineshop[^mdsweb]. Diese Umgebung soll in das bestehende Continuous-Delivery System _Go_  eingebunden, werden um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das Entwicklungsteam _Vertrieb Onlineshop CMS_, welches eine geringere Arbeitslast und gesteigerte Codequalität beim Einsatz dieses Systems zum Testen erwartet.

[^graweb]: GRAVIS Onlineshop www.gravis.de
[^mdsweb]: MDS Onlineshop mds.mobilcom-debitel.de

##Projektumfeld


Das Projekt wurde im Rahmen der Ausbildung zum Fachinformatiker mit der
Fachrichtung Anwendungsentwicklung durchgeführt. <!-- Bedarfsträger für das
Projekt ist das Unternehmen mobilcom-debitel GmbH selbst, da es als
Maßname für die Qualitässicherung dienen soll. Auftraggeber des
Projektes ist die Abteilung *Vertrieb Onlineshop CMS*. --> Die auftraggebende Abteilung
beschäftigt einen Testingenieur, der neben der Abnahme von neuen
Features auch immer wieder sehr zeitaufwändig Regressionstests
durchführt. Um dem hohen Qualitätsstandard gerecht zu werden, sind
diese Test notwendig, halten aber die Abnahme von neuen Features
zeitlich auf. Durch die hohe Wiederholungsrate der Regressionstests ist
es möglich, dass bei manueller Testdurchführung Fehler übersehen oder erst nach dem \acs{Deployment} entdeckt werden. Zudem werden zur Zeit Testläufe und Fehlerfälle in der
Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich
eine Statistik, über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt
es keine technische Möglichkeit, die das deployen von fehlerhaftem Code
auf das \acs{Echt-System} verhindert.

##Projektziele


Im Rahmen des Projektes soll eine Laufzeitumgebung für Front-End-Tests
bereitgestellt werden. Diese muss in das Continuous-Delivery System
\acs{Go} (im folgenden "Go"[^listofsoftware]) eingebunden werden, damit
vollautomatische Testszenarien damit ausgeführt werden können. Die
Test-Umgebung muss betriebsbereit dem Team *Vertreib Onlineshop CMS*
übergeben werden.

[^listofsoftware]:Liste der Eingesetzten Software im Anhang \ref{liste-der-eingesetzen-software}

##Projektschnittstellen


Da das Projekt innerhalb des Teams stattfindet, knüpft es an interne
Prozesse, also Abnahme und \acs{Deployment} der Software und technische
Systeme an. Eine Auswertung durch das *Quality Assurance Team* im
Unternehmen erfolgt nicht. Die Testumgebung wird verknüpft mit *Go*,
testet dabei über eine \acs{HTTP}-Verbindung den Onlineshop und muss auf das
hausinterne Versionsverwaltungssystem (\acs{SVN}) zugreifen können, um dort
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


Für die Umsetzung des Projekt stehen 70 Stunden zur Verfügung. Diese wurden
bereits vor Projektbeginn in verschiedene Phasen geplant, die den
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
  ----------------------- ---------------
  Gesamt                              70h


Die Hauptphasen können in  Unterpunkten detailliert werden. Eine
detaillierte Übersicht befindet sich im Anhang "Detaillierte Zeitplanung" \ref{app:Zeitplanung}.

<!--



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
-->


##Abweichung vom Projektantrag


> //ist ins Fazit gewandert

##Ressourcenplanung


+ Personal  

	* 1 Entwickler: Umsetzung des Projektes

	* 1 Softwarestratege / Projektleiter "Testing" für Anforderungsaufnahme, technische Rücksprachen und Abnahme
	* 1 Team _Vertrieb Onlineshop CMS_ für einführende Schulung
    
        

+ Hardware   
Es soll keine zusätzliche Hardware für das Projekt angeschafft werden. Zum Einsatz kommt die Testumgebung auf den vorhandenen Serversystemen. Dem Entwickler steht ein Arbeitsplatzrecher (Apple MacBook Pro) zur Verfügung auf dem die Entwicklung und Evaluation von Software stattfinden soll.
+ Software   
Es soll für die Testumgebung ausschließlich kostenfreie bzw. open-source Software mit einer Lizenz, die kommerzielle Nutzung erlaubt, eingesetzt werden. Die Software *Go* ist von GRAVIS lizenziert und verursacht im Rahmen des Projektes keine zusätzlichen Kosten. *Go* ist mittlerweile auch open-source und könnte bei Bedarf angepasst werden.    
 
  


##Entwicklungsprozess

>// vertiefen

Für die Realisierung des Projektes habe ich mich für ein Vorgehen, das
an den klassischen Wasserfall Prozess angelehnt  ist, entschieden.
Ermöglicht wird dies durch den Umstand, dass die Anforderungen klar
definiert sind und sich im Zeitraum der Realisierung nicht signifikant
ändern werden. In der Entwurfsphase wurde die Vorgehensweise der
Entwicklung klar aufgestellt sodass ständige Rückfragen, wie etwa in
einem agilen Prozess, nicht nötig sind. Es wird eine Nutzerschulung für
alle potentielle Nutzer am Ende des Projekt geben sodass eine
Eingewöhnung der Nutzer mit der Testumgebung schon während der
Entwicklung nicht notwendig ist. Eine Aufnahme der Entwicklung in den
agilen Regelprozess erschien nicht sinnvoll.

#Analysephase


##Ist-Analyse

>// revise

Zum Zeitpunkt des Projektbeginn werden Regressionstests also Front-End-Tests ausschließlich
manuell von Testingenieuren oder Entwicklern aus dem Team vorgenommen. Bei bevorstehendem \acs{Ausspiel} muss der Testingenieur seine aktuelle Aufgabe unterbrechen und den gewünschten Softwarestand auf dem \acs{Staging-System} testen. Ein Handzeichen und eine mündliche Abstimmung mit dem Team signalisieren dann die Bereitschaft zum Ausspiel. Anschließend müssen die Tests im Echt-System wiederholt werden um sicher zu gehen dass das Ausspiel erfolgreich war. Tritt hier ein Fehler auf muss geklärt werden ob der Fehler vorher übersehen wurde (menschlicher Faktor) oder die Umgebungsparameter ursächlich sind. 
<!--
 Zudem werden Testläufe
und Fehlerfälle in der Regel nicht oder nicht ausführlich dokumentiert
und es ist nicht möglich eine Statistik über die Fehlerhäufigkeit zu
führen. Darüber hinaus gibt es keine technische Möglichkeit die das
Ausrollen von fehlerhaftem Code auf dem Echt-System verhindert.
-->
<!--
 Zu einem früheren Zeitpunkt war eine Testumgebung auf Basis von Selenium in Betrieb genommen worden. Diese Testumgebung hing von Diensten dritter ab die mittlerweile eingestellt wurden. Für diese Umgebung wurden ursprünglich Testabläufe definiert die befolgt werden um alle Funktionalitäten zu testen. Diese Testabläufe werden nach besten gewissen bei manuellen Test befolgt.
 Das vertrauen in die Tests ist zu diesem Zeitpunkt nicht sehr hoch da in der Vergangenheit Funktionen an unerwarteter Stelle brachen und den gesamten Entwicklungsprozess aufgehalten haben.
-->

##Wirschaftlichkeitsanalyse




### Make or Buy Entscheidung

Front-End-Test von Web-Applikationen sind ein häufiger Anwendungsfall und es gibt viele Anbieter von Werkzeugen dafür auf dem Markt und noch viel mehr experimentelle Ansätze dafür.

Es kann also Standardsoftware für Tests genutzt werden: Die Produkte phantomJS zusammen mit
casperJS oder Selenium in Verbindung mit dem Selenium webdriver und ghostdriver bieten sich als Lösungen an.

Die Integration von Front-End-Test in das CI/CD-System *Go* ist eine Unternehmensspezifische Anforderung. Go ist ein wenig verbreitetes System und keine Integration solcher Art wurde bisher publik gemacht.
Da *Go* open-source und die API gut dokumentiert[^gowebdoku] ist , kann eine Integration aus eigener Kraft erfolgen.

[^gowebdoku]:http://www.go.cd/documentation/user/current/

### Projektkosten

Die Projektkosten, die bei der Entwicklung des Projektes anfallen,
sollen im Folgenden kalkuliert werden. Dafür müssen neben den
Personalkosten für den Entwickler und weitere Mitarbeiter auch noch die
Aufwendungen für die Ressourcen berücksichtigt werden. Die Kalkulation
wird anhand von durchschnittlichen Stundensätzen im Freenet Konzern durchgeführt. Der
Stundensatz eines Auszubildenden im 3. Lehrjahr beträgt demzufolge
*6,79€/h* , der eines Mitarbeiters *28,45€/h* [^hourlyrate]. Als Gemeinkosten für
Ressourcennutzung im Unternehmen (Hardware und Software, Büroarbeitsplatz etc.) wurde ein berechneter Stundensatz von 7,90€/FTE von Controling mitgeteilt.
angenommen.

[^hourlyrate]: Stundensätze wurden aus dem Unternehmensinternen Controling bereitgestellt


<!--
\begin{figure}
\begin{equation}
\frac{ \eur{1000}\mbox{/Monat} \cdot 12\mbox{Monate/Jahr} }{ (8\mbox{h/Tag} \cdot 221\mbox{Tage/Jahr} )}=  \frac{\eur{6,79}}{h}
\end{equation}
\caption{Kosten eines Auszubildenden}
\end{figure}
-->

Die Kosten, die für Vorgänge den Projektes anfallen sowie die gesamten Projektkosten sind in Tabelle \ref{kostenaufstellung} zu finden.



Vorgang                                                    Zeit Kosten pro Stunde        Kosten
-------------------------------------------------------- ------ ------------------- -----------
Entwicklungskosten                                          70h 6,79€ + 7,90€         1028,30€  k676
Fachgespräch mit Projektanforderer                           3h 28,45€ + 7,90€        109,05€
Abnahmetest                                                  1h 28,45€ + 7,90€        36,35€
Nutzerschulung  (4 Entwickler)                               2h 113,8€ + 31,60€       290,80€
\vtop{\hbox{\strut Projektkosten}\hbox{\strut Gesamt}}                                1464,50 €

<!--
\begin{figure}
 1464,50€
\label{kostenaufstellung}
\caption{Kostenaufstellung}
\end{figure}
-->

### Kostenersparnis



Durch die Automatisierung von immer wiederkehrenden Tests lässt sich
Arbeitszeit des Testingenieuren einsparen. Dadurch würden sich die
Personalkosten reduzieren lassen. 
<!--

-------------------  -------
Testumgebung         Dauer
-------------------  -------
Staging-System        45 min

Live-System           45 min
-------------------  -------

-->

Für Regressionstests werden 45min veranschlagt. Pro Deployment wird einmal vorab auf dem \acs{Staging-System} getestet und nach dem Deployment noch einmal im Echtsysstem. Beim aktuellen Vorgehen wird alle 2 Wochen ausgespielt was eine Ersparnis von 3 Stunden pro Monat bedeutet.

<!--
\begin{eqnarray}
 2 \cdot 45min \cdot 2\frac{Deployments}{Monat} \cdot \frac{\eur{28,45}}{h} =  \frac{\eur{85,35}}{Monat}
\end{eqnarray} -->

 <!-- 
Der Einsatz automatisierter Tests aber ermöglicht ein neues Vorgehen mit höherer Kadenz mit bis zu 3 Deployments pro Woche, also ca 12 Deployments pro Monat. Dadurch ergibt sich eine Ersparnis von 
\begin{eqnarray}
 2 * 45min \cdot 12 \frac{ Deployments}{Monat} \cdot \frac{\eur{28,45}}{h} =  \frac{\eur{512,10}}{h} 
\end{eqnarray}    -->
<!--
Tatsächlich aber wir der Tester in der gesparten Zeit anderweitig eingesetzt sodass sich keine reale Ersparnis ergibt.

-->

<!-- ###Nutzwertanalyse 


> unfinished

  manueller Tester    phantom.js+ selenium webdriver    phantom.js + ghost.js
  ------------------ -------------------------------- -----------------------
  3                                 3                                       4
  3                                 1                                       1
  
  
  -->

### Nicht-monetäre Vorteile

Auster der Zahlenwerte sind noch einige andere Fraktoren zu nennen die mehr als nur finanzielle Bedeutung haben:

*   Tests können beliebig oft laufen
*   Ermöglicht Veränderung von Deployment- und Integrationsverhalten und damit eine höhere Reaktionsfähigkeit.
*   Erhöht Vertrauen in den Code, da Kernfunktionalität ständig getestet wird
*   Die Arbeit eines Testingenieuren oder Entwickler muss nicht für Front-End-Tests unterbrochen werden.

##Einsatzmöglichkeiten


Im Laufe der Analysephase wurde mit dem Anforderer ein Anwendungsfalldiagramm (siehe Anhang \ref{usecasediagram}) erstellt welches eine Übersicht der Anwedungesfälle gibt. Es gibt alle Funktionen an die aus Sicht des Endanwenders benötigt werden wieder. Automatisierte Tests können als aktive und kontinuierliche Qualitätssicherungsmaßname genutzt werden. Der Entwickler kann sich entscheiden bereits auf der Integrationsumgebung den aktuellen Entwicklungsstand zu testen. Zusätzlich können die Regressionstests auch direkt in den Deploymentprozess integriert werden. Eine solche enge Integration verhintert, wenn im Vorfeld bereits Testfälle fehlschlagen, das Deployment von fehlerbehafteter Software. Im Zusammenhang mit dem CI/CD System wird auch eine Historie der Softwarequalität vorgehalten.



##Lastenheft / Fachkonzept
Wesentliche Bestandteile zur technischen Anforderung  aus dem Lastenheft sind im Anhang \ref{lasterhaft}zu finden.

#Entwurfsphase


##Zielplattform


Die Testumgebung soll auf den vorhandenen Servern, auf denen auch der
GRAVIS Onlineshop betrieben wird, betrieben werden können. Der Einsatz erfolgt wahlfrei auf den Servern des Hoster SysEleven (Berlin), auf einem konzerninternen Server im  Rechenzentrum in Düsseldorf oder einem Rechner im Büro der Entwickler in Berlin.

Die Abläufe werden, von Go vorgegeben, als ANT-Skripte beschrieben. 
Ausgaben und Artefakte werden in einer Ordnerstruktur auf dem Dateisystem gespeichert.

##Architekturdesign

###Front-End-Tests


Die Anforderungen geboten Funktionale Tests durchzuführen und wie ein Nutzer mit der Website zu interagieren. Damit musste ein echter Webbrowser mit einer Rendering-Engine und einer JavaScript Laufzeitumgebung herangezogen werden und Frameworks wie HTMLUnit fielen aus der Auswahl.

Für eine Vereinfachung der Systemanforderung habe ich entschieden einen so genannten \acs{headless} Browser zu nutzen damit die Testumgebung auf einem Server ohne Grafikausgabe eingesetzt werden kann. 
Als einziger stabiler \acs{headless} Browser und bereits mit einer API zur Fernsteuerung versehen ist *phantomJS* genau für dieses Einsatzgebiet geeignet.


Die Recherche ergab dass *casperJS* ein Framework für *phantomJS* ist welches einen einfachen Einstieg in Front-End-Tests ermöglicht. Als alternative wurde auch *DalekJS* in Betracht gezogen wurde aufgrund mangelten Support und lange bestehenden Bugs von Kollegen und anderen Entwicklern abgeraten.


Um Tests gegen die "tester"-API von *casperJS* zu programmieren gibt es 2 Möglichkeiten: Tests in JavaScript  oder in CoffeeScript schreiben.
 Das Team *Vertrieb Onlineshop CMS* setzt traditionell auf bewährte Technologie, darum wurde der Bespieltest in JavaScript geschrieben. Es bleibt weiterhin möglich CoffeScript zu nutzen, auch ein Mischbetrieb kann erreicht werden. Um eine sequenzielle Abarbeitung von Testschritten in der funktionalen Programmiersprache Javascript zu gewährleisten bietet *casperJS* `.start()`, `.then()` und `.done()` Funktionen zum Kontrollfluss an.

###Integration in *Go*
Die Integration der Testumgebung  erfolgt mit \acs{ANT}. Es wird eine \acs{XML} Build-Datei erstellt die \acs{Target}s, vergleichbar mit Funktionen in Programmiersprachen, definiert die durch Go in  \acs{Pipelines} gesteuert von ANT ausgeführt werden. Die Targets müssen die Gesamtheit der Aufgaben, die für einen Testlauf notwendig sind abbilden.
Die Targets werden mit \acs{Task}s, also Befehlen gefüllt die zusammen eine Aufgabe erledigen. ANT kann von sich aus häufig benötigte Aufgaben, wie das Kopieren, Verschieben, Entpacken von Dateien selber ausführen und Variablen, hier Properties genannt, erstellen und einsetzen. Darüber hinaus können ANT-Skripte weitere Werkzeuge, wie etwa Shell-Skripte, Java Programme oder \acs{PHP}-Scripte auslösen.

Die lose Kopplung der einzelnen Tasks erhöht die Wiederverwendbarkeit und  Austauschbarkeit. Es ist z.B. möglich den Test-Runner, also dessen Aufruf auszutauschen ohne die Vorbereitung der Testdaten oder Auswertung der Artefakte und Testergebnisse anpassen zu müssen. Außerdem können die einzelnen Komponenten durch die strikte Trennung einfacher getestet, gewartet und erweitert werden.

Die Folge der Anwendungsfälle wird in einer so genannten \acs{Pipeline} definiert die synchron abzuarbeitende Targets definiert. Eine Pipeline gliedert sich in mehrere \acs{Stages} (Stufen) welche eigene Umgebungsvariablen und benötigte Ressourcen definieren, sowie die produzierten Artefakte auszeichnen.

Der Go-Server, welcher ein ANT-Skript auslöst ist in der Regel nicht der ausführende Server. Einzelne Server die alle notwendigen Ressourcen für die Ausführung einer Stage bereitstellen (im folgenden Agentenserver) melden sich mit ihrem Go-Agent beim Go-Server an und bekommen Aufgaben zugeteilt.


###Versionsverwaltung {#versionsverwaltung}
Bei diesem Projekt sind mehrere Komponenten involviert deren Entwicklung getrennt erfolgen kann. ANT-Skripte die Funktionalität für das CI/CD System bereitstellen werden in einem SVN-Repository "go" versioniert.
Die Testsuiten und deren Abhängigkeiten werden in einem separaten SVN-Repository "testing" verwaltet in dem bereits Code für Performancetests und Unit-Tests vorgehalten wird.
Im "testing" Repository bestimmt die Ordnerstruktur die Testsuite sodass später im ANT-Task nur noch der Pfad spezifiziert werden muss um eine Testsuite auszuwählen. Ich habe zur Demonstration 5 Testsuiten angelegt, 2 tiefgreifende und 2 oberflächliche Testszenarien für jeweils das Echt- und \acs{Staging-System} und eine "demo"-Testsuite die den Anforderungen entsprechend die Funktionalität der Testumgebung unter Beweis stellt.


\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/caspertestlist.pdf}{0.3}
\caption{Ordnerstruktur der Testsuiten im}
\label{fig:testingfolderstructure}
\end{figure}



      
 Die Aufspaltung der verschiedenen Codebasen bietet 2 Vorteile: der Zugriff auf den Code der Tests kann separat gewährt werden, ohne dass die Funktionalität des CI/CD System angepasst werden kann. Es können dritten problemlos Rechte eingeräumt werden Testsuiten zu erstellen ohne dass die gesamte Administration aus den Händen gegeben werden muss.
 In Go ist es möglich die Version und den Zweig von einzelner Materialien, also Code-Quellen separat einzustellen um sehr agil auf Anpassungen im Code zu reagieren.


##Entwurf der Benutzeroberfläche

Die Benutzer der Testumgebung sollen sich schnell zurecht finden und sind bereits gewohnt *Go* zu benutzen. Es kann darauf verzichtet werden zusätzliche Bedienelemente und -oberflächen einzuführen. Testläufe werden wie jede Pipeline in Go ausgelöst, entweder durch einen einfachen Klick in der Weboberfläche, siehe \ref{fig:goguitrigger}  oder als \acs{post-commit-hook} des "testing" Repositories.
Die Auswahl der Testsuite und die Konfiguration weiterer Optionen erfolgt in den Umgebungsvariablen der Pipeline, ebenfalls standardmäßig in der Weboberfläche zu erreichen.
Ausgaben von Testläufen werden in der standardmäßigen Ansicht einer Pipeline in Go sichtbar. Go sieht es vor eine zusätzliche Registerkarte in der Auswertung anzuzeigen in der Artefakte präsentiert werden können. In der Registerkarte kann z.B. JUNIT Auswertungen anzeigen.


\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/gouitrigger.png}{0.9}
\caption{Anzeige und Filterung der Module nach Tags}
\label{fig:goguitrigger}
\end{figure}


\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/test_Job_Details_Go.png}{0.8}
\caption{Abbildung Go UI Pipeline Auswertung}
\label{fig:goguisummary}
\end{figure}


##Datenmodell

Um die Nachvollziehbarkeit von Testläufen zu gewährleisten werden in jedem Schritt der Testpipeline Ausgaben erzeugt.
Gemäß der Praxis in Go werden Daten die aus den Test entstehen in Dateien auf dem Dateisystem des Go-Server hinterlegt. 
Eine Speicherung auf dem Go-Server und nicht dem Agentenserver garantiert eine nachhaltige Speicherung von Artefakten da bei mehrfacher Verfügbarkeit der benötigten Ressource der Agentenserver beliebig austauschbar ist.
Go leitet Ausgabe der ANT-Skripte in eine Datei namens `console.log` die  pro Stage, siehe \ref{fig:gofolderstructure}, einer Pipeline in einen eigenen Ordner angelegt wird.
In dieser Ausgabe finden sich alle Ausgaben der ANT Tasks und der Prozesse und Skripte die ANT Startet.
Zum Debugging beschriebt CasperJS auf Wunsch in die Standardausgabe (`--verbose=true --log-level=debug`) jeden einzelnen Schritt der im Browser gegangen wird, von HTTP-Request, Javascript-Operationen und Veränderungen des DOM.
Im produktiven Einsatz genügt das Log-Level`--log-level=error` bei dem nur Fehler ausgegeben werden. Dies mach das Log lesbarer und hilft bei der Fehlerdiagnose.

\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/artifactslist.pdf}{0.45}
\caption{Ordnerstruktur der Artefakte auf dem Server}
\label{fig:artifactsfolderstructure}
\end{figure}




Eine Datei im "JUNIT XML result Format", in der die Ergebnisse der Testläufe in Testsuiten gebündelt für jeden Testfall aufgelistet werden, ist gefordert.  Das Schema dieses XML Austauschformat ist als de-facto Standard festgeschrieben[^xunitwebdoku] und wird von vielen *UNIT Testframeworks erstellt und von weiteren Systemen verarbeitet. Dieses Austauschformat ermöglicht in Zukunft tiefergehende Auswertung von Testergebnissen da es vollständig Maschinenlesbar ist.
CasperJS liefert mit dem Argument `--XUNIT=junit.xml` eine solche Datei.



CasperJS Tests werden gemäß der Anforderung so designt dass sie im Fehlerfall einen Screenshots der aktuellen Seite im PGN-Format aufnehmen. Auch damit lässt sich ein Problem leichter lokalisieren und visualisieren. Screenshots werden in der Ordner "artifacts" der jeweiligen Stage gespeichert und sind dadurch auch leicht im Webinterface von Go zu erreichen.


[^xunitwebdoku]:JUNIT XML result schema https://windyroad.com.au/dl/Open%20Source/JUnit.xsd


##Maßnamen zur Qualitätssicherung

Es wird früh in der Implementierungsphase ein Beispieltest erstellt, der
die Funktionalität des Systems beweisen kann. Der Code der Tests als auch
der Schnittstelle wird in SVN versionsverwaltet sodass es einfach
möglich ist funktionierende Versionen wiederherzustellen.
Go führt selbständig Pipelines an denen Änderungen vorgenommen wurden oder deren Abhängigkeiten sich verändert haben sofort aus. Hierdurch bleibt kein Code ungetestet und Fehlerfälle sind leicht erkennbar. Im Büro des Entwicklungsteam steht ein Dashboard auf dem fehlgeschlagene Pipelines angezeigt werden. Das Entwicklerteam ist motiviert alle Anzeigewerte auf dem Dashboard "im grünen Bereich" zu halten und greift im Fehlerfall schnell ein. Der Verursacher des Fehler ist dank Integration der Versionsverwaltung in Go schnell ausfindig gemacht.
CasperJS Sefltest

##Pflichtenheft/Feinkonzept

Am Ende der Entwurfsphase wurde ein Pflichtenheft erstellt. Es baut auf dem Lastenheft auf. Dort wird beschrieben wie und mit welchen Werkzeugen der Autor die Anforderungen des Fachbereich umsetzen möchte.
Das Pflichtenheft dient als Leitpfaden für die Umsetzung des Projekt. Ein Auszug aus dem Pflichtenheft befindet sich im Anhang \ref{app:Pflichtenheft}.


#Implementierungsphase

##Setup
Vor Beginn der Umsetzung von Funktionalitäten wurden die notwendigen SVN-Repositories auf dem Entwicklerrechner ausgecheckt. damit bereits vorhandene Funktionalität für das Projekt mitbenutzt werden können.

In Übereinstimmung mit der vorhandenen Struktur im Respositry empfiehlt es sich eigene Unterordner und Builddateien für dieses Projekt anzulegen. Siehe \ref{versionsverwaltung}.
Für den Texteditor wurden Linter für JavaScript und XML installiert um früh Tippfehler erkennen zu können.


###Installation Test-Runtime 
Nach der erfolgreichen Begutachtung von PhantomJS und casperJS auf der Entwicklermaschine mit MacOS, wo diese beiden Tools mit dem packetmanager `brew` rasch installiert waren, ging es daran diese Anwendungen auf einem Server zu installieren. 

<!--
PhantomJS 1.9.8 ist ein Paket aus QTWebkit, der Rendering-Engine, einer Javascript Laufzeitumgebung und QT4 als Wrapper. PhantomJS hat enorm viele Abhängigkeiten und es ist nicht empfohlen es selbst zu kompilieren da es wahrscheinlich ist dass mindestens eine Abhängigkeit zu Komplikationen führt. Im "brew" Paketsystem wurde also eine vorkompilierte Binärdatei verteilt und mit `brew install phantomjs` anschließend ohne Probleme installiert.   -->
 Auf dem Zielserver mit gentoo Linux wird das Paketverwaltungssystem `portage` genutzt.
Der Befehl `emerge phantomjs` zeigte allerdings eine enorme Liste von Abhängigkeiten auf. Ich habe manuell versucht die Konflikte von Abhängigkeiten und Patch-Fehler zu lösen. Nach 2 Stunden habe ich dieses Vorgehen als nicht zielführend betrachtet entschied ich mich ein vorkompiliertes PhantomJS herunterzuladen und manuell zu installieren. 

CasperJS wurde über `portage` auch nur in einer sehr veralteten Version verteilt, sodass ich auch hier eine manuelle Installation vornehmen musste. Ein `git clone` des aktuellen casperJS Quellcodes von github, also ein abholen der aktuellen Version aus der öffentlich casperJS Versionsverwaltung, brachte mich auf die gewünschte Version 1.1.0-beta3.

Erfahrungen mit gentoo gelehrt haben dass immer mehr Zeit bei der Installation eingeplant werden muss, denn es treten sehr häufig Unstimmigkeiten mit Abhängigkeiten auf.

Bei der Abnahme wurde noch ein Instalationsprotokoll gewünscht damit das Vorgehen reproduzierbar und nachvollziehbar ist. Dieser zusätzlichen Anforderung konnte noch in der Dokumentationsphase nachgekommen werden.


   
###Erstellen der Beispieltestsuite
Das casperJS Modul `tester` stellt die meisten im Lastenheft geforderten Funktionalität bereit. Mit Hilfe der sehr guten online Dokumentation von casperJS und seiner Module[^casperdocstester] und entlang des Szenarios eines Kunden der im GRAVIS Online Shop einkaufen möchte, wurde eine Bespieltestsuite geschrieben.
Es musste besondere Sorgfalt auf die Struktur der Testskripte für casperJS gelegt werden, denn die Tests werden in Javascript geschrieben und dies wird Asynchron ausgeführt, wenn nicht explizit eine Schrittfolge mit `caserper.then()` definiert wird. Es wurden auch absichtliche Fehlerpunkte eingebaut, die einen Test scheitern lassen, um das Verhalten im Fehlerfall reproduzieren und testen zu können.

[^casperdocstester]:http://casperjs.readthedocs.org/en/latest/modules/tester.htm
   
###Testing der Runtime  
Nach der Überprüfung der Versionen wurde ein Selbsttest von casperjs auf dem Server durchgeführt. Der Selbsttest führt alle Funktionen in CasperJS einmal aus und diagnostiziert die vollständige Funktionsfähigkeit.    
Die auf dem Entwicklerrechner erstellten Javascript Tests wurden per sshFS[^sshfs], auf den Server übertragen. Dort wurden sie manuell mit dem Befehl `casperjs test /home/it/casperjs/ --log-level=debug --verbose=true` ausgeführt und die ausführliche Ausgabe beurteilt. Die übertragenen Tests funktionierten  einwandfrei und die Einsatzbereitschaftder  Test-Runtime war bewiesen. 


[^sshfs]:Abstraktion von sFTP auf dem Entwicklerrechner als FUSE-Dateisystem.

###Einbinden des Testsystem in das CI/CD System 



\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/pipelinestruct.pdf}{0.25}
\caption{Struktur einer Pipeline in Go}
\label{fig:gopipelines}
\end{figure}

In *Go* werden automatisierte Abläufe in Pipelines definiert die sich in große Schritte, Stages genannt unterteilen. Stages werden nacheinender ausgeführt. Jobs, die zusammen eine Stage bilden, können aber in beliebiger Reihenfolge oder sogar parallel ausgeführt werden. Jobs werden nicht auf dem *Go* Server selbst, sonder auf so genannten Agenten-Servern ausgeführt. *Go* benutzt für die Ausführung der Pipelines \acs{ANT}. Jeder Job hat mindesten einen Task der ein ANT-Target anspricht oder einer Standard ANT-Funktion entspricht. Der Hierarchische Aufbau von Pipelines ist in Abbildung \ref{fig:gopipelines} verdeutlicht.
 Die Aufgabenverteilung geschieht anhand verfügbarer Ressourcen. Ressourcen sind in diesem Kontext die Fähigkeit von Agenten-Servern Anwendungen auszuführen, weil sie dort installiert sind. Diese müssen explizit im Admin-Interface von *Go* konfiguriert werden.
Die neu hinzugewonnene Anwendung *casperJS* wurde  dem Server namens "manager" als Ressource hinzugefügt und kann von nun an als Ressource in Pipelines verlangt werden. Jobs die diese Ressource verlangen werden dann automatisch dem "manager" Server zugeordnet und dort ausgeführt.

###Erstellung von ANT Targets

Alle Anwendungsfälle aus dem Anwendungsfalldiagramm \ref{app:UseCase}, die noch nicht in *Go* oder als standard ANT-Tasks zu Verfügung standen, wurden in einer neuen ANT build Datei als \acs{Tasks} aufgenommen. Zusätzlich zu ein paar Helferfunktionen, die die Fehlerdiagnose vereinfachen sollten, wurden diese Tasks implementiert. In der build Datei wurden Ordner für Artefakte, Screenshots und Tests als Properties definiert. Parameter der ANT Tasks wurden durch Properties und Umgebungsvariablen ausgefüllt, sodass die Tasks mit maximaler Flexibilität eingesetzt werden können. Es wurden auch Tasks für die Nachbereitungs eingeführt die Artefakte bereinigen und einsammeln.
	 
	 	 
###Einrichtung der Pipeline zur Testausführung 

Die Komponenten die für einen erfolgreichen Testlauf benötigt werden wurden im vorherigen Schritt erstellt. Jetzt wurden die Tasks in eine Reihenfolge gebracht. Es wurde eine Pipeline geschrieben, die alle notwendigen Schritte zum automatisieren Durchführen von Front-End-Test abarteitet.

Interaktive loginshell notwendig für casperjs Aufruf . Viel trial and error.

###Einsatz von Umgebungsvariablen  
Um die gewünschte Modularität zu erreichen wurden statische Werte in der in den ANT-Tasks durch Umgebungsvariblen getauscht. Einige Tasks mussten erweitert werden, z.B. um die Parameterweitergabe an *casperJS* zu ermöglichen. Die Umgebungsvariablen können in der Web-Obefläche von *Go* leicht verändert werden.

###Erweiterung des Bespieltest um Screenshots 
In *casperJS* können Bildschrimaufnahmen gespeichert werden. Die Funktionalität der Bildschrimaufnahmen ist leider schlecht dokumentiert. Nach mehreren Versuchen stellte sich heraus der JavaScrip Befehl `casper.capture()`  standardmäßig  die grafische Darstellung des Elementes `<body>` einer HTML Seite speichert.  Um Speicherplatz zu sparen können auch nur einzelne, dem `<body>`untergeordnete HTML Elemente aufgenommen werden. Am häufigsten verursachen aber fehlende HTML Elemente Testabbrüche, sodass dieser Ansatz nicht weiter verfolgt wurde. 

###Pipeline um Artefaktensammlung erweitern
Als Artefakte bezeichnet man Nebenprodukte der Softwareentwicklung. In diesem Fall sind unter anderem die Test-Suite und das Testprotokoll gemeint.

*Go* bietet von Haus aus einen Mechanismus um Artefakte von Agenten-Server einzusammeln. Diese wurde in die Pipeline eingesetzt und konfiguriert. Damit kann sichergestellt werden dass die maschinenlesbare Testauswertung in der Historie in *Go* immer zur Verfügung steht.

###Pipeline um Screenshotsammlung erweitern   

Es wurde zusätzlich ein ANT-Task erstellt und in die Pipeline integriert der erzeugte Screenshot in die entsprechenden Ordner der Historie verschiebt.

<!-- ###Testen der Schnittstelle Testsystem zum CI/CD System   -->

#Testphase

Schon in der Implementierungsphase wurden die Beispieltests immer wieder ausgeführt, erst auf dem Entwicklungsrechner, dann auf dem Server. Zur Inbetriebnahme von *casperJS* wurde auch der Selbsttest des Frameworks `casperjs selftest` angestoßen bei dem alle Funktionen ausgeführt wurden.
Auf dem Server wurde nach dem Ausführen von Tests per ssh überprüft ob Artefakte an der richtigen Stelle erzeugt wurden. 

#Abnahmephase
Nachdem die Anwendung fertig gestellt war, wurde sie dem Fachbereich zur Abnahme vorgelegt. Zusammen mit dem Anforderer wurden alle Anwendungsfälle und Akzeptanzkriterien für das System im Einsatz des Beispieltest  geprüft. Die ursprünglichen Anforderung wurden alle zur Zufriedenheit erfüllt. Ein Codereview wurde nicht durchgeführt.
Bei der Abnahme entstand noch der Wunsch nach einer Instalationsprotokoll.


#Einführungsphase

Im Anschluss an die erfolgreiche Abnahme wurde die Pipeline für Front-End-Tests allen Benutzern in *Go* über die integrierte Rechteverwaltung zugänglich gemacht. Da der Bespieltest bereits einen breites Spektrum an Kernfunktionen des GRAVIS Onlineshop testet kann die Testumgebung ab diesem Zeitpunkt eingesetzt werden.


##Schulung
Die Applikation wurde dem gesamten Team *Vertrieb Onlienshop CMS* vorgeführt. Nach dem Funktionsüberblick wurden dem Team die eingesetzten Technologien erläutert. Ich habe dem Team vorgeführt wie die aktuelle Testsuite einzusetzen und über Umgebungsvariablen zu konfigurieren ist.  Anschließend wurde die Struktur von CasperJS Tests erläutert und wie diese erstellt werden können. <!-- Auch ein Testaufnahmewerkzeug namens "Resurrectio"[^ressurectioweb] , mit dem sich im Webbrowser Front-End-Test aufnehmen lassen, wurde als Unterstützung den Nutzern vorgeschlagen. --> Die Fähigkeiten und Erweiterungsmöglichkeiten von CasperJS in der aktuellen Umgebung wurden anhand der Webdokumentation[^casperdocstester] präsentiert. Zum Abschluss wurde die hieratische Organisation von Tests aufgezeigt und wie neue Testsuiten zu strukturieren sind.

[^ressurectioweb]:https://chrome.google.com/webstore/detail/resurrectio/kicncbplfjgjlliddogifpohdhkbjogm

#Dokumentation


Das Hauptaugenmerk bei der Dokumentation galt dieser Projektdokumentation die alle Schritte von der Anforderung bis zur Inbetriebnahme schildert.


In casperJS Tests können Anmerkungen zu Funktionalität mit Argumenten beim Funktionsaufruf angegeben werden, die finden sich dann im Testprotokoll wieder, helfen aber auch als Dokumentation im Code.
Auf generative Dokumentation wie "AntDoc" oder "JSDoc" wurde auf Grund des engen Zeitplan verzichtet da hier noch zusätzlich die Generatoren installiert hätten werden müssten.

Dem Anforderer wurde zum Abschluss das gewünschte Instalationsprotokoll vorgelegt. 


#Fazit

>>//Fehlt noch

##Soll/Ist Vergleich

Alle Anforderungen aus dem Pflichtenheft wurden erfüllt
Keine Analyse der alten Testumgebung

###Abweichung vom Projektantrag

>>// Dieser Kapitel ist hierher gewandert

Die Analysephase wurde im Projektantrag mit insgesamt 13 Stunden angegeben. Tatsächlich habe ich nur 10 Stunden gebraucht. Nach der Besprechung mit dem Softwarestrategen waren die Anforderungen klar genug abgesteckt, sodass die Phase der Analyse der alten, defekten Testumgebung entfallen konnte. 
 Im Projektantrag wurde leider die Abnahme unterschlagen und fälschlicherweise mehr als 70 Stunden (73) insgesamt geplant.
 Einzelne Abweichungen innerhalb des Zeitplans entstanden durch Erleichterungen bzw. Blockaden, die erst bei der Realisierung der einzelnen Teilschritte erkenntlich wurden. Die tatsächlich benötigte Gesamtzeit für das Projekt entsprach
somit der vorher veranschlagten Planzeit. 

##Lessons learned
Puffer bei Sysadmitasks gut angelegt.


##Ausblick
In naher Zukunft werden für den Einsatz der Testumgebung mehr Tests implementiert die mehr Funktionen und Grenzbedingungen untersuchen.
Obwohl alles im Lastenheft definierten Anforderungen realisiert wurden zeichnen sich bereits neue Featurewünsche und Einsatzszenarien ab.
Das Team strebt danach die Front-End-Tests fest in den Deploymentprozess zu integrieren, was auch ohne Probleme möglich ist.

Bei der Abnahme wurde entdeckt dass laufende Tests die parallele Ausführung von anderen Pipelines verhindert. Sollte dies die Arbeit des Team erschweren ist ein Umzug der Test-Runntime auf einen anderen Server ohne Anpassungen des Code möglich.

Der Modulare Aufbau der Testumgebung ermöglicht somit eine gute Erweiterbarkeit und noch tiefere Integration von Tests in vorhandene Prozesse.

Zur Dokumentation der Tests bleibt anzumerken dass es im Unternehmen Bestrebungen gibt hier die Kausalität umzukehren. Das bedeuten dass die Testdokumentation in Zukunft in einer domänenspezifischen (\acs{DSL}) Sprache geschrieben werden könnten und daraus Testfälle generiert werden.


* * * * *



