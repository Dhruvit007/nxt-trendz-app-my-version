import './index.css'

const Header = () => {
  const c = 1 + 1
  return (
    <nav className="header-container">
      <div className="lg-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
        <div className="nav-items-lg-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout"
          />
          <ul className="list-items-container">
            <li className="list-item">Home</li>
            <li className="list-item">Products</li>
            <li className="list-item">Cart</li>
            <li className="list-item">
              <button className="logout-btn" type="button">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ul className="sm-view-navigation">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
            alt="nav home"
            className="sm-nav-icon"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="sm-nav-icon"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt="nav cart"
            className="sm-nav-icon"
          />
        </li>
      </ul>
    </nav>
  )
}
export default Header
