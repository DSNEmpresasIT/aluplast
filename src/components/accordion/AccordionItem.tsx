import React, { useState } from 'react'
import './accordion.css';
import { CatalogFiltersTypes } from 'src/utils/types/types';

const AccordionChildComponent = ({ subType, setCatalogData }: any) => {
  const [ showSubTypes, setShowSubTypes ] = useState(false);
  return (
    <div>
      <button 
        className='accordion-sub-button' 
        onClick={() => setShowSubTypes(!showSubTypes)}
        style={{ color: showSubTypes ? 'red' : 'black'  }}
      >
        { subType.subTypes &&  <i className="fa fa-chevron-right" style={{ transform: showSubTypes ? "rotate(90deg)" : 'none' }} aria-hidden="true"></i> }
        {subType.title}
      </button>
      <div className={`accordion-main-body ${showSubTypes && 'show-content'}`} style={{ display: showSubTypes ? 'inline-flex' : 'none' }} >
        <button
          type='button'
          id={subType.filter}
          className='accordion-sub-button'
          onClick={() => setCatalogData(subType.filter, CatalogFiltersTypes.PRODUCT_FILTER)}
        >
          Mostrar todos
        </button>
        {
          subType.subTypes.map((item: any) => {
            return (
              <button 
                key={item.title} 
                id={item.filter}
                style={{ fontWeight: '400' }} 
                onClick={() => setCatalogData(item.filter, CatalogFiltersTypes.PRODUCT_FILTER)}
                className='accordion-sub-button'
              >
                {item.title}
              </button>
            )
          })
        }
      </div> 
    </div>
  )
}

export const AccordionItem = ({ data, setCatalogData }: any) => {
  const [ showSubTypes, setShowSubTypes ] = useState(false)
  return (
    <div>
      <button 
        className="accordion-main-button"
        type='button'
        onClick={() => data.types && setShowSubTypes(!showSubTypes)}
        style={{ color: showSubTypes ? 'red' : 'black'  }}
      >
        <i className="fa fa-chevron-right" style={{ transform: showSubTypes ? "rotate(90deg)" : 'none' }} aria-hidden="true"></i>
        {data.title}
      </button>
      <div className={`accordion-main-body ${showSubTypes && 'show-content'}`} >
        <button 
          type='button' 
          id={data.filter}
          className='accordion-sub-button'
          onClick={() => setCatalogData(data.filter, CatalogFiltersTypes.PRODUCT_FILTER)}
        >
          Mostrar todos
        </button>
        {
          data.types?.map((item: any) => {
            return (
              (item?.subTypes?.length > 0) 
              ? (<AccordionChildComponent subType={item} key={item.title} setCatalogData={setCatalogData} />) 
              : (
                  <button 
                    className="accordion-sub-button" 
                    key={item.title}
                    id={item.filter}
                    onClick={() => setCatalogData(item.filter, CatalogFiltersTypes.PRODUCT_FILTER)}
                  >
                    {item.title}
                  </button>
                )
              )
            }
          )
        }
      </div>
    </div>
  )
}
