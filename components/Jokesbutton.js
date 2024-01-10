import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function JokesButton() {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);

  const handleGetJokeClick = async () => {
    const fetchedJoke = await getJoke();
    setJoke(fetchedJoke);
    setShowPunchline(false);
  };

  const handleGetNewJokeClick = async () => {
    setShowPunchline(false);
    const fetchedJoke = await getJoke();
    setJoke(fetchedJoke);
  };

  return (
    <div>
      {!joke && !showPunchline && (
        <button type="button" onClick={handleGetJokeClick}>
          Get a Joke
        </button>
      )}
      {joke && (
        <div>
          <p>{joke.setup}</p>
          {!showPunchline && (
            <button type="button" onClick={() => setShowPunchline(true)}>
              Get the Punchline
            </button>
          )}
          {showPunchline && (
            <>
              {' '}
              <p>{joke.delivery}</p>
              <button type="button" onClick={handleGetNewJokeClick}>
                Get New Joke
              </button>{' '}
            </>
          )}
        </div>
      )}
    </div>
  );
}
