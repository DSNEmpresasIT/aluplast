import React from 'react'
import { useBlogContext } from 'src/context/blogContext'
import { BlogTypes } from 'src/context/types/blog'
import { getFormatDate } from 'src/utils/helpers/helpers'
import type { FacebookPost } from 'src/utils/types/types'

export const BlogDetailRelatedPost = ({ relatedPosts }: { relatedPosts: FacebookPost[] | undefined }) => {
  const { _, dispatch }: any = useBlogContext()
  return (
    <div className="blog-sidebar">
      <div className="blog__recent">
        <h4 className="title-sidebar">
          Publcaciones recientes
        </h4>
        {
          relatedPosts?.map((relatedPost: FacebookPost) => {
            return (
              <div className="blog__recent-item clearfix" key={relatedPost.url}>
                <div className="img pull-left" style={{ overflow: 'hidden', maxHeight: '100px', minHeight: '100px' }}>
                  <a href='' onClick={(e) => (e.preventDefault(), dispatch({ type: BlogTypes.SET_FACEBOOK_POST_DETAIL, payload: relatedPost }))}>
                    <img alt="related-post-image" src={relatedPost.image.src} />
                  </a>
                </div>
                <div className="text">
                  <h6>
                    <a href='' onClick={(e) => (e.preventDefault(), dispatch({ type: BlogTypes.SET_FACEBOOK_POST_DETAIL, payload: relatedPost }))}>
                      {getFormatDate(relatedPost.created_time)}
                    </a>
                  </h6>
                  <p>
                    <em>Facebook, {relatedPost.comments?.length ?? '0'} Comentarios</em>
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
