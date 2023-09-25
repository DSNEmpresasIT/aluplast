import React, { useEffect, useState } from 'react'
import { BlogPosts } from './BlogPosts'
import { useBlogContext } from 'src/context/blogContext'
import { BlogDetail } from './BlogDetail'
import { BlogTypes } from 'src/context/types/blog'
import type { Keys } from 'src/utils/types/types'
import { getFacebookImagePosts, getFacebookPageToken } from 'src/services/facebook-services'
import { SkeletonLoaderComponent } from './SkeletonLoaderComponent'
import { BlogErrorComponent } from './BlogErrorComponent'

export const BlogRouter = ({ keys }: {keys: Keys}) => {
  const { state, dispatch }: any = useBlogContext();
  const [ pageAccessToken, setPageAccessToken ] = useState<string>();
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ error, setError ]= useState<boolean>(false);

  useEffect(() => {
    if (state.keys?.FACEBOOK_PAGE_ID && state.keys?.FACEBOOK_TOKEN) {
      getFacebookPageToken(state?.keys?.FACEBOOK_TOKEN, state.keys.FACEBOOK_PAGE_ID)
        .then(res => setPageAccessToken(res.access_token))
        .catch(error => {
          setError(true)
          setIsLoading(false)
          console.log(error)
        })
    }
  },[state.keys]);

  useEffect(() => {
    if (pageAccessToken) {
      getFacebookImagePosts(pageAccessToken, state.keys.FACEBOOK_PAGE_ID)
        .then(res => {
          dispatch({ type: BlogTypes.SET_FACEBOOK_POSTS, payload: res })
          setIsLoading(false);
        })
        .catch(error => {
          setError(true)
          setIsLoading(false)
          console.log(error)
        });
    }
  },[pageAccessToken])

  useEffect(() => {
    dispatch({ type: BlogTypes.SET_KEYS, payload: keys });
  }, [keys]);

  return (
    <>
      {
        state.facebookPostDetail 
        ? (<BlogDetail />)
        : ( isLoading 
            ? <SkeletonLoaderComponent /> 
            : (
              error 
              ? <BlogErrorComponent />
              : <BlogPosts />
            ) 
          )
      }
    </>
  )
}
