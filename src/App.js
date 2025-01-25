import { useEffect, useState } from "react";

function App() {
  const id = window.location.pathname;

  useEffect(() => {
    async function execute() {
      const data = {
        code: id.substring(1),
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
        body: JSON.stringify(data),
      };
      await fetch(process.env.REACT_APP_API_URL, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          window.location.href = data.redirect_to;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    execute();
  }, [id]);

  return <></>;
}

export default App;
