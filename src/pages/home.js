import React from "react";
import Client from "contentful";

const Home = () => {
  const [project, setProjects] = React.useState(null);

  React.useEffect(() => {
    Client.getEntries({
      content_type: "project",
    }).then((entries) => {
      setProjects(entries.items);
    });
  }, []);
};
