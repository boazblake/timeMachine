// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()

    var ironTime={
    		time: 1985
    }

    var AppView = React.createClass({
    	render: function(){
    		/*console.log(this)*/
    		return (
    			<div className="TMWrapper">
    				<h1 className="heading">Back to the Yard!</h1>
    				<TimeMachine yearData={this.props.yearData.time}/>
    			</div>
    		)
    	}
    })


    var TimeMachine = React.createClass({

    	_toFuture:function(){
    		console.log(this)
    		this.setState({
    			year: parseInt(this.state.year) + 1
    		})
    	},


    	_toPast:function(){
    		console.log(this)
    		this.setState({
    			year: parseInt(this.state.year) - 1
    		})
    	},


    	getInitialState:function(){
    		return {
    		    year:parseInt(this.props.yearData),
    		    futureButt:'\u27F0',
    		    pastButt:'\u27F1'
    		}
    	},

    	render:function(){
    		console.log(this)
    		return (
    			<div className="yearWrapper">
    				<button onClick={this._toFuture}>{this.state.futureButt}</button>
    				<h2 key="year" className="year">{this.state.year}</h2>
    				<button onClick={this._toPast}>{this.state.pastButt}</button>
    			</div>
    		)
    	}
    })


    DOM.render(<AppView yearData={ironTime}/>, document.querySelector('.container'))
}

app()
