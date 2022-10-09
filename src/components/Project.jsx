const Project = () => {
  const projects = [
    {
      title: "Fruit Picking Game",
      software: "React",
      url: (
        <a target="_black" href="https://fruit.codergirlsu.dev">
          <img src="./images/fruit.png" alt="fruit_packing_game" />
        </a>
      ),
    },
    {
      title: "Emoji Search",
      software: "React",
      url: (
        <a target="_black" href="https://emojis.codergirlsu.dev">
          <img src="./images/emoji.png" alt="emoji_search_game" />
        </a >
      ),
    },
    {
      title: "Portfolio",
      software: "React",
      url: (
        <a target="_black" href="https://codergirlsu.github.io/src/">
          <img src="./images/portfolio.png" alt="portfolio" />
        </a>
      ),
    },
    {
        title: "Portfolio",
        software: "React",
        url: (
          <a target="_black" href="https://codergirlsu.github.io/src/">
            <img src="./images/fruit.png" alt="portfolio" />
          </a>
        ),
      },
      {
        title: "Portfolio",
        software: "React",
        url: (
          <a target="_black" href="https://codergirlsu.github.io/src/">
            <img src="./images/fruit.png" alt="portfolio" />
          </a>
        ),
      },
  ];

  return (
    <div className="container">
      {projects.map((project, index) => {
        return ( 
      
             <div key={index} className="image-box">{project.url}</div>
       )
      })}
    </div>
  );
};

export default Project;
