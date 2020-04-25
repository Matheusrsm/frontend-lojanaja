export default function actionsProdutos(categoria) {
  switch (categoria) {
    case 'celular':
      return {
        type: 'CELULAR',
      };

    case 'tv':
      return {
        type: 'TV',
      };

    case 'eletrodomesticos':
      return {
        type: 'ELETRODOMESTICO',
      };

    case 'videogame':
      return {
        type: 'VIDEOGAME',
      };
    default:
      return {
        type: 'DEFAULT',
      };
  }
}
