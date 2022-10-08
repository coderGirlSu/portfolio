const Project = () => {
  const projects = [
    {
      name: "Fruit Picking Game",
      software: "React",
      url: (
        <a target="_black" href="https://fruit.codergirlsu.dev">
          <img src="./images/fruit.png" alt="fruit_packing_game" />
        </a>
      ),
    },
    {
      name: "Emoji Search",
      software: "React",
      url: (
        <a target="_black" href="https://emojis.codergirlsu.dev">
          <img src="./images/fruit.png" alt="emoji_search_game" />
        </a >
      ),
    },
    {
      name: "Portfolio",
      software: "React",
      url: (
        <a target="_black" href="https://codergirlsu.github.io/src/">
          <img src="./images/fruit.png" alt="portfolio" />
        </a>
      ),
    },
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => {
        return ( 
        <div key={index}>
            {project.name}
             {project.url}
        </div> )
      })}
    </div>
  );
};

export default Project;
