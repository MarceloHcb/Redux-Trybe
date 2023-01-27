import { actionCreator } from './redux/actions';
import { connect } from 'react-redux';
import React from 'react';

class App extends React.Component {
  render(props) {
    const { dispatch, countState } = this.props;
    console.log(countState);
    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
}
)

export default connect(mapStateToProps)(App);
