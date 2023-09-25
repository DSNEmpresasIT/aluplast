import React, { useEffect, useState } from "react";
import ShopCardComponent from "./ShopCardComponent";
import { ShopNavComponent } from "./ShopNavComponent";
import { allCatalogData } from "src/utils/data/catalogData";
import { CatalogData, CatalogFiltersTypes } from "src/utils/types/types";
import { pagination } from "src/utils/helpers/pagination";

const initialState = [
  ...allCatalogData
].sort(function() { return Math.random() - 0.5 });

export const ShopComponent = ({ query }:any) => {
  const [ catalogData,  setCatalogData ] = useState<CatalogData[]>(initialState);
  const [ indexPagination, setIndexPagination ] = useState({ startIndex: 0, lastIndex: 6 });
  const [ dataPaginated, setDataPaginated ] = useState<CatalogData[]>(catalogData || []);

  const handleFilterNav = (productType: string, filterType: CatalogFiltersTypes) => {
    let newData: CatalogData[];
    if (filterType === CatalogFiltersTypes.SEARCH) {
      newData = allCatalogData.filter(product => product.name === productType);
    }
    if (filterType === CatalogFiltersTypes.PRODUCT_FILTER) {
      newData = allCatalogData.filter(product => product.filters.includes(productType));
    }
    if (filterType === CatalogFiltersTypes.IMG) {
      newData = allCatalogData.filter(product => product.img === productType);
    } 
    
    //@ts-ignore
    setCatalogData(newData);
    setIndexPagination({ startIndex: 0, lastIndex: 6 })
    return undefined;
  }

  const handlePagination = () => {
    setIndexPagination({
      startIndex: 0,
      lastIndex: indexPagination.lastIndex + 3
    })
  }

  useEffect(() => {
    if (query) {
      handleFilterNav(query, CatalogFiltersTypes.PRODUCT_FILTER);
    }    
  }, []);

  useEffect(() => {
    setDataPaginated(pagination(catalogData, indexPagination));
  }, [indexPagination, catalogData])

  return (
    <section className="pro-list-wrap">
      <div className="section-content section-content--w1140">
        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <ShopNavComponent setCatalogData={handleFilterNav} />
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="row">
                  {
                    dataPaginated?.map(product => {
                      return (
                        <ShopCardComponent product={product} key={product.name} />
                      )
                    })
                  }
                  {
                    (catalogData && indexPagination.lastIndex <= catalogData.length) && (
                      <div className="col-12 see-more">
                        <a 
                          onClick={handlePagination}
                          type='button' 
                          style={{ color: 'white', cursor: 'pointer' }} 
                          className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                        >
                          Cargar Más
                        </a>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          {/* <PaginationShopComponent />  */}
        </div>
      </div>
    </section>
  );
};
