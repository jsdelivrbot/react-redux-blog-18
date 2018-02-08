import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import reducers from './reducers'
import PostsIndex from './components/posts_index'
import Header from './components/header'
import PostShow from './components/post_show'
import NewPost from './components/new_posts'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Fabric>
				<div>
					<Header />
					<Switch>
						<Route path="/posts/new" component={NewPost} />
						<Route path="/posts/:id" component={PostShow} />
						<Route path="/" component={PostsIndex} />
					</Switch>
				</div>
			</Fabric>
		</BrowserRouter>
	</Provider>,
	document.querySelector('.root')
)

// browserrouter interacts with the history
