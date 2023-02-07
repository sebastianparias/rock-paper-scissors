import React, { useState } from "react";
import Rules from "../images/image-rules.svg";
import Close from "../images/icon-close.svg";
import { Button, Overlay, Modal } from "../Styles";

const rulesHeaderStyle = {
  display: "inline",
  marginRight: "60%",
};

const flexbox = {

};

const Footer = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div>
      <div className="footer__button">
        <Button
          backgroundColor="rgba(0, 0, 0, 0)"
          color="white"
          onClick={() => setShowRules(true)}
        >
          RULES
        </Button>
      </div>
      {showRules ? (
        <Overlay>
          <Modal>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h2>RULES</h2>
              </div>
              <div>
                <img
                  src={Close}
                  style={{ cursor: "pointer" }}
                  alt="close modal"
                  onClick={() => setShowRules(false)}
                ></img>
              </div>
            </div>

            <br />
            <img src={Rules} alt="game rules"></img>
          </Modal>
        </Overlay>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
