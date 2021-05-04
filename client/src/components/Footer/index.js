import "../Footer/style.css";
import { Col, Row } from 'react-bootstrap';
function Footer() {
    return (
        <div className="footer">

            <Row >
                <Col xs={5} className="column-one">
                    <h1>About MtG Collection Tracker</h1>
                    <p>"This site was created for users who want to keep track of their Magic the Gathering Cards, physical or digital.
                        The idea was spawned from wanting to theory craft decks while at work or away from my collection. So I've created
                        a simple app where users can add cards from their collection, and quickly view them while away from the physical
                         cards or without opening up MtG Arena on their phone"</p>
                </Col>
                <Col >
                    <h1>More About Magic</h1>
                    <ul>
                        <li><a href="https://magic.wizards.com/en" target="_blank" rel="noopener noreferrer">Official Magic the Gathering Site</a></li>
                        <li><a href="https://magic.wizards.com/en/mtgarena?source=MX_Nav2020" target="_blank" rel="noopener noreferrer">MtG Arena</a></li>
                        <li><a href="https://www.reddit.com/r/mtg/" target="_blank" rel="noopener noreferrer">Reddit r/mtg</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1>Github@apemint</h1>
                </Col>
            </Row>

        </div>
    )
}

export default Footer;