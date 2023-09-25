import React from 'react'
import { getFormatDate } from 'src/utils/helpers/getFormatDate'
import type { FacebookPostComments } from 'src/utils/types/types'
import ProfilePlaceholderImage from '../assets/profile-placeholder.jpg';

export const BlogDetailComments = ({ comments }: { comments: FacebookPostComments[] }) => {
  return (
    <div className="cmt-area">
      <h4 className="cmt-title">
        { comments?.length ?? '0'} Comentarios
      </h4>
      <ul className="cmt-list ul--no-style">
        {
          comments?.map((commentary: FacebookPostComments) => {
            return (
              <li className="clearfix" key={commentary.created_time}>
                <div className="user-img pull-left">
                  <img alt="facebook-commentary" src={commentary.from?.picture?.data?.url || ProfilePlaceholderImage} />
                </div>
                <div className="cmt-right">
                  <h5>
                    { commentary.from?.name || 'Usuario anónimo'}
                  </h5>
                  <div className="cmt-date">
                    <em>
                      {getFormatDate(commentary.created_time)}
                    </em>
                  </div>
                  <p>
                    {commentary.message}
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
