import '../../../assets/css/custom/style.css'
import './footer.css'
import logoFooter from '../../../assets/images/logoFooter.svg'
import facebook from '../../../assets/images/socialMedia/facebook.svg'
import twitter from '../../../assets/images/socialMedia/twitter.svg'
import gmail from '../../../assets/images/socialMedia/gmail.svg'
import instagram from '../../../assets/images/socialMedia/instagram.svg'
import youtube from '../../../assets/images/socialMedia/youtube.svg'
import Input from '../../input/Input'

function Footer() {
    return (
        <div id='footer'>
            <div>
                <div>
                    <img src={logoFooter} alt="" />
                </div>
                <div style={{ fontSize: '52px', width: '444px', paddingTop: '50px', color: '#fff' }}>
                    Want to recieve our
                    awesome stories?
                </div>
                <div style={{ marginTop: '50px' }}>
                    <Input placeholder={"Enter your email"} />
                    <button>Subscribe</button>
                </div>
                <div style={{ fontSize: '18px', width: '444px', paddingTop: '100px', color: '#fff' }}>
                    <span style={{ fontSize: '24px' }}>&#169;</span> The 18 Design, All rights reserved.
                </div>
            </div>
            <div style={{ width: '696px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '18px' }}>Email</div>
                        <div><a href="">info@the18.design</a></div>
                    </div>
                    <div>
                        <ul>
                            <li> <a href="">About us</a></li>
                            <li> <a href="">How it works</a></li>
                            <li> <a href="">Pricing</a></li>
                            <li> <a href="">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li> <a href="">Lead generation</a></li>
                            <li> <a href="">Customer engagement</a></li>
                            <li> <a href="">Customer support</a></li>
                            <li> <a href="">Help Center Articles</a></li>
                            <li> <a href="">Outbound Messages</a></li>
                        </ul>
                    </div>


                </div>

                <div id='socialMedia' style={{ display: 'flex', justifyContent: 'end' }}>
                    <div><img src={facebook} alt="" /></div>
                    <div><img src={twitter} alt="" /></div>
                    <div><img src={gmail} alt="" /></div>
                    <div><img src={instagram} alt="" /></div>
                    <div><img src={youtube} alt="" /></div>
                </div>
            </div>
        </div >
    )
}

export default Footer