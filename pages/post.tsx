import Layout from '../components/Layout'
import FixedBackground from '../components/FixedBackground'
import TopNavBar from '../components/TopNavBar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
// import PostContent from '../components/PostContent'
import MainCM from '../content_manager'
import LeftMenu from '../components/LeftMenu'
import { createComponent } from '../helpers'


const PostPage = () => {
    const storyId = 0
    const menuItems = MainCM.navSections
    const { joinLink, telegramLink, discordLink, shareLink } = MainCM.links
    const logoLink = '/'

    const story = MainCM.stories[storyId]

    return (
        <Layout pageTitle='HEROES UA | NFT'>
            <FixedBackground />
            <TopNavBar logoLink={logoLink} joinLink={joinLink} telegramLink={telegramLink} discordLink={discordLink} shareLink={shareLink}/>
            {/* <PostContent title={story.title} contents={story.contents} menuItems={menuItems}/> */}

            <div className="main-block row px-5">

                <LeftMenu items={menuItems} />

                <div className="col-6 px-0">
                    <h2 className="main-heading mb-5">{story.title}</h2>
                    {story.contents.map((el, index) => {
                        const  { tagName, content, atts } = el
                        return createComponent(tagName, {key:index, ...atts}, content)
                    })}
                </div>

            </div>

            <Slider items={story.variations} title={story.title}/>
            <Footer />
        </Layout>
    )
}

export default PostPage