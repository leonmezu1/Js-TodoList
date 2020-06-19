
const navigation = document.getElementById('navigation');
const mainView = document.getElementById('main-view');
const setHeight = () => {
  const height = navigation.offsetHeight;
  mainView.style.height = `${window.innerHeight - height}px`;
};

export default setHeight;