import React, { useState } from 'react'
import { ProjectBlog } from './ProjectBlog'
import type { ProjectDetail } from 'src/utils/types/types';
import { ProjectDetailComponent } from './ProjectDetail';

export const ProjectRouter = () => {
  const [ projectDetail, setProjectDetail ] = useState<ProjectDetail | undefined>();
  return (
    <>
      <section className="breadcrumbs-wrap" style={{ marginTop: '13vh' }}>
        <div className="section-content section-content--w1140">
          <div className="container clearfix">
            <div className="breadcrumbs-inner">
              <ul className="breadcrumbs1 ul--inline ul--no-style">
                <li>
                  <a href="/">Home</a>
                </li>
                <span className="span-active"> / </span>
                <li>
                  <a>Proyectos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        { !projectDetail && <h3 style={{ textAlign: 'center' }}>Algunos de nuestros proyectos</h3> }
      </section>
      { projectDetail ? <ProjectDetailComponent projectDetail={projectDetail} setProjectDetail={setProjectDetail} /> : <ProjectBlog setProjectDetail={setProjectDetail} /> }
    </>
  )
}
