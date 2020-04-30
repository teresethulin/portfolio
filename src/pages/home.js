import React from "react";
import client from "../contentful";

const Home = () => {
  const [project, setProjects] = React.useState(null);

  React.useEffect(() => {
    console.log(client);

    // Client.getEntries({
    //   content_type: "project",
    // }).then((entries) => {
    //   setProjects(entries.items);
    // });
  }, []);
};

export default Home;
