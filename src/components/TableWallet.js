import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default class TableWallet extends Component {
  render() {
    return (
      <table>
        <TableHead />
        <TableBody />
      </table>
    );
  }
}