import '../../../assets/css/custom/style.css'
import './main.css'
import illustration1 from '../../../assets/images/illustrations/illustration1.svg'
import illustration2 from '../../../assets/images/illustrations/illustration2.svg'
import illustration3 from '../../../assets/images/illustrations/illustration3.svg'
import illustration4 from '../../../assets/images/illustrations/illustration4.svg'
import illustration5 from '../../../assets/images/illustrations/illustration5.svg'
import visa from '../../../assets/images/paying/visa.svg'
import mastercard from '../../../assets/images/paying/mastercard.svg'
import paypal from '../../../assets/images/paying/paypal.svg'
import element1 from '../../../assets/images/howItWorksImage/element1.svg'
import element2 from '../../../assets/images/howItWorksImage/element2.svg'
import element3 from '../../../assets/images/howItWorksImage/element3.svg'
import element4 from '../../../assets/images/howItWorksImage/element4.svg'
import Accordion from '../../accordion/Accordion'
import Card from '../../card/Card'
import Input from '../../input/Input'


function Main() {

    const accordionData = [
        {
            title: 'How much does a Teams subscription cost?',
            content: `Contributors are members of your team who need access to use 
            the Mac app to create and edit Sketch documents. These prices don’t include sales 
            tax, which may still apply. Head over to our pricing page to get full details.`
        },
        {
            title: 'Do I still need to purchase licenses for the Mac app?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'What are the differences between Contributors and Viewers?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'How long does the free Teams subscription trial last?',
            content: `Contributors are members of your team who need access to use 
            the Mac app to create and edit Sketch documents. These prices don’t include sales 
            tax, which may still apply. Head over to our pricing page to get full details.`
        }
    ];

    return (

        <div >
            <section id='home'>
                <div >
                    <span style={{ fontSize: '60px' }}>Always Track &
                        Analyze Your Business
                        Statistics To Succeed.</span>
                    <p >A better way to manage your sales, team, clients & marketing
                        — on a single platform. Powerful, affordable & easy.</p>
                    <div style={{ marginTop: '20px' }}>
                        <div>
                            <Input placeholder={'Enter your email'} />
                            <button style={{ padding: '0px 14px' }}>Get started</button>
                        </div>
                        <div style={{ marginTop: '80px', display: 'flex', gap: '20px' }}>
                            <img src={visa} alt="" /><img src={mastercard} alt="" /><img src={paypal} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={illustration1} alt="" />
                </div>
            </section>
            <section id='aboutUs'>
                <div style={{ width: '580px' }}>
                    <img src={illustration2} alt="" />
                </div>
                <div style={{ width: '750px' }}>
                    <h1>ABOUT US</h1>
                    <span style={{ fontSize: '60px' }}>Faster, friendlier feedback
                        loops make life easier.</span>
                    <p >Add a Viewer to your team so they can see everything you share, or invite
                        people to individual documents. It’s up to you. Stakeholders can check
                        out designs in their web browser, test prototypes and leave feedback for free.</p>
                    <div style={{ marginTop: '50px' }}>
                        <ul style={{ padding: '0 0 0 20px' }}>
                            <li>Shared Cloud Libraries, for a single source of truth</li>
                            <li>Prototype previews for user testing and research</li>
                            <li>Easy organization with projects</li>
                            <li>Free developer handoff, right inside the browser</li>
                            <li>Two-factor authentication and SSO</li>
                        </ul>
                    </div>
                </div>


            </section>
            <section id='howItWorks'>
                <div style={{ width: '750px' }}>
                    <h1>HOW IT WORKS</h1>
                    <span style={{ fontSize: '60px' }}>Building the best space
                        for collaboration.</span>
                    <div style={{ marginTop: '50px' }}>
                        <div>
                            <img src={element1} alt="" />
                            <div>
                                <span>Shared Cloud Libraries</span>
                                <p>Navigate to the Your work panel in the left sidebar.
                                    Select the library you want to share. Select the Share
                                    icon in the upper right to share the library.</p>
                            </div>
                        </div>
                        <div>
                            <img src={element2} alt="" />
                            <div>
                                <span>Free developer handoff, right inside</span>
                                <p>Cloud Inspector makes it easy for developers to get
                                    the information they need to turn pixels into code —
                                    all in the browser and, most importantly, for free.</p>
                            </div>
                        </div>
                        <div>
                            <img src={element3} alt="" />
                            <div>
                                <span>Real-time collaborative editing</span>
                                <p>Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.</p>
                            </div>
                        </div>
                        <div>
                            <img src={element4} alt="" />
                            <div>
                                <span>Integrations with the Cloud API</span>
                                <p>Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '580px' }}>
                    <img src={illustration3} alt="" />
                </div>
            </section>
            <section id='pricing' style={{ flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '580px' }}>
                        <img src={illustration4} alt="" />
                    </div>
                    <div style={{ width: '750px', display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'center', textAlign: 'end' }}>
                        <h1>PRICING</h1>
                        <span style={{ fontSize: '60px' }}>Select a membership level
                            the right price for you.</span>
                        <p >Prices listed in USD. Taxes may apply.
                            By using program you agree to our terms and policies.</p>
                    </div>
                </div>

                {/* price cards*/}
                <div style={{ width: '1512px', display: 'flex', marginTop: '100px' }}>
                    <div style={{ background: '#F0F0F0', color: '#151515' }}>
                        <Card price={49} definition={"A pay-once license, just for you"} list={["The Mac app — yours to keep", "Beautiful White_level", "One year of saving to Cloud"]} id={1} />
                    </div>
                    <div style={{ background: '#151515', color: '#fff' }}>
                        <Card price={99} definition={"Pro account, just for you"} list={["The Mac app — yours to keep", "One year of Mac app updates", "One year of saving to Cloud", "A personal Cloud workspace", "All tools, just for you"]} id={2} />
                    </div>
                    <div style={{ background: '#fff', color: '#151515' }} >
                        <Card price={299} definition={"A subscription for the whole team"} list={["Access to the Mac app for all", "A shared Cloud workspace", "Free Cloud access for unlim", "Easy team management", "No license key required"]} id={3} />
                    </div>
                </div>

            </section>
            <section id='faqs' style={{ marginBottom: '200px' }}>
                <div style={{ width: '750px' }}>
                    <h1>FAQS</h1>
                    <span style={{ fontSize: '60px' }}>Common Questions.</span>
                    <p>The online form also provides links to a set of frequently
                        asked questions, other information materials related to
                        the financial disclosure programme.</p>


                    <div style={{ marginTop: '50px', width: '620px' }}>
                        {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                        ))}
                    </div>
                </div>
                <div style={{ width: '580px' }}>
                    <img src={illustration5} alt="" />
                </div>

            </section>
        </div>
    )
}

export default Main