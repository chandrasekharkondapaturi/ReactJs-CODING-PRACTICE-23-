// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link className="link" to={`/blogs/${id}`}>
      <li className="container">
        <div className="blog-item-container">
          <div className="img-container">
            <img className="img" src={imageUrl} alt={title} />
          </div>
          <div className="content-container">
            <p>{topic}</p>
            <h1 className="head">{title}</h1>
            <img className="avatar" src={avatarUrl} alt={author} />

            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
