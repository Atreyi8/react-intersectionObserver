import { useRef, useEffect } from "react";

export const ImageComponent = ({ image, isLast, nextpage }) => {
  const imageRef = useRef();

  useEffect(() => {
    if (!imageRef?.current) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        console.log("last item in viewport");
        nextpage();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(imageRef.current);
  }, [imageRef, isLast]);
  return (
    <div style={{ minHeight: 200 }}>
      <img
        ref={imageRef}
        src={`${image.download_url}.jpg`}
        alt={image.author}
        width="200px"
      />
    </div>
  );
};
