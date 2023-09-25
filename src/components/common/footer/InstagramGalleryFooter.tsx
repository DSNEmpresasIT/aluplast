import React, { useEffect, useState } from "react";
import { getInstagramImages } from "src/services/instagram-services";

interface InstagramObject {
  id: string;
  media_url: string;
  permalink: string;
}

export const InstagramGalleryFooter = ({ instagramToken }: any) => {
  const [ imagesData, setImagesData ] = useState<InstagramObject[]>();

  useEffect(() => {
    getInstagramImages(instagramToken)
      .then((response) => setImagesData(response))
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <div className="col-lg-4 col-md-6">
      <h5 className="title-footer m-b-30">Instagram</h5>
      <div className="gallery clearfix">
        {
          imagesData 
          ? (
            imagesData.map((img, i) => {
              if (i < 9) {
                return (
                  <div className="gallery__item" key={`${img.id}${i}`}>
                    <img alt={`Gallery ${i+1}`} src={img.media_url} style={{ maxHeight: '82.5px', minWidth: '82.5px', minHeight: '82.5px' }}/>
                    <a href={img.permalink} target="_blank" rel="noreferrer" className="pro-link">
                      <div className="overlay overlay--invisible overlay--yellow"></div>
                    </a>
                  </div>
                )
              }
            })
          )
          : (
            <span style={{ marginTop: '30px' }} className='page-loader__spin'></span>   
          )
        }
      </div>
      <h5 className="title-footer">Nuestra redes</h5>
      <div className="social-footer">
        <a href="https://www.facebook.com/AluplastAberturas">
          <i className="zmdi zmdi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/aluplast.aberturas/">
          <i className="zmdi zmdi-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@aluplastmedia">
          <i className="zmdi zmdi-youtube"></i>
        </a>
        <a href="https://wa.me/+5493446598417">
          <i className="zmdi zmdi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};
