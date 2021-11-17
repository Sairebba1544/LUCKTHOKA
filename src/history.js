import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function history() {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <div className="leftsize">
            <h1>NEED TO KNOW ABOUT</h1>
            <p>HISTORY</p>
          </div>
        </Row>

        <Row>
          <Col xs={12} sm={12} lg={8}>
            <div className="cardNow1">
              <div className="leftClss p-3">
                <div className="table table-responsive">
                  <table className="tablecls table table-hover">
                    <tr className="redcls">
                      <th>DATE</th>
                      <th>POST</th>
                      <th>STATUS</th>
                    </tr>

                    <tr>
                      <td>July 26, 2021 11.30am</td>
                      <td>#66/Diamond hand/100 USD ENTRY</td>
                      <td>
                        <span className="butnYellow">Clam your Winnings</span>
                      </td>
                    </tr>

                    <tr>
                      <td>July 26, 2021 11.30am</td>
                      <td>#66/Diamond hand/100 USD ENTRY</td>
                      <td>
                        <span className="butnYellow">Clam your Winnings</span>
                      </td>
                    </tr>

                    <tr>
                      <td>July 26, 2021 11.30am</td>
                      <td>#66/Diamond hand/100 USD ENTRY</td>
                      <td>
                        <span className="butnYellow">Clam your Winnings</span>
                      </td>
                    </tr>

                    <tr>
                      <td>July 26, 2021 11.30am</td>
                      <td>#66/Diamond hand/100 USD ENTRY</td>
                      <td>
                        <span className="butnYellow">Clam your Winnings</span>
                      </td>
                    </tr>

                    <tr>
                      <td>July 26, 2021 11.30am</td>
                      <td>#66/Diamond hand/100 USD ENTRY</td>
                      <td>
                        <span className="butnYellow">Clam your Winnings</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={12} lg={4}>
            <div className="cardNow1">
              <div className="row p-4 ">
                <div className="progress1 col-md-6">
                  <p className="won">WON</p>
                  <p>
                    <span className="two">2</span>/<span>4</span>
                  </p>
                </div>

                <div className="col-md-6 status">
                  <p className="PNLCLS">PNL STATUS</p>
                  <p>
                    <span className="two">+2000 USDT</span>
                  </p>
                </div>
              </div>

              <div className="border-down"></div>

              <div className="pnlsection pt-4">
                <div className="sect1">
                  <p>WON</p>
                  <p>2 PLOTS</p>
                </div>
                <div className="sect1">
                  <p>+14000 USDT</p>
                </div>
              </div>

              <div className="pnlsection py-2">
                <div className="sect1">
                  <p>LOST</p>
                  <p>38 PLOTS</p>
                </div>
                <div className="sect1">
                  <p>+12000 USDT</p>
                </div>
              </div>

              <div className="clslast d-flex justify-content-center align-items-center">
                <p>AVERAGE RETURN PLOTS</p>
                <h1>50 USDT</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default history;
