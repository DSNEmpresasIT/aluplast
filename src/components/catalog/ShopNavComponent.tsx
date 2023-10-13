import React, { type FC } from "react";
import { allCatalogData  } from "src/utils/data/catalogData";
import { ProductFathersTypes } from "src/utils/types/types";
import { getProductTypeName } from "src/utils/helpers/getProductTypesNames";


const navData = [
  {
    name: getProductTypeName(ProductFathersTypes.OPENERS_TYPES),
    filter: ProductFathersTypes.OPENERS_TYPES
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
}

export const ShopNavComponent:FC <ShopNavComponentProps> = ({ handleToggleFilter, filters }) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column' }}>
      {
        filters.length > 0 && (
          <div className="blog__tag-wrap animate__animated animate__fadeIn">
            <h4 className="title-sidebar">
              Filtros
            </h4>
            <div className="blog__tag">
              {
                filters.map(filter => {
                  return (
                    <a 
                      className="animate__animated animate__fadeIn"
                      key={`shop-nav-filters-${filter}`} 
                      href="" 
                      onClick={(e) =>(e.preventDefault(), handleToggleFilter(filter))}
                    >
                      {getProductTypeName(filter)} <span style={{ marginLeft: '4px' }}>x</span>
                    </a>
                  )
                })
              }
            </div>
          </div>
        )
      }
      <ul className="blog__cate ul--no-style">
        <h4 className="title-sidebar">
          Categorias
        </h4>
        {
          navData?.map((buttonData) => {
            return (
              <li key={`shop-nav-${buttonData.name}`} style={{ cursor: 'pointer', color: filters.includes(buttonData.filter) ? 'red' : '' }} onClick={() => handleToggleFilter(buttonData.filter)}>
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
    </div>
  );
};
 