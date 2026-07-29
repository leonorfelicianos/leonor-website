// ===========================
// NAVBAR SCROLL
// ===========================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 60) {
        nav.style.padding = "8px 50px";
    } else {
        nav.style.padding = "10px 50px";
    }

});




// ===========================
// BIOGRAPHIES
// ===========================


const biographies = {


en:{


short:`

<p>
Leonor Feliciano Santos is a Portuguese violinist with international recognition, whose practice includes classical performance, historically informed performance, chamber music, orchestral work, pedagogy and music therapy, having begun her musical path in jazz (piano).
</p>


<p>
In 2026 she will begin her master's degree in Performance at the Sibelius Academy, after studying at Conservatório de Música Dom Dinis, Escola Profissional Metropolitana and Escola Superior de Música e Artes do Espetáculo.
</p>

`,



full:`

<p>
Leonor Feliciano Santos, born in Lisbon, is a violinist with international recognition, known for her sensitivity, curiosity and versatility. Her artistic path began in jazz (piano) and later expanded into classical performance (violin), historically informed performance, chamber music, orchestral music, pedagogy and music therapy.
</p>


<p>
She completed her Bachelor's degree in Performance at ESMAE and at the Sibelius Academy through the ERASMUS+ programme, studying with Vítor Vieira, Paivyt Meller and Minna Kangas (baroque violin).
</p>


`

},




pt:{



short:`

<p>
Leonor Feliciano Santos é uma violinista portuguesa com formação internacional, cuja prática inclui performance clássica, performance historicamente informada, música de câmara, orquestra, pedagogia e musicoterapia, tendo iniciado o seu percurso musical no jazz (piano).
</p>


<p>
Em 2026 irá iniciar o Mestrado em Performance na Sibelius Academy, depois de estudar no Conservatório de Música Dom Dinis, Escola Profissional Metropolitana e Escola Superior de Música e Artes do Espetáculo.
</p>

`,



full:`

<p>
Leonor Feliciano Santos, natural de Lisboa, é uma violinista com formação internacional, marcada pela sensibilidade, curiosidade e diversidade. O seu percurso começa no jazz (piano) e desenvolve-se para a performance clássica (violino), performance historicamente informada, música de câmara, orquestra, pedagogia e musicoterapia.
</p>


<p>
Completou a licenciatura em Performance na ESMAE e na Sibelius Academy através do programa ERASMUS+, tendo como professores Vítor Vieira, Paivyt Meller e Minna Kangas (violino barroco).
</p>


`

}



};






let currentLanguage="en";





// ===========================
// CHANGE LANGUAGE
// ===========================


function changeLanguage(language){


currentLanguage = language;


document.getElementById("bio-text").innerHTML =
biographies[language].short;


changePageLanguage(language);
renderEvents();

}







// ===========================
// CHANGE PAGE LANGUAGE
// ===========================


function changePageLanguage(language){



const pt = language==="pt";



// NAVBAR


document.querySelector("a[href='#bio']").textContent =
pt ? "Biografia" : "Biography";


document.querySelector("a[href='#experience']").textContent =
pt ? "Experiência" : "Experience";


document.querySelector("a[href='#events']").textContent =
pt ? "Eventos" : "Events";


document.querySelector("a[href='#media']").textContent =
"Media";


document.querySelector("a[href='#contact']").textContent =
pt ? "Contacto" : "Contact";





// HERO


document.querySelector(".hero h2").textContent =
pt ? "Violinista" : "Violinist";





// BIO


document.querySelector("#bio h3").textContent =
pt ? "Biografia" : "Biography";





// EXPERIENCE


document.querySelector("#experience h3").textContent =
pt ? "Experiência" : "Experience";





const cards = document.querySelectorAll("#experience .card");





// CARD 1 - PEDAGOGY


cards[0].querySelector("h4").textContent =
pt ? "Pedagogia do Violino" : "Violin Pedagogy";


cards[0].querySelector("ul").innerHTML = pt ? `


<li>
2023 – Metodologia Suzuki com Joana Jesus (Academia A Pauta)
</li>


<li>
European String Teachers Association 2024
</li>


<li>
Formação contínua com Géza Svilvay (2024–2025)
</li>



<li>
2026 – Conferência "Ensino da Música a Alunos Neurodivergentes", com Paula Hernández-Dionis
</li>


<li>
Conferência ESTA2026
</li>


` : `


<li>
2023 – Suzuki Methodology with Joana Jesus (Academia A Pauta)
</li>


<li>
European String Teachers Association 2024
</li>


<li>
Continuous training with Géza Svilvay (2024–2025)
</li>


<li>
2026 – Conference "Teaching Music to Neurodivergent Students", with Paula Hernández-Dionis
</li>


<li>
ESTA2026 Conference
</li>


`;



cards[0].querySelector(".schedule").textContent =
pt
?
"Para marcar uma aula de violino, entre em contacto através da secção Contacto."
:
"To schedule a violin lesson, please get in touch through the Contact section.";






// CARD 2 - MUSIC THERAPY


cards[1].querySelector("h4").textContent =
pt ? "Musicoterapia" : "Music Therapy";


cards[1].querySelector("ul").innerHTML = pt ? `


<li>
2026 – "A Música como Ferramenta no Combate à Doença de Alzheimer", com a Fundação Alzheimer Portugal.
</li>


`
:


`

<li>
2026 – "Music as a Tool to Combat Alzheimer’s", with the Alzheimer’s Foundation (Portugal).
</li>


`;







// CARD 3 - ORCHESTRA


cards[2].querySelector("h4").textContent =
pt ? "Experiência Orquestral" : "Orchestral Experience";



cards[2].querySelector("ul").innerHTML = pt ? `


<li>
2016 – Masterclass com a Lisbon Film Orchestra.
</li>


<li>
2017–2023 – Orquestra da Escola Profissional Metropolitana.
</li>


<li>
Colaborações com a Orquestra Académica Metropolitana, Orquestra Lusitanus e Jovem Orquestra da Costa Atlântica.
</li>


<li>
2023–2025 – Orquestra Sinfónica da ESMAE, incluindo o projeto internacional de ópera <em>Opera out of Opera</em>.
</li>


<li>
Colaboração com a Orquestra Movimento Musical Cooperativo.
</li>


<li>
2025–2026 – Orquestra Sinfónica da Sibelius Academy.
</li>


`
:


`

<li>
2016 – Masterclass with the Lisbon Film Orchestra.
</li>


<li>
2017–2023 – EPM Orchestra.
</li>


<li>
Collaborations with Orquestra Académica Metropolitana, Orquestra Lusitanus and Jovem Orquestra da Costa Atlântica.
</li>


<li>
2023–2025 – ESMAE Symphony Orchestra, including the international opera project <em>Opera out of Opera</em>.
</li>


<li>
Collaboration with the Movimento Musical Cooperativo Orchestra.
</li>


<li>
2025–2026 – Sibelius Academy Symphony Orchestra.
</li>


`;







// CARD 4 - CHAMBER MUSIC


cards[3].querySelector("h4").textContent =
pt ? "Música de Câmara" : "Chamber Music";


cards[3].querySelector("ul").innerHTML = pt ? `


<li>
2021 – 3.º Prémio no Concurso de Música de Câmara da Escola Profissional Metropolitana.
</li>


<li>
Membro fundador do Quarteto Andante e do Trio de La Nuit.
</li>


<li>
Masterclasses com Ilmo Ranta, Ilmo Tuomas, Jaakko Ilves, Kirill Kozlovski, Kreeta-Julia Martti Rautio, Martti Roussi, Marko Ylönen, Olaf Reimers e Yuki Koyama.
</li>


`
:


`

<li>
2021 – 3rd Prize in the EPM Chamber Music Competition.
</li>


<li>
Founding member of Quarteto Andante and Trio de La Nuit.
</li>


<li>
Masterclasses with Ilmo Ranta, Ilmo Tuomas, Jaakko Ilves, Kirill Kozlovski, Kreeta-Julia Martti Rautio, Martti Roussi, Marko Ylönen, Olaf Reimers and Yuki Koyama.
</li>


`;


}




// EVENTS

const events = [
  {
    date: "2026-08-26",
    time: "19:00",
    title: {
      en: "Sibelius Academy Symphony Orchestra",
      pt: "Orquestra Sinfónica da Academia Sibelius"
    },
    location: {
      en: "Musiikkitalo Concert Hall, Helsinki",
      pt: "Sala de Concertos Musiikkitalo, Helsínquia"
    }
  },
  {
    date: "2026-08-28",
    time: "",
    title: {
      en: "Sibelius Academy Symphony Orchestra",
      pt: "Orquestra Sinfónica da Academia Sibelius"
    },
    location: {
      en: "Estonian Academy of Music and Theatre, Tallinn, Estonia",
      pt: "Academia Estónia de Música e Teatro, Tallinn, Estónia"
    }
  },
  {
    date: "2026-08-30",
    time: "12:45",
    title: {
      en: "ESTA Concert",
      pt: "Concerto ESTA"
    },
    location: {
      en: "Musiikkitalo Concert Hall, Helsinki",
      pt: "Sala de Concertos Musiikkitalo, Helsínquia"
    }
  }
];


function formatDate(dateString, lang) {
  const date = new Date(dateString + "T00:00:00");

  return date.toLocaleDateString(
    lang === "pt" ? "pt-PT" : "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );
}

function renderEvents() {
  const upcoming = document.getElementById("upcoming-events");
  const past = document.getElementById("past-events");

  if (!upcoming || !past) return;

  upcoming.innerHTML = "";
  past.innerHTML = "";

  const today = new Date();
  today.setHours(0,0,0,0);

  const upcomingEvents = [];
  const pastEvents = [];

  events.forEach(event => {
    const d = new Date(event.date + "T00:00:00");

    if (d >= today) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  upcomingEvents.sort((a,b)=>new Date(a.date)-new Date(b.date));
  pastEvents.sort((a,b)=>new Date(b.date)-new Date(a.date));

  upcomingEvents.forEach(event=>{
    upcoming.appendChild(createCard(event));
  });

  pastEvents.forEach(event=>{
    past.appendChild(createCard(event));
  });

  document.getElementById("events-title").textContent =
    currentLanguage === "pt"
      ? "Próximos Eventos"
      : "Upcoming Events";

  document.getElementById("past-events-title").textContent =
    currentLanguage === "pt"
      ? "Eventos Anteriores"
      : "Past Events";
}

function createCard(event) {

  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <h4>${formatDate(event.date,currentLanguage)}</h4>
    <p><strong>${event.title[currentLanguage]}</strong></p>
    ${event.time ? `<p>${event.time}</p>` : ""}
    <p>${event.location[currentLanguage]}</p>
  `;

  return card;
}



// ===========================
// START WEBSITE
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("bio-text").innerHTML =
        biographies.en.short;

    changePageLanguage("en");
    renderEvents();

});