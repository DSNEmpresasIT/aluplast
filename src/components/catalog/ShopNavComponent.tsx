import { AccordionItem } from "@components/accordion/AccordionItem";
import React, { FC } from "react";
import { closersData, complementarySystemData, controlSolar, doorsData, garageDoorsData, resalesData, windowsData, windowsFatherData } from "src/utils/data/catalogData";
import { PAGES_PATH } from "src/utils/types/pagesTypes";
import { ProductFathersTypes, TypeProduct } from "src/utils/types/types";

const dataNav = [
  {
    title: "Aberturas",
    filter: ProductFathersTypes.OPENERS_TYPES,
    types: [
      {
        title: 'Ventanas',
        filter: TypeProduct.WINDOW_PRODUCT,
        subTypes: [
          ...windowsData.map(window => {
            return {
              title: window.name,
              filter: window.filters[2]
            }
          }).sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          })
        ]
      },
      {
        title: "Control solar",
        filter: ProductFathersTypes.SOLAR_CONTROL,
        types: [
          ...controlSolar.map(solar_control => {
            return {
              title: solar_control.name,
              filter: solar_control.filters[1]
            }
          }).sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          })
        ]
      },
      {
        title: 'Puertas',
        filter: TypeProduct.DOOR_PRODUCT,
        subTypes: [
          ...doorsData.map(door => {
            return {
              title: door.name,
              filter: door.filters[2]
            }
          }).sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          })
        ]
      }
    ]
  },
  {
    title: "Portones Garage",
    filter: ProductFathersTypes.GARAGE_DOORS,
    types: [
      ...garageDoorsData.map(window => {
        return {
          title: window.name,
          filter: window.filters[1]
        }
      }).sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    ]
  },
  {
    title: "Sistemas Complementarios",
    filter: ProductFathersTypes.CS_TYPES,
    types: [
     ...complementarySystemData.map(wall => {
      return {
        title: wall.name,
        filter: wall.filters[1]
      }
     }).sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    ]
  },
  {
    title: "Fachadas",
    filter: ProductFathersTypes.CLOSERS_TYPES,
    types: [
      ...closersData.map(wall => {
        return {
          title: wall.name,
          filter: wall.filters[1]
        }
      }).sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    ]
  },
  {
    title: "Reventas",
    filter: ProductFathersTypes.RESALES,
    types: [
      ...resalesData.map(resales => {
        return {
          title: resales.name,
          filter: resales.filters[1]
        }
      }).sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    ]
  },
  {
    title: "Vidrios",
    filter: ProductFathersTypes.SOLAR_CONTROL,
    types: [
      ...windowsFatherData.map(window => {
        return {
          title: window.name,
          filter: window.filters[1]
        }
      }).sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    ]
  },
  // {
  //   title: "Servicios",
  //   filter: ProductFathersTypes.SERVICES_TYPES,
  //   types: [
      
  //   ]
  // },
];

interface ShopNavComponentProps {
  setCatalogData: any;
}

export const ShopNavComponent:FC <ShopNavComponentProps> = ({ setCatalogData }) => {
  return (
    <div>
      <h4 className="title-sidebar">
        Productos
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          dataNav.map((item)=> {
            return (
              <AccordionItem data={item} setCatalogData={setCatalogData} key={item.title}/>
            )
          })
        }
      <a
        href={`/${PAGES_PATH.CATALOG_PATH}/${PAGES_PATH.TEXTURES}`} 
        className="accordion-main-button"
        style={{ color:'black'  }}
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
        Texturas
      </a>
      </div>
    </div>
  );
};
 