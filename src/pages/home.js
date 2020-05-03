import React from "react";
import client from "../contentful";
import Title from "./../components/Title";

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
    <div>
      {projects.map((project, i) => {
        const coverImage = `${project.fields.coverImage.fields.file.url}?fit=fill&w=580&h=700`;

        return (
          <div key={i}>
            <Title>{project.fields.title}</Title>
            <a href={`projects/${project.fields.slug}`}>
              <img src={coverImage} alt="" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
