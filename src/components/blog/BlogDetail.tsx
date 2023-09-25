import React, { useEffect, useState } from 'react'
import { useBlogContext } from 'src/context/blogContext'
import { BlogTypes } from 'src/context/types/blog';
import { getFormatDate } from 'src/utils/helpers/getFormatDate';
import type { FacebookPost } from 'src/utils/types/types';
import { BlogDetailRelatedPost } from './blog-detail/BlogDetailRelatedPost';
import { BlogDetailComments } from './blog-detail/BlogDetailComments';
import { PAGES_PATH } from 'src/utils/types/pagesTypes';

export const BlogDetail = () => {
  const { state, dispatch }: any = useBlogContext();
  const [ relatedPosts, setRelatedPosts ] = useState<FacebookPost[]>();
  const [ animation, setAnimation ] = useState<boolean>(false);

  function relatedPostSetter() {
    if (state.facebookPostData?.length) {
      const filteredPosts = state.facebookPostData.filter((post: FacebookPost)=> post !== state.facebookPostDetail)
      let newRelatedPosts: FacebookPost[] = [];
      for (let i = 0; i < filteredPosts.length; i++) {
        if (i < 5 && filteredPosts[i]) {
          newRelatedPosts = [...newRelatedPosts, filteredPosts[i]];
        }
      }
      setRelatedPosts(newRelatedPosts)
    }
  }

  function doAnimation() {
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false);
    }, 500)
  }

  useEffect(() => {
    relatedPostSetter()
    doAnimation();
  }, [state.facebookPostDetail])
  
  return (
    <>
      <section className={`blog-detail ${animation ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="blog-thumb justify-content-center" >
                <img alt="facebook-post-image" src={state.facebookPostDetail.image.src} />
              </div>
              <h4 className="blog-title">
                {getFormatDate(state.facebookPostDetail.created_time)}
              </h4>
              <p className="blog-meta">
                {/* <em className="author">Aluplast</em> */}
                <em className="cate"><img src={state.facebookPostDetail.icon} alt="facebook-icon" /></em>
                <em className="time">Facebook</em>
              </p>
              <div className="blog-content">
                <p className="m-t-20">
                  {state.facebookPostDetail.description}
                </p>
                <div className='col-12 mt-3'>
                  <span className="d-flex justify-content-end">
                    <a style={{ color: '#e91d25' }} target='_blank' href={state.facebookPostDetail.target.url}>Ver publicación en Facebook</a>
                  </span>
                </div>
                {/* <blockquote className="blog-quote">
                  {state.facebookPostDetail.description}
                </blockquote> */}
                {/* <p className="m-b-20">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi mather
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                  vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                  expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                  id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p> */}
              </div>
              <div className="blog-footer">
                <div className="container clearfix">
                  <div className="tags pull-left m-l-20">
                    <a>Querés participar? Unite a nuestras redes!</a>
                    {/* <a href="#">Aluplast</a> */}
                  </div>
                  <div className="share pull-right">
                    <a href="#">
                      <i className="zmdi zmdi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="zmdi zmdi-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="zmdi zmdi-google"></i>
                    </a>
                    <a href="#">
                      <i className="zmdi zmdi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <BlogDetailComments comments={state.facebookPostDetail.comments} />
            </div>
            <div className="col-lg-4 col-md-5">
              <BlogDetailRelatedPost relatedPosts={relatedPosts} />
              <div className='col-12 mt-5'>
                <a href={`/${PAGES_PATH.NEWS_PATH}`} className="au-btn au-btn--pill au-btn--yellow au-btn--medium" style={{ color: 'white' }}>Volver a todas las noticias</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
