import {Article , Brand , CTA, Feature, Navbar} from "./components"
import {Blog, Features, Footer, Header, Posibility, Whatgpt3} from "./container"
import "./App.css"
const App = () => {
 
  return (
    <div className="text-white bg-custom-radial px-6 md:px-8 lg:px-16 xl:px-32 ">
      <div>
       <Header />
       <Navbar />
      </div>
      {/* <Brand/>
      <Whatgpt3 />
      <Features/>
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/> */}
    </div>
  )
}

export default App