let members = [
  {
    name: "mohamed a.alwahab",
    job: "english coach",
    facebook:
      "https://www.facebook.com/share/v6p84Bk1a6TB5L6H/?mibextid=LQQJ4d",
    email: "ahmedrat182@gmail.com",
    whatsapp: 907069590,
    img: "./images/mr-rat.png",
  },
  {
    name: "ahmed alsadig",
    job: "english coach",
    facebook: "",
    email: "ahmedalsadig@gmail.com",
    whatsapp: 995387674,
    img: "./images/ahmed-alsadig.jpg",
  },
  {
    name: "musaab demba",
    job: "english coach",
    facebook: "",
    email: "msb320120@gmail.com",
    whatsapp: 991532655,
    img: "./images/musaab-demba.png",
  },
  {
    name: "marwa warag",
    job: "enlish coach",
    facebook: "",
    email: "marwawarag8@gmail.com",
    whatsapp: 996395126,
    img: "./images/marwa-warag.png",
  },
  {
    name: "mohamed fathalrahman",
    job: "video editor",
    facebook: "",
    email: "lhma.max@gmail.com",
    whatsapp: 926303423,
    img: "./images/mohamed-fathelrahman.png",
  },
  {
    name: "amjad abdullah",
    job: "photographer",
    facebook: "",
    email: "bamjd171@gmail.com",
    whatsapp: 129143998,
    img: "./images/amjad-abdullah.png",
  },

  {
    name: "eman a.elkhawad",
    job: "public relations",
    facebook: "",
    email: "Emooalam2017@gmail.com",
    whatsapp: 964519665,
    img: "./images/eman-a.elkhawad.png",
  },

  {
    name: "daber saadeldin",
    job: "public relation",
    facebook: "",
    email: "saber.saadeldin2005@gmail.com",
    whatsapp: 969313449,
    img: "./images/saber-saadeldin.png",
  },
  {
    name: "sejod kamal",
    job: "public relations",
    facebook: "",
    email: "sjood.kamal2002@gmail.com",
    whatsapp: 0, // <-- number
    img: "./images/sejod-kamal.png",
  },
];

members.forEach((member) => {
  document.querySelector(".members-cards").innerHTML += `
  <div class="member-card">
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
