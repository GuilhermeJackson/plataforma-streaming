import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      slug
      title
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

function App() {
  useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  return <h1 className="text-8xl font-bold text-violet-500">Hello Word</h1>;
}

export default App;
