import Jokesbutton from '../components/Jokesbutton';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIghl93HlHR1-CH7QMq18-mHD5FxoQkwNr6A&usqp=CAU"
        alt="Descriptive Alt Text"
      />
      <Jokesbutton />
    </div>
  );
}

export default Home;
