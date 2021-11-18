import React from 'react';
import { Link } from '@reach/router';
import client from '../contentful';
import CoverImage from '../components/CoverImage';
import Wrapper from '../components/Wrapper';

const Home = () => {
  const [projects, setProjects] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'project',
      })
      .then((entries) => {
        setProjects(entries.items);
      });
  }, []);

  return (
    <Wrapper>
      {projects &&
        projects.map((project, i) => {
          return (
            <Link to={project.fields.slug} key={i} className="cover-image-link">
              <CoverImage
                image={project.fields.coverImage.fields.file.url}
                alt={project.fields.title}
              ></CoverImage>
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Home;
