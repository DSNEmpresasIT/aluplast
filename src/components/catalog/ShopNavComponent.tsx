import React, { useState, type FC, useEffect } from "react";
import { allCatalogData  } from "src/utils/data/catalogData";
import { ProductFathersTypes, TypeProduct } from "src/utils/types/types";
import { getProductTypeName } from "src/utils/helpers/helpers";
import { SearchComponent } from "./SearchComponent";


const navData = [
  {
    name: getProductTypeName(ProductFathersTypes.OPENERS_TYPES),
    filter: ProductFathersTypes.OPENERS_TYPES,
    subCategories: [
      {
        name: getProductTypeName(TypeProduct.DOOR_PRODUCT),
        filter: TypeProduct.DOOR_PRODUCT,
      },
      {
        name: getProductTypeName(TypeProduct.WINDOW_PRODUCT),
        filter: TypeProduct.WINDOW_PRODUCT
      }
    ]
  },
  {
    name: getProductTypeName(ProductFathersTypes.CLOSERS_TYPES),
    filter: ProductFathersTypes.CLOSERS_TYPES
  },
  {
    name: getProductTypeName(ProductFathersTypes.CS_TYPES),
    filter: ProductFathersTypes.CS_TYPES
  },
  {
    name: getProductTypeName(ProductFathersTypes.WINDOWS),
    filter: ProductFathersTypes.WINDOWS
  },
  {
    name: getProductTypeName(ProductFathersTypes.GARAGE_DOORS),
    filter: ProductFathersTypes.GARAGE_DOORS
  },
  {
    name: getProductTypeName(ProductFathersTypes.RESALES),
    filter: ProductFathersTypes.RESALES
  },
  {
    name: getProductTypeName(ProductFathersTypes.SOLAR_CONTROL),
    filter: ProductFathersTypes.SOLAR_CONTROL
  },
  
]

interface ShopNavComponentProps {
  handleToggleFilter: (string: ProductFathersTypes) => void;
  filters: ProductFathersTypes[];
  totalProducts: number;
  setSearchQuery: (query: string | null) => void;
}

export const ShopNavComponent:FC <ShopNavComponentProps> = ({ handleToggleFilter, filters, totalProducts, setSearchQuery }) => {
  const [ subCategories, setSubCategories ] = useState<any>(); 
  
  const handleSetFilters = (data: any) => {
    handleToggleFilter(data.filter)
    setSubCategories(data.subCategories);  
  }
  
  const handleResetFilters = () => {
    // @ts-ignore
    handleToggleFilter(null)
    setSubCategories(null);  
  }

  return (
    <div className="blog-sidebar" style={{ display: "flex", flexDirection: 'column', marginTop: '15px' }}>
      <SearchComponent setSearchQuery={setSearchQuery} />
      {
        filters.length > 0 && (
          <div className="blog__tag-wrap animate__animated animate__fadeIn">
            <h4 className="title-sidebar">
              Productos {filters.map(filter => filter + ' ')}
            </h4>
            <span>{totalProducts} resultados</span>
            <div className="blog__tag mt-3">
              {
                filters.map(filter => {
                  return (
                    <a 
                      className="animate__animated animate__fadeIn"
                      key={`shop-nav-filters-${filter}`} 
                      href="" 
                      onClick={(e) =>(e.preventDefault(), handleSetFilters(filter))}
                    >
                      {getProductTypeName(filter)} <span style={{ marginLeft: '4px' }}>x</span>
                    </a>
                  )
                })
              }
            </div>
            <a 
              style={{ width: '100%', cursor: 'pointer', color: '#0a75ba', marginTop: '15px' }} 
              type="button"
              onClick={handleResetFilters}
            >
              Limpiar filtros
            </a>
          </div>
        )
      }
      {
        !filters.length ? (
          <ul className="blog__cate ul--no-style" style={{ marginTop: '25px' }}>
            <h4 className="title-sidebar">
              Categorias
            </h4>
            {
              navData?.map((buttonData) => {
                return (
                  <li 
                    key={`shop-nav-${buttonData.name}`} 
                    style={{ cursor: 'pointer', color: filters.includes(buttonData.filter) ? 'red' : '' }} 
                    onClick={() => handleSetFilters(buttonData)}
                  >
                    <a type="button">
                      {buttonData.name}
                      <span>
                        <em>({allCatalogData.filter(product => product.filters.includes(buttonData.filter)).length})</em>
                      </span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        ) : ''
      }
      {
        subCategories && (
          <ul className="blog__cate ul--no-style">
            <h4 className="title-sidebar">
              Tipos de {filters[0]}
            </h4>
            {
              subCategories?.map((buttonData: any) => {
                return (
                  <li 
                    key={`shop-nav-${buttonData.name}`} 
                    style={{ cursor: 'pointer', color: filters.includes(buttonData.filter) ? 'red' : '' }} 
                    onClick={() => handleSetFilters(buttonData)}
                  >
                    <a type="button">
                      {buttonData.name}
                      <span>
                        <em>({allCatalogData.filter(product => product.filters.includes(buttonData.filter)).length})</em>
                      </span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        )
      }
    </div>
  );
};
 