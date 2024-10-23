// build the team-members secrion
let members = [
  {
    id: 1,
    name: "mohamed a.alwahab",
    job: "founder",
    facebook:
      "https://www.facebook.com/share/v6p84Bk1a6TB5L6H/?mibextid=LQQJ4d",
    email: "ahmedrat182@gmail.com",
    whatsapp: 907069590,
    img: "./images/mr-rat.png",
  },
  {
    id: 2,
    name: "hanaa aboud",
    job: "supervisor",
    facebook:
      "https://www.facebook.com/profile.php?id=100011753065635&mibextid=ZbWKwL",
    email: "hanaaboud32@gmail.com",
    whatsapp: 126520671, // <--
    img: "./images/hanaa-aboud.png",
  },
  {
    id: 3,
    name: "ahmed alsadig",
    job: "english coach",
    facebook: "https://www.facebook.com/a7medlorder?mibextid=ZbWKwL",
    email: "ahmedalsadig@gmail.com",
    whatsapp: 995387674,
    img: "./images/ahmed-alsadig.jpg",
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
    name: "daber saadeldin",
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

members.forEach((member) => {
  document.querySelector(".members-cards").innerHTML += `
  <div class="member-card" >
    <div class="card-header">
      <h3>${member.name}</h3>
      <p>${member.job}</p>
    </div>
    <div class="card-img"> 
      <img src="${member.img}" />
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
