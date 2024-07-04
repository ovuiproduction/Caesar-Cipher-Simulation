import React, { useState, useEffect } from "react";
import "../css/CaesarCipher.css";

export default function CaesarCipher() {
  const [securityCode, setSecurityCode] = useState(0); // default to a shift of 0
  const [plainText, setPlainText] = useState("");
  const [cypherText, setCypherText] = useState("");
  const [lastUpdated, setLastUpdated] = useState("plainText");

  useEffect(() => {
    if (lastUpdated === "plainText") {
      handleEncodeText(plainText);
    }
  }, [plainText, securityCode]);

  useEffect(() => {
    if (lastUpdated === "cypherText") {
      handleDecodeText(cypherText);
    }
  }, [cypherText, securityCode]);

  const handleEncodeText = (text) => {
    let cypher = "";
    for (let i = 0; i < text.length; i++) {
      let ch = text.charCodeAt(i);
      if (ch >= 65 && ch <= 90) {
        // Uppercase letters
        ch = ((ch - 65 + parseInt(securityCode)) % 26) + 65;
      } else if (ch >= 97 && ch <= 122) {
        // Lowercase letters
        ch = ((ch - 97 + parseInt(securityCode)) % 26) + 97;
      } else {
        ch = text.charCodeAt(i); // Non-alphabetic characters remain unchanged
      }
      cypher += String.fromCharCode(ch);
    }
    setCypherText(cypher);
  };

  const handleDecodeText = (text) => {
    let plain = "";
    for (let i = 0; i < text.length; i++) {
      let ch = text.charCodeAt(i);
      if (ch >= 65 && ch <= 90) {
        // Uppercase letters
        ch = ((ch - 65 - parseInt(securityCode) + 26) % 26) + 65;
      } else if (ch >= 97 && ch <= 122) {
        // Lowercase letters
        ch = ((ch - 97 - parseInt(securityCode) + 26) % 26) + 97;
      } else {
        ch = text.charCodeAt(i); // Non-alphabetic characters remain unchanged
      }
      plain += String.fromCharCode(ch);
    }
    setPlainText(plain);
  };

  return (
    <>
      <header>
        <h1>Caesar Cipher</h1>
      </header>
      <div className="main-block">
        <div className="plaintext-block">
          <h1 className="textarea-title">PlainText</h1>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
              setLastUpdated("plainText");
            }}
            placeholder="Enter plain text here"
          ></textarea>
        </div>
        <div className="control-block">
          <p>Security Code</p>
          <input
            className="security-input"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            type="number"
          />
          <p>
            A <i class="fa-solid fa-arrow-right arrow"></i>{" "}
            {String.fromCharCode((parseInt(securityCode) % 26) + 65)}
          </p>
        </div>
        <div className="cyphertext-block">
          <h1 className="textarea-title">Cypher Text</h1>
          <textarea
            value={cypherText}
            onChange={(e) => {
              setCypherText(e.target.value);
              setLastUpdated("cypherText");
            }}
            placeholder="Cypher text will appear here"
          ></textarea>
        </div>
      </div>
      <div className="info">
        <h2 className="info-title">Caesar Cipher in Cryptography</h2>
        <p>
          The Caesar Cipher is one of the simplest and oldest methods of
          encrypting messages, named after Julius Caesar, who reportedly used it
          to protect his military communications. This technique involves
          shifting the letters of the alphabet by a fixed number of places. For
          example, with a shift of three, the letter ‘A’ becomes ‘D’, ‘B’
          becomes ‘E’, and so on. Despite its simplicity, the Caesar Cipher
          formed the groundwork for modern cryptographic techniques. In this
          article, we’ll explore how the Caesar Cipher works, its significance,
          and its impact on the development of cryptography with its advantages
          and disadvantages.
        </p>
        <h2 className="info-title">What is Caesar Cipher Technique?</h2>
        <p>
        The Caesar cipher is a simple encryption technique that was used by
        Julius Caesar to send secret messages to his allies. It works by
        shifting the letters in the plaintext message by a certain number of
        positions, known as the “shift” or “key”. The Caesar Cipher technique is
        one of the earliest and simplest methods of encryption techniques.</p>
        <p>
        It’s simply a type of substitution cipher, i.e., each letter of a given text
        is replaced by a letter with a fixed number of positions down the
        alphabet. For example with a shift of 1, A would be replaced by B, B
        would become C, and so on. The method is apparently named after Julius
        Caesar, who apparently used it to communicate with his officials.</p>
      </div>
    </>
  );
}
