import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const backgroundColorsList = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const randomBgClassName =
  backgroundColorsList[Math.floor(Math.random() * backgroundColorsList.length)]

class PasswordManager extends Component {
  state = {
    websiteUrl: '',
    username: '',
    password: '',
    passwordsList: [],
    searchInput: '',
    onShowPassword: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteUrl: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({
      onShowPassword: !prevState.onShowPassword,
    }))
  }

  onDelete = id => {
    const {passwordsList} = this.state

    const filteredList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    console.log(filteredList)
    this.setState({passwordsList: filteredList})
  }

  onAddPassword = event => {
    event.preventDefault()

    const {username, websiteUrl, password} = this.state

    const newPassword = {
      id: uuidv4(),
      username,
      websiteUrl,
      password,
      bgColor: randomBgClassName,
      initial: username[0].toUpperCase(),
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      username: '',
      password: '',
      websiteUrl: '',
    }))
  }

  renderAddPassword = () => {
    const {websiteUrl, username, password} = this.state

    return (
      <div className="add-passwords-container">
        <form onSubmit={this.onAddPassword} className="form-container">
          <h1 className="add-password-heading">Add New Password</h1>
          <div className="input-container">
            <div className="input-logo-container">
              <div className="input-logo-bg-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.onChangeWebsiteInput}
                value={websiteUrl}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="input-logo-container">
              <div className="input-logo-bg-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={username}
                onChange={this.onChangeUsernameInput}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="input-logo-container">
              <div className="input-logo-bg-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="input-logo"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.onChangePasswordInput}
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="password-manager-lg-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="password manager"
          className="password-manager-sm-image"
        />
      </div>
    )
  }

  render() {
    const {passwordsList, searchInput, onShowPassword} = this.state

    const filteredPassList = passwordsList.filter(eachPassword =>
      eachPassword.websiteUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        {this.renderAddPassword()}
        <div className="passwords-container">
          <div className="password-search-bar-container">
            <div className="password-heading-count-container">
              <h1 className="password-heading">Your Passwords</h1>
              <div className="count-container">
                <p className="count">{filteredPassList.length}</p>
              </div>
            </div>
            <div className="search-input-container">
              <div className="search-input-logo-container">
                <div className="search-input-logo-bg-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-logo"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="checkbox"
              className="check-box-element"
              value={onShowPassword}
              onChange={this.onToggleCheckbox}
            />
            <label htmlFor="checkbox" className="show-password-heading">
              Show Passwords
            </label>
          </div>
          {filteredPassList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="added-passwords-container">
              {filteredPassList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  eachPasswordDetails={eachItem}
                  isCheckedValue={onShowPassword}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
