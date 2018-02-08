import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPost } from '../actions'

class NewPost extends React.Component {
	renderField(field) {
		const { meta: { touched, error }, label } = field
		let style = touched && error ? 'form-group has-danger' : 'form-group'

		return (
			<div className={style}>
				<label>{label}</label>
				<input
					autoComplete="off"
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div style={{ height: 20, color: 'red' }}>{touched ? error : ''}</div>
			</div>
		)
	}

	onSubmit = values => {
		this.props.addPost(values).then(() => this.props.history.push('/'))
	}

	render() {
		const { handleSubmit } = this.props
		return (
			<div>
				<h1>Create a new post</h1>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field name="title" label="Title" component={this.renderField} />
					<Field
						name="categories"
						label="Categories (min 1)"
						component={this.renderField}
					/>
					<Field name="content" label="Content" component={this.renderField} />
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<Link to="/" className="btn btn-danger">
						Cancel
					</Link>
				</form>
			</div>
		)
	}
}

// VALIDATION
let validate = value => {
	const errors = {}
	if (!value.title || value.title.length < 3) {
		errors.title = 'Enter a title that is longer than three characters.'
	}
	if (!value.categories) {
		errors.categories = 'please enter at least 1 category.'
	}
	if (!value.content) {
		errors.content = 'enter some content maybe?'
	}
	return errors
}

export default reduxForm({ validate, form: 'PostsNewForm' })(
	connect(null, { addPost })(NewPost)
)
