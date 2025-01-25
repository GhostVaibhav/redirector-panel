import { useEffect, useState } from "react";

function App() {
  const [url, seturl] = useState("");
  const id = window.location.pathname;

  useEffect(() => {
    async function execute() {
      const data = {
        code: id,
      };
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
        body: JSON.stringify(data),
      };
      await fetch(process.env.REACT_APP_API_URL, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          seturl(data.redirect_to);
        })
        .catch((error) => {
          console.log("Error fetching data from the server: " + url);
          console.log(error);
        });
    }

    execute();
  });

  if (url !== "") window.location.href = url;

  return <></>;
}

export default App;
