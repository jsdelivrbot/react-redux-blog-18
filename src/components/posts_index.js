import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class PostsIndex extends React.Component {
	componentDidMount() {
		this.props.fetchPosts()
	}

	renderPosts = () => {
		return _.map(this.props.posts, post => {
			return (
				<div key={post.id}>
					<Link to={`/posts/${post.id}`}> {post.title}</Link>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						New Post
					</Link>
				</div>
				<h3>Posts</h3>
				{this.renderPosts()}
			</div>
		)
	}
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
