#Einleitung


## Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Tochterunternehmen
der Freenet Group AG. Das Unternehmen vertreibt hauptsächlich Mobilfunkprodukte wie
Verträge und Mobilfunk\-End\-geräte sowie passendes Zubehör. Seit 2011 bestand eine
Kooperation mit der GRAVIS Computervertriebsgesellschaft mbH, dem
ursprünglichen Ausbildungsbetrieb des Autors. Diese Kooperation mündete Ende 2012
in einer vollständigen Übernahme[^grauebernahme] und einer anschließenden
Integration zweier Abteilungen, Logistik und IT, in den
mobilcom-debitel Konzern. Infolgedessen ist der Freenet Konzern, zusätzlich zu den eigenen Onlineshops und Online-Kundenportalen, verantwortlich für
den Betrieb der GRAVIS Onlinepräsenz. Die Onlineshops und zugehörigen Warenwirtschaftssysteme werden überwiegend firmenintern weiterentwickelt und betreut. Die mobilcom-debitel GmbH verfügt über
mehrere Standorte. Der Standort der ehemaligen GRAVIS-IT in
Berlin am Ernst-Reuter-Platz konnte erhalten werden. Einige der GRAVIS-IT-Systeme, wie z. B. der Onlineshop, werden weiterhin von diesem Standort aus betreut.



[^grauebernahme]:Pressemitteilung zur Übernahme von GRAVIS durch md http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple


## Projekt


Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer Laufzeitumgebung für funktionale Front-End-Tests des GRAVIS Onlineshops[^graweb] <!--und dem MDS Onlineshop[^mdsweb] -->. Diese Umgebung soll in das bestehende Continuous-Delivery-System eingebunden werden, um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das Entwicklungsteam _Vertrieb Onlineshop CMS_, welches eine geringere Arbeitslast und gesteigerte Codequalität beim Einsatz dieses Systems erwartet.

[^graweb]: GRAVIS Onlineshop www.gravis.de
<!--[^mdsweb]: MDS Onlineshop mds.mobilcom-debitel.de -->

##Projektumfeld


Das Projekt wurde im Rahmen der Ausbildung zum Fachinformatiker mit der
Fachrichtung Anwendungsentwicklung durchgeführt. Die auftraggebende Abteilung
beschäftigt einen Software-Tester, der neben der Abnahme von neuen
Features auch immer wieder sehr zeitaufwändig Regressionstests
durchführt. Um dem hohen Qualitätsstandard gerecht zu werden, sind
diese Tests notwendig, halten aber die Abnahme von neuen Features
zeitlich auf. Durch die hohe Wiederholungsrate der Regressionstests ist
es möglich, dass bei manueller Testdurchführung Fehler übersehen oder erst nach dem Deployment[^Deployment],
 d. h. nach dem Aktualisieren der Software auf den Servern, entdeckt werden. Zudem werden zur Zeit Testläufe und Fehlerfälle in der
Regel nicht oder nicht ausführlich dokumentiert und es ist nicht möglich,
eine Statistik über die Fehlerhäufigkeit zu führen. Darüber hinaus gibt
es keine technische Möglichkeit, die das Deployen von fehlerhaftem Code
auf das Echt-System[^UIUSUL], also den Servern zu denen sich Kunden verbinden, verhindert.

[^UIUSUL]: Der GRAVIS Onlineshop wird in drei Instanzen betrieben: Einer Integration-System die immer den aktuellsten Code enthält, einer Staging-System für Abnahmen und Tests neuer Features und einem Echt-System welches die Kunden für tatsächliche Bestellungen nutzen.
[^Deployment]: Softwareverteilung, -Auslieferung.

##Projektziele


Im Rahmen des Projektes soll eine Laufzeitumgebung für Front-End-Tests
bereitgestellt werden. Diese muss in das Continuous-Delivery-System
Go (im folgenden "Go"[^listofsoftware] genannt) eingebunden werden. Die
Test-Umgebung muss betriebsbereit dem Team *Vertrieb Onlineshop CMS*
übergeben werden.

[^listofsoftware]: Siehe Liste der Eingesetzten Software im Anhang \ref{liste-der-eingesetzen-software}

##Projektschnittstellen


Da das Projekt innerhalb des Entwicklerteams *Vertrieb Onlineshop CMS* stattfindet, knüpft es an interne
Prozesse, also Abnahme und Deployment der Software, und technische
Systeme an. <!-- Eine Auswertung durch das *Quality Assurance Team* im
Unternehmen erfolgt nicht. Das Entwicklerteam möchte auch nach der Konzernintegration die Flexibilität bewahren und betreib selbst die Qualitätskontrolle. --> Die Testumgebung wird verknüpft mit *Go* und
testet dabei über eine \acs{HTTP}(S)-Verbindung den jeweiligen Onlineshop. Die Testumgebung muss auf das
hausinterne Versionsverwaltungssystem (\acs{SVN}) zugreifen können, um dort
aktuelle Testskripte versioniert zu speichern. Auf Grund der sich ständig verändernden Codebasis müssen auch die Tests angepasst werden; die Zuordnung der Tests zur entsprechenden Programmversionen erfolgt über die Versionsverwaltung.

##Projektabgrenzung


Die Erstellung von Tests für den produktiven Einsatz
ist nicht Teil des Projektes. Andere Testarten wie etwa
Performancetests, muss das System nicht leisten, denn zu diesem Zweck wurden bereits andere Werkzeuge erfolgreich eingebunden.\
Eine zusätzliche Benutzeroberfläche muss nicht erstellt werden, da die
Steuerung ausschließlich aus dem \acs{CD}-System[^cicds] heraus erfolgt.
Eine Grafische Umgebung zu Erstellung von Test wird in diesem Projekt nicht zur Verfügung gestellt.
<!-- eine (graphische) Aufbereitung der Testartefakte erfolgt nicht-->


[^cicds]:Continuous-Delivery-System: System zur fortlaufenden Verteilung von aktueller Software 

#Projektplanung


 

##Phasen


Für die Umsetzung des Projektes stehen nach den Vorgaben der Industrie und Handelskammer maximal 70 Stunden zur Verfügung. Für den Projektverlauf wurden verschiedene Phasen geplant. Eine grobe
Zeitplanung in Hauptphasen enthält die folgende Tabelle.


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


Die Hauptphasen wurden bei der Projektplanung sukzessive in Unterpunkte detailliert. 
Eine Übersicht befindet sich im Anhang \ref{app:Zeitplanung} "Detaillierte Zeitplanung" .

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
  Installation Test-Testrunner                                                    3h 
  Erstellen Beispieltestsuite                                                  2h 
  Testing der Testrunner                                                          2h 
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



##Ressourcen

+ Personal  

	* 1 Entwickler: Umsetzung des Projektes (Autor)

	* 1 Softwarestratege / Projektleiter "Testing" für Anforderungsaufnahme, technische Rücksprachen und Abnahme
	* 4 Entwickler aus dem Team _Vertrieb Onlineshop CMS_ für einführende Schulung
    
        

+ Hardware   
Es soll keine zusätzliche Hardware für das Projekt angeschafft und vorhandenen Serversysteme genutzt werden. Dem Entwickler steht ein Arbeitsplatzrecher (Apple MacBook Pro) zur Verfügung <!--, auf dem die Entwicklung und Evaluation von Software stattfinden soll-->.


+ Software   
Es soll für die Testumgebung ausschließlich kostenfreie bzw. open-source Software mit einer Lizenz, die kommerzielle Nutzung erlaubt, eingesetzt werden. Die Software *Go* ist von GRAVIS lizenziert und verursacht im Rahmen des Projektes keine zusätzlichen Kosten. *Go* ist mittlerweile auch open-source.    
 
  


##Entwicklungsprozess


Für die Realisierung des Projektes habe ich mich für ein Vorgehen entschieden, das
an den klassischen Wasserfall-Prozess angelehnt ist. Das bedeutet ein lineares Vorgehen von der Erfassung der Anforderungen, der Erstellung eines Entwurfs, der Implementierung und Überprüfung bis zur anschließenden Auslieferung.
Ermöglicht wird dies durch den Umstand, dass die Anforderungen klar
definiert sind und sich im Zeitraum der Realisierung nicht signifikant
ändern werden.      
Der Regelprozess im Entwicklerteam ist standardmäßig ein an Scrum angelehnter Prozess. Eine Aufnahme der Entwicklung in den
agilen Regelprozess, der den Alltag im Entwicklerteam prägt, erschien nicht sinnvoll. Die sehr kurze Projektlaufzeit erstreckt sich nicht über die Laufzeit eines Sprints sodass kein Vorteil aus der Anwendung der agilem Prozesswerkzeugen gezogen werden kann.

<!-- Die Werte des agilen Prozesses sind nur schwer mit dem klar definierten Projektziel vereinbar. Dadurch konnte das Projekt ohne Unterbrechung, voller Aufmerksamkeit und ohne Veränderung der Priorisierung durchgeführt werden. -->



#Analysephase


##Ist-Analyse


Bis zum Zeitpunkt des Projektbeginns wurden Regressionstests in Form von Front-End-Tests ausschließlich
manuell von Testingenieuren oder Entwicklern aus dem Team vorgenommen. Bei bevorstehendem Deployment musste der Software-Tester seine aktuelle Aufgabe unterbrechen und den gewünschten Softwarestand auf dem Staging-System, einer produktionsnahen Serverumgebung für Tests und Abnahmen, testen. Eine mündliche Abstimmung mit dem Team signalisiert dann die Bereitschaft zum Deployment. Anschließend müssen die Tests im Echt-System wiederholt werden um sicher zu gehen dass das Deployment erfolgreich war. Das erneute Durchführen von Regressionstests ist erforderlich, da andere Datensätze und Serverkonfigurationen bisher unentdecktes Fehlverhalten verursachen können. Tritt hier ein Fehler auf, muss zeitaufwändig geklärt werden ob der Fehler vorher übersehen wurde (menschlicher Faktor) oder die Umgebungsparameter, z. B. die Nutzung von mehr Applikations- und Datenbankservern oder weitaus größere Datenmengen, ursächlich sind. 
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




### Make-or-Buy-Entscheidung

Front-End-Tests von Web-Applikationen sind ein häufiger Prozesschritt in der Entwicklung von e-Commerce Anwendungen und es gibt viele Anbieter von Werkzeugen dafür auf dem Markt und noch viel mehr experimentelle Ansätze dafür.

Es kann daher Standardsoftware für Front-End-Tests genutzt werden: Die Produkte phantomJS[^pjsweb], ein Webbrowser, zusammen mit
casperJS[^cjsweb], einem Javascipt Framework zur vereinfachten Browsersteuerung, oder Selenium[^seleniumweb] in Verbindung mit dem Selenium webdriver, einer Schnittstelle zur Browserfernsteuerung,  bieten sich als Lösungen an[^ieasfet]. Alle genannten Systeme sind kostenfrei und open-source erhältlich und sind gut dokumentiert[^selcaswebdocu].

Die Integration von Front-End-Tests in das CD-System *Go* ist eine  Anforderung spezifisch für das Unternehmen mobilcom-debitel GmbH. *Go* ist ein wenig verbreitetes System und keine Integration solcher Art wurde bisher publik gemacht.
Da *Go* open-source und die API gut dokumentiert [^gowebdoku] ist, kann eine Integration selbst vorgenommen werden.

[^gowebdoku]:go.cd/documentation/user/current/
[^ieasfet]:dev.imagineeasy.com/post/90475083894/choosing-your-automated-acceptance-testing
[^cjsweb]:casperjs.org
[^pjsweb]:phantomjs.org
[^seleniumweb]:docs.seleniumhq.org/
[^selcaswebdocu]:Dokumentation Selenium: docs.seleniumhq.org/docs/ , Dokumentation casperJS casperjs.readthedocs.org/en/

### Projektkosten
<!-- motivation -->
Die Projektkosten, die bei der Entwicklung des Projektes anfallen,
sollen im Folgenden kalkuliert werden. Dafür müssen neben den reinen
Personalkosten für den Entwickler und anderer Mitarbeiter auch noch weitere
Aufwendungen berücksichtigt werden. Die Kalkulation
wird anhand von durchschnittlichen Stundensätzen im Freenet Konzern durchgeführt. Der
Stundensatz eines Auszubildenden im 3. Lehrjahr beträgt demzufolge
*6,79€* , der eines Mitarbeiters *28,45€* [^hourlyrate]. In diesen Preisen sind bereits die für den Konzern zu leistenden Sozialabgaben, sowie Berufsgenossenschaftsbeiträge enthalten, es sind somit die Kosten, die der mobilcom-debitel GmbH beim Einsatz des entsprechenden Mitarbeiters entstehen. Als Gemeinkosten im Unternehmen, für die Nutzung Hardware und Software, Büroarbeitsplatz etc., wurde ein berechneter Stundensatz von 7,90€ pro Mitarbeiter vom Controling mitgeteilt.
Es soll nur bestehende Infrastruktur genutzt werden und keine neue Software eingekauft werden, dadurch lassen sich die Kosten allein durch o. g. Stundensätze berechnen.


Die Kosten, die für Vorgänge des Projektes anfallen sowie die gesamten Projektkosten sind in Tabelle \ref{table:kostenaufstellung} zu finden.


[^hourlyrate]: Stundensätze wurden aus dem Unternehmensinternen Controlling bereitgestellt.

\input{Tabellen/tzi/kostentabelle.tex}
<!--
\begin{figure}
\begin{equation}
\frac{ \eur{1000}\mbox{/Monat} \cdot 12\mbox{Monate/Jahr} }{ (8\mbox{h/Tag} \cdot 221\mbox{Tage/Jahr} )}=  \frac{\eur{6,79}}{h}
\end{equation}
\caption{Kosten eines Auszubildenden}
\end{figure}
-->


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

Aus Erfahrung können für Regressionstests am GRAVIS Onlineshop 45min angenommen werden. Pro Deployment wird einmal vorab auf dem Staging-System getestet und nach dem Deployment noch einmal im \acs{Echt-System}. Beim aktuellen Vorgehen gibt es alle 2 Wochen ein Deployment, was eine Testaufwand allein für Regressionstests von 3 Stunden pro Monat bedeutet. Diese könnten durch vollautomatisierte Tests eingespart werden.

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

Neben dem finanziellen Nutzen sind weitere Vorteile aufzuzählen:

*   Tests können zu jedem beliebigen Zeitpunkt laufen.
*   Auf Grund der Automatisierung und der daraus abgeleiteten Zeitersparnis ermöglicht das Projekt eine Veränderung von Deployment- und Integrationsverhalten und damit eine höhere Reaktionsfähigkeit.
*   Größeres Vertrauen in den Code, denn Kernfunktionalität wird ständig getestet
*   Die Arbeit des Testingenieurs oder Entwicklers muss nicht für Front-End-Tests unterbrochen werden.

##Einsatzmöglichkeiten


Im Laufe der Analysephase habe ich mit dem Feedback des Anforderers ein Anwendungsfalldiagramm (siehe Anhang \ref{usecasediagram}) erstellt, welches eine Übersicht der Anwendungsfälle bietet. Es gibt alle Funktionen wieder, die aus Sicht des Endanwenders benötigt werden.     
Automatisierte Tests können als aktive und kontinuierliche Qualitätssicherungsmaßname bei der Entwicklung des Onlineshops genutzt werden. Zusätzlich sollen die Regressionstests auch direkt in den Deployment-Prozess integriert werden. Eine solche enge Integration verhindert das Deployment von fehlerbehafteter Software. Wenn die Tests bereits in den Deployment-Prozess der Integrationsumgebung eingebunden werden, können frühestmöglich Fehler erkannt werden.

 Im Zusammenhang mit dem CD-System wird auch eine Historie der Testergebnisse vorgehalten. Mit Hilfe dieser Historie kann z. B. nachvollzogen werden, wann und aus welchem Grund Fehler schon einmal aufgetreten sind.

##Lastenheft
Wesentliche Bestandteile zur technischen Anforderung  aus dem Lastenheft sind im Anhang \ref{app:Lastenheft} zu finden.

#Entwurfsphase


##Zielplattform


Die Testumgebung soll auf den vorhandenen Servern, auf denen auch der
GRAVIS Onlineshop betrieben wird, eingesetzt werden können. Der Betrieb in einem anderen Rechenzentrum oder auf einem Rechner der Entwickler, z. B. zur Weiterentwicklung von Tests, sollte ebenfalls möglich sein.

##Softwarearchitektur

###Front-End-Test
Es wird gefordert, funktionale Tests durchzuführen und wie ein Nutzer mit der Website zu interagieren. Damit musste ein Webbrowser mit einer Rendering-Engine und einer JavaScript Laufzeitumgebung herangezogen werden, der Formularvalidierung und Interaktionen auf Javascript Basis ermöglicht und Sessioncookies vorhalten kann. Der Browser soll dann von einem komfortabel bedienbaren Testing-Framework gesteuert werden. Frameworks, die nur statische Programmanalyse oder nur Unit-Tests ausführen,  wie HTMLUnit für HTML oder QUnit für Javascript, fielen aus der Auswahl, da ihr Funktionsumfang nicht ausreichend ist. <!-- Exekution basded Testung ist angesagt-->

Für eine Vereinfachung der Systemanforderung wurde entschieden, einen so genannten \acs{headless} Browser, einen Browser ohne Grafikausgabe zu nutzen. Damit kann die Anwendung, im Folgenden "Testrunner" genannt, auf einem Server eingesetzt werden. Der Testrunner führt dann auf dem Server Gruppen von Tests, sogenannte Testsuiten, aus.

###Continuous-Delivery-System

Das Continuous-Delivery-System unterstützt die Entwickler bei der fortlaufenden Auslieferung der Software. <!-- soll Regelprozesse automatisieren--> wiederkehrende Tasks,
in Kombination mit svn Ausspiel und Rollback. Tempo rauf, Fehleranfälligkeit runter.


###Versionsverwaltung {#versionsverwaltung}
 Die Aufspaltung der verschiedenen Codebasen bietet zwei Vorteile: 
 
 * der Zugriff auf den Code der Tests kann separat gewährt werden, ohne dass die Funktionalität des CD-System angepasst werden kann. 
 
 * Dritten können problemlos Rechte eingeräumt werden, Testsuiten zu erstellen, ohne dass die gesamte Administration aus den Händen gegeben werden muss.
 
 In *Go* ist es möglich die Version und den Zweig von einzelner Materialien, also Code-Quellen separat einzustellen um sehr agil auf Anpassungen im Code zu reagieren.


##Tools

###PhantomJS & casperJS
 Auf dem Entwicklerrechner wurden mehrere Browser evaluiert. Einzig *phantomJS*[ lief stabil und zuverlässig. Bereits mit einer \acs{API} zur Fernsteuerung versehen, ist *phantomJS* genau für dieses Einsatzgebiet geeignet.



Die Recherche ergab, dass *casperJS* ein Framework für *phantomJS* ist, welches einen einfachen Einstieg in Front-End-Tests ermöglicht. Als Alternative wurde auch *DalekJS* in Betracht gezogen. Aufgrund mangelhaften Supports und lange bestehenden Bugs[^dalekbugs] habe ich mich gegen letztere entschieden..

[^dalekbugs]:github.com/dalekjs/dalek/issues


Um Tests in *casperJS* zu programmieren gibt es, wie für alle JavascriptLibraries , <!-- sodoku says so --> zwei Möglichkeiten: JavaScript oder CoffeeScript[^coffeescript] zu verwenden.
   
<!-- Um eine sequenzielle Abarbeitung von Testschritten in der funktionalen, nicht sequenziellen Programmiersprache Javascript zu gewährleisten, bietet *casperJS* `.start()`, `.then()` und `.done()` Funktionen zum Kontrollfluss an. -->
<!--
PhantomJS 1.9.8 ist ein Paket aus QTWebkit, der Rendering-Engine, einer Javascript Laufzeitumgebung und QT4 als Wrapper. PhantomJS hat enorm viele Abhängigkeiten und es ist nicht empfohlen es selbst zu kompilieren da es wahrscheinlich ist dass mindestens eine Abhängigkeit zu Komplikationen führt. Im "brew" Paketsystem wurde also eine vorkompilierte Binärdatei verteilt und mit `brew install phantomjs` anschließend ohne Probleme installiert.   -->

[^coffeescript]:Coffeescript ist eine von Javascript abgeleitete Sprache mit vereinfachter Syntax die vor der Ausführung nach Javascript zurückkompiliert wird.

###Go





In *Go* werden automatisierte Abläufe in Pipelines definiert die sich in große Schritte, Stages genannt unterteilen. Der Aufbau einer Pipeline ist in Abbildung \ref{fig:gopipelines} illustriert<!-- verdeutlicht -->. Stages werden nacheinender ausgeführt und enthalten Jobs.  Jeder Job hat mindesten einen Task der ein ANT-Target[^anttarget] anspricht oder einem Standard ANT-Befehl entspricht.  Jobs werden in beliebiger Reihenfolge oder sogar parallel ausgeführt, je nach Verfügbarkeit von zugewiesenen Agent-Servern.      

ANT bietet Unterstützung für Datenoperationen und Variablen, hier Properties genannt. Properties können als wiederverwendbare Variablen genutzt werden, z. B. zu Speicherung von Datenbankadressen oder Dateipfaden. 
Darüber hinaus können ANT-Skripte weitere Werkzeuge, wie etwa Shell-Skripte, Java Programme oder \acs{PHP}-Scripte auslösen. 

Die lose Kopplung der einzelnen Tasks erhöht die Wiederverwendbarkeit und  Austauschbarkeit. Sollte z. B. der Test-Runner ausgetauscht werden, kann dies erfolgen ohne die Tasks zur Testvorbereitung oder Auswertung der Testergebnisse anpassen zu müssen. Außerdem können die einzelnen Komponenten durch die strikte Trennung einfacher getestet, gewartet und erweitert werden.

[^antweb]: Apache ANT Projekt, `ant.apache.org` . Programm zum Erzeugen und Deployen von Computerprogrammen aus Quelltexten. 

 Jobs werden nicht auf dem *Go* Server selbst, sondern auf den so genannten Agenten-Servern ausgeführt, welche alle notwendigen Ressourcen für die Ausführung einer Stage bereitstellen. Einzelne Server  melden sich mit ihrem Go-Agent beim Go-Server an und bekommen Aufgaben zugeteilt.
   
\begin{figure}[htb]

\centering
\includegraphicsKeepAspectRatio{Bilder/pipelinestruct.pdf}{0.25}
\caption{Struktur einer Pipeline in Go}
\label{fig:gopipelines}

\end{figure}
   
Allen Agenten-Servern werden Ressourcen zugeordnet  , *Go* entscheidet dann zur Laufzeit auf welchen Agenten-Server ein Job ausgeführt werden muss.  
  <!-- Die Verteilung von Jobs geschieht zur Laufzeit anhand verfügbarer Ressourcen. Ressourcen sind in diesem Kontext die Fähigkeit von Agenten-Servern Anwendungen auszuführen, weil sie dort installiert sind. Diese müssen explizit im Admin-Interface von *Go* konfiguriert werden. -->

Ausgaben der (ANT-)Skripte und von aufgerufenen Programmen und Artefakte[^whatareartifacts] werden in einer Ordnerstruktur auf dem Dateisystem gespeichert.  Die Speicherung auf Datei-Ebene vereinfacht die Handhabung in *Go*  und hat sich bei der Integration anderer Werkzeuge bewährt.

[^anttarget]:Sprungziel in einer \acs{ANT} build.xml, ähnlich einem Funktionsnamen.
[^whatareartifacts]:Als Artefakte bezeichnet man Nebenprodukte der Softwareentwicklung.






###Subversion 

Bei diesem Projekt sind mehrere Komponenten involviert, deren Entwicklung getrennt erfolgen kann. ANT-Skripte, die Funktionalität für das CD-System bereitstellen, werden in einem SVN-Repository "go" versioniert.
Die Testsuiten und deren Abhängigkeiten habe ich in einem separaten SVN-Repository "testing" verwaltet, in dem bereits Code für Performancetests und Unit-Tests vorgehalten wird.
Das Repository habe ich so organisiert dass allein die Pfadangabe in *Go* reicht, um die Testsuite auszuwählen.

\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/caspertestlist.pdf}{0.3}
\caption{Ordnerstruktur der Testsuiten im SVN}
\label{fig:testingfolderstructure}
\end{figure}


      

##Entwurf der Benutzeroberfläche

Die Benutzer der Testumgebung sollen sich schnell zurecht finden und sind bereits gewohnt, *Go* zu benutzen. Es kann darauf verzichtet werden, zusätzliche Bedienelemente und -oberflächen einzuführen. Testläufe werden wie jede Pipeline in Go ausgelöst, entweder durch einen einfachen Klick in der Web-Oberfläche, siehe Abbildung \ref{fig:goguitrigger}, oder automatisch bei Aktualisierung der SVN-Repositories.
Die Auswahl der Testsuite und die Konfiguration weiterer Optionen erfolgt in den Umgebungsvariablen der Pipeline, diese sind ebenfalls standardmäßig in der Weboberfläche zu erreichen, siehe Abbildung \ref{fig:goguienvvars}
Der Fortschritt (siehe Abbildung \ref{fig:goguistagedetail}) und Ausgaben von Testläufen werden in der standardmäßigen Ansicht einer Pipeline in Go sichtbar (siehe auch Abbildung \ref{fig:goguisummary}). Go sieht es vor, eine zusätzliche Registerkarte in der Auswertung anzuzeigen, in der Artefakte präsentiert werden. Die Registerkarte kann Inhalte von XML-Dateien anzeigen.


##Datenmodell

Um die Nachvollziehbarkeit von Testläufen zu gewährleisten, werden in jedem Schritt der Testpipeline Ausgaben erzeugt.
Gemäß der Praxis in Go werden Daten die aus dem Test entstehen, in Dateien auf dem Dateisystem des Go-Server hinterlegt. 
Eine Speicherung auf dem Go-Server und nicht dem Agenten-server garantiert eine nachhaltige Speicherung von Artefakten, da bei mehrfacher Verfügbarkeit der benötigten Ressource der Agenten-Server beliebig austauschbar ist.

Go leitet Ausgabe der ANT-Skripte in eine Datei namens `console.log`, die  pro Stage einer Pipeline, in einen eigenen Ordner angelegt wird (siehe Abbildung \ref{fig:artifactsfolderstructure}).
In diesem Log finden sich alle Ausgaben der ANT-Tasks, der Prozesse und Skripte die ANT startet.
Zum Debugging beschriebt CasperJS auf Wunsch in die Standardausgabe.  Es habe mich entschlossen dies Ausgabe auch in das log zu leiten. Bei der Entwicklung kann mit den Argumenten `--verbose=true --log-level=debug` jeder einzelne Schritt der im Browser gegangen wird, von HTTP-Request, Javascript-Operationen und Veränderungen des \acs{DOM}, aufgezählt werden.
Im produktiven Einsatz genügt das Log-Level`--log-level=error`, bei dem nur Fehler ausgegeben werden. Dies macht das Log lesbarer und hilft bei der Fehlerdiagnose im Alltag.


\begin{figure}[htb]
\centering
\includegraphicsKeepAspectRatio{Bilder/artifactslist.pdf}{0.45}
\caption{Ordnerstruktur der Artefakte auf dem Server}
\label{fig:artifactsfolderstructure}
\end{figure}



<!-- Anschluss fehlt-->


Eine Datei im "JUNIT XML result Format", in der die Ergebnisse der Testläufe in Testsuiten gebündelt für jeden Testfall aufgelistet werden, ist gefordert. <!-- Wrong!!!-->   Das Schema dieses XML-Austauschformats ist als de-facto Standard festgeschrieben[^xunitwebdoku] und wird von vielen \*UNIT Testframeworks erstellt und von weiteren Systemen verarbeitet. Dieses Austauschformat ermöglicht in Zukunft tiefergehende Auswertung von Testergebnissen, da es vollständig maschinenlesbar ist.    
*casperJS* soll im produktiven Einsatz mit der Option `--XUNIT=junit.xml` eine solche Datei liefern.



CasperJS Tests werden gemäß der Anforderung so gestaltet, dass sie im Fehlerfall einen Screenshot der aktuellen Seite im PNG-Format speichern. Auch damit lässt sich ein Problem leichter lokalisieren und visualisieren. Screenshots werden in der Ordner "artifacts" der jeweiligen Stage gespeichert und sind dadurch auch leicht im Webinterface von Go zu erreichen.





[^xunitwebdoku]:JUNIT XML result schema https://windyroad.com.au/dl/Open%20Source/JUnit.xsd


##Qualitätssicherung

Es wurde früh in der Implementierungsphase ein Beispieltest erstellt, der
die Funktionalität des <!-- Testrunner?--> Systems beweisen kann. *CasperJS* verfügt außerdem über einen Selbsttest der nach der Installation ausgeführt wurde.    
Der Code der Tests und ebenfalls der ANT-Targets wird in SVN versionsverwaltet, sodass es einfach
möglich ist funktionierende Versionen wiederherzustellen.
Bei entsprechender Konfiguration führt *Go* selbständig Pipelines, an denen Änderungen vorgenommen wurden oder deren Abhängigkeiten sich verändert haben, sofort aus. Hierdurch bleibt kein Code unausgeführt und Fehlerfälle sind leicht erkennbar. Im Büro des Entwickerteams steht ein Großbildschirm zu Statusanzeige verschiedener Serversysteme, das so genannte Dashboard, auf dem u. a. fehlgeschlagene Pipelines angezeigt werden. Das Entwicklerteam ist angehalten alle Anzeigewerte auf dem Dashboard "im grünen Bereich" zu halten und greift im Fehlerfall schnell ein. Der Verursacher des Fehlers ist dank Integration der Versionsverwaltung in *Go* schnell ausfindig gemacht.



##Feinkonzept

Am Ende der Entwurfsphase wurde ein Feinkonzept erstellt. Es baut auf dem Lastenheft auf. Dort wird beschrieben wie und mit welchen Werkzeugen der Autor die Anforderungen des Anforderes umsetzen möchte.
Das Feinkonzept dient als Leitpfaden für die <!-- impementierungsphase-->Umsetzung des Projektes.

#Implementierungsphase


##Installation des Testrunners
Nach der erfolgreichen Begutachtung von PhantomJS und casperJS auf des Entwicklerrechner mit MacOS X, wo diese beiden Tools mit dem Paketverwaltungssystem `brew`[^brewweb] rasch installiert waren, sollten diese Anwendungen auf einem Server zu installiert werden. 

[^brewweb]: brew.sh , sehr weit verbreitetes Paketverwaltungssystem für MacOS X zum nachrüsten. Wird nicht von Apple gepflegt.     


 Auf dem Zielserver mit gentoo Linux wird das Paketverwaltungssystem `portage` genutzt.
Der Befehl `emerge phantomjs` zeigte allerdings eine enorme Liste von Abhängigkeiten auf. Ich habe manuell versucht die Konflikte von Abhängigkeiten und Patch-Fehlern zu lösen. Nach 2 Stunden habe ich dieses Vorgehen als nicht zielführend betrachtet und entschied  mich ein vorkompiliertes PhantomJS herunterzuladen und manuell zu installieren. 

*CasperJS* wurde über `portage` auch nur in einer sehr veralteten Version verteilt, sodass ich auch hier eine manuelle Installation vornehmen musste. Eine Installation aus aktuellen Version aus der öffentlich casperJS Versionsverwaltung auf github[^cjsgh], brachte mich auf die gewünschte Version 1.1.0-beta3. Nur diese neue 1.1 Version ist zur aktuellen Version von PhantomJS kompatibel und vereinfacht zusätzlich die Nutzung des "tester"-Moduls.

Erfahrungen mit gentoo haben mir gezeigt dass immer mehr Zeit bei der Installation eingeplant werden muss, denn es treten sehr häufig Unstimmigkeiten mit Abhängigkeiten auf.

Ein Installationsprotokoll wurde erstellt damit das Vorgehen reproduzierbar und nachvollziehbar ist.  Das Installationsprotokoll ist im Anhang \ref{installprotocoll} zu finden.

[^cjsgh]: github.com/n1k0/casperjs
   
##Erstellen der Beispieltestsuite

Das casperJS Modul `tester` stellt, mit Ausnahme der Screenshots, die meisten, im Lastenheft geforderten Funktionalitäten, bereit. Mit Hilfe der sehr guten online Dokumentation von casperJS und seiner Module[^casperdocstester]  wurde eine Beispieltestsuite geschrieben.
Auf Grund der Erfahrung im Team mit Javascript wurde der Beispieltest in dieser Sprache geschrieben. Es musste besondere Sorgfalt auf die Struktur der Testskripte für *casperJS* gelegt werden, denn die Tests werden in Javascript geschrieben und dies wird asynchron ausgeführt, wenn nicht explizit eine Schrittfolge definiert wird. Das würde bedeuten, dass das Verhalten nicht immer reproduzierbar ist, was jedoch gerade bei Regressionstests unbedingt erforderlich ist.
In einer casperJS Testsuite wird eine deterministische Testsequenz mit `casper.start()` begonnen. Jeder darauf folgende Schritt wird in der Funktion `casper.then();` gekennzeichnet.
Der Testabschluss wird mit  `casper.done()` eingeleitet.     

Neben einer erfolgreich Testsequenz sind von mir auch strategische Fehlerpunkte eingebaut worden, die einen Test scheitern lassen. Der Fehlerfall wird dadurch absichtlich herbeigeführt, damit sein Auftreten später in der Integration getestet werden kann.

[^casperdocstester]:casperjs.readthedocs.org/en/latest/modules/tester.htm
   
##Testing des Testrunners  
Nach der Überprüfung der Versionen von *PhantomJS* und *casperJS* habe ich den mitgelieferten Selbsttest von *casperJS* auf dem Server durchgeführt. Der Selbsttest führt alle Funktionen in *CasperJS* einmal aus und diagnostiziert die vollständige Funktionsfähigkeit.    
Die auf dem Entwicklerrechner erstellten Javascript-Dateien wurden , auf den Server übertragen. Dort wurden sie manuell mit dem Befehl `casperjs test /home/it/casperjs/ --log-level=debug --verbose=true` ausgeführt und deren Ausgabe beurteilt. Die übertragenen Tests und der Selbsttest funktionierten  einwandfrei und die Einsatzbereitschaft des Testrunners war bewiesen. 





##Erstellung von ANT-Targets

Alle Anwendungsfälle aus dem Anwendungsfalldiagramm in Abbildung\ref{app:UseCase}, die noch nicht in *Go* oder als standard ANT-Tasks zu Verfügung standen, wurden in einer neuen ANT build-Datei, der Datei casperjs.xml, als Tasks aufgenommen. Zusätzlich zu einigen Helferfunktionen, die die Fehlerdiagnose vereinfachen sollten, wurden diese Tasks implementiert. In der build-Datei wurden Ordner für Screenshots, Testskripte und weitere Artefakte als Properties definiert. Zusätzlich habe ich auch Tasks für die Nachbereitung von Test eingeführt die Artefakte wie das Testlog und Screenshots bereinigen und auf dem *Go* Server ablegen.
	 
	 	 
##Einrichtung der Pipeline zur Testausführung 
Ich habe eine neue Pipeline "UL.casperJStests" erstellt die alle notwendigen Schritte zum automatisierten Durchführen von Front-End-Test abarbeitet. Dafür wurden alle notwendigen Tasks in mehrere Stages aufgeteilt. Jedem Task habe ich die entsprechenden, vorher angelegten, ANT-Targets zugewiesen. Pro Stage habe ich angegeben welche Ressourcen benötigt werden damit sie auf dem entsprechenden Agenten-Server ausgeführt werden. Die Pipeline wurde so konfiguriert dass sie automatisch bei Änderungen an Testskipten ausgeführt wird.

Die neu  Anwendung *casperJS* wurde von mir dem Go-Agent auf dem Server namens "manager" als Ressource hinzugefügt. Allen jobs, die innerhalb der Testpipeline definiert sind habe ich auch die Ressoure "casperjs" zugewiesen. Diese werden somit auf dem Server "manager" ausgeführt. Eine Außnahme bilden die Wrapup-Tasks, da diese die Artefakte explizit nicht auf dem Agenten-Server, sondern dem Go-Server abgelegt werden sollen und daher auch dort ausgeführt werden müssen.
 
Die Pipeline "UL.casperJStests" wurde dann in die Gesamtkonfigurationsdatei von *Go* eingefügt, in der ich auch die Rechte zum ausführen die Pipeline konfiguriert habe.



##Einsatz von Umgebungsvariablen  
Ab sofort können Front-End-Tests automatisiert ausgelöst werden. Bisher  sind aber alle Pfade und Parameter in den ANT-Skripten statisch verwendet. Der gleiche Code soll unter verschiedenen Testszenarien und auf verschiedenen Serverumgebungen zum Einsatz kommen.
Um die gewünschte Modularität zu erreichen, habe ich statische Werte durch Umgebungsvariablen getauscht. Einige Tasks mussten erweitert werden, z. B. um die Parameterweitergabe an *casperJS* zu ermöglichen. <!-- DIfficulty --> Die Umgebungsvariablen können in der Web-Oberfläche von *Go* leicht verändert werden.

##Erweiterung des Beispieltest um Screenshot-Funktion 
Im Browser *phantomJS* können Screenshots gespeichert werden. Die Funktionalität der Bildschirmaufnahmen unter Zuhilfenahme von *casperJS*  ist leider schlecht dokumentiert. Nach mehreren Versuchen stellte sich heraus der JavaScript Befehl `casper.capture()`    die grafische Darstellung des Elementes `<body>` einer HTML Seite speichert. Eine Aufnahme von einzelnen DOM-Elementen ist auch möglich, jedoch verursachen meist fehlende HTML Elemente Testabbrüche, sodass dieser Ansatz nicht weiter verfolgt wurde. 

##Erweitern der Pipeline um Artefaktesammlung


*Go* bietet von Haus aus einen Mechanismus, um Artefakte von Agenten-Server zentral zu speichern[^goartifacts]. Dieser wurde in die Pipeline eingesetzt und konfiguriert. Damit kann sichergestellt werden dass die maschinenlesbare Testauswertung in der Historie in *Go* immer zur Verfügung steht.

[^goartifacts]:"Dokumentation zur Handhabung von Artefakten in *Go* \\ http://www.go.cd/documentation/user/current/configuration/managing_artifacts_and_reports.html"

##Erweitern der Pipeline um Screenshot-Sammlung   

Es wurde zusätzlich ein ANT-Task erstellt und in die Pipeline integriert, der erzeugte Screenshots in die entsprechenden Ordner der Historie verschiebt.

#Testphase

Schon in der Implementierungsphase wurden die Beispieltests immer wieder, erst auf dem Entwicklungsrechner, dann auf dem Server  ausgeführt. Am Ende der Implementierungsphase wurde der Testrunner und seine Integration gegen die Anforderungen aus dem Lastenheft geprüft. 

#Abnahmephase

Nachdem die Anwendung von mir erfolgreich getestet wurde, habe ich sie dem Anforderer zur Abnahme vorgelegt. Zusammen mit dem Autor wurden alle Anwendungsfälle und Akzeptanzkriterien für das System geprüft. Die Anforderung wurden alle zur Zufriedenheit erfüllt. 

#Einführungsphase

Im Anschluss an die erfolgreiche Abnahme wurde die Pipeline für Front-End-Tests allen Benutzern des Teams *Vertrieb Onlineshop CMS* in *Go* über die integrierte Rechteverwaltung zugänglich gemacht. Die Testumgebung konnte ab diesem Zeitpunkt eingesetzt werden.


##Schulung
Die Applikation wurde dem gesamten Team *Vertrieb Onlineshop CMS* vorgeführt. Nach dem Funktionsüberblick wurden dem Team die eingesetzten Technologien erläutert. Ich habe dem Team vorgeführt, wie die aktuelle Testsuite einzusetzen und über Umgebungsvariablen zu konfigurieren ist.  Anschließend wurde die Struktur von CasperJS Tests erläutert und wie diese erstellt werden können. <!-- Auch ein Testaufnahmewerkzeug namens "Resurrectio"[^ressurectioweb] , mit dem sich im Webbrowser Front-End-Test aufnehmen lassen, wurde als Unterstützung den Nutzern vorgeschlagen. --> Die Fähigkeiten und Erweiterungsmöglichkeiten von CasperJS in der aktuellen Umgebung wurden anhand der Web-Dokumentation präsentiert. Zum Abschluss wurde die hierarchische Organisation von Tests aufgezeigt und wie neue Testsuiten zu strukturieren sind. Es wurden Möglichkeiten diskutiert, wie und an welchen Stellen im Prozess der automatisierte Start von Front-End-Tests sinnvoll ist.

[^ressurectioweb]:https://chrome.google.com/webstore/detail/resurrectio/kicncbplfjgjlliddogifpohdhkbjogm

<!-- 
#Dokumentation


Das Hauptaugenmerk bei der Dokumentation galt dieser Projektdokumentation, die alle Schritte von der Anforderung bis zur Inbetriebnahme schildert.
Die Dokumentation des Projekts ist ein begleitender Prozess. Die Dokumentation wird während des gesamten Projektzeitraums beiläufig gepflegt und ergänzt.


In casperJS Tests können Anmerkungen zu Funktionalität mit Argumenten beim Funktionsaufruf angegeben werden, welche sich im Testprotokoll wieder finden und als Dokumentation im Code.
Auf generative Dokumentation wie "AntDoc" oder "JSDoc" habe ich auf Grund des engen Zeitplans verzichtet.

-->

#Fazit



##Soll-/Ist-Vergleich

Rückblickend kann festgestellt werden, dass alle funktionalen Anforderungen gemäß dem Lastenheft mit den gewählten Tools erfüllt werden konnten.
Der zu Beginn des Projektes erstellte Projektplan konnte nicht vollständig eingehalten werden.  Im Projektantrag wurde leider die Phase der Abnahme unterschlagen und fälschlicherweise mehr als die von der IHK festgelegten 70 Stunden geplant. Der Zeitplan wurde in der Analysephase  angepasst.

Die Analysephase wurde im Projektantrag mit insgesamt 13 Stunden angegeben. Tatsächlich habe ich nur 10 Stunden gebraucht. Nach der Besprechung mit dem Anforderer  waren die Anforderungen klar genug definiert, sodass die Phase der Bestandsanalyse entfallen konnte. 

 Einzelne Abweichungen innerhalb des Zeitplans entstanden durch Erleichterungen bzw. Blockaden, die erst bei der Realisierung der einzelnen Teilschritte erkenntlich wurden. Die tatsächlich benötigte Gesamtzeit für das Projekt entsprach  der vorher veranschlagten Planzeit. 

##Lessons learned
Im Zuge des Projektes konnte der Autor viele  Erfahrungen in Bezug auf Planung und Durchführung eines IT-Projektes sammeln, aber auch Erfahrungen aus dem weniger projektgetriebenen Entwicklungsalltag mit einbeziehen. Insbesondere hat es sich bewährt, Zeit für die Umsetzung großzügig zu planen: Vermeintlich schnell erledigte Aufgaben setzen bereits viel voraus und sind bei der Planung oft nur implizit erwähnt. Sind diese Vorbedingungen, wie z. B. installierte Sofwarelibraries, nicht erfüllt, wächst die benötigte Zeit für ein Aufgabe oft unerwartet stark an. Dies betraf in diesem Projekt besonders die Aufgaben der Systemadministration. 
Die ideale Projektplanung gibt es nicht, spätestens in der Umsetzung werden wichtige zusätzliche Erkenntnisse gewonnen, die in einem linearen Prozess nicht mehr nachträglich in die Planung einfließen können. 

Ein iteratives Vorgehensmodell würde ich in Zukunft  bevorzugen, insbesondere bei der Einführung eines neuen Systems, um angemessen auf neue Erkenntnisse reagieren zu können. In jedem Fall bedeutet es, dass Kommunikation  mit dem Projektanforderer die wichtigste Komponente für eine erfolgreiche Projektumsetzung ist.
Abschließend kann man sagen, dass das Projekt in seiner Realisierung für das Team und in der Durchführung für den Autor eine große Bereicherung war.

##Ausblick
In naher Zukunft werden für den Einsatz der Testumgebung mehr Tests implementiert, die mehr Funktionen des Onlineshops untersuchen.
Obwohl alle im Lastenheft definierten Anforderungen realisiert wurden, zeichnen sich bereits neue Featurewünsche und Einsatzszenarien ab.
Das Team strebt danach, die Front-End-Tests fest in den Deployment-Prozess zu integrieren, was auch ohne Probleme möglich ist.

<!--Bei der Abnahme wurde entdeckt dass laufende Tests die parallele Ausführung von anderen Pipelines verhindert. Sollte dies die Arbeit des Teams erschweren ist ein Umzug des Testrunners auf einen anderen Server ohne Anpassungen des Codes möglich.

Der modulare Aufbau der Integration der Testumgebung ermöglicht somit eine gute Erweiterbarkeit und noch tiefere Integration von Tests in vorhandene Prozesse. -->

Zur Dokumentation der Testszenarien bleibt anzumerken, dass es im Unternehmen Bestrebungen gibt, hier den Prozess der Testerstellung umzukehren. Das würde bedeuten, dass die Testdokumentation in Zukunft in einer menschenlesbaren, domänenspezifischen  Sprache (\acs{DSL}) geschrieben werden könnte, die die Testfälle beschreibt und als Dokumentation dient. Mit einem entsprechenden Interpreter ließen sich daraus dann die tatsächlichen Testskipte generieren.


* * * * *



