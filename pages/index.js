import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({ hospitals }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leitos COVID-19</title>
        <meta name="description" content="Informações dos leitos de COVID-19 em Ribeirão Preto - SP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Leitos de COVID-19 em Ribeirão Preto - SP
        </h1>

        <p className={styles.description}>
          Informações sobre os leitos hospitalares referentes ao COVID-19, na cidade de Ribeirão Preto, São Paulo.
        </p>

        <div className={styles.grid}>
          {hospitals.map((hospital, index) => (
            <div key={index} className={styles.card}>
              <h4>{hospital.nomeCnes}</h4>
              <p>Leitos clínicos: {hospital.ofertaSRAGCli}</p>
              <p>Leitos UTI: {hospital.ofertaSRAGUti}</p>
              <p>Ocupados clínica: {hospital.ocupSRAGCli}</p>
              <p>Ocupados UTI: {hospital.ocupSRAGUti}</p>
              <p>Taxa ocupação clínica: {hospital.ofertaSRAGCli != 0 ? Math.round((hospital.ocupSRAGCli/hospital.ofertaSRAGCli)*100) : 0} %</p>
              <p>Taxa ocupação UTI: {hospital.ofertaSRAGUti != 0 ? Math.round((hospital.ocupSRAGUti/hospital.ofertaSRAGUti)*100) : 0} %</p>
              <p>Altas: {hospital.altas}</p>
              <p>Óbitos: {hospital.obitos}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.unaerp.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Carlos Eduardo Lopes, Henrique Biazibetti e Leonardo Moitinho
          <span className={styles.logo}>
            <Image src="/unaerp.png" alt="UNAERP Logo" width={72} height={27} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const credentials = {
    username: "user-api-leitos",
    password: "aQbLL3ZStaTr38tj"
  };

  const filter = {
    "query": {
      "bool": { 
        "must": [
          { 
            "match": { 
              "estadoSigla":   "SP" 
            }
          },
          { 
            "match": { 
              "municipio": "Ribeirão Preto" 
            }
          }
        ]
      }
    }
  };

  const data = await axios.post("https://elastic-leitos.saude.gov.br/leito_ocupacao/_search", filter, { auth: credentials });

  const hospitals = data.data.hits.hits.map((x) => {
    return x._source;
  });

  return {
    props: {
      hospitals
    }
  }
}
