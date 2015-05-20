#Einleitung


## Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Tochterunternehmen
der Freenet Group AG. Das Unternehmen vertreibt hauptsächlich Mobilfunkprodukte wie
Vertäge und Mobilfunk-Endgeräte sowie dazu passendes Zubehör. Seit 2011 bestand eine
Kooperation mit der GRAVIS Computervertriebsgesellschaft mbH, dem
ursprünglichen Ausbildungsbetrieb des Autors. Diese Kooperation mündete Ende 2012
in einer vollständigen Übernahme[^grauebernahme] und einer anschließenden
Integration mehrerer Abteilungen, Logistik und IT, in den
mobilcom-debitel Konzern. Infolgedessen ist der Freenet Konzern, zusätzlich zu den eigenen Onlineshops und Online-Kundenportalen, verantwortlich für
den Betrieb der GRAVIS Onlinepräsenz. Die Onlineshops und zugehörigen Warenwirtschaftssysteme werden überwiegend firmenintern weiterentwickelt und betreut. Die mobilcom-debitel GmbH verfügt über
mehrere Standorte. Der Standort der ehemaligen GRAVIS-IT in
Berlin am Ernst-Reuter-Platz konnte erhalten werden. Einige der GRAVIS-IT-Systeme werden weiterhin von diesem Standort aus betreut.



[^grauebernahme]:Pressemitteilung zur Übernahme von GRAVIS durch md http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple


## Projekt


Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer Laufzeitumgebung für funktionale Front-End-Tests der betreuten Onlineshops: dem GRAVIS Onlineshop[^graweb] und dem MDS Onlineshop[^mdsweb]. Diese Umgebung soll in das bestehende Continuous-Delivery System _Go_, ein einfach zu bedienendes System basierend auf den Java build-System \acs{ANT} , eingebunden werden, um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das Entwicklungsteam _Vertrieb Onlineshop CMS_, welches eine geringere Arbeitslast und gesteigerte Codequalität beim Einsatz dieses Systems zum Testen erwartet.

[^graweb]: GRAVIS Onlineshop www.gravis.de
[^mdsweb]: MDS Onlineshop mds.mobilcom-debitel.de

##Projektumfeld


Das Projekt wurde im Rahmen der Ausbildung zum Fachinformatiker mit der
Fachrichtung Anwendungsentwicklung durchgeführt. <!-- Bedarfsträger für das
Projekt ist das Unternehmen mobilcom-debitel GmbH selbst, da es als
Maßname für die Qualitässicherung dienen soll. Auftraggeber des
Projektes ist die Abteilung *Vertrieb Onlineshop CMS*. --> Die auftraggebende Abteilung
beschäftigt einen Software-Tester, der neben der Abnahme von neuen
Features auch immer wieder sehr zeitaufwändig Regressionstests
durchführt. Um dem hohen Qualitätsstandard gerecht zu werden, sind
diese Tests notwendig, halten aber die Abnahme von neuen Features
zeitlich auf. Durch die hohe Wiederholungsrate der Regressionstests ist
es möglich, dass bei manueller Testdurchführung Fehler übersehen oder erst nach dem \acs{Deployment}, d.h. nach dem aktualisieren der Software auf den Servern auf den neusten Stand, entdeckt werden. Zudem werden zur Zeit Testläufe und Fehlerfälle in der
Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich
eine Statistik, über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt
es keine technische Möglichkeit, die das Deployen von fehlerhaftem Code
auf das \acs{Echt-System}, also den Servern zu denen sich Kunden verbinden, verhindert.

##Projektziele


Im Rahmen des Projektes soll eine Laufzeitumgebung für Front-End-Tests
bereitgestellt werden. Diese muss in das Continuous-Delivery System
\acs{Go} (im folgenden "Go"[^listofsoftware]) eingebunden werden. Die
Test-Umgebung muss betriebsbereit dem Team *Vertreib Onlineshop CMS*
übergeben werden.

[^listofsoftware]:Liste der Eingesetzten Software im Anhang \ref{liste-der-eingesetzen-software}

##Projektschnittstellen


Da das Projekt innerhalb des Entwicklerteams *Vertreib Onlineshop CMS* stattfindet, knüpft es an interne
Prozesse, also Abnahme und \acs{Deployment} der Software und technische
Systeme an. Eine Auswertung durch das *Quality Assurance Team* im
Unternehmen erfolgt nicht. Das Entwicklerteam möchte auch nach der Konzernintegration Felxibilität bewahren und betreibst selbst die Qualitätskontrolle. Die Testumgebung wird verknüpft mit *Go* und
testet dabei über eine \acs{HTTP}-Verbindung den jeweiligen Onlineshop. Die Testumgebung muss auf das
hausinterne Versionsverwaltungssystem (\acs{SVN}) zugreifen können, um dort
aktuelle Testskripte abzuholen.

##Projektabgrenzung


Die Erstellung von Tests oder Testszenarien für einen produktiven Einsatz
ist nicht Teil des Projektes. Andere Testarten wie etwa
Performancetests, muss das System nicht leisten, denn zu diesem Zweck wurden bereits andere Werkzeuge erfolgreich eingebunden.\
Eine zusätzliche Benutzeroberfläche muss nicht erstellt werden, da die
Steuerung ausschließlich aus dem \acs{CI/CD} System heraus erfolgt,
welches ein eigenes Webinterface zur Verfügung stellt.
<!-- eine (graphische) Aufbereitung der Testartefakte erfolgt nicht-->

#Projektplanung

Den Beginn der Planungsphase wurde zunächst der Zeitplanung gewidmet, danach folgte als nächster Punkt die  Ressourcenplanung, und abschließend die Kostenplanung für das Projekt.

 

##Projektphasen


Für die Umsetzung des Projekt stehen nach den Vorgaben der Industrie und Handelskammer maximal 70 Stunden zur Verfügung. Für den Projektverlauf wurden verschiedene Phasen geplant. Eine grobe
Zeitplanung in Hauptphasen enthält die folgenden Tabelle.


\input{Tabellen/tzi/Zeitplanunggrob.tex}

<!-- 


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
  
  -->


Die Hauptphasen wurden bei der Projektplanung beim Bekanntwerden der Anforderungen sukzessive in Unterpunkte detailliert. 
Eine detaillierte Übersicht befindet sich im Anhang \ref{app:Zeitplanung} "Detaillierte Zeitplanung" .

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



##Ressourcenplanung


+ Personal  

	* 1 Entwickler: Umsetzung des Projektes

	* 1 Softwarestratege / Projektleiter "Testing" für Anforderungsaufnahme, technische Rücksprachen und Abnahme
	* 4 Entwickler aus dem Team _Vertrieb Onlineshop CMS_ für einführende Schulung
    
        

+ Hardware   
Es soll keine zusätzliche Hardware für das Projekt angeschafft werden. Zum Einsatz kommt die Testumgebung auf den vorhandenen Serversystemen. Dem Entwickler steht ein Arbeitsplatzrecher (Apple MacBook Pro) zur Verfügung auf dem die Entwicklung und Evaluation von Software stattfinden soll.
+ Software   
Es soll für die Testumgebung ausschließlich kostenfreie bzw. open-source Software mit einer Lizenz, die kommerzielle Nutzung erlaubt, eingesetzt werden. Die Software *Go* ist von GRAVIS lizenziert und verursacht im Rahmen des Projektes keine zusätzlichen Kosten. *Go* ist mittlerweile auch open-source und könnte bei Bedarf angepasst werden.    
 
  


##Entwicklungsprozess


Für die Realisierung des Projektes habe ich mich für ein Vorgehen, das
an den klassischen Wasserfall Prozess angelehnt  ist, entschieden. Das bedeutet ein lineares Vorgehen von der Erfassung der Anforderungen, der Erstellung eines Entwurfs, der Implementation zur Überprüfung und der anschließenden Auslieferung.
Ermöglicht wird dies durch den Umstand, dass die Anforderungen klar
definiert sind und sich im Zeitraum der Realisierung nicht signifikant
ändern werden. Der Regelprozess im Entwicklerteam ist standardmäßig ein an Scrum angelehnter Prozess.
 Eine Aufnahme der Entwicklung in den
agilen Regelprozess, der den Alltag im Entwicklerteam prägt, erschien nicht sinnvoll. Die Werte des agilen Prozesses sind nur schwer mit dem klar definierten Projektziel vereinbar. Dadurch konnte das Projekt ohne Unterbrechung, voller Aufmerksamkeit und ohne Veränderung der Priorisierung durchgeführt werden.

In der Entwurfsphase wurde die Vorgehensweise der
Entwicklung klar aufgestellt sodass häufige Rückfragen und Anpassungen der Anforderungen nicht nötig sind. 

#Analysephase


##Ist-Analyse


Bis zum Zeitpunkt des Projektbeginns wurden Regressionstests in Form von Front-End-Tests ausschließlich
manuell von Testingenieuren oder Entwicklern aus dem Team vorgenommen. Bei bevorstehendem \acs{Deployment} musste der Software-Tester seine aktuelle Aufgabe unterbrechen und den gewünschten Softwarestand auf dem \acs{Staging-System}, einer produktionsnahen Serverumgebung für Tests und Abnahmen, testen. Eine mündliche Abstimmung mit dem Team signalisiert dann die Bereitschaft zum Deployment. Anschließend müssen die Tests im \acs{Echt-System} wiederholt werden um sicher zu gehen dass das Ausspiel erfolgreich war. Das erneute durchführen von Regressionstests ist erforderlich, da andere Datensätze und Serverkonfigurationen bisher unentdecktes Fehlverhalten verursachen können. Tritt hier ein Fehler auf, muss geklärt werden ob der Fehler vorher übersehen wurde (menschlicher Faktor) oder die Umgebungsparameter, z.B. die Nutzung von mehr Applikations- und Datenbankservern oder weitaus größere Datenmengen, ursächlich sind. 
<!--
 Zudem werden Testläufe
und Fehlerfälle in der Regel nicht oder nicht ausführlich dokumentiert
und es ist nicht möglich eine Statistik über die Fehlerhäufigkeit zu
führen. Darüber hinaus gibt es keine technische Möglichkeit die das
Ausrollen von fehlerhaftem Code auf dem Echt-System verhindert.
-->
<!--
 Zu einem früheren Zeitpunkt war eine Testumgebung auf Basis von Selenium in Betrieb genommen worden. Diese Testumgebung hing von Diensten dritter ab die mittlerweile eingestellt wurden. Für diese Umgebung wurden ursprünglich Testabläufe definiert die befolgt werden um alle Funktionalitäten zu testen. Diese Testabläufe werden nach besten gewissen bei manuellen Test befolgt.-->
 Das vertrauen in die manuellen Regressionstests ist zu diesem Zeitpunkt nicht sehr hoch, da in der Vergangenheit Softwarebugs an unerwarteter Stelle auftraten, lange unentdeckt blieben und bei Feststellung den gesamten Entwicklungsprozess aufgehalten haben.


##Wirschaftlichkeitsanalyse




### Make_or_Buy-Entscheidung

Front-End-Tests von Web-Applikationen sind ein häufiger Prozesschritt in der Entwicklung von e-Commerce Anwendungen und es gibt viele Anbieter von Werkzeugen dafür auf dem Markt und noch viel mehr experimentelle Ansätze dafür.

Es kann daher Standardsoftware für Front-End-Tests genutzt werden: Die Produkte phantomJS, ein Webbrowser, zusammen mit
casperJS, einem Javascipt Framework zur vereinfachten Bowsersteuerung, oder Selenium in Verbindung mit dem Selenium webdriver, einer Schnittstelle zur Browserfernsteuerung,  bieten sich als Lösungen an. Alle genannten Systeme sind kostenfrei und open-source erhältlich und sind gut dokumentiert.

Die Integration von Front-End-Test in das CI/CD-System *Go* ist eine  Anforderung spezifisch für das Unternehmen mobilcom-debitel GmbH. *Go* ist ein wenig verbreitetes System und keine Integration solcher Art wurde bisher publik gemacht.
Da *Go* open-source und die API gut dokumentiert [^gowebdoku] ist , kann eine Integration selbst vorgenommen werden.

[^gowebdoku]:http://www.go.cd/documentation/user/current/

### Projektkosten
<!-- motivation -->
Die Projektkosten, die bei der Entwicklung des Projektes anfallen,
sollen im Folgenden kalkuliert werden. Dafür müssen neben den
Personalkosten für den Entwickler und weitere Mitarbeiter auch noch die
Aufwendungen für die Ressourcen berücksichtigt werden. Die Kalkulation
wird anhand von durchschnittlichen Stundensätzen im Freenet Konzern durchgeführt. Der
Stundensatz eines Auszubildenden im 3. Lehrjahr beträgt demzufolge
*6,79€* , der eines Mitarbeiters *28,45€* [^hourlyrate]. In diesen Preisen sind bereits die für den Konzern zu leistenden Sozialabgaben, sowie Berufsgenossenschaftsbeiträge enthalten, es sind somit die Kosten, die der mobilcom-debitel GmbH beim Einsatz des entsprechenden Mitarbeiters entstehen. Als Gemeinkosten für
Ressourcennutzung im Unternehmen (Hardware und Software, Büroarbeitsplatz etc.) wurde ein berechneter Stundensatz von 7,90€ pro Mitarbeiter vom Controling mitgeteilt.
Es soll nur bestehende Infrastruktur genutzt werden und keine neue Software eingekauft werden, dadurch lassen sich die Kosten allein durch o.g. Stundensätze berechnen.


[^hourlyrate]: Stundensätze wurden aus dem Unternehmensinternen Controlling bereitgestellt

\input{Tabellen/tzi/kostentabelle.tex}
<!--
\begin{figure}
\begin{equation}
\frac{ \eur{1000}\mbox{/Monat} \cdot 12\mbox{Monate/Jahr} }{ (8\mbox{h/Tag} \cdot 221\mbox{Tage/Jahr} )}=  \frac{\eur{6,79}}{h}
\end{equation}
\caption{Kosten eines Auszubildenden}
\end{figure}
-->

Die Kosten, die für Vorgänge des Projektes anfallen sowie die gesamten Projektkosten sind in Tabelle \ref{table:kostenaufstellung} zu finden.

<!--

Vorgang                                                    Zeit Kosten pro Stunde        Kosten
-------------------------------------------------------- ------ ------------------- -----------
Entwicklungskosten                                          70h  6,79€ + 7,90€        1028,30€  
Fachgespräch mit Projektanforderer                           3h 28,45€ + 7,90€        109,05€
Abnahmetest                                                  1h 28,45€ + 7,90€        36,35€
Nutzerschulung  (4 Entwickler)                               2h 113,8€ + 31,60€       290,80€
\vtop{\hbox{\strut Projektkosten}\hbox{\strut Gesamt}}                                1464,50 €

-->

<!--
\begin{figure}
 1464,50€
\label{kostenaufstellung}
\caption{Kostenaufstellung}
\end{figure}
-->

### Kostenersparnis



Durch die Automatisierung von immer wiederkehrenden Tests lässt sich
Arbeitszeit des Software-Testers einsparen. Dadurch würden sich 
Personalkosten reduzieren lassen. 
<!--

-------------------  -------
Testumgebung         Dauer
-------------------  -------
Staging-System        45 min

Live-System           45 min
-------------------  -------

-->

Aus Erfahrung können für Regressionstests am GRAVIS Onlineshop 45min angenommen werden. Pro Deployment wird einmal vorab auf dem \acs{Staging-System} getestet und nach dem Deployment noch einmal im \acs{Echt-System}. Beim aktuellen Vorgehen wird alle 2 Wochen deployt, was eine Testaufwand alleine für Regressionstests von 3 Stunden pro Monat bedeutet. Diese könnten durch vollautomatisierte Tests eingespart werden.

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

Neben dem finanziellen Nutzen möchte ich hier noch folgende weitere Vorteile aufzählen.:

*   Tests können beliebig oft laufen
*   Auf Grund der Automatisierung und der daraus abgeleiteten Zeitersparnis ermöglicht das Projekt eine Veränderung von Deployment- und Integrationsverhalten und damit eine höhere Reaktionsfähigkeit.
*   Größeres Vertrauen in den Code, da Kernfunktionalität ständig getestet wird
*   Die Arbeit eines Testingenieuren oder Entwickler muss nicht für Front-End-Tests unterbrochen werden.

##Einsatzmöglichkeiten


Im Laufe der Analysephase wurde mit dem Anforderer ein Anwendungsfalldiagramm (siehe Anhang \ref{usecasediagram}) erstellt, welches eine Übersicht der Anwendungsfälle bietet. Es gibt alle Funktionen wieder, die aus Sicht des Endanwenders benötigt werden. 
Automatisierte Tests können als aktive und kontinuierliche Qualitätssicherungsmaßname bei der Entwicklung der Webshops genutzt werden. Zusätzlich können die Regressionstests auch direkt in den Deploymentprozess integriert werden. Eine solche enge Integration verhindert, das Deployment von fehlerbehafteter Software, wenn im Vorfeld bereits Testfälle fehlschlagen.

Der Entwickler kann sich auch entscheiden bereits auf der Integrationsumgebung, einer weiteren Testumgebung auf der immer der aktuellen Entwicklungsstand der Softwareausgespielt ist, zu testen, um frühstmöglich Fehler zu erkennen. 

 Im Zusammenhang mit dem CI/CD System wird auch eine Historie der Testergebnisse vorgehalten. Mit Hilfe dieser Historie kann z.B. nachvollzogen werden, wann Fehler schon einmal aufgetreten sind.
 
 <!-- Flow chart erstellt?-->



##Lastenheft
Wesentliche Bestandteile zur technischen Anforderung  aus dem Lastenheft sind im Anhang \ref{app:Lastenheft} zu finden.

#Entwurfsphase


##Zielplattform


Die Testumgebung soll auf den vorhandenen Servern, auf denen auch der
GRAVIS Onlineshop betrieben wird, eingesetzt werden können. Der Betrieb in einem anderen Rechenzentrum oder auf einem Rechner der Entwickler, z.B. zur Weiterentwicklung von Tests, sollte ebenfalls möglich sein.
Die Abläufe werden, von Go vorgegeben, als ANT-Skripte beschrieben. 
Ausgaben und Artefakte werden in einer Ordnerstruktur auf dem Dateisystem gespeichert. Als Artefakte bezeichnet man Nebenprodukte der Softwareentwicklung. Eine Speicherung von Testergebnissen in einer Datenbank währe ebenfalls möglich. Die Speicherung auf Datei-Ebene vereinfacht die Handhabung in *Go*  und hat sich bei der Integration anderer Werkzeuge bewährt.

##Architekturdesign

###Front-End-Tests


In den Anforderungen wird gefordert, funktionale Tests durchzuführen und wie ein Nutzer mit der Website zu interagieren. Damit musste ein Webbrowser mit einer Rendering-Engine und einer JavaScript Laufzeitumgebung herangezogen werden, der Formularvalidierung und Interaktionen auf Javascript Basis ermöglicht und Sessioncookies vorhalten kann. Frameworks, die nur statische Programmanalyse oder nur Unit-Tests ausführen,  wie HTMLUnit für HTML oder QUnit für Javascript, fielen aus der Auswahl, da ihr Funktionsumfang nicht ausreichend ist. <!-- Exekution basded Testung ist angesagt-->

Für eine Vereinfachung der Systemanforderung wurde entschieden, einen so genannten \acs{headless} Browser, einen Browser ohne Grafikausgabe zu nutzen. Damit kann die Anwendung, im Folgenden "Testrunner" genannt, auf einem Server eingesetzt werden.    
 Auf dem Entwicklerrechner wurden mehrere Browser evaluiert. Einzig *phantomJS*[^phjs] lief stabil und zuverlässig. Bereits mit einer \acs{API} zur Fernsteuerung versehen, ist *phantomJS* genau für dieses Einsatzgebiet geeignet.

[^phjs]:http://phantomjs.org/

Die Recherche ergab, dass *casperJS*[^cajs] ein Framework für *phantomJS* ist, welches einen einfachen Einstieg in Front-End-Tests ermöglicht. Als Alternative wurde auch *DalekJS* in Betracht gezogen. Aufgrund mangelhaften Supports und lange bestehenden Bugs wurde von Kollegen und anderen Entwicklern davon abgeraten.

[^cajs]:http://casperjs.org/

Um Tests in *casperJS* zu programmieren gibt es, wie für alle JavascriptLibraries , <!-- sodoku says so --> zwei Möglichkeiten: Tests in JavaScript  oder in CoffeeScript[^coffeescript] schreiben.
Auf Grund der Erfahrung im Team mit Javascript wurde der Beispieltest in dieser Sprache geschrieben. Es bleibt weiterhin möglich, Coffeescript zu nutzen.  Auch ein Mischbetrieb kann erreicht werden.   
Um eine sequenzielle Abarbeitung von Testschritten in der funktionalen, nicht sequenziellen Programmiersprache Javascript zu gewährleisten, bietet *casperJS* `.start()`, `.then()` und `.done()` Funktionen zum Kontrollfluss an.


[^coffeescript]:Coffeescript ist eine von Javascript abgeleitete Sprache mit vereinfachter Syntax die vor der Ausführung nach Javascript zurückkompiliert wird.

###Integration in *Go*
Die Integration der Testumgebung  kann in *Go* nur unter Nutzung von  \acs{ANT} erfolgen. Es wird eine \acs{XML} build-Datei erstellt die \acs{Target}s, vergleichbar mit Funktionen in Programmiersprachen, definiert. Go steuert in sogenannten \acs{Pipeline}s welche Targets von ANT ausgeführt werden. Die Targets müssen die Gesamtheit der Aufgaben, die für einen Testlauf notwendig sind, abbilden.
Die Targets werden mit \acs{Task}s, also Befehlen gefüllt, die jeweils eine Aufgabe erledigen. ANT bietet Unterstützung für Datenoperationen und Variablen, hier Properties genannt. Properties können als wiederverwendbare Variablen genutzt werden, z.B. zu Speicherung von Datenbankadressen oder Dateipfaden. Darüber hinaus können ANT-Skripte weitere Werkzeuge, wie etwa Shell-Skripte, Java Programme oder \acs{PHP}-Scripte auslösen.

Die lose Kopplung der einzelnen Tasks erhöht die Wiederverwendbarkeit und  Austauschbarkeit. Sollte z.B. der Test-Runner ausgetauscht werden, kann dies erfolgen ohne die Tasks zur Testvorbereitung oder Auswertung der Testergebnisse anpassen zu müssen. Außerdem können die einzelnen Komponenten durch die strikte Trennung einfacher getestet, gewartet und erweitert werden.

Die Folge der Anwendungsfälle habe ich in einer so genannten \acs{Pipeline} definiert, die synchron abzuarbeitende Targets definiert. Eine Pipeline gliedert sich in mehrere \acs{Stage}s (Stufen), welche eigene Umgebungsvariablen und benötigte Ressourcen definieren, sowie die produzierten Artefakte auszeichnen.

Der Go-Server, welcher ein ANT-Skript auslöst ist in der Regel nicht der ausführende Server. Einzelne Server, die alle notwendigen Ressourcen für die Ausführung einer Stage bereitstellen (im folgenden Agentenserver genannt), melden sich mit ihrem Go-Agent beim Go-Server an und bekommen Aufgaben zugeteilt.


###Versionsverwaltung {#versionsverwaltung}
Bei diesem Projekt sind mehrere Komponenten involviert, deren Entwicklung getrennt erfolgen kann. ANT-Skripte die Funktionalität für das CI/CD System bereitstellen, werden in einem SVN-Repository "go" versioniert.
Die Testsuiten und deren Abhängigkeiten habe ich in einem separaten SVN-Repository "testing" verwaltet, in dem bereits Code für Performancetests und Unit-Tests vorgehalten wird.
Im "testing" Repository bestimmt die Ordnerstruktur die Testsuite sodass später im ANT-Task nur noch der Pfad spezifiziert werden muss, um eine Testsuite auszuwählen. Ich habe zur Demonstration 5 Testsuiten angelegt, 2 tiefgreifende und 2 oberflächliche Testszenarien für jeweils das Echt- und \acs{Staging-System} und eine "demo"-Testsuite die den Anforderungen entsprechend die Funktionalität der Testumgebung unter Beweis stellt.


\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/caspertestlist.pdf}{0.3}
\caption{Ordnerstruktur der Testsuiten im}
\label{fig:testingfolderstructure}
\end{figure}



      
 Die Aufspaltung der verschiedenen Codebasen bietet 2 Vorteile: der Zugriff auf den Code der Tests kann separat gewährt werden, ohne dass die Funktionalität des CI/CD System angepasst werden kann. Es können Dritten problemlos Rechte eingeräumt werden, Testsuiten zu erstellen ohne dass die gesamte Administration aus den Händen gegeben werden muss.
 In *Go* ist es möglich die Version und den Zweig von einzelner Materialien, also Code-Quellen separat einzustellen um sehr agil auf Anpassungen im Code zu reagieren.


##Entwurf der Benutzeroberfläche

Die Benutzer der Testumgebung sollen sich schnell zurecht finden und sind bereits gewohnt, *Go* zu benutzen. Es kann darauf verzichtet werden, zusätzliche Bedienelemente und -oberflächen einzuführen. Testläufe werden wie jede Pipeline in Go ausgelöst, entweder durch einen einfachen Klick in der Web-Oberfläche, siehe Abbildung \ref{fig:goguitrigger},  oder als \acs{post-commit-hook} des "testing" Repositories.
Die Auswahl der Testsuite und die Konfiguration weiterer Optionen erfolgt in den Umgebungsvariablen der Pipeline, ebenfalls standardmäßig in der Weboberfläche zu erreichen.
Ausgaben von Testläufen werden in der standardmäßigen Ansicht einer Pipeline in Go sichtbar (siehe auch Abbildung \ref{fig:goguisummary}). Go sieht es vor, eine zusätzliche Registerkarte in der Auswertung anzuzeigen, in der Artefakte präsentiert werden können. Die Registerkarte kann z.B. JUNIT Auswertungen anzeigen.


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

Um die Nachvollziehbarkeit von Testläufen zu gewährleisten, werden in jedem Schritt der Testpipeline Ausgaben erzeugt.
Gemäß der Praxis in Go werden Daten die aus dem Test entstehen, in Dateien auf dem Dateisystem des Go-Server hinterlegt. 
Eine Speicherung auf dem Go-Server und nicht dem Agentenserver garantiert eine nachhaltige Speicherung von Artefakten, da bei mehrfacher Verfügbarkeit der benötigten Ressource der Agentenserver beliebig austauschbar ist.

Go leitet Ausgabe der ANT-Skripte in eine Datei namens `console.log`, die  pro Stage einer Pipeline, in einen eigenen Ordner angelegt wird (siehe Abbildung \ref{fig:artifactsfolderstructure}).

In diesem Log finden sich alle Ausgaben der ANT Tasks und der Prozesse und Skripte die ANT Startet.
Zum Debugging beschriebt CasperJS auf Wunsch in die Standardausgabe.  Es wurde beschlossen diese Ausgabe wird auch in das log zu leiten. Bei der Entwicklung können mit den Argumenten `--verbose=true --log-level=debug` jedener einzelne Schritt der im Browser gegangen wird, von HTTP-Request, Javascript-Operationen und Veränderungen des \acs{DOM}, aufgezählt werden.
Im produktiven Einsatz genügt das Log-Level`--log-level=error` bei dem nur Fehler ausgegeben werden. Dies macht das Log lesbarer und hilft bei der Fehlerdiagnose im Alltag.

\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/artifactslist.pdf}{0.45}
\caption{Ordnerstruktur der Artefakte auf dem Server}
\label{fig:artifactsfolderstructure}
\end{figure}

<!-- Anschluss fehlt-->


Eine Datei im "JUNIT XML result Format", in der die Ergebnisse der Testläufe in Testsuiten gebündelt für jeden Testfall aufgelistet werden, ist gefordert.  Das Schema dieses XML Austauschformat ist als de-facto Standard festgeschrieben[^xunitwebdoku] und wird von vielen \*UNIT Testframeworks erstellt und von weiteren Systemen verarbeitet. Dieses Austauschformat ermöglicht in Zukunft tiefergehende Auswertung von Testergebnissen da es vollständig maschinenlesbar ist.    
*casperJS* soll im produktiven Einsatz mit dem Argument `--XUNIT=junit.xml` eine solche Datei liefern.



CasperJS Tests werden gemäß der Anforderung so designt, dass sie im Fehlerfall einen Screenshots der aktuellen Seite im PNG-Format aufnehmen. Auch damit lässt sich ein Problem leichter lokalisieren und visualisieren. Screenshots werden in der Ordner "artifacts" der jeweiligen Stage gespeichert und sind dadurch auch leicht im Webinterface von Go zu erreichen.


[^xunitwebdoku]:JUNIT XML result schema https://windyroad.com.au/dl/Open%20Source/JUnit.xsd


##Qualitätssicherung

Es wird früh in der Implementierungsphase ein Beispieltest erstellt, der
die Funktionalität des <!-- Testrunner?--> Systems beweisen kann.     
Der Code der Tests und ebenfallsder Schnittstelle wird in SVN versionsverwaltet, sodass es einfach
möglich ist funktionierende Versionen wiederherzustellen.
*Go* führt selbständig Pipelines, an denen Änderungen vorgenommen wurden oder deren Abhängigkeiten sich verändert haben, sofort aus. Hierdurch bleibt kein Code ungetestet und Fehlerfälle sind leicht erkennbar. Im Büro des Entwickerteams steht ein Rechner mit einem Großbildschirm zu Statusanzeige verschiedener Serversysteme, das so genannte Dashboard, auf dem u.a. fehlgeschlagene Pipelines, farblich gekennzeichnet, angezeigt werden. Das Entwicklerteam ist angehalten alle Anzeigewerte auf dem Dashboard "im grünen Bereich" zu halten und greift im Fehlerfall schnell ein. Der Verursacher des Fehlers ist dank Integration der Versionsverwaltung in *Go* schnell ausfindig gemacht.

*casperJS* verfügt über einen Selbsttest der nach der Installation ausgeführt werden soll.

##Pflichtenheft

Am Ende der Entwurfsphase wurde ein Pflichtenheft erstellt. Es baut auf dem Lastenheft auf. Dort wird beschrieben wie und mit welchen Werkzeugen der Autor die Anforderungen des Fachbereich umsetzen möchte.
Das Pflichtenheft dient als Leitpfaden für die <!-- impementierungsphase-->Umsetzung des Projektes. Ein Auszug aus dem Pflichtenheft befindet sich im Anhang \ref{app:Pflichtenheft}.


#Implementierungsphase

##Setup
Vor Beginn der Umsetzung von Funktionalitäten habe ich die notwendigen SVN-Repositories auf dem Entwicklerrechner ausgecheckt, damit ich bereits vorhandene Funktionalität für das Projekt mitbenutzen konnte.

In Übereinstimmung mit der vorhandenen Struktur im Repositry empfiehlt es sich eigene Unterordner und Builddateien für dieses Projekt anzulegen. Siehe Sektion\ref{versionsverwaltung} Versionsverwaltung.
Für den Texteditor wurden Linter für JavaScript und XML installiert um früh Tippfehler erkennen zu können. Linter sind Programme die statistische Code-Analyse durchführen, sie "durchfilzen" (to lint) Code nach problematischen Abschnitten. Dies ist bei der Entwicklung von interpretierten Sprachen, die nicht vorab kompiliert werden, hilfreich.


##Installation Test-Runtime 
Nach der erfolgreichen Begutachtung von PhantomJS und casperJS auf der Entwicklermaschine mit MacOS X, wo diese beiden Tools mit dem Paketverwaltungssystem `brew`[^brewweb] rasch installiert waren, ging es daran diese Anwendungen auf einem Server zu installieren. 

[^brewweb]: brew.sh , sehr weit verbreitetes Paketverwaltungssystem für MacOS X zum nachrüsten. Wird nicht von Apple gepflegt.     

<!--
PhantomJS 1.9.8 ist ein Paket aus QTWebkit, der Rendering-Engine, einer Javascript Laufzeitumgebung und QT4 als Wrapper. PhantomJS hat enorm viele Abhängigkeiten und es ist nicht empfohlen es selbst zu kompilieren da es wahrscheinlich ist dass mindestens eine Abhängigkeit zu Komplikationen führt. Im "brew" Paketsystem wurde also eine vorkompilierte Binärdatei verteilt und mit `brew install phantomjs` anschließend ohne Probleme installiert.   -->
 Auf dem Zielserver mit gentoo Linux wird das Paketverwaltungssystem `portage` genutzt.
Der Befehl `emerge phantomjs` zeigte allerdings eine enorme Liste von Abhängigkeiten auf. Ich habe manuell versucht die Konflikte von Abhängigkeiten und Patch-Fehlern zu lösen. Nach 2 Stunden habe ich dieses Vorgehen als nicht zielführend betrachtet und entschied  mich ein vorkompiliertes PhantomJS herunterzuladen und manuell zu installieren. 

CasperJS wurde über `portage` auch nur in einer sehr veralteten Version verteilt, sodass ich auch hier eine manuelle Installation vornehmen musste. Ein `git clone` des aktuellen casperJS Quellcodes von Github, also ein abholen der aktuellen Version aus der öffentlich casperJS Versionsverwaltung, brachte mich auf die gewünschte Version 1.1.0-beta3.

Erfahrungen mit gentoo haben mir gezeigt dass immer mehr Zeit bei der Installation eingeplant werden muss, denn es treten sehr häufig Unstimmigkeiten mit Abhängigkeiten auf.

Bei der Abnahme wurde noch ein Installationsprotokoll gewünscht damit das Vorgehen reproduzierbar und nachvollziehbar ist. Dieser zusätzlichen Anforderung konnte noch in der Dokumentationsphase nachgekommen werden. Das Installationsprotokoll ist im Anhang zu finden.


   
##Erstellen der Beispieltestsuite
Das casperJS Modul `tester` stellt die meisten im Lastenheft geforderten Funktionalität bereit. Mit Hilfe der sehr guten online Dokumentation von casperJS und seiner Module[^casperdocstester]  wurde eine Beispieltestsuite geschrieben.
Es musste besondere Sorgfalt auf die Struktur der Testskripte für *casperJS* gelegt werden, denn die Tests werden in Javascript geschrieben und dies wird asynchron ausgeführt, wenn nicht explizit eine Schrittfolge definiert wird. Das würde bedeuten, dass das Verhalten nicht immer reproduzierbar ist, was jedoch gerade bei Regressionstests unbedingt erforderlich ist.

In einer casperJS Testsuite wird eine deterministische Testsequenz mit `casper.start()` begonnen. Jeder darauf folgende schritt wird in der Funktion `casper.then();` gekennzeichnet.
Der Testabschluss wird mit  `casper.done()` eingeleitet.     

Neben einer erfolgreich Testsequenz sind von mir auch strategische Fehlerpunkte eingebaut worden, die einen Test scheitern lassen. Der Fehlerfall wird dadurch absichtlich herbeigeführt, damit er später in der Integration problemlos abgefangen werden kann.

[^casperdocstester]:http://casperjs.readthedocs.org/en/latest/modules/tester.htm
   
##Testing der Runtime  
Nach der Überprüfung der Versionen von *PhantomJS* und *casperJS* habe ich den mitgelieferten Selbsttest von *casperJS* auf dem Server durchgeführt. Der Selbsttest führt alle Funktionen in *CasperJS* einmal aus und diagnostiziert die vollständige Funktionsfähigkeit.    
Die auf dem Entwicklerrechner erstellten Javascript Tests wurden per sshFS[^sshfs], auf den Server übertragen. Dort wurden sie manuell mit dem Befehl `casperjs test /home/it/casperjs/ --log-level=debug --verbose=true` ausgeführt und deren Ausgabe beurteilt. Die übertragenen Tests und der Selbsttest funktionierten  einwandfrei und die Einsatzbereitschaft der Test-Runtime war bewiesen. 


[^sshfs]:Datenübertragungsprotokoll über sFTP, auf dem Entwicklerrechner als FUSE-Dateisystem eingebunden.

###Einbinden des Testsystem in das CI/CD System 



\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/pipelinestruct.pdf}{0.25}
\caption{Struktur einer Pipeline in Go}
\label{fig:gopipelines}
\end{figure}

In *Go* werden automatisierte Abläufe in Pipelines definiert die sich in große Schritte, Stages genannt unterteilen. Der Aufbau einer Pipeline ist in \ref{fig:gopipelines} illustriert<!-- verdeutlicht -->. Stages werden nacheinender ausgeführt. Jobs, die zusammen eine Stage bilden, können aber in beliebiger Reihenfolge oder sogar parallel ausgeführt werden. Jobs werden nicht auf dem *Go* Server selbst, sonder auf so genannten Agenten-Servern ausgeführt.     
*Go* benutzt für die Ausführung der Pipelines \acs{ANT}. Jeder Job hat mindesten einen Task der ein ANT-Target anspricht oder einer standard ANT-Funktion entspricht.  Die Aufgabenverteilung geschieht anhand verfügbarer Ressourcen. Ressourcen sind in diesem Kontext die Fähigkeit von Agenten-Servern Anwendungen auszuführen, weil sie dort installiert sind. Diese müssen explizit im Admin-Interface von *Go* konfiguriert werden.
Die neu hinzugewonnene Anwendung *casperJS* wurde von mir dem Server namens "manager" als Ressource hinzugefügt und kann von nun an als Ressource in Pipelines verlangt werden. Jobs die diese Ressource verlangen werden dann automatisch dem "manager" Server zugeordnet und dort ausgeführt.

##Erstellung von ANT Targets

Alle Anwendungsfälle aus dem Anwendungsfalldiagramm \ref{app:UseCase}, die noch nicht in *Go* oder als standard ANT-Tasks zu Verfügung standen, wurden in einer neuen ANT build-Datei als \acs{Task}s aufgenommen. Zusätzlich zu ein paar Helferfunktionen, die die Fehlerdiagnose vereinfachen sollten, wurden diese Tasks implementiert. In der build-Datei wurden Ordner für Screenshots, Testskripte und weitere Artefakte als Properties definiert. Parameter der ANT Tasks wurden durch Properties und Umgebungsvariablen ausgefüllt, sodass die Tasks mit maximaler Flexibilität eingesetzt werden können. Es wurden auch Tasks für die Nachbereitung von Test eingeführt die Artefakte wie das Testlog und Screenshots bereinigen und einsammeln.
	 
	 	 
##Einrichtung der Pipeline zur Testausführung 

Die Komponenten die für einen erfolgreichen Testlauf benötigt werden wurden im vorherigen Schritt erstellt. Jetzt wurden die Tasks in eine Reihenfolge gebracht. Ich habe eine Pipeline als ANT-Skript geschrieben, die alle notwendigen Schritte zum automatisierten Durchführen von Front-End-Test abarbeitet. Diese Pipeline wurde dann in die Gesamtkonfigurationsdatei von *Go* eingefügt, in der ich auch die Rechte und die erforderlichen Ressourcen für die Pipeline konfiguriert habe.



##Einsatz von Umgebungsvariablen  
Ab sofort können Front-End-Tests automatisiert ausgelöst werden. Bisher  sind aber alle Pfade und Parameter festgeschrieben. Der gleiche Code soll unter verschiedenen Testszenarien und auf verschiedenen Serverumgebungen zum Einsatz kommen.
Um die gewünschte Modularität zu erreichen wurden statische Werte in der in den von mir erstellten ANT-Tasks durch Umgebungsvariablen getauscht. Einige Tasks mussten erweitert werden, z.B. um die Parameterweitergabe an *casperJS* zu ermöglichen. <!-- DIfficulty --> Die Umgebungsvariablen können in der Web-Obefläche von *Go* leicht verändert werden.

##Erweiterung des Bespieltest um Screenshotfunktion 
Im Browser *phantomJS* können Bildschrimaufnahmen gespeichert werden. Die Funktionalität der Bildschrimaufnahmen unter Zuhilfenahme von *casperJS*  ist leider schlecht dokumentiert. Nach mehreren Versuchen stellte sich heraus der JavaScript Befehl `casper.capture()`  standardmäßig  die grafische Darstellung des Elementes `<body>` einer HTML Seite speichert.  Um Speicherplatz zu sparen können auch nur einzelne, dem `<body>`untergeordnete HTML Elemente aufgenommen werden. Am häufigsten verursachen aber fehlende HTML Elemente Testabbrüche, sodass dieser Ansatz nicht weiter verfolgt wurde. 

##Pipeline um Artefaktensammlung erweitern
Als Artefakte bezeichnet man Nebenprodukte der Softwareentwicklung. In diesem Fall sind unter anderem die Test-Suite und das Testprotokoll gemeint.

*Go* bietet von Haus aus einen Mechanismus um Artefakte von Agenten-Server einzusammeln. Diese wurde in die Pipeline eingesetzt und konfiguriert. Damit kann sichergestellt werden dass die maschinenlesbare Testauswertung in der Historie in *Go* immer zur Verfügung steht.

##Pipeline um Screenshotsammlung erweitern   

Es wurde zusätzlich ein ANT-Task erstellt und in die Pipeline integriert, der erzeugte Screenshots in die entsprechenden Ordner der Historie verschiebt.

<!-- ###Testen der Schnittstelle Testsystem zum CI/CD System   -->

#Testphase

Schon in der Implementierungsphase wurden die Beispieltests immer wieder, erst auf dem Entwicklungsrechner, dann auf dem Server  ausgeführt. Zur Inbetriebnahme von *casperJS* wurde auch der Selbsttest des Frameworks *casperJS* eingesetzt, bei dem alle Funktionen ausgeführt wurden.
Auf dem Server wurde nach dem Ausführen von Tests per ssh überprüft, ob Artefakte an der richtigen Stelle erzeugt wurden. 

#Abnahmephase
Nachdem die Anwendung fertig gestellt war, wurde sie dem Fachbereich zur Abnahme vorgelegt. Zusammen mit dem Anforderer wurden alle Anwendungsfälle und Akzeptanzkriterien für das System im Einsatz des Beispieltests geprüft. Die ursprünglichen Anforderung wurden alle zur Zufriedenheit erfüllt. Ein Codereview wurde nicht durchgeführt.
Bei der Abnahme entstand noch der Wunsch nach einer Instalationsprotokoll.


#Einführungsphase

Im Anschluss an die erfolgreiche Abnahme wurde die Pipeline für Front-End-Tests allen Benutzern des Teams *Vertrieb Onlineshop CMS* in *Go* über die integrierte Rechteverwaltung zugänglich gemacht. Da der Beispieltest bereits einen breites Spektrum an Kernfunktionen des GRAVIS Onlineshop testet, kann die Testumgebung ab diesem Zeitpunkt eingesetzt werden.


##Schulung
Die Applikation wurde dem gesamten Team *Vertrieb Onlienshop CMS* vorgeführt. Nach dem Funktionsüberblick wurden dem Team die eingesetzten Technologien erläutert. Ich habe dem Team vorgeführt, wie die aktuelle Testsuite einzusetzen und über Umgebungsvariablen zu konfigurieren ist.  Anschließend wurde die Struktur von CasperJS Tests erläutert und wie diese erstellt werden können. <!-- Auch ein Testaufnahmewerkzeug namens "Resurrectio"[^ressurectioweb] , mit dem sich im Webbrowser Front-End-Test aufnehmen lassen, wurde als Unterstützung den Nutzern vorgeschlagen. --> Die Fähigkeiten und Erweiterungsmöglichkeiten von CasperJS in der aktuellen Umgebung wurden anhand der Webdokumentation[^casperdocstester] präsentiert. Zum Abschluss wurde die hierarchische Organisation von Tests aufgezeigt und wie neue Testsuiten zu strukturieren sind.

[^ressurectioweb]:https://chrome.google.com/webstore/detail/resurrectio/kicncbplfjgjlliddogifpohdhkbjogm

#Dokumentation


Das Hauptaugenmerk bei der Dokumentation galt dieser Projektdokumentation, die alle Schritte von der Anforderung bis zur Inbetriebnahme schildert.


In casperJS Tests können Anmerkungen zu Funktionalität mit Argumenten beim Funktionsaufruf angegeben werden, welche sich im Testprotokoll wieder finden und als Dokumentation im Code.
Auf generative Dokumentation wie "AntDoc" oder "JSDoc" habe ich auf Grund des engen Zeitplans verzichtet.


#Fazit



##Soll/Ist Vergleich

Rückblickend kann festgestellt werden dass alle funktionalen Anforderungen gemäß dem Pflichtenheft erfüllt werden konnten.
Der zum Beginn des Projektes erstellte Projektplan konnte nicht vollständig eingehalten werden.  Im Projektantrag wurde leider die Phase der Abnahme unterschlagen und fälschlicherweise mehr als 70 Stunden des von der IHK festgelegten Zeitrahmen, 73 insgesamt geplant. Der Zeitplan wurde in der Analysephase leicht angepasst.

Die Analysephase wurde im Projektantrag mit insgesamt 13 Stunden angegeben. Tatsächlich habe ich nur 10 Stunden gebraucht. Nach der Besprechung mit dem <!-- Anforderer -->Softwarestrategen waren die Anforderungen klar genug definiert, sodass die Phase der Analyse der alten, defekten Testumgebung entfallen konnte. 

 Einzelne Abweichungen innerhalb des Zeitplans entstanden durch Erleichterungen bzw. Blockaden, die erst bei der Realisierung der einzelnen Teilschritte erkenntlich wurden. Die tatsächlich benötigte Gesamtzeit für das Projekt entsprach  der vorher veranschlagten Planzeit. 

##Lessons learned
Im Zuge des Projektes konnte der Autor viele  Erfahrungen in Bezug auf Planung und Durchführung eines IT-Projektes sammeln, aber auch Erfahrungen aus dem weniger projektgetriebenen Entwicklungsalltag mit einbeziehen. Insbesondere hat es sich bewährt Zeit für die Umsetzung großzüg zu planen: Vermeintlich schnell erledigte Aufgaben in der Planung setzen bereits viel voraus und sind bei der Planung oft nur implizit Erwähnt. Sind diese Vorbedingungen nicht erfüllt wächst die benötigte Zeit für ein Aufgäbe oft unerwartet stark an, dies betraf in diesem Projekt besonders die Aufgaben der Systemadministration. Der zielstrebige, enge Zeitrahmen nötigte <!--mich--> in der Umsetzung mehrmals <!--mein--> Vorgehen zu ändern um schneller zum Ziel zu gelangen.

Die ideale Projektplanung gibt es nicht, spätestens in der Umsetzung werden wichtige zusätzliche Erkenntnisse gewonnen die in einem linearen Prozess nicht mehr in die Planung einfließen können.

Ein itteratives Vorgehensmodell würde ich in Zukunft  bevorzugen, insbesondere bei der Einführung eines neuen Systems, um angemessen auf neue Erkenntnisse reagieren zu können. In jedem Fall bedeutet es, dass Kommunikation  mit dem Projektanforderer die wichtigste Komponente für eine erfolgreiche Projektumsetzung ist.
Abschließend kann man sagen dass das Projekt in seiner Realisierung für das Team und in der Durchführung für den Autor eine große Bereicherung war.

##Ausblick
In naher Zukunft werden für den Einsatz der Testumgebung mehr Tests implementiert, die mehr Funktionen und Grenzbedingungen in den Online-Shops untersuchen.
Obwohl alle im Lastenheft definierten Anforderungen realisiert wurden, zeichnen sich bereits neue Featurewünsche und Einsatzszenarien ab.
Das Team strebt danach, die Front-End-Tests fest in den Deploymentprozess zu integrieren, was auch ohne Probleme möglich ist.

Bei der Abnahme wurde entdeckt dass laufende Tests die parallele Ausführung von anderen Pipelines verhindert. Sollte dies die Arbeit des Teams erschweren ist ein Umzug der Test-Runntime auf einen anderen Server ohne Anpassungen des Codes möglich.

Der modulare Aufbau der Integration der Testumgebung ermöglicht somit eine gute Erweiterbarkeit und noch tiefere Integration von Tests in vorhandene Prozesse.

Zur Dokumentation der Testszenarien bleibt anzumerken dass es im Unternehmen Bestrebungen gibt, hier den Prozess der Testerstellung umzukehren. Das würde bedeuten, dass die Testdokumentation in Zukunft in einer menschenlesbaren, domänenspezifischen  Sprache (\acs{DSL}) geschrieben werden könnte, die die Testfälle beschreibt und als Dokumentation dient. Mit einem entsprechenden Interpreter ließen sich daraus dann die tatsächlichen Testskipte generieren.


* * * * *



