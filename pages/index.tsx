import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
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


const Home = () => {
  const router = useRouter();

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
            <Card.ImgOverlay style={{ padding: '130px 50px'}}>
              <Card.Title className="text-warning">Mint a new NFT</Card.Title>
              <Card.Text>Use the NFT Drop Contract to claim an NFT from the collection.</Card.Text>
              <Button onClick={() => router.push(`/mint`)} variant="warning">Mint</Button>
              <Card.Title className="text-danger" style={{ padding: '70px 0 0 0'}}>Stake Your NFTs</Card.Title>
              <Card.Text>Use the custom staking contract to stake your NFTs, and earn Tokens.</Card.Text>
              <Button onClick={() => router.push(`/stake`)} variant="danger">Stake</Button>
            </Card.ImgOverlay>
        </Card>
        </Container>
        </Container>
      </Navbar>
      <Navbar style={{backgroundColor: '#000'}}><Container style={{padding: '110px 0'}}></Container></Navbar>
    </>
  );
};

export default Home;

