import React, { useState, useEffect } from 'react';

export default (props) => {

  const [name, setName] = useState();
  const [confirmed, setConfirmed] = useState(null);

  useEffect(() => {
    const nameInStorage = window.localStorage.getItem('name', name);
    if (nameInStorage) {
      if (isTrueHero(nameInStorage)) {
        setName(nameInStorage);
        setConfirmed(true);
      }
    }

  }, [])


  const onNameChange = (e) => {
    setName(e.target.value);
  }


  const isTrueHero = (testName) => {
    return testName && testName.toLowerCase().includes('daniella');
  }

  const onNameSubmit = (e) => {
    if (isTrueHero(name)) {
      window.localStorage.setItem('name', name);
      setConfirmed(true);
    } else {
      setConfirmed(false);
    }
  }

  const renderPrompt = () => {
    if (confirmed) {
      return null;
    }
    return (
      <div className="center">
        <p>To begin, enter your name</p>
        <input type='test' onChange={onNameChange}></input>
        <br />
        <br />
        <button onClick={onNameSubmit}>Enter</button>
      </div>
    );

  }


  return (
    <div className="Gate">
      {renderPrompt()}
      {confirmed === false && <div>You are not the true hero. Only the chosen adventurer may receive guidance.</div>}
      {confirmed === true && props.children}
    </div>
  );

};