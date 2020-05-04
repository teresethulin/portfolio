import React from "react";
import { Link } from "@reach/router";
import client from "../contentful";
import Title from "./../components/Title";
import CoverImage from "../components/CoverImage";
import HomeWrapper from "../components/HomeWrapper";

const Home = () => {
  const [projects, setProjects] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
      })
      .then((entries) => {
        setProjects(entries.items);
      });
  }, []);

  if (!projects) {
    return <h6>Loading...</h6>;
  }

  return (
    <HomeWrapper>
      {projects.map((project, i) => {
        return (
          <Link to={project.fields.slug} key={i}>
            <CoverImage
              image={project.fields.coverImage.fields.file.url}
              alt={project.fields.title}
            >
              <Title>{project.fields.title}</Title>
            </CoverImage>
          </Link>
        );
      })}
    </HomeWrapper>
  );
};

export default Home;
