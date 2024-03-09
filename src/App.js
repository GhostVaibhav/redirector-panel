import { useEffect, useState } from "react";

function App() {
  const [url, seturl] = useState("")
  const id = window.location.pathname;

  useEffect(() => {
    async function execute() {
      const url = process.env.REACT_APP_API_URL + id;
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          seturl(data.redirect_to);
        })
        .catch(error => {
          console.log("Error fetching data from the server: " + url);
          console.log(error);
        });
    }

    execute();
  });

  if (url !== "")
    window.location.href = url;

  return (
    <>

    </>
  )
}

export default App;
