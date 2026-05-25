# Barrierefreies Serviceportal

Fallstudie im Modul:

**Programmierung von Web-Anwendungen – webbasiertes betriebliches Informationssystem (DLBITOWAWB01)**

## Projektbeschreibung

Im Rahmen dieser Fallstudie wurde ein barrierefreies Online-Serviceportal für ein öffentliches Dienstleistungsunternehmen entwickelt. Ziel der Anwendung ist es, Serviceanfragen digital bereitzustellen und gleichzeitig Anforderungen an Barrierefreiheit sowie Benutzerfreundlichkeit zu berücksichtigen.

Umgesetzte Funktionen:

- Auswahl verschiedener Serviceangebote
- Einreichen von Serviceanfragen
- Rollensteuerung zwischen Benutzer- und Administratoransicht
- Verwaltung eingegangener Serviceanfragen
- Bearbeitung des Bearbeitungsstatus
- Kontrastmodus zur Verbesserung der Lesbarkeit
- Anpassbare Schriftgröße
- Tastaturbedienung (Tabulator- und Enter-Navigation)
- Persistente Speicherung von Daten

---

## Verwendete Technologien

### Frontend
- React
- Vite
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- H2-Datenbank
- Maven

### Versionsverwaltung
- Git
- GitHub

---

## Anwendung starten

### Backend starten

Im Ordner `backend` ausführen:

`mvn spring-boot:run`

Backend erreichbar unter:

`http://localhost:8080`

### Frontend starten

Im Ordner `frontend` ausführen:

`npm install`

anschließend:

`npm run dev`

Frontend erreichbar unter:

`http://localhost:5173`

---

## Tests ausführen

Im Ordner `backend`:

`mvn test`

Die Testausführung prüft die erfolgreiche Initialisierung der Anwendung.

---

## Projektstruktur

Barrierefreies-Serviceportal

├── frontend/ → React-Anwendung  
├── backend/ → Spring-Boot-Anwendung  
└── README.md

---

## Autor

Murat

Sommersemester 2026

Modul:

**Programmierung von Web-Anwendungen – webbasiertes betriebliches Informationssystem (DLBITOWAWB01)**