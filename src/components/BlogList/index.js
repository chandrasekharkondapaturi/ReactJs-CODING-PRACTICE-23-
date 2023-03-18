// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoader: true}

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      title: eachItem.title,
      topic: eachItem.topic,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      id: eachItem.id,
    }))
    this.setState({blogsList: updatedData, isLoader: false})
  }

  render() {
    const {blogsList, isLoader} = this.state
    return (
      <ul className="blog-list-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachItem => (
            <BlogItem details={eachItem} key={eachItem.id} />
          ))
        )}
      </ul>
    )
  }
}
export default BlogList
