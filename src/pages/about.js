import React from 'react';
import client from '../contentful';
import Wrapper from '../components/Wrapper';

const About = () => {
  const [page, setPage] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'about',
      })
      .then((entries) => {
        setPage(entries.items[0]);
      });
  }, []);

  return (
    <Wrapper>
      <img
        src={page && page.fields.image.fields.file.url}
        alt={page && page.fields.image.fields.title}
        className="img-about"
      />
      <h1>{page && page.fields.title}</h1>
      <section className="text-wrapper">
        {page &&
          page.fields.information.content.map((text, i) => {
            return (
              <div key={i}>
                {text.content.map((paragraph, i) => (
                  <p key={i}>{paragraph.value}</p>
                ))}
              </div>
            );
          })}
      </section>
    </Wrapper>
  );
};

export default About;
