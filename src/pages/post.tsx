import Layout from '../components/Layout'
import FixedBackground from '../components/FixedBackground'
import TopNavBar from '../components/TopNavBar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
// import PostContent from '../components/PostContent'
import MainCM from '../content_manager'
// import LeftMenu from '../components/LeftMenu'
import { createComponent } from '../helpers'
import BioBlock from '../components/BioBlock'


const PostPage = () => {
    const storyId = 0
    const menuItems = MainCM.navSections
    const { joinLink, telegramLink, discordLink, shareLink } = MainCM.links
    const logoLink = '/'

    const story = MainCM.stories[storyId]

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
            
            <div className="main-block row px-5">

                <ul className="nav flex-column col-3 col-lg-3 left-side-bar d-none d-md-block">
                    {menuItems.map((item, index) => {
                        return (
                            <li className="nav-item" key={`left-navbar-item-${index}`}>
                                <a className="nav-link" href={item.url}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className="col-12 col-sm-10 col-md-8 col-lg-7 px-0">
                    <h2 className="main-heading mb-5">{story.title}</h2>
                    {story.contents.map((el, index) => {
                        const  { tagName, content, atts } = el
                        return createComponent(tagName, {key:index, ...atts}, content)
                    })}
                </div>

            </div>

            <Slider items={story.variations} title='Більше робіт від творців'/>
            <BioBlock shareLink={shareLink}/>
            <Footer logoLink={logoLink} menuItems={menuItems} joinLink={joinLink} shareLink={shareLink}/>
        </Layout>
    )
}

export default PostPage