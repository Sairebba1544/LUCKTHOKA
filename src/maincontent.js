import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Play from "./assets/play.png";
import Logo from "./assets/Logo.png";

function maincontent() {
  return (
    <div>
      <div className="main_content">
        <div className="sub_content">
          <h1>MEE LO OKADU LAKSHADIKAARI</h1>
        </div>
        <Container className="my-4 para">
          <Row>
            <p>
              Thokkadaniki nakka thoka yelago dorakatle kabatti LUCK THOKA ready
              chesam. Okka job kosam manam vela mandi Apply chestam, velallo
              okadiki udyogam vastadi. Kaani ikkada veyyi lo okadiki 10 lakshalu
              vastay.. Yeppudo udyogam vastadi ani lakshalu lakshalu fees lu
              katti college la ki vellam.. Kanni mana luck baavunte ikkada just
              oka ₹1300 ke 10 lakshalu vastay. Opportunity thalupu tattanappudu
              ahh opportunity ni maname create cheskovali kabatti create
              chesesam. Ee contract antha Blockchain meeda undi . Ethereum
              randomness pool lo join ayina 1000 mandi lo yevaro okarini pick
              cheskuni vastadi completely random Nobody can tamper it, not even
              us. Equal chances for everyone. Kotlalo okadiga gelichenta
              bhebatsamayina luck manaki lekapoyina, 1000 lo ayithe gaeliche
              chance undiga. Oka 10 times luck test cheskunna gani maha ayithe
              manaki poyyedi ₹13000. Ilantivi yenni tagaleyyaledu cheppu. Oka
              pool lo ki oka wallet address tho okasari maatrame nuv enter
              avvagalav. Next trail malli next pool ke possible.
            </p>
            <p>
              Start chesemundu kinda unna videos anni okasari chudu. And kinda
              unna Hand to hand pool kuda try chey. Iddrilo oka winner..nee luck
              test akkada modaletti chudu.
            </p>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className="nextPatch">
              <div className="firstcls">
                <p>2 ENTRIES</p>
                <h1>1WINNER</h1>
                <h3>₹900</h3>
                <h4>(7 MATIC)</h4>
              </div>
              <div className="firstcls1">
                <p>AVAILABLE SLOTS</p>
                <h1>2</h1>
                <p>POOL ID</p>
                <h2>#95DFEF52451</h2>
              </div>

              <div className="firstcls">
                <div className="buttonNow">
                  <div className="sub_butn">
                    <p>ENTER</p>
                    <div className="dflexcls">
                      <p className="mx-2 border-right">4MATIC</p>
                      <p className="mx-2">(₹520)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        <Container className="my-5">
          <Row>
            <Col xs={12} md={5}>
              <div className="leftsize">
                <h1>NEED TO KNOW ABOUT</h1>
                <p>HOW TO PLAY</p>
                <h3>FOLLOW THESE 3 EASY STEPS</h3>
              </div>
            </Col>

            <Col xs={12} md={7}>
              <div className="placeCircles">
                <div className="circle1 mx-5 mt-5e bounce1">
                  <h4>1</h4>
                  <p>CONNECT</p>
                  <p>YOUR WALLET</p>
                </div>

                <div className="circle1 mx-5 bounce2">
                  <h4>2</h4>
                  <p>JOIN POOL</p>
                  <p>WITH MATIC</p>
                </div>

                <div className="circle1 mx-5 mt-5e bounce3">
                  <h4>3</h4>
                  <p>WIN START</p>
                  <p>DREAMING YOU'RE</p>
                  <p>ALMOST THERE</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <div className="leftsize">
              <h1>LEARN MORE</h1>
              <p>ALL YOU NEED TO KNOW</p>
            </div>
          </Row>

          <Row>
            <Col xs={12} md={6} sm={6} lg={6} className="my-3">
              <div className="cardNow">
                <h1 className="mt-3 mb-0">HOW TO BUY MATIC</h1>
                <div className="videoCls">
                  <img src={Play} alt="playNow" width={50} />
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} sm={6} lg={6} className="my-3">
              <div className="cardNow">
                <h1 className="mt-3 mb-0">SEND MATIC TO METAMASK</h1>
                <div className="videoCls">
                  <img src={Play} alt="playNow" width={50} />
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} sm={6} lg={6} className="my-3">
              <div className="cardNow">
                <h1 className="mt-3 mb-0">CONNECT WALLET JOIN THE POOL</h1>
                <div className="videoCls">
                  <img src={Play} alt="playNow" width={50} />
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} sm={6} lg={6} className="my-3">
              <div className="cardNow">
                <h1 className="mt-3 mb-0">CHECK YOUR WINNINGS</h1>
                <div className="videoCls">
                  <img src={Play} alt="playNow" width={50} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className="d-flex justify-content-center align-items-center flex-column clsfooter">
              <img src={Logo} alt="logo Now" width={200} />
              <p className="text-white">
                All Rights Reserved to LUCK THOKA @2021
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default maincontent;
