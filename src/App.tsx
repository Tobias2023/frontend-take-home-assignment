import * as React from 'react';
import Card from './components/Card';
import GlobalStyle from './theme/globalStyle';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <GlobalStyle />
      <h3 style={styles.title}>
        Let`s plan your <span style={styles.span}>Savings goal.</span>
      </h3>
      <Card />
    </div>
  );
};

export default App;

const styles = {
  title: {
    top: '50px',
    textAlign: 'center',
    color: '#0f12bb',
    fontWeight: '100'
  },
  span: {
    fontWeight: 'bold'
  }
};
