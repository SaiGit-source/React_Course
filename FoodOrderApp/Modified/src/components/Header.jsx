import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'

export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A restaurant"/>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly={true}>Cart (0)</Button>
            {/* just adding 'textOnly' in React should set it to true by default */}
        </nav>
    </header>
}