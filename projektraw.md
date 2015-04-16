#Einleitung

###Der Ausbildungsbetrieb

Die mobilcom-debitel GmbH ist ein in Deutschland agierendes Unternehmen der Freenet Group. Sie vertreibt hauptsächlich Mobilfunkprodukte wie Vertäge und Mobilfunk-Endgeräte sowie dazu passendes Zubehör, betreibt aber keine eigene Mobilfunkinfrastruktur. Bereits seit 2011 bestand eine Kooperation mit der GRAVIS Computervertriebsgesellschaft, meinem ursprünglichen Ausbildungsbetrieb. Diese Kooperation mündete Ende 2012 in einer vollständigen Übernahme[^mdkauftgra] und einer anschließenden Integration mehrerer Abteilungen wie der Logistik und IT in den mobilcom-debitel Konzern. Infolgedessen ist die md verantwortlich für den Betrieb der GRAVIS Onlinepräsenz. Die mobilcom-debitel verfügt über mehrere Verwaltungsstandorte, der Sitz der ehemaligen GRAVIS-IT in Berlin am Ernst-Reuter-Platz konnte erhalten werden. Dort sind weiterhin Abgteilungen die GRAVIS-Systeme betreuen ansässig.


[^mdkauftgra]: Pressemitteilung zur Übernahme von GRAVIS durch md http://www.presseportal.de/pm/65489/2385382/eans-news-freenet-ag-freenet-group-uebernimmt-gravis-und-wird-einer-der-groessten-partner-von-apple
\\

## 

Das Projekt beinhaltet die Analyse, Konzeption und Einrichtung einer Laufzeitumgebung für funktionale Front-End-Tests der betreuten Onlineshops, dem GRAVIS Onlineshop und dem MDS Onlineshop. Diese Umgebung soll in das Continuous-Delivery System _Go_ eingebunden, werden um vollautomatisches Testen zu ermöglichen. Hauptbedarfsträger ist das Entwicklungsteam _Vertrieb Onlineshop CMS_, welches eine geringere Arbeitslast beim Einsatz dieses System zum Testen erwartet.

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
| Lösungskonzept erstellen| 4h  ||
| Wahl eines Testrunner| 4h ||
| Implementierungsphase | | 40h |
| Installation Test-Runtime | 3h | |
|  Erstellen Beispieltestsuite | 2h | |
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

* Personal
* Hardware: Es soll keine 
* Software: Es soll für die Testumgebung ausschließlich kostenfreie und/oder open-source Software mit einer Lizenz die kommerzielle Nutzung erlaubt eingesetzt werden. Die Software Go ist von GRAVIS lizensiert und verursacht im Rahmen des Projekt keine zusätlichen Kosten. Go ist mittlerweile auch open-source und könnte bei Bedarf angepasst werden.


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



> // Daniel Sagt Amortisation nicht ausrechnen da 1000€ heute haben $\neq$ 1000€ morgen haben

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

##Zielplattform
Die Testumgebung soll auf den vorhandenen Servern, auf denen auch der GRAVIS Onlineshop betrieben wird, betrieben werden. Dort läuf aktuell ein gentoo GNU/Linux mit jeweils mindestens 2Gb RAM. 

##Architekturdesign

##*more*

##Maßnamen zur Qualitässicherung

Es wird früh in der Implementierungsphase ein Beispieltest erstellt der die Funktionalität des System beweisen kann. Der Code der Tests als auch der Schnittstelle wird in SVN versionsverwaltet sodass es einfach möglich ist funktionierende Versionen wiederherzustellen.

##Pflichtenheft

#Implementierungsphase

##Implementierte Datenstrukturen

##Implementierung der Benutzeroberfläche
* Ausgelöst wird in Go
* Keine Eigene GUI
* Ergebnisse in ANT boolen in Go
* Testartifacts werden in Go geladen

##Implementierung der Geschäftslogik

#Testphase

#Abnahmnephase

#Einführungsphase

#Dokumentation

#Fazit

##Soll/Ist Vergleich

##Lessons learned

##Ausblick

---------

#Anhang

##Detaillierte Zeitplanung

##lastenheft

##Datenmodell

##Benutzeroberfläche