import React, { useEffect, useState } from "react";
import ShopCardComponent from "./ShopCardComponent";
import { ShopNavComponent } from "./ShopNavComponent";
import { allCatalogData } from "src/utils/data/catalogData";
import { CatalogFiltersTypes } from "src/utils/types/types";
import type { CatalogData, ProductFathersTypes } from "src/utils/types/types";
import { getProdutTypeText, pagination } from "src/utils/helpers/helpers";
import { getProductTypeName } from "src/utils/helpers/helpers";

const initialState = [
  ...allCatalogData
].sort(() => { return Math.random() - 0.5 });

export const ShopComponent = ({ query }:any) => {
  const [ filters, setFilters ] = useState<ProductFathersTypes[]>([]);
  const [ catalogData,  setCatalogData ] = useState<CatalogData[]>(initialState);
  const [ indexPagination, setIndexPagination ] = useState({ startIndex: 0, lastIndex: 6 });
  const [ dataPaginated, setDataPaginated ] = useState<CatalogData[]>(catalogData || []);

  const handleToggleFilters = (filter: ProductFathersTypes) => {
    if (filters.includes(filter)) {
      setFilters([...filters.filter(item => item !== filter)])      
    } else {
      setFilters([...filters, filter]);
    }

    return undefined;
  }

  const handleFilterData = () => {
    let newData: CatalogData[] = [];

    filters.forEach((filter) => {
      const data = allCatalogData.filter((product) => product.filters.includes(filter))
      if (data.length) {
        newData = [...newData, ...data]
      }
    })
    setCatalogData(newData.sort(() => { return Math.random() - 0.5 }));
    setIndexPagination({ startIndex: 0, lastIndex: 6 })
    return undefined
  }

  const handleSearchByName = (name: string) => {
    const newData = allCatalogData.filter(product => product.name === name);
    
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
      setFilters([...filters, query])
    }    
  }, [query]);

  useEffect(() => {
    setDataPaginated(pagination(catalogData, indexPagination));
  }, [indexPagination, catalogData]);

  useEffect(() => {
    if (filters.length) {
      handleFilterData();
    } else {
      setCatalogData(initialState)
    }
  }, [filters])

  return (
    <section className="pro-list-wrap">
      <div className="section-content section-content--w1140" style={{ width: '100%' }}>
        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <ShopNavComponent handleToggleFilter={handleToggleFilters} filters={filters} />
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  {
                    filters.length === 1 && (
                      <div className="col-12 animate__animated animate__fadeIn">
                        <div className="blog__about">
                          <h4 className="title-sidebar">
                            {getProductTypeName(filters[0])}
                          </h4>
                          <p className="animate__animated animate__fadeIn">
                            {getProdutTypeText(filters[0])}
                          </p>
                        </div>
                      </div>
                    )
                  }
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
