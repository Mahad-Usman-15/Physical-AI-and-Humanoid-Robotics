import React from 'react';
import DocItem from '@theme-original/DocItem';

const PersonalizeButton = () => {
  const handlePersonalize = () => {
    alert('Personalize Chapter clicked!');
  };

  return (
    <button onClick={handlePersonalize} style={{marginRight: '10px'}}>
      Personalize Chapter
    </button>
  );
};

const TranslateButton = () => {
  const handleTranslate = () => {
    alert('Translate Chapter to Urdu clicked!');
  };

  return (
    <button onClick={handleTranslate}>
      Translate Chapter to Urdu
    </button>
  );
};

export default function DocItemWrapper(props) {
  return (
    <>
      <div style={{marginBottom: '20px'}}>
        <PersonalizeButton />
        <TranslateButton />
      </div>
      <DocItem {...props} />
    </>
  );
}
