import UserContent from './components/UserContent/UserContent';

function App() {
  const tg = window.Telegram.WebApp;
  tg.expand();

  return <UserContent />;
}

export default App;
