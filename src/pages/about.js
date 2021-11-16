import React from 'react';
import client from '../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Wrapper from '../components/Wrapper';

const About = () => {
  const [page, setPage] = React.useState(null);
  const [textValue, setTextValue] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'about',
      })
      .then((entries) => {
        setPage(entries.items[0]);
        setTextValue(entries.items[0].fields.info);
      });
  }, []);

  const document = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: textValue,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };

  return (
    <Wrapper>
      <img
        src={page && page.fields.image.fields.file.url}
        alt={page && page.fields.image.fields.title}
        className="img-about"
      />
      <h1>{page && page.fields.title}</h1>
      <section className="text-wrapper">
        {documentToReactComponents(document)}
      </section>
    </Wrapper>
  );
};

export default About;
