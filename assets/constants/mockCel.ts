const data = [
  {
    id: "1",
    nome: "Giroscópio",
    funcao:
      "Detecta a orientação do dispositivo, utilizado para rastrear movimentos principalmente em jogos e em atividades como corrida, para detectar passos.",
    imagem: require("@/assets/giroscopio.webp"),
  },
  {
    id: "2",
    nome: "GPS",
    funcao:
      "Detecta a posição do dispostivo, utilizado para rastrear a posição do dispositivo e necesssário para se localizar",
    imagem: require("@/assets/GPS.avif"),
  },
  {
    id: "3",
    nome: "Temperatura",
    funcao:
      "Detecta a temperatura do dispositivo, sendo necessário para monitorar se o dispositivo esta superaquecendo.",
    imagem: require("@/assets/tempCel.webp"),
  },
  {
    id: "4",
    nome: "Luminosidade",
    funcao:
      'Detecta a iluminação do ambiente, necessário na função "brilho automático" em dispositivos móveis, ajusta para melhor visibilidade da tela.',
    imagem: require("@/assets/luz.webp"),
  },
  {
    id: "5",
    nome: "Proximidade",
    funcao:
      "Rastreia a proximidade do dispositivo com alguma superfície, utilizado na função da tela do celular desligar ao aproximar da orelha do usuário.",
    imagem: require("@/assets/proximidade.webp"),
  },
];

export default data;
