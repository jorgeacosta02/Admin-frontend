import ElBosqueComp from '../../components/elbosqueComp/ElBosqueComp'
import FooterComp from '../../components/footerComp/FooterComp'
import NavBarLayout from '../../layouts/navBarLayout/NavBarLayout'

const ElBosquePage = () => {
  return (
    <div>
        <NavBarLayout/>
        <ElBosqueComp/>
        <FooterComp/>
    </div>
  )
}

export default ElBosquePage
