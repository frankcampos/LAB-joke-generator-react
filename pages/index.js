import Image from 'next/image';
import Jokesbutton from '../components/Jokesbutton';

function Home() {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-content-center" style={{ height: '90vh', padding: '30px', maxWidth: '400px', margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          marginBottom: '10px',
          borderStyle: 'double',
          borderColor: 'black',
          overflow: 'hidden', // To ensure the border contains the image
          borderRadius: '10px', // Optional, if you want rounded corners
        }}
      >
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIghl93HlHR1-CH7QMq18-mHD5FxoQkwNr6A&usqp=CAU"
          alt="Descriptive Alt Text"
          layout="fill"
          objectFit="cover" // Adjust how image fits in the container
        />
      </div>
      <Jokesbutton />
    </div>
  );
}

export default Home;
