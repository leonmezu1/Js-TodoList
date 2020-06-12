import '../styles/styles.scss';

console.log('Test 2');

const navigation = document.getElementById('navigation');
const mainView = document.getElementById('main-view');

const height = navigation.offsetHeight;

mainView.style.height = `${window.innerHeight - height}px`;
console.log(window.innerHeight - height);