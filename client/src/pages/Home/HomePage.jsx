import SearchBar from "../../components/searchbar/SearchBar.jsx"
import "./home.scss"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="contentContainer">
        <div className="wrapper">

          <h1 className="title">Find Real state & get your dream place</h1>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, deserunt velit accusantium, laborum explicabo veritatis consequuntur placeat dicta facilis officia ipsum itaque enim ab quo, repudiandae totam rem aut possimus!</p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>4+</h1>
              <h2>Year of expenses</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Project Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
