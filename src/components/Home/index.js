import Header from '../Header'
import './index.css'

const Home = () => {
  const b = 1 + 1
  return (
    <div className="home-container">
      <Header />
      <div className="home-contain-container">
        <div className="clothes-description-container">
          <h1 className="home-page-heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="clothes-photos-sm"
          />
          <p className="home-page-paragraph">
            Fashion is part of the daily air and it does not quite help that it
            chnages all the time. Clothes have always been a marker of the era
            and we are in a revolution. your fashion makes you seen and heard
            that way you are. So celebrate the sesions new and exiting fashion
            in your own way
          </p>
          <button className="shop-now-btn" type="button">
            Shop Now
          </button>
        </div>
        <div className="clothes-photos-lg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="clothes-photos-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
