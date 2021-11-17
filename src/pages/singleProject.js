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
        setProject(entries.items[0]);
      });
  }, [props.slug]);

  return (
    <Wrapper>
      {
        <img
          src={project && project.fields.coverImage.fields.file.url}
          alt=""
          style={{
            width: '90vw',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      }
      <p className="project-category">{project && project.fields.category}</p>
      <h1 className="project-title">{project && project.fields.title}</h1>
      <p className="project-text">{project && project.fields.info}</p>
    </Wrapper>
  );
};

export default SingleProject;
