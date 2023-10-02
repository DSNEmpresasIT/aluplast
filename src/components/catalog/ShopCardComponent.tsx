import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { getThePlaceholderImage } from "src/utils/helpers/getPlaceholderImage";
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

  useEffect(() => product.img ? setImg(`/img/products/${product.img}/${product.img}.png`) : setImg(getThePlaceholderImage(product.filters)) , [product.img]);
  useEffect(() => isHome ? setLink(`/${PAGES_PATH.CATALOG_PATH}`) : setLink(`/${PAGES_PATH.PRODUCT_PATH}/${product.name}`), [product.name, isHome])
  useEffect(() => isHome ? setTextButton('Ver en Catálogo') : setTextButton('Ver Detalle'), [isHome]);
  useEffect(() => product.name ? setProductName(product.name) : setProductName('Producto') , [product.name]);

  return (
    <div className="col-lg-4 col-md-6 col-12 animate__animated animate__fadeIn">
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
          <h5>
            <a href="single-product.html" style={{ textTransform: 'none' }}>{productName}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ShopCardComponent;
