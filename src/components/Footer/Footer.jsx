import React from "react";

import "../../styles/footer/footer.css";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";

import visa from "../../images/visa.svg";
import elo from "../../images/elo.svg";
import alelo from "../../images/alelo.svg";
import dinners from "../../images/dinners.svg";
import ifood from "../../images/ifood.svg";
import mastercard from "../../images/mastercard.svg";
import pix from "../../images/pix.svg";
import amex from "../../images/amex.svg";
import ticket from "../../images/ticket.svg";
import sodexo from "../../images/sodexo.svg";

import econverse from "../../images/econverse.svg";
import vtexFooter from "../../images/vtexFooter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__firstColumn">
        <div className="footer__firstColumn--left">
          <div className="footer__aboutUs">
            <h2 className="footer__titles">Sobre nós</h2>
            <ul className="footer__ul">
              <li className="footer__aboutUs--li">Conheça</li>
              <li className="footer__aboutUs--li">Como comprar</li>
              <li className="footer__aboutUs--li">Indicação e desconto</li>
            </ul>
            <div className="footer__aboutUs--social">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="footer__infos">
            <h2 className="footer__titles">Informações Úteis</h2>
            <ul className="footer__ul">
              <li className="footer__infos--li">Fale conosco</li>
              <li className="footer__infos--li">Dúvidas</li>
              <li className="footer__infos--li">Prazos de entrega</li>
              <li className="footer__infos--li">Formas de pagamento</li>
              <li className="footer__infos--li">Política de privacidade</li>
              <li className="footer__infos--li">Trocas e devoluções</li>
            </ul>
          </div>
          <div className="footer__payment">
            <h2 className="footer__titles">Formas de pagamento</h2>
            <div className="footer__payment--cards">
              <img src={visa} alt="" />
              <img src={elo} alt="" />
              <img src={alelo} alt="" />
              <img src={dinners} alt="" />
              <img src={ifood} alt="" />
              <img src={mastercard} alt="" />
              <img src={pix} alt="" />
              <img src={amex} alt="" />
              <img src={ticket} alt="" />
              <img src={sodexo} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__firstColumn--right">
          <div className="footer__newsletter">
            <h2>
              Cadastre-se e receba nossas <strong>novidades e promoções</strong>
            </h2>
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
            <div className="footer__newsletter--input">
              <input type="text" placeholder="SEU E-MAIL" />
              <button>ok</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__secondColumn">
        <label>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </label>

        <div className="footer__development">
          <img src={econverse} alt="" />
          <img src={vtexFooter} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
