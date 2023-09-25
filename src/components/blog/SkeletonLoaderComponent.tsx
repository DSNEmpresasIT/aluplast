import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoaderComponent = () => {
  return (
    <div className="blog1 animate__animated animate__fadeIn">
      <div className="container">
        <div className="clearfix row justify-content-center">
          <div className="col-lg-4 item design">
            <Skeleton count={1} style={{ height: "150px" }} />
            <Skeleton count={4} />
          </div>
          <div className="col-lg-4 item design">
            <Skeleton count={1} style={{ height: "150px" }} />
            <Skeleton count={4} />
          </div>
          <div className="col-lg-4 item design">
            <Skeleton count={1} style={{ height: "150px" }} />
            <Skeleton count={4} />
          </div>
        </div>
      </div>
    </div>
  )
}
