import React from 'react';
import Gate from '../../components/gate';
import { useHistory } from 'react-router';

export default () => {

  const history = useHistory();

  return (
    <div className="Help-Chat">
      <Gate>
        <iframe
          src="https://tlk.io/QuestTest08132020"
          title="quest-chat"
          // width={`${window.innerWidth}px`}
          width="100%"
          height='300px' />
      </Gate>
      <button onClick={() => { history.goBack() }}> BACK</button>
    </div>
  );

};