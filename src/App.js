import { useEffect, useState } from "react";
import "./styles.css";
import { fetchImages } from "./utils/fetchImages";
import { ImageComponent } from "./components/imageComponent";

export default function App() {
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const nextpage = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    fetchImages(page).then((images) => {
      setImageList((prev) => [...prev, ...images]);
    });
  }, [page]);
  return (
    <div className="App">
      <h1>Images</h1>
      {imageList.map((image, index) => {
        return (
          <ImageComponent
            key={image.id}
            image={image}
            isLast={index === imageList.length - 1}
            nextpage={nextpage}
          />
        );
      })}
    </div>
  );
}
