import 'purecss'
import '../Nav/style.css';
function Navbar() {
    return (

        <div class="pure-menu custom-restricted-width">
            <span class="pure-menu-heading">MtG Collection Tracker</span>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">My Collection</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">Search</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">My Decks</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">About Us</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;