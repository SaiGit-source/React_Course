import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    {/* CSS file has an element with title 'header */}
    return (<header id="header">
        <img src={logo} alt="Logo showing a money bag" />
        <h1>Investment Calculator</h1>
    </header>
    )
}

// after header we need another component to handle user-input for calculations