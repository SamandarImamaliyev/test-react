import Header from "./Components/section/header/header"
import Main from "./Components/section/main/main"
import Footer from "./Components/section/footer/footer"
import './index.css'
import './assets/css/custom/style.css'
import './assets/css/custom/font.css'

function App() {
  return (
    <div>
      <div className="main">
        <Header />
        <Main />
      </div>
      <Footer />

    </div>
  )
}

export default App
