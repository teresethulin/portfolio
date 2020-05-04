import React from "react";
import client from "../contentful";

const SingleProject = (props) => {
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        setProject(entries.items[0]);
      });
  }, [props.slug]);

  if (!project) {
    return <h6>Loading...</h6>;
  }

  return (
    <div>
      <h1>{project.fields.title}</h1>
      <p>{project.fields.info}</p>
      {
        <img
          src={project.fields.coverImage.fields.file.url}
          alt=""
          style={{
            width: "auto",
            height: "80vh",
            objectFit: "cover",
          }}
        />
      }
    </div>
  );
};

export default SingleProject;
