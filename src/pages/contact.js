import React from 'react';
import client from '../contentful';

const Contact = () => {
  const [detail, setDetail] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'contact',
      })
      .then((entries) => {
        setDetail(entries.items[0]);
      });
  }, []);

  return (
    <section className="contact-wrapper">
      <h1>{detail && detail.fields.title}</h1>
      <p>{detail && detail.fields.text}</p>
      <p>{detail && detail.fields.email}</p>
    </section>
  );
};

export default Contact;
