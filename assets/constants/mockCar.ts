const data = [
  {
    id: "1",
    nome: "Sensor de Temperatura",
    funcao:
      "Componente que mede a temperatura de diferentes sistemas do veículo e envia essas informações para a central do veiculo",
    imagem: require("@/assets/TempCar.png"),
  },
  {
    id: "2",
    nome: "Sensor de Nivel",
    funcao:
      "Sua principal função é monitorar o nivel de fluidos como combustível, oleo e água do radiador. Enviando esses dados para o painel",
    imagem: require("@/assets/NivelCar.png"),
  },
  {
    id: "3",
    nome: "Sensor de rotação",
    funcao:
      "Sua principal função é monitorar a velocidade do virabrequim (RPM), para controlar a injeção de combustível e ignição",
    imagem: require("@/assets/RotCar.png"),
  },
  {
    id: "4",
    nome: "Sensor de ultrassom",
    funcao:
      "Sua principal função é detectar as ondas sonoras emitida pelo para-choque para detectar obstáculos",
    imagem: require("@/assets/UltrassomCar.png"),
  },
  {
    id: "5",
    nome: "Sensor de Acelerômetro",
    funcao:
      "Sua principal função é fazer a medição de impactos, aceleração linear e inclinação dos eixos, sendo utilizado na ativação de airbags, no controle de tração e na navegação",
    imagem: require("@/assets/AcelCar.png"),
  },
];

export default data;
