import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
//import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { NavbarBrand } from "react-bootstrap";


const Mint = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Function to connect to the user's Metamask wallet
  const connectWithMetamask = useMetamask();

  // Get the NFT Collection contract
  const nftDropContract = useNFTDrop(
    "0x729072b55bEa930c0e08a1e7CE4f35Bf0A95e462"
  );

  async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }


  return (
    <>
      <Navbar expand="lg" variant="dark" style={{padding: '70px 60px 0 0', backgroundColor: '#000'}}>
        <Container className="justify-content-center">
          <h3 style={{color: 'white'}}>NFT Staking App</h3>
        </Container>
      </Navbar>

      <Navbar style={{padding: '30px 0', backgroundColor: '#000'}}>
      <Container className="rounded-5" style={{padding:'50px 50px', backgroundColor: '#0d0d0d'}}>
        <Container className="justify-content-center">
        <Card className="text-white rounded-5" style={{backgroundColor: '#000'}}>
          <Card.Img className="rounded-5" src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&h=550" alt="Card image" />
            <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '240px'}}>
            <div>
              {!address ? (
                <Button onClick={connectWithMetamask} variant="warning" size="lg">Connect Wallet</Button>
              ) : (
                <Button onClick={() => claimNft()} variant="warning" size="lg">Claim An NFT</Button>
              )}
            </div>
            </Card.ImgOverlay>
        </Card>
        </Container>
        </Container>
      </Navbar>
      <Navbar style={{backgroundColor: '#000'}}><Container style={{padding: '110px 0'}}></Container></Navbar>
    </>
  );
};

export default Mint;
