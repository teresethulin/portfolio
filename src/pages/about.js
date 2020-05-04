import React from "react";
import client from "../contentful";
import Wrapper from "../components/Wrapper";

const About = () => {
  const [page, setPage] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "about",
      })
      .then((entries) => {
        setPage(entries.items[0]);
      });
  }, []);
  console.log(page);

  if (!page) {
    return <h6>Loading...</h6>;
  }

  return (
    <Wrapper>
      <h1>{page.fields.title}</h1>
      <p>{page.fields.info}</p>
    </Wrapper>
  );
};

export default About;
