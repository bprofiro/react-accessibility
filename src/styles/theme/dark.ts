import light from './light';

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,
    textBody: '#A8A8B3',
    shape: '#3E3D3F',
    textTitle: '#E8E8E9',
    background: '#0F0F0F',
    borderColor: '#808080',
    green: '#12B054',
    red: '#FA2C19',
  },
};

export default dark;
