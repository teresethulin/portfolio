import React from 'react';
import client from '../contentful';
import Wrapper from '../components/Wrapper';

const SingleProject = (props) => {
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'project',
        'fields.slug': props.slug,
      })
      .then((entries) => {
        console.log(entries);
        setProject(entries.items[0]);
      });
  }, [props.slug]);

  return (
    <Wrapper>
      {
        <img
          src={project && project.fields.coverImage.fields.file.url}
          alt={project && project.fields.title}
          className="hero-image"
        />
      }
      <p className="project-category">{project && project.fields.category}</p>
      <h1 className="project-title">{project && project.fields.title}</h1>
      {project &&
        project.fields.description.content.map((text, i) => {
          return (
            <div key={i}>
              {text.content.map((paragraph, i) => (
                <p key={i}>{paragraph.value}</p>
              ))}
            </div>
          );
        })}
      <section className="grid">
        {project &&
          project.fields.media.map((image, i) => {
            return (
              <img
                key={i}
                src={image.fields.file.url}
                alt=""
                className="grid-image"
              />
            );
          })}
      </section>
    </Wrapper>
  );
};

export default SingleProject;
