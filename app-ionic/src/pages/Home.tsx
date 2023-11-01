import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardContent, IonImg } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [imageURL, setImageURL] = useState(); // state para armazenar a URL da imagem

  const showMessage = () => {

    // Fazer uma chamada POST
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'POST';
    axios.post('https://pic.re/image')
      .then((response) => {
        // Assumindo que a resposta contém um campo "file_url"
        const fileURL = response.data.file_url;
        setImageURL(fileURL); // Definir o estado da imagem com a URL da resposta
      })
      .catch((error) => {
        console.error('Erro ao buscar imagem da API:', error);
      });
  }

  return (
    <IonPage>
      <IonContent>
        <h1>Bem vindo ao Meu Site</h1>
        <p>Este é um parágrafo de exemplo.</p>
        <IonButton expand="full" color="primary" onClick={showMessage}>Clique Aqui</IonButton>
        <IonCard>
          <IonCardHeader>
            <h2>Seção Importante</h2>
          </IonCardHeader>
          <IonCardContent>
            <p>Esta é uma seção com conteúdo relevante.</p>
          </IonCardContent>
        </IonCard>
	    <IonImg src = './assets/marca.png' width='400px' height='400px'></IonImg>
            <IonImg
              src= {imageURL}
            ></IonImg>
        {console.log(imageURL)}
      </IonContent>
    </IonPage>
  );
}

export default Home;
