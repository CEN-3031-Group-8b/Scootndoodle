import React from 'react'
import TableViewer from'../../components/Admin/OrderTable.js';
import {Row, Button} from 'react-bootstrap'
import './orders.css';
import Navigation from '../../components/Navigation/Navigation';

// imports the tableviewer component created and displays it on this page with the extension 'adminportal'
export const Orders = () => (
    <React.Fragment>     
        <body className = "tableView">
        <TableViewer /> 
        </body>   
    </React.Fragment>
)
