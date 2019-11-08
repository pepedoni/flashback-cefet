import React from "react";
import Grid from "@material-ui/core/Grid";
import "../css/Promotions.scss";
import { TwitterTweetEmbed, TwitterHashtagButton } from "react-twitter-embed";

export default class Promotions extends React.Component {
  constructor(props) {
    super(props);
    this.openGalery = this.openGalery.bind(this);
    this.state = {
      tweetsFlashback: []
    };
  }

  openGalery(album) {
    switch (album) {
      case "radioactive":
        window.open(
          "https://photos.google.com/share/AF1QipNCLJZC_3cL3CPsECy_KhjVQMu-6vS9-pBu5Hk4J43fs3lafrW9o4d2Wdk5jD0TPQ?key=RlVGRWtyVVN0RkZRMjF6Y0tTT3UwQk1hWG9xSFhR",
          "_blank"
        );
        break;
      case "primeira-bateria":
        window.open(
          "https://photos.google.com/share/AF1QipN7nUMdEHKeM4HTbvJuEbPPD-hn0YQzi8I9FnWHHCKjrUWQzqnw-hf4F1ODsBEmXw?key=M2xIaDc2Z2RSaEs3bHRsOUNYN0M2Tm1POEowUlRB",
          "_blank"
        );
        break;
      case "festt":
        window.open(
          "https://photos.google.com/share/AF1QipPFfs8G_LFbNLIzroU7d97e3_p1edgaL8r4t4UB9kNMDyVKK8zHhu1Bn5junlatEw?key=SEctOGVTbGJjQU5wYWprTU5TWGxRb2RHNllYejJ3",
          "_blank"
        );
        break;
      case "sunrise":
        window.open(
          "https://photos.google.com/share/AF1QipNkVUm7VztISzV23J-uu7zHfvEJVsFYxXpymSJafVWptg5cEKhOwxIU9apcgRLcoA?key=bnBSdVRnOGJPbHZWaTlJTjBIQTJHSjdJZnc5VExB",
          "_blank"
        );
        break;
      case "check-in":
        window.open(
          "https://photos.google.com/u/1/share/AF1QipMMMHgVli4wrP0MHHE6ua5SAMKO4D3lGYNPCi_XE2EkwIsWk9gF_vlfJWLnGXTC2A?key=dXpwUmFVUmpWdVhEMklyZnhGSzFMQ2hTUFFBRzRR",
          "_blank"
        );
        break;
      case "check-out":
        window.open(
          "https://photos.google.com/u/1/share/AF1QipOAfeGBcdXSgPLKmFxRKQGVpH4TCOE9PI8Fe7C5H2RNbNjvT7PO6GVMZaZvSCQ5Og?key=aUNKNVJpMVVjZTlRS3Q1eDJnNDYtZUhvVFhkSVRn",
          "_blank"
        );
        break;
      case "sunset":
        window.open(
          "https://photos.google.com/share/AF1QipNPXbGWCS5v6PsXUhAM7c1zkokjlC3GnwIRcGTQauBf199G7FSTUP4oxrMZslFZfQ?key=Q2xTdGh0NGlxY0RCMGZjUHZRV09fRktIMF9Ubm1B",
          "_blank"
        );
        break;
      case "bosque":
        window.open(
          "https://photos.google.com/u/1/share/AF1QipOt3UvLTrdeYl-JXNhSFN0fM1ue3KqJxhnziDiqOzmsuUuska_HAGbBrEr0hNz9oQ?key=eVlld1NpelNKaDNNR3kwUjRiRFR6TEZyUElrRXpB",
          "_blank"
        );
        break;
      case "rdcfestfinal":
          window.open(
            "https://photos.google.com/share/AF1QipM-Mj4O3TrCxsB4_0HDM3g-y74LSm5mRNyNMGesCVG-HJRJhMZnKnnvthxZ3CC_zA?key=cGc1NElfVEdpOXB1Z0pvZ3ZxLXdnOVBfamdFWXZR",
            "_blank"
          );
          break;
      case "rdcfestreview":
        window.open(
          "https://photos.google.com/share/AF1QipO9UFYPT4d0lrwommndh4ufvAq2E6uqsyeJmd33yfcMKQQvn8kZNs2tq_1heXYPWQ?key=WEFYYmszZmgtUm93a1JyZ3Fad2FaS3Y5UXlFQmRn",
          "_blank"
        );
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="content-flex">
        <p className="intro">Promoção</p>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="promotion-card">
              <span>
                1 ingresso para o melhor flashback utilizando #FLASHBACKCEFET{" "}
                <TwitterHashtagButton
                  tag="FLASHBACKCEFET"
                  className="btn-twitter"
                />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="promotion-card">
              <span>
                1 ingresso sorteado entre os tweets com #FLASHBACKCEFET{" "}
                <TwitterHashtagButton
                  tag="FLASHBACKCEFET"
                  className="btn-twitter"
                />
              </span>
            </div>
          </Grid>
          <a
              href="./promocao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui para ver o Regulamento
          </a>
        </Grid>
        <p className="intro">Relembre suas historias</p>
        <Grid container alignItems="center" className="content-resenhas">
          <Grid
            item
            xs={12}
            md={6}
            style={{ width: "100%" }}
            className="left-col"
          >
            <div
              onClick={() => this.openGalery("rdcfestfinal")}
              className="resenha rdcfestfinal"
            />
            <div
              onClick={() => this.openGalery("check-in")}
              className="resenha check-in"
            />
            <div
              onClick={() => this.openGalery("radioactive")}
              className="resenha radioactive"
            />
            <div
              onClick={() => this.openGalery("sunrise")}
              className="resenha sunrise"
            />
            <div
              onClick={() => this.openGalery("festt")}
              className="resenha festt"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ width: "100%" }}
            className="right-col"
          >
            <div
              onClick={() => this.openGalery("rdcfestreview")}
              className="resenha rdcfestreview"
            />
            <div
              onClick={() => this.openGalery("check-out")}
              className="resenha check-out"
            />
            <div
              onClick={() => this.openGalery("primeira-bateria")}
              className="resenha primeira-bateria"
            />
            <div
              onClick={() => this.openGalery("sunset")}
              className="resenha sunset"
            />
            <div
              onClick={() => this.openGalery("bosque")}
              className="resenha bosque"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
