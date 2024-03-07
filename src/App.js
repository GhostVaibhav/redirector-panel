import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const [url, seturl] = useState("")
  const { id } = useParams();

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

  if(url !== "")
    window.location.href = url;
  
  return (
    <>

    </>
  )
}

export default App;
