import React from 'react'
import ToolSVG from './assets/ToolSVG'

export const BlogErrorComponent = () => {
  return (
    <div className="blog1 animate__animated animate__fadeIn">
      <div className="container">
        <div className="clearfix row justify-content-center">
          <div className="col-lg-4 item design">
            <div className="blog-item">
              <div className="img-blog">
                <a href='' onClick={(e) => e.preventDefault()} style={{ maxHeight: '150px', minHeight: '150px' }}>
                  <ToolSVG />   
                </a>
              </div>
              <div className="blog-content">
                <h4 className="blog-title">
                  <a href='' onClick={(e) => (e.preventDefault())}>
                    <p>
                      El servicio no está disponible
                    </p>
                  </a>
                </h4>
                <p className="blog-meta">
                  <em className="author"></em>
                  <em className="cate"></em> 
                  <em className="time"></em>
                </p>
                <p style={{  overflow: 'hidden', textOverflow: 'ellipsis', minHeight: '100px', maxHeight: '100px'}}>
                  Ingrese nuevamente mas tarde
                </p>
                <div className='mt-3'>
                  <span className="col-12 d-flex justify-content-center">
                    <a style={{ color: '#e91d25' }} href="/">Volver a Home</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
