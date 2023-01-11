import axios from "axios";
import { useEffect, useState } from "react";
import config from "./config";

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   setIsLoading(true);
   axios.get(
    `https://api.unsplash.com/photos/?client_id=${config.Image_Gallery_Client_ID}&page=${page}`
  )
      .then((res) => {
        setImages((prevState) => [...res.data]);
        setIsLoading(false);
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (<>
    <h2>CopyWrite_Free Image Gallery</h2>
    <div className="App">
      {images?.map((image, i) => {
        return (
          <div className="img-wrapper" key={i}>
            <img src={image?.urls?.thumb} alt={image.alt_description} />
          </div>
        );
      })}
    </div>
  </>
  
  
  
  
  
  )
}

export default App;