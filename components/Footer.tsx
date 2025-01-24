import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "@/styles/footer.css";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <p>Ready to watch? Enter your email to start or resume your membership.</p>
                <form>
                    <InputGroup>
                        <Form.Control
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            aria-describedby="email"
                        />
                        <Button variant="outline-secondary" id="email">
                            Get Started
                        </Button>
                    </InputGroup>
                </form>
                <p>Copyright © {currentYear}, All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;