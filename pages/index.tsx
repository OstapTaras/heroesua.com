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
import SingleNFT from '../components/SingleNFT'
// import LeftMenu from '../components/LeftMenu'
import GridBlock from '../components/GridBlock'


const IndexPage = () => {
  const menuItems = MainCM.navSections
  const { joinLink, telegramLink, discordLink, shareLink, openseaLink } = MainCM.links
  const logoLink = '/'
  const story = MainCM.stories[0]
  return (
    <Layout pageTitle='HEROES UA | NFT'>
        <FixedBackground />
        <TopNavBar 
          logoLink={logoLink}
          joinLink={joinLink}
          telegramLink={telegramLink}
          discordLink={discordLink}
          shareLink={shareLink}
          manuItems={menuItems}
        />
        <MainHeadline menuItems={menuItems}/>
        
        {/* <BlogGallery /> */}
        {/* <CentralBlock /> */}
        <SingleNFT 
          title='Твій цифровий слід в історії. Придбай Українську NFT' 
          text='*Кошти, зібрані в рамках цього проекту, будуть спрямовані на героїв/їхні родини чи офіційні організації, які підтримують військові чи гуманітарні потреби.' 
          openseaLink={openseaLink} 
          mainImage={story.mainImage} 
          posterImage={story.previewImage}
        />
        <Slider items={story.variations} title={story.title}/>
        <BioBlock shareLink={shareLink}/>
        {/* <TeamBlock /> */}
        <JoinBlock joinLink={joinLink} discordLink={discordLink} telegramLink={telegramLink}/>
        {/* <FAQBlock /> */}
        <Footer logoLink={logoLink} menuItems={menuItems} joinLink={joinLink} shareLink={shareLink}/>
        {/* <GridBlock display /> */}
    </Layout>
  )
}

export default IndexPage