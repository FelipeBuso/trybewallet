import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NewExpenseForm from '../components/NewExpenseForm';
import EditExpenseForm from '../components/EditExpenseForm';
import ExpensesTable from '../components/ExpensesTable';

import './Wallet.css';

class Wallet extends React.Component {
  render() {
    const { isEditingExpense } = this.props;
    return (
      <div className="wallet-page-container">
        <Header />
        { isEditingExpense ? <EditExpenseForm /> : <NewExpenseForm /> }
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  isEditingExpense: PropTypes.bool,
};

Wallet.defaultProps = {
  isEditingExpense: false,
};

const mapStateToProps = (state) => ({
  isEditingExpense: state.wallet.isEditingExpense,
});

export default connect(mapStateToProps)(Wallet);
