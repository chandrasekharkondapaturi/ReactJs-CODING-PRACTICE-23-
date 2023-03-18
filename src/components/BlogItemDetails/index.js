// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

/* const blogData = {
  title: 'Blog Name',
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
  avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
  author: 'Author Name',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
} */

class BlogItemDetails extends Component {
  state = {blog: [], isLoader: true}

  componentDidMount() {
    this.getBlog()
  }

  getBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      author: data.author,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({blog: updatedData, isLoader: false})
  }

  render() {
    const {blog, isLoader} = this.state
    const {title, author, imageUrl, avatarUrl, content} = blog
    return (
      <div className="blog-details-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <h1 className="heading">{title}</h1>

            <div className="author-container">
              <img className="avatar" src={avatarUrl} alt={avatarUrl} />
              <p>{author}</p>
            </div>
            <div>
              <img className="image" src={imageUrl} alt={title} />
              <p className="para">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
