import 'purecss'
import '../Nav/style.css';
function Navbar() {
    return (

        <div className="pure-menu custom-restricted-width sidenav">
            <span className="pure-menu-heading">MtG Collection Tracker</span>
            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                    <a href="/cards" className="pure-menu-link">My Collection</a>
                </li>
                <li className="pure-menu-item">
                    <a href="/search" className="pure-menu-link">Search</a>
                </li>
                <li className="pure-menu-item">
                    <a href="/404" className="pure-menu-link">My Decks *UNDER_CONSTRUCTION*</a>
                </li>
                <li className="pure-menu-item">
                    <a href="/404" className="pure-menu-link">About Us *UNDER_CONSTRUCTION</a>
                </li>
            </ul>
        </div>
    )
}
// export default Navbar;