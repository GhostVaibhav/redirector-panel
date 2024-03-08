import { useEffect, useState } from "react";

function App() {
  const [url, seturl] = useState("")
  let id = window.location.pathname.slice(1, 7);

  useEffect(() => {
    async function execute() {
      await fetch(process.env.REACT_APP_API_URL + "/" + id)
        .then(response => response.json())
        .then(data => {
          seturl(data.redirect_to);
        })
        .catch(error => {
        })
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
