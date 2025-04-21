import './App.css'
import RadialMenu from "./components/menus/RadialMenu/RadialMenu.tsx"
import ThreeJSAnimation from "./components/scenes/solider.tsx";
import PersonalLogo from "./components/Items/PersonalLogo/PersonalLogo.tsx";

function App() {
  return (
      <div className="App">
          <ThreeJSAnimation />
          <RadialMenu></RadialMenu>
          <PersonalLogo ></PersonalLogo>
      </div>
  )
}

export default App
