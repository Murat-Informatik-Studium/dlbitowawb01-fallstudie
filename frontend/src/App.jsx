import { useEffect, useState } from "react";

function App() {

  const [services, setServices] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(18);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [requests, setRequests] = useState([]);

  const [role, setRole] = useState("BENUTZER");


  useEffect(() => {

    fetch("http://localhost:8080/api/services")
      .then(response => response.json())
      .then(data => setServices(data));

  }, []);


  function sendRequest() {

    fetch("http://localhost:8080/api/request", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        message
      })

    })

    .then(() => {
      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");
    });

  }

  function loadRequests() {
    fetch("http://localhost:8080/api/request")
      .then(response => response.json())
      .then(data => setRequests(data));
  }

  function updateStatus(id) {

    fetch(
      `http://localhost:8080/api/request/${id}/status`,
      {
        method: "PUT"
      }
    )

    .then(() => loadRequests());

  }

  function renameService(id) {
  const newTitle = prompt("Neuer Name des Serviceangebots:");

  if (newTitle) {
    setServices(
      services.map(service =>
        service.id === id
          ? { ...service, title: newTitle }
          : service
      )
    );
  }
}

  return (

    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#f4f6f9",
        color: darkMode ? "#f5f5f5" : "#1f2937",
        minHeight: "100vh",
        padding: "20px",
        fontSize: `${fontSize}px`
      }}
    >

            <div
  className="header"
  style={{
    backgroundColor: darkMode ? "#1f2937" : "white",
    color: darkMode ? "white" : "black"
  }}
>
  <h1>Barrierefreies Serviceportal</h1>

  <p>
    Digitale Services mit barrierefreiem Zugang
  </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Kontrastmodus wechseln
      </button>

      <button onClick={() => setFontSize(fontSize + 2)}>
        Schrift größer
      </button>

      <button onClick={() => setFontSize(fontSize - 2)}>
        Schrift kleiner
      </button>

      <h2>Rolle auswählen</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="BENUTZER">Benutzer</option>
        <option value="ADMIN">Administrator</option>
      </select>



</div>




      <div className="service-list">

  {services.map(service => (

    <div
  key={service.id}
  className="card"
  style={{
    backgroundColor: darkMode ? "#1f2937" : "white",
    color: darkMode ? "white" : "black"
  }}
>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <button
        onClick={() => {
          setMessage("Ausgewählter Service: " + service.title);
          
        }}
      >
        Service auswählen
      </button>

      {role === "ADMIN" && (
        <button onClick={() => renameService(service.id)}>
          Service umbenennen
        </button>
      )}

    </div>

  ))}

</div>


<div
  className="card"
  style={{
    backgroundColor: darkMode ? "#1f2937" : "white",
    color: darkMode ? "white" : "black"
  }}
>
      <h2>Serviceanfrage senden</h2>


      <label htmlFor="name">Name</label>
      <br />
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

     <label htmlFor="email">E-Mail</label>
      <br />
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

<label htmlFor="message">Nachricht</label>    <br />
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

<br />
      <button onClick={sendRequest}>
        Anfrage senden
      </button>

<br/>
      {success && (
        
        <p>
          Anfrage erfolgreich gesendet
        </p>

)}
</div>
      
{role === "ADMIN" && (

  <>

    <h2
  style={{
    color: darkMode ? "white" : "black"
  }}
>
  Adminbereich: Eingegangene Anfragen
</h2>

    <button onClick={loadRequests}>
      Anfragen laden
    </button>

    {requests.map(request => (

      <div
  key={request.id}
  className="card"
  style={{
    backgroundColor: darkMode ? "#1f2937" : "white",
    color: darkMode ? "white" : "black"
  }}
>

        <h3>{request.name}</h3>
        <p>{request.email}</p>
        <p>{request.message}</p>
        <p>Status: {request.status}</p>

        <button
          onClick={() => updateStatus(request.id)}
        >
          Als bearbeitet markieren
        </button>

      </div>

    ))}

  </>

)}


</div>     

);
}

export default App;