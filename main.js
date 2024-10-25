// ******* build the team-members-secrion. *******
// create the members object.
let members = [
  {
    id: 1,
    name: "mohamed a.alwahab",
    job: "founder - english coach",
    facebook:
      "https://www.facebook.com/share/v6p84Bk1a6TB5L6H/?mibextid=LQQJ4d",
    email: "ahmedrat182@gmail.com",
    whatsapp: 907069590,
    img: "./images/mr-rat.png",
  },
  {
    id: 2,
    name: "ahmed alsadig",
    job: "co-founder - english coach",
    facebook: "https://www.facebook.com/a7medlorder?mibextid=ZbWKwL",
    email: "ahmedalsadig@gmail.com",
    whatsapp: 995387674,
    img: "./images/ahmed-alsadig.jpg",
  },
  {
    id: 3,
    name: "hanaa aboud",
    job: "supervisor",
    facebook:
      "https://www.facebook.com/profile.php?id=100011753065635&mibextid=ZbWKwL",
    email: "hanaaboud32@gmail.com",
    whatsapp: 126520671, // <--
    img: "./images/hanaa-aboud.png",
  },
  {
    id: 4,
    name: "musaab demba",
    job: "english coach",
    facebook:
      "https://www.facebook.com/profile.php?id=100011385106247&mibextid=ZbWKwL",
    email: "msb320120@gmail.com",
    whatsapp: 991532655,
    img: "./images/musaab-demba.png",
  },
  {
    id: 5,
    name: "marwa warag",
    job: "enlish coach",
    facebook: "https://www.facebook.com/marwamohammed.warag?mibextid=ZbWKwL",
    email: "marwawarag8@gmail.com",
    whatsapp: 996395126,
    img: "./images/marwa-warag.png",
  },
  {
    id: 6,
    name: "ammar osman",
    job: "enlish coach",
    facebook:
      "https://www.facebook.com/profile.php?id=100009260269478&mibextid=ZbWKwL",
    email: "ammarosman760@gmail.com",
    whatsapp: 925013947,
    img: "./images/ammar-osman.png",
  },
  {
    id: 7,
    name: "mohamed fathalrahman",
    job: "video editor",
    facebook: "https://www.facebook.com/zool.nais.58?mibextid=ZbWKwL",
    email: "lhma.max@gmail.com",
    whatsapp: 926303423,
    img: "./images/mohamed-fathelrahman.png",
  },
  {
    id: 8,
    name: "amjad abdullah",
    job: "photographer",
    facebook:
      "https://www.facebook.com/profile.php?id=100023995124696&mibextid=ZbWKwL",
    email: "bamjd171@gmail.com",
    whatsapp: 129143998,
    img: "./images/amjad-abdullah.png",
  },
  {
    id: 9,
    name: "eman a.elkhawad",
    job: "public relations",
    facebook: "https://www.facebook.com/eman.elkhawad?mibextid=ZbWKwL",
    email: "Emooalam2017@gmail.com",
    whatsapp: 964519665,
    img: "./images/eman-a.elkhawad.png",
  },
  {
    id: 10,
    name: "saber saadeldin",
    job: "public relation",
    facebook: "https://www.facebook.com/saber.saadeldin.9?mibextid=ZbWKwL",
    email: "saber.saadeldin2005@gmail.com",
    whatsapp: 969313449,
    img: "./images/saber-saadeldin.png",
  },
  {
    id: 11,
    name: "sejod kamal",
    job: "public relations",
    facebook:
      "https://www.facebook.com/profile.php?id=100024840711882&mibextid=ZbWKwL",
    email: "sjood.kamal2002@gmail.com",
    whatsapp: 907373903, // <-- number
    img: "./images/sejod-kamal.png",
  },
];
// build the functionality & push the members blocks to the DOM.
members.forEach((member) => {
  document.querySelector(".members-cards").innerHTML += `
  <div class="member-card" >
  <div class="card-img"> 
      <img src="${member.img}" />
    </div>
    <div class="card-header">
      <h3>${member.name}</h3>
      <p>${member.job}</p>
    </div>
    <div class="card-content">
      <ul>
        <li>
          <a href="${member.facebook}"
            ><i class="fa fa-fw fa-brands fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="mailto:${member.email}"
            ><i class="fa fa-fw fa-solid fa-envelope"></i
          ></a>
        </li>
        <li>
          <a href="https://wa.me/249${member.whatsapp}"
            ><i class="fa fa-fw fa-brands fa-whatsapp"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
  `;
});
// ******* build the timeline section. *******
// create the events object.
let events = [
  {
    id: 1,
    float: "left",
    month: "october",
    body: "we made a competition under thetitle best public presentation we We cooperated with Charcoal's Burger and Aldaly-Ice-cream it was great event.",
    coop: "center garden.",
  },
  {
    id: 2,
    float: "left",
    month: "october",
    body: "we made a listening competition it was somehow tough  and advance to participate in but the participants did a wonderful job .",
    coop: "British Educational Center.",
  },
  {
    id: 3,
    float: "left",
    month: "october",
    body: "we made a a reading competition was held. It was an enthusiastic and innovative experience and was broadcast on <b class='colord-b'>Sudan</b> TV.",
    coop: "Shendi Youth Center.",
  },
  {
    id: 4,
    float: "right",
    month: "september",
    body: "we made an English club under the title personality. it was new and unique experience with the medical students",
    coop: "Shendi university.",
  },
  {
    id: 5,
    float: "right",
    month: "september",
    body: "we have done a marvelous competition which was reading competition.",
    coop: "Bakri store</span> and <span>Hala Sweet.",
  },
  {
    id: 6,
    float: "left",
    month: "august",
    body: "we have done a debate between Coach Abdul Jalil and Coach Mabrouk, and both of them gave an amazing performance, and the vote went to Coach Mabrouk. this debate was online on our channel on Telegram.",
    coop: "coach Abdul Jalil</span> and <span>coach Mabrouk.",
  },
];
// build the events functionality & puth the events blocks to the DOM
events.forEach((event) => {
  document.querySelector(".timeline-content").innerHTML += `
    <div class="${event.float}">
      <div class="event">
        <h3 class="event-heading">${event.month}</h3>
        <p class="event-p">
        ${event.body}
        </p>
        <p class="coop">
          Cooperated by: <span>${event.coop}</span>
        </p>
      </div>
    </div>
    <div class="clear-fix"></div>`;
});
