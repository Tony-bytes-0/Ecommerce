import React, { useEffect, useState } from "react";
import { Modal, Carousel } from "antd";
//import 'antd/dist/antd.css'; // Import Ant Design CSS
import { ProductImageArray } from "../types/product";
import getImageFromUrl from "../helpers/getImageFromUrl";

interface ModalGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  //images: string[];
  images: ProductImageArray;
  example: any;
}
const ModalGallery: React.FC<ModalGalleryProps> = ({
  isOpen,
  onClose,
  images,
  example
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //const [example, setExample] = useState<any>()

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.images.length) % images.images.length
    );
  };
/*   const downloadImage = async () => {
    console.log('route suministrado: ', images.images[0].url)
    const response = await getImageFromUrl(images.images[0].url)
    console.log(response)
    setExample(response)
  }

  

  useEffect(() => {
    {
        isOpen ? downloadImage() : console.log('no')
    }
    
  }, []) */

  return (
    <Modal
      title="Image Gallery"
      open={isOpen}
      footer={null}
      onCancel={onClose}
      width={800}
    >
        <img
        src={example}
        alt='example!!'
        style={{ width: "100%", height: "auto", maxHeight: "600px" }}
        >
        </img> 
      <Carousel
        dots={true}
        arrows={true}
        //current={currentImageIndex}
        afterChange={(slide) => setCurrentImageIndex(slide)}
      >
{/*         {images.images.map((e, index) => (
          <div key={index}>
            <img
              src={e.url}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "auto", maxHeight: "600px" }}
            />
          </div>
        ))} */}
      </Carousel>
    </Modal>
  );
};

export default ModalGallery;
