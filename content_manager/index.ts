import { LinkType, StoryType } from "../types"

const navSectionsInitProps:LinkType[] = [{
    name: 'Про проєкт',
    url: '#',
  },{
    name: 'Герої',
    url: '#',
  },{
    name: 'Контакти',
    url: '#',
  },{
    name: 'FAQ',
    url: '#',
  }]

const extLinks:LinkType[] = [{
    url: '#',
    name: 'shareLink',
},{
    url: '#',
    name: 'joinLink',
},{
    url: '#',
    name: 'discordLink',
},{
    url: '#',
    name: 'telegramLink',
},{
    url: '#',
    name: 'openseaLink',
}]
const _getExtLinks = (links:LinkType[]) => {
    const linksMap:{[key:string]:string} = {}
    for (let link of links) {
        linksMap[link.name] = link.url
    }
    return linksMap
}


const stories:StoryType[] = [{
    title: '"The Ghost of Kyiv"',
    description: '',
    contents: [{
        tagName: 'h4',
        content: 'The Ghost of Kyiv - who’s the hero protecting the Ukrainian sky'
    }, {
        tagName: 'p',
        content: 'Do you ever look up at the sky and wonder who’s up there keeping it peaceful? Have you ever even imagined it could look otherwise? On the evening of February 23, the sky above Kyiv was as calm as always. It was the sky of a free-spirited city. You feel safe, say your goodnights and go to bed.'
    }, {
        tagName: 'img',
        atts: {
            src: '../static/img/posts/post_1_img_1.jpg',    
        }
    }, {
        tagName: 'p',
        content: 'It’s early morning in the modern European capital, all the same except you wake up to the sounds of explosions lost, scared, still in disbelief until you receive your first call. Then it all becomes real: the war has started. It’s 2022 and your Kyiv is being destroyed with missiles.'
    }, {
        tagName: 'p',
        content: 'While we all try to sort our things out, pack a first-aid kit, find the closest underground shelter, the air forces are already taking off to guard that same sky we’ve enjoyed just yesterday. Message after message it becomes evident - Kyiv is under a shield. News keep changing but one thing is clear: the unknown hero took down six russian fighter jets in just one day. The МіG-29 pilot may be the first fighter ace of our century. So who is this mysterious guard of the sky that Ukrainians call The Ghost of Kyiv?'
    }, {
        tagName: 'h2',
        content: 'Who is the Gost of Kyiv?'
    }, {
        tagName: 'p',
        content: 'Even though the specific name of the Ukrainian hero hasn’t been announced yet, let’s circle back a little. Since the war in Ukraine has started many military reservists have decided to rejoin the defense. The Defense Ministry of Ukraine has also mentioned that dozens of experienced pilots from captains to generals have rejoined the airforce. Can the Ghost of Kyiv be one of them? '
    }, {
        tagName: 'p',
        content: 'Many Ukrainians including The President\'s Office Advisor believe the hero can be a composite character representing the heroism of the Ukrainian Air Forces. We don’t aim to prove either of these versions. Instead, we want to highlight the extreme strength, will, and outstanding mastery of Ukrainian pilots. Prior to the full-scale invasion of Ukraine, Russian Air Forces took part in seven military conflicts meaning their pilots have got extensive practical experience. And yet a month after they lose their advantage in the air to the much smaller Ukrainian Forces. '
    }, {
        tagName: 'p',
        content: 'During the conflict in Syria, the Russian SU-35 fighter jets were equipped with R-77, R-27 missiles of medium range, and R-73 missiles of minimum range. One SU-35 jet can carry up to eight R-27 missiles simultaneously. The Ghost of Kyiv shut down two SU-35 jets with the combined capability of carrying sixteen missiles only on the first day of the war. If those calculations are too complicated for civilian people to understand, try to think about the number of human lives saved thanks to disabling those fighter jets. '
    }, {
        tagName: 'h2',
        content: 'How many battles did the Ghost of Kyiv win?'
    }, {
        tagName: 'p',
        content: 'As of March 3, Russian media tried to spread the news about the death of the Ukrainian hero pilot. The same day the Ukrainian side called those news fake mentioning the Ghost of Kyiv had been shut down, but the pilot managed to survive, return to the base and get a new jet. Former Ukrainian Parlement member Ihor Mosiychuk also stated that on the very same day the Ghost took down the 21st Russian fighter plane. '
    }, {
        tagName: 'p',
        content: 'The current Advisor of the Presidential Office Oleksiy Arestovych also said that the Ghost of Kyiv could be a collective name for an air squad. Either way, the results of their battles are impressive indeed, especially considering the fact that the Russian fighter jets are often superior to those used by the Ukrainian Air Forces. '
    }, {
        tagName: 'p',
        content: 'Even though SU-27 is superior to MiG-29, GoK managed to win the air battle and take it down along with several fighter jets of the next generation including SU-35.'
    }, {
        tagName: 'p',
        content: 'The last month has made Ukrainians believe there is somebody above us. Not in heaven, but two thousand meters high above Kyiv. We’ve learned to live in a new reality where civilians know the difference between the sounds of an approaching rocket and anti-aircraft warfare in action. We know the price of that free sky we paid so little attention to just a month ago. And today we fall asleep not to the sound of silence, but to the sound of the Ukrainian planes protecting our cities from above. The truth about the Ghost of Kyiv’s wins may soon become an urban legend, but be sure we’ll pass it over to generations to come. In the same manner, our predecessors passed the stories about Ukrainian cossacks to us. Because there is no better way to raise a free nation than to tell your kids the stories of national heroes.'
    }],
    variations: [
        {src:'../static/img/story_1/ghost_main.png'},
        {src:'../static/img/story_1/ghost_1.jpg'},
        {src:'../static/img/story_1/ghost_2.jpeg'},
        {src:'../static/img/story_1/ghost_3.jpeg'},
        {src:'../static/img/story_1/ghost_4.jpg'},
        {src:'../static/img/story_1/ghost_5.jpeg'},
        {src:'../static/img/story_1/ghost_6.jpeg'},
        {src:'../static/img/story_1/ghost_7.jpg'}
    ],
    mainImage: {src:'../static/img/story_1/ghost_main.png'},
    previewImage: {src:'../static/img/story_1/ghost_preview.png'}
}]

export default {
    navSections: navSectionsInitProps,
    stories: stories,
    links: _getExtLinks(extLinks),
}