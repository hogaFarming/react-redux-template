import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';
import Counter from '../components/Counter';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(counterActions, dispatch);
}

const CounterPage = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterPage;
