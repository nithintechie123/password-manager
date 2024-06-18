import {FaTrash} from 'react-icons/fa'

import './index.css'

const renderPasswords = props => {
  const {eachPasswordDetails, isCheckedValue} = props
  const {username, website, password, initial, bgColor} = eachPasswordDetails
  console.log(password)
  console.log(isCheckedValue)

  const hideAndSeekPasswordView = isCheckedValue ? (
    <p className="input-details-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="password-stars"
    />
  )

  return (
    <li className="added-password-item">
      <div className={`initial-container ${bgColor}`}>
        <h1 className="initial-text">{initial}</h1>
      </div>
      <div className="input-details-container">
        <p className="input-details-text">{website}</p>
        <p className="input-details-text">{username}</p>
        {hideAndSeekPasswordView}
      </div>
      <button
        type="button"
        data-testid="delete"
        label="true"
        className="trash-button"
      >
        <FaTrash className="trash-icon" />
      </button>
    </li>
  )
}

export default renderPasswords
