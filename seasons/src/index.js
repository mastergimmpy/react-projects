import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loading from './Loading'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {

  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message})
    )
    console.log('App Component did mount')
  }

  componentDidUpdate() {
    console.log('App Component did update')
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return(
        <div>
          Error: {this.state.errorMessage}
          ¯\_(ツ)_/¯
        </div>
      )
    } 
    if(!this.state.errorMessage && this.state.lat) {
      return(
        <SeasonDisplay lat={this.state.lat} />
      )
    }
    return (
      <Loading message='Please accept location request' />
    )
  }

  render() {
    return (
      <div className='border red'>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
)