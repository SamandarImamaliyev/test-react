import '../../../assets/css/custom/style.css'
import './header.css'
import logo from '../../../assets/images/logo.svg';

function Header() {
    return (
        <div className='mainHeader'>
            <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                <img src={logo} alt="" />
                <ul className='navigation'>
                    <li> <a href="#">About Us</a></li>
                    <li> <a href="#">How it works</a></li>
                    <li> <a href="#">Pricing</a></li>
                    <li> <a href="#">FAQs</a></li>
                </ul>
            </div>
            <div>
                <ul className='login'>
                    <li><button className='btnLogin'>Login</button></li>
                    <li><button className='btnSignup'>Sign up</button></li>
                </ul>

            </div>
        </div>
    )
}

export default Header