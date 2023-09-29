import React, { useEffect, useState } from 'react'
import { useBlogContext } from 'src/context/blogContext';
import { BlogTypes } from 'src/context/types/blog';
import type { FacebookPost, Keys } from 'src/utils/types/types';
import { getFormatDate } from 'src/utils/helpers/getFormatDate';
import { pagination } from 'src/utils/helpers/pagination';
import { getFacebookImagePosts, getFacebookPageToken } from 'src/services/facebook-services';

export const BlogPosts = ({ keys }: { keys: Keys }) => {
  const [ posts, setPosts ] = useState<FacebookPost[]>();
  const [ postsPaginated, setPostsPaginated ] = useState<FacebookPost[]>();
  const [ indexPagination, setIndexPagination ] = useState({ startIndex: 0, lastIndex: 3 });
  const [ pageAccessToken, setPageAccessToken ] = useState<string>();

  useEffect(() => {
    if (keys?.FACEBOOK_PAGE_ID && keys?.FACEBOOK_TOKEN) {
      getFacebookPageToken(keys?.FACEBOOK_TOKEN, keys.FACEBOOK_PAGE_ID)
        .then(res => setPageAccessToken(res.access_token))
        .catch(error => {
          console.log(error)
        })
    }
  },[keys]);

  useEffect(() => {
    if (pageAccessToken) {
      getFacebookImagePosts(pageAccessToken, keys.FACEBOOK_PAGE_ID)
        .then(res => {
          setPosts(res)
        })
        .catch(error => {
          console.log(error)
        });
    }
  },[pageAccessToken])

  const handlePagination = () => {
    setIndexPagination({
      startIndex: 0,
      lastIndex: indexPagination.lastIndex + 3
    })
  }

  useEffect(() => {
    if (posts) {
      setPostsPaginated(pagination(posts, indexPagination))
    }
  }, [posts, indexPagination])
  return (
    <>
      <div className="blog1 animate__animated animate__fadeIn">
        <div className="container">
          <div className="clearfix row justify-content-center">
            {
              postsPaginated?.map((post: any) => {
                return (
                  <div key={post.target.id} className="col-lg-4 item design mt-5 animate__animated animate__fadeIn">
                    <div className="blog-item">
                      <div className="img-blog">
                        <a href={`/ultimas-noticias-aluplast/${post.id}`}  style={{ overflow: 'hidden', maxHeight: '150px', minHeight: '150px' }}>
                          <img alt="Blog 1" src={post.image.src} />
                        </a>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <a href={`/ultimas-noticias-aluplast/${post.id}`}>
                            <p>
                              {getFormatDate(post.created_time)}
                            </p>
                          </a>
                        </h4>
                        <p className="blog-meta">
                          <em className="author">Aluplast</em>
                          <em className="cate">Facebook</em> 
                          <em className="time">{post?.comments?.length ?? '0'} Comentarios</em>
                        </p>
                        <p style={{  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxHeight: '100px'}}>
                          {post.description}
                        </p>
                        <div className='mt-3'>
                          <span className="col-12 d-flex justify-content-center">
                            <a href={`/ultimas-noticias-aluplast/${post.id}`} style={{ color: '#e91d25', cursor: 'pointer' }} >Ver publicación</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            {
            !(posts && indexPagination.lastIndex >= posts.length) && (
              <div className="see-more">
                <a 
                  onClick={handlePagination}
                  type='button' 
                  style={{ color: 'white', cursor: 'pointer' }} 
                  className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                >
                  Cargar Más
                </a>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </>
  )
}
