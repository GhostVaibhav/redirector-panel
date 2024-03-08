import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const [url, seturl] = useState("")
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    async function execute() {
      const api_url = process.env.REACT_APP_API_URL;
      await fetch(api_url + "/" + id)
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
