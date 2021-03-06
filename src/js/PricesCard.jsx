import React from "react";
import "../css/PricesCard.scss";
import { Grid } from "@material-ui/core";

const tiers = [
  {
    title: "1° Lote",
    value: "35",
    sold_out: true,
    selling: false
  },
  {
    title: "2° Lote",
    value: "40",
    sold_out: true,
    selling: false
  },
  {
    title: "3° Lote",
    value: "45",
    sold_out: true,
    selling: false
  },
  {
    title: "4° Lote",
    value: "50",
    sold_out: true,
    selling: false
  },
  {
    title: "5° Lote",
    value: "55",
    sold_out: false,
    selling: true
  }
];

const sellers = [
  {
    id: 1,
    name: "Pedro Moutinho",
    location: "Savassi / UFMG Noite",
    contact: "553175452165",
    masked_contact: "(31) 7545-2165"
  },
  {
    id: 2,
    name: "Matheus Duarte",
    location: "Centro / PUC São Gabriel",
    contact: "553191466722",
    masked_contact: "(31) 9146-6722"
  },
  {
    id: 3,
    name: "Guilherme Otávio",
    location: "UFMG Tarde",
    contact: "553192963132",
    masked_contact: "(31) 9296-3132"
  },
  {
    id: 4,
    name: "Matheus Frade",
    location: "UFMG Noite",
    contact: "553175634028",
    masked_contact: "(31) 7563-4028"
  }
];

export default class PricesCard extends React.Component {
  renderSeller(seller) {
    return (
      <Grid className="prices-seller" item xs={12} md={6} key={seller.id}>
        <span className="seller-name">
          {seller.name} ({seller.location})
        </span>
        <span className="seller-contact">
          <a
            href={`https://wa.me/${seller.contact}/?text=Olá, quero comprar ingresso para a flashback`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/wpp-logo.png" alt="Whats app" />
            <div>
              <div>Clique aqui para enviar uma mensagem</div>
              {seller.masked_contact}
            </div>
          </a>
        </span>
      </Grid>
    );
  }

  render() {
    return (
      <div className="prices-container">
        <div className="prices-header">
          <span>Ingressos</span>
        </div>
        <div className="prices-content">
          <Grid container alignContent="center" alignItems="center">
            <Grid item xs={12} md={12} className="prices-sellers">
              <>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{ paddingBottom: "40px" }}
                >
                  <div className="prices-sub-header">Compre pelo Sympla:</div>
                  <div className="prices-seller">
                    <span className="seller-contact">
                      <a
                        href="https://www.sympla.com.br/flashback-cefet__697366"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/sympla-logo.png" alt="Whats app" /> Clique
                        aqui para comprar pelo Sympla
                      </a>
                    </span>
                  </div>
                </Grid>
                <div className="prices-sub-header">Ou Compre com:</div>
                <Grid
                  container
                  spacing={2}
                  style={{ padding: "0 12px", paddingBottom: "40px" }}
                >
                  {sellers.map(seller => this.renderSeller(seller))}
                </Grid>
              </>
            </Grid>
            <Grid item xs={12} md={12} className="prices-tiers">
              <Grid container spacing={2} style={{ padding: "0 12px" }}>
                {tiers.map((tier, i) => (
                  <Grid item xs={12} md={4} key={i}>
                    <a
                      href="https://www.sympla.com.br/flashback-cefet__697366"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`prices-tier ${
                          tier.sold_out
                            ? "prices-tier--sold-out"
                            : tier.selling
                            ? "prices-tier--selling"
                            : ""
                        }`}
                      >
                        <span>{tier.title}</span>
                        <span>R$ {tier.value},00</span>
                      </div>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
