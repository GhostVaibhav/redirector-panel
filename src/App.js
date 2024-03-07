import { useEffect, useState } from "react";

function App() {
  const [url, seturl] = useState("")

  useEffect(() => {
    async function execute() {
      const id = window.location.pathname.slice(1, 7);
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

  if(url !== "")
    window.location.href = url;
  
  return (
    <>

    </>
  )
}

export default App;
