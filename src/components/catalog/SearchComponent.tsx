import React, { useState } from 'react'

export const SearchComponent = ({ setSearchQuery }: { setSearchQuery: (s: string | null) => void;}) => {

  const handleSearch = (e: any) => {
    const search: string = e.target.value;
    // const filter = allData.filter( product => (
    //   product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) 
    //   || (product.formulacion && product.formulacion.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    // )
    
    // search.length ? setProductData(filter) : setProductData(allData);
    setSearchQuery(search ?? null);
  }
  return (
    <div className="blog__search" style={{ width: '70%' }}>
      <h4 className="title-sidebar">
        Buscar
      </h4>
      <form role="search" className="search-form">
        <input type="text" name="search" onChange={handleSearch} placeholder="Buscar aquí" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  )
}
