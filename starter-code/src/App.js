import React from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';

const App = () => {
  return (
    
    <div className="App">
      <Navbar />
      <main className="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="adasdasd" />

        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </main>
    </div>
  )
}

export default App;
