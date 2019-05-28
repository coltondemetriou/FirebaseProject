import React from "react";
import firebase from './firebase.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import Flexbox from 'flexbox-react';


  
export default class ContractForm extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){

    return(
        <Paper >
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Contract Details</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {this.props.data.map(user => (
              <TableRow key={user.dname}>
                <TableCell component="th" scope="row">
                  {user.dname}
                </TableCell>
                <TableCell align="center">{user.dcomp}</TableCell>
                <TableCell align="center">{user.ddetails}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
         )}
}

/*
Contract List
    {this.props.data.map(user =>{
        return(
            <div>
            Name: {user.dname} Company: {user.dcomp} Contract Details: {user.ddetails}
            </div>
        )
        })}
*/