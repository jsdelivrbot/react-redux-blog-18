import React from 'react'
import { connect } from 'react-redux'
import { getPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'

class PostShow extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params
		this.props.getPost(id)
	}

	onDelete() {
		const { id } = this.props.match.params
		console.log('from on delete', id)
		this.props.deletePost(id, () => this.props.history.push('/'))
	}

	render() {
		const { post } = this.props

		if (!post) {
			return <div>Loading....</div>
		}

		return (
			<div>
				<div className="text-xs-right">
					<button className="btn btn-danger" onClick={this.onDelete.bind(this)}>
						Delete
					</button>
				</div>
				<h3>{post.title}</h3>
				<h6>{post.categories}</h6>
				<p>{post.content}</p>
				<Link to="/" className="btn btn-info">
					Home
				</Link>
			</div>
		)
	}
}

const mapStateToProps = ({ posts }, ownProps) => ({
	post: posts[ownProps.match.params.id]
})
export default connect(mapStateToProps, { getPost, deletePost })(PostShow)
