import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const buttonAction = recording ? stopRecording : startRecording;

  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter name"
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        <Button
          onPress={buttonAction}
          title={recording ? 'Stop' : 'Start Recording'}
        />
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
