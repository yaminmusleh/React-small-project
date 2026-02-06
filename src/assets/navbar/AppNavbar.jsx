import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from './navbar.module.css'
export default function AppNavbar() {
  return (
    
      <Navbar collapseOnSelect expand="lg" fixed="top" className={`${styles.navbar} py-2`}>
      <Container>
        <Navbar.Brand href="#" className={styles.brand}>Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="#" className={styles.links}>Portfolio</Nav.Link>
            <Nav.Link eventKey={2} href="#" className={styles.links}>
              About
            </Nav.Link>
            <Nav.Link eventKey={3} href="#" className={styles.links}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}
