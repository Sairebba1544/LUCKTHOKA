import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Maincontent from "./maincontent";
import History from "./history";
import { Container, Row, Col } from "react-bootstrap";
import { ethers } from 'ethers';
import { Contract, providers, utils } from 'ethers';
import Web3Modal from 'web3modal';
import { useEffect, useState } from "react";
import { abi } from './artifacts/contracts/lottery.sol/lottery.json';

const initWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    const web3Modal = new Web3Modal({
      network: "ropsten",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection);
    const { chainId } = await provider.getNetwork();
    console.log('chainId:', chainId);
    if (chainId !== 1337) reject('Wrong network. Please switch to local network');
    const signer = provider.getSigner();
    const contract = new Contract('0x5FC8d32690cc91D4c39d9d3abcBD16989F875707', abi, signer);
    resolve({ contract, provider });
  });
}

function App() {

  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    initWeb3().then(async ({ contract, provider }) => {
      console.log('contract:', contract);
      setContract(contract);
      setProvider(provider);
      const lotteryPoolData = await contract.getLotteryPoolById(1637136600);
      console.log('contract', contract)
      console.log('lotteryPoolData:', lotteryPoolData);
      provider.getSigner().getAddress().then(setAccount);
      console.log('connected account: ', account)
    });


  }, [])
  return (
    <div className="App">
      <Header />
      <Maincontent />
      {/* <History /> */}
      {/* <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Maincontent />} />
          <Route exact path="/History" element={<History />} />
        </Switch>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
