import Image from "./styled/Image.styles";
import Anchor from "./styled/Anchor.styles";
import Row from "./styled/Row.styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const Project = () => {
  const projects = [
    {
      name: "Fruit Picking Game",
      software: "React",
      url: (
        <Anchor target="_black" href="https://fruit.codergirlsu.dev">
          <Image src="./images/1.jpeg" alt="fruit_packing_game" />
        </Anchor>
      ),
    },
    {
      name: "Emoji Search",
      software: "React",
      url: (
        <Anchor target="_black" href="https://emojis.codergirlsu.dev">
          <Image src="./images/1.jpeg" alt="emoji_search_game" />
        </Anchor>
      ),
    },
    {
      name: "Portfolio",
      software: "React",
      url: (
        <Anchor target="_black" href="https://codergirlsu.github.io/src/">
          <Image src="./images/fruit.png" alt="portfolio" />
        </Anchor>
      ),
    },
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => {
       
        return (
          <div key={index}>
            <Card sx={{ maxWidth: 345 }}>
            {project.name}
             {project.url}
              <CardMedia
                component="img"
                height="194"
                image= {project.url}
                title={project.name}
              />
              
            </Card>
           
          </div>
        );
      })}
    </div>
  );
};

export default Project;
