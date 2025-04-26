
import RadialMenu from '../menus/RadialMenu/RadialMenu'
import PersonalLogo from '../Items/PersonalLogo/PersonalLogo'
import ThreeJSAnimation from '../scenes/solider'

function Home() {
  return (
      <div className="home">
          <ThreeJSAnimation />
          <RadialMenu></RadialMenu>
          <PersonalLogo ></PersonalLogo>
      </div>
  )
}

export default Home
