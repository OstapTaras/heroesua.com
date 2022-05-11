import Layout from '../components/Layout'
import FixedBackground from '../components/FixedBackground'
import TopNavBar from '../components/TopNavBar'
import MainHeadline from '../components/MainHeadline'
// import BlogGallery from '../components/BlogGallery'
import CentralBlock from '../components/CentralBlock'
import BioBlock from '../components/BioBlock'
// import TeamBlock from '../components/TeamBlock'
import JoinBlock from '../components/JoinBlock'
// import FAQBlock from '../components/FAQBlock'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import MainCM from '../content_manager'
import LeftMenu from '../components/LeftMenu'


const IndexPage = () => {
  const menuItems = MainCM.navSections
  const { joinLink, telegramLink, discordLink, shareLink } = MainCM.links
  const logoLink = '/'
  const story = MainCM.stories[0]
  return (
    <Layout pageTitle='HEROES UA | NFT'>
        <FixedBackground />
        <TopNavBar logoLink={logoLink} joinLink={joinLink} telegramLink={telegramLink} discordLink={discordLink} shareLink={shareLink}/>
        <MainHeadline menuItems={menuItems}/>
        <Slider items={story.variations} title={story.title}/>
        {/* <BlogGallery /> */}
        <CentralBlock />
        <BioBlock shareLink={shareLink}/>
        {/* <TeamBlock /> */}
        <JoinBlock joinLink={joinLink} discordLink={discordLink} telegramLink={telegramLink}/>
        {/* <FAQBlock /> */}
        <Footer />
    </Layout>
  )
}

export default IndexPage