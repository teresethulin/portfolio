import React from "react";
import client from "../contentful";
import Wrapper from "../components/Wrapper";

const Contact = () => {
  const [detail, setDetail] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "contact",
      })
      .then((entries) => {
        setDetail(entries.items[0]);
      });
    console.log(detail);
  }, []);

  if (!detail) {
    return <h6>Loading...</h6>;
  }

  return (
    <Wrapper>
      <h1>{detail.fields.title}</h1>
      <p>{detail.fields.text}</p>
      <p>{detail.fields.email}</p>
    </Wrapper>
  );
};

export default Contact;
