import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { getThePlaceholderImage } from "src/utils/helpers/helpers";
import { getProductTypeName } from "src/utils/helpers/helpers";
import { PAGES_PATH } from "src/utils/types/pagesTypes";
import type { CatalogData } from "src/utils/types/types";

interface ShopCardComponentProps {
  product: CatalogData;
  isHome?: boolean;
}

const ShopCardComponent:FC<ShopCardComponentProps> = ({ product, isHome = false }) => {
  const [ img, setImg ] = useState<string>();
  const [ link, setLink ] = useState<string>();
  const [ textButton, setTextButton ] = useState<string>();
  const [productName, setProductName ] = useState<string>();

  useEffect(() => {
    if (product.img && product.img[0]) {
      setImg(`/img/products/${product.img[0]}.png`)
    } else {
      setImg(getThePlaceholderImage(product.filters)) 
    }
  }, [product.img]);
  useEffect(() => isHome ? setLink(`/${PAGES_PATH.CATALOG_PATH}`) : setLink(`/${PAGES_PATH.PRODUCT_PATH}/${product.name}`), [product.name, isHome])
  useEffect(() => isHome ? setTextButton('Ver en Catálogo') : setTextButton('Ver Detalle'), [isHome]);
  useEffect(() => product.name ? setProductName(product.name) : setProductName('Producto') , [product.name]);

  return (
    <div className="col-lg-4 col-md-6 col-12 animate__animated animate__fadeIn" style={{ maxHeight: '430px', minHeight: '430px' }}>
      <div className="pro__item">
        <div className="pro__img">
          <img alt="Product 1" src={img} />
          <div className="pro-link">
            <div className="pro-info pro-info--dark pro-info--center">
              <a
                href={link}
                className="au-btn au-btn--pill au-btn--big au-btn--yellow pro__add"
                style={{ color: 'white'}}
              >
                {textButton}
              </a>
            </div>
          </div>
        </div>
        <div className="pro__detail">
          <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
            <span style={{ fontSize: '10px', color: 'red' }}>{getProductTypeName(product.filters[0])}</span>
            <span style={{ fontSize: '10px', color: 'green' }}>Nuevo</span>
          </p>
          <h5 style={{ height: '40px' }}>
            <a href="single-product.html" style={{ textTransform: 'none' }}>{productName}</a>
          </h5>
          <a
            href={link}
            className="au-btn au-btn--pill au-btn--yellow"
            style={{ color: 'white', maxWidth: '120px', maxHeight: '40px', lineHeight: '30px', borderRadius: '10px', backgroundColor: '#0a75ba' }}
          >
            Ver producto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopCardComponent;
