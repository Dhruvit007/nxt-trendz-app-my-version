import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onSuccessRequest = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const loginDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSuccessRequest()
    } else {
      const data = await response.json()
      this.setState({error: data.error_msg})
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, error} = this.state
    return (
      <div className="login-container">
        <div className="contain-container">
          <div className="form-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="form-image"
            />
          </div>
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-lg"
            />
            <div className="form-sub-input-container">
              <label className="label" htmlFor="userName">
                USERNAME
              </label>
              <input
                className=" input username-input-field"
                id="userName"
                placeholder="Username"
                type="text"
                value={username}
                onChange={this.onChangeUsername}
              />
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input password-input-field"
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button className="login-btn" type="submit">
                Login
              </button>
              <p className="error-text">{error}</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
