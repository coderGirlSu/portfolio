
const Project = () => {
  const cover = [
    {
      name: "Su Zhang",
      position: "Full-Stack Software Engineer",
      photo: "./images/su-small.jpg",
      alt: "Su Zhang",
    },
  ]

  const about = [
    {
      title1:"A Little Bit",
      title2:"About Me",
      top_photo: "./images/2.jpg",
      top_photo_alt: "Su Zhang",
      bottom_photo: "./images/10.png",
      bottom_photo_alt: "Su Zhang",

      linkedin_icon:"./images/linkdein.png",
      linkedin_icon_alt:"linkedin",
      linkedin_icon_href:"https://www.linkedin.com/in/su-zhang-au/",

      github_icon:"./images/github.png",
      github_icon_alt:"github",
      github_icon_href:"https://github.com/coderGirlSu",

      resume_icon:"./images/resume.png",
      resume_icon_alt:"resume",
      resume_icon_href:"./download/SuZhang-resume.pdf",

      email_icon:"./images/email.png",
      email_icon_alt:"email",
      email_icon_href:"mailto:suzhang79@gmail.com",

      introduction1: "Hi, I am Su Zhang, a junior Software Engineer. I find great satisfaction in solving problems and building things. I'm now open to new opportunities after recently completing an internship at ",
      introduction2: "In late 2022, I successfully transitioned to the field of Software Engineering and completed a specialist software engineering diploma after seven years of experience in Building Architecture and a background in Graphic Design. The software industry allows me to better showcase my skills and apply my experiences to new domains.",
      safetyCulture_href:"https://safetyculture.com/",
      safetyCulture_alt:"SafetyCulture",
    }
  ]
  const projects = [
    {
      title: "TikTalk MERN Stack Chat App",
      description: "MongoDB, Express, React, Node.js, Rest, Firebase, AWS EC2.",
      image: "./images/tiktalk.png",
      alt: "portfolio",
      href: "https://tiktalk.codergirlsu.dev",
    },
    {
      title: "Hackathon Emoji Search App",
      description: "React, JavaScript, CSS, HTML, Figma, Netlify.",
      image:"./images/emoji.png",
      alt: "emoji_search_game",
      href:"https://emojis.codergirlsu.dev",
    },
    {
      title: "Fruit Picking Game",
      description: "React",
      image:"./images/fruit.png",
      alt:"fruit_packing_game",
      href:"https://fruit.codergirlsu.dev",
    },
    {
      title: "Two-Sided Marketplace",
      description: "Ruby, Ruby On Rails, PostgreSQL, Heroku.",
      image:"./images/marketplace.png",
      alt:"marketplace",
      href:"https://marketplace.codergirlsu.github.io/src/",
    },
    {
      title: "Portfolio",
      description: "CSS, HTML.",
      image:"./images/portfolio.png",
      alt:"portfolio",
      href:"https://codergirlsu.github.io/src/",
    },
  ];

  const icons = [
    {
      title:"Typescript",
      image:"./images/typescript.png", 
      alt:"Typescript",
    },
    {
      title:"Javascript",
      image:"./images/javascript.png",  
      alt:"Javascript",
    },
    { title:"Go",
      image:"./images/go.png",
      alt:"Go",
    },
    { title:"Python",
      image:"./images/python.png",
      alt:"Python",
    },
    { title:"React",
      image:"./images/react.png",
      alt:"React", 
    },
    {
      title:"Node.js",
      image:"./images/node.png",
      alt:"Node.js",
    },
    { title:"gRPC",
      image:"./images/grpc.png",
      alt:"gRPC",
    },
    { title:"PostgreSQL",
      image:"./images/postgresql.png",
      alt:"PostgreSQL",
    },
    { title:"MongoDB",
      image:"./images/mongodb.png",
      alt:"mongodb",
    },
    { title:"Express",
      image:"./images/express.png",
      alt:"express",
    },
    { title:"Ruby",
      image:"./images/ruby.png",
      alt:"Ruby",
    },
    { title:"Rails",
      image:"./images/rails.png",
      alt:"Rails",
    },
    { title:"HTML",
      image:"./images/html.png",
      alt:"HTML", 
    },
    { title:"CSS",
      image:"./images/css.png",
      alt:"CSS", 
    },
    { title:"Rest",
      image:"./images/rest.png",
      alt:"Rest",
    },
    { title:"Temporal",
      image:"./images/temporal.png",
      alt:"Temporal",
    },
    { title:"Figma",
      image:"./images/figma.png",
      alt:"Figma",
    },
    { title:"Microservices", 
      image:"./images/microservices.png",
      alt:"Microservices",
    },
    { title:"Kubernetes",
      image:"./images/kubernetes.png",
      alt:"Kubernetes",
    },
    { title:"Jest",
      image:"./images/jest.svg",
      alt:"Jest",
    },
    { title:"Heroku",
      image:"./images/heroku.png",
      alt:"Heroku",
    },
    { title:"Netlify",
      image:"./images/netlify.png",
      alt:"Netlify",
    },
    { title:"Firebase",
      image:"./images/firebase.png",
      alt:"Firebase",
    },
    { title:"AutoCAD",
      image:"./images/cad.png",
      alt:"AutoCAD",
    },
    { title:"Illustrator",
      image:"./images/Illustrator.png",
      alt:"Illustrator",
    },
    { title:"Photoshop",
      image:"./images/ps.png",
      alt:"Photoshop",
    },
  ]

  return (
    <div>
      {cover.map((cover, index) => {
        return (
          <div key={index} className="i-container">
            <div className="i-top">
              <div className="name">{cover.name}</div>
            </div>
            <div className="i-middle">
              <img src={cover.photo} alt={cover.alt}/>
            </div>
            <div className="i-bottom">
              <div className="position">{cover.position}</div>  
            </div>
          </div>
        );
      })}

      {about.map((about, index) => {
        return (
          <div key={index} className="about-container">
            <div className="about-top-container">
              <div className="about-left">
                <div className="about-title">{about.title1}<div>{about.title2}</div></div>
                  <div className="icons-container">
                    <a target="_blank" href={about.linkedin_icon_href}><img src={about.linkedin_icon} alt={about.linkedin_icon_alt}></img></a>
                    <a target="_blank" href={about.resume_icon_href}><img src={about.resume_icon} alt={about.resume_icon_alt}></img></a>
                    <a target="_blank" href={about.github_icon_href}><img src={about.github_icon} alt={about.github_icon_alt}></img></a>
                    <a target="_blank" href={about.email_icon_href}><img src={about.email_icon} alt={about.email_icon_alt}></img></a>
                  </div>
              </div>  
              <img src={about.top_photo} alt={about.top_photo_alt}></img>
            </div>
            <div className="about-bottom-container">
              <div className="about-introduction">{about.introduction1}<a target="_blank" href={about.safetyCulture_href} alt={about.safetyCulture_alt}>SafetyCulture.</a><br></br><br></br>{about.introduction2}</div>
              <img src={about.bottom_photo} alt={about.bottom_photo_alt}></img>
            </div>
          </div>
        )
      })}
        
      <div className="project-container">
        <h1 className="text-container">Building Things<span> As a Hobby</span></h1>
        <div className="image-container">
        
          {projects.map((project, index) => {
            return (
              <div key={index} className="image-box"> 
                <img src={project.image} alt={project.alt} />
                  <a target="_blank" href={project.href}>
                    <div className="overlay">
                      <div className="image-description">
                        <div className="title">{project.title}</div>
                        <div>{project.description}</div>
                      </div>
                    </div>
                  </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="skills-container">
        <h1 className="text-container">Skills</h1>
        <div className="icons-container">
          {icons.map((icon, index) => {
            return (
              <div key={index} className="icon-box">
                <img src={icon.image} alt={icon.alt} />
                <div className="icon-title">{icon.title}</div>
              </div>
            )})}
        </div>
      </div>
      
       <div className="footer-container">
       <div className="line"></div>   
        {about.map((about, index) => {
          return(
            <div key={index}  className="footer-icons-container">
              <a target="_blank" href={about.linkedin_icon_href}><img src={about.linkedin_icon} alt={about.linkedin_icon_alt}></img></a>
              <a target="_blank" href={about.resume_icon_href}><img src={about.resume_icon} alt={about.resume_icon_alt}></img></a>
              <a target="_blank" href={about.github_icon_href}><img src={about.github_icon} alt={about.github_icon_alt}></img></a>
              <a target="_blank" href={about.email_icon_href}><img src={about.email_icon} alt={about.email_icon_alt}></img></a>
          </div>
         )})}
       </div>
    </div>
  );
};

export default Project;