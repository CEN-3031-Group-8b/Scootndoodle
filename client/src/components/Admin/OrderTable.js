import React from 'react';
import MaterialTable from 'material-table';



export default function OrderTable() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Email Address', field: 'email' },
      { title: 'Price', field: 'totalPrice' },
      { title: 'Items Ordered', field: 'itemsOrdered' },
      { title: 'Order Status', field: 'status' },
    ],
    //uses sample data is a json format because we have no genuine data to work with
    //once genuine data is gathered, simply connect it to mongo
    data: [
      {
        id: 1,
        email:'john25@gmail.com',
        totalPrice: '28.00',
        itemsOrdered: 'Hippo x 2',
        status: 'Open'
    },
    {
        id: 2,
        email:'exampleuser@gmail.com',
        totalPrice: '14.00',
        itemsOrdered: 'Hippo x 1',
        status: 'Closed'
    },
    {
        id: 3,
        email:'tracy81@gmail.com',
        totalPrice: '12.00',
        itemsOrdered: 'Car x 1',
        status: 'Closed'
    },
    {
        id: 4,
        email:'elemschool@gmail.com',
        totalPrice: '196.00',
        itemsOrdered: 'Hippo x 14',
        status: 'Open'
    },
    {
        id: 5,
        email:'mitch@yahoo.com',
        totalPrice: '12.00',
        itemsOrdered: 'Car x 1',
        status: 'Open'
    },
    {
        id: 6,
        email:'rishi41@gmail.com',
        totalPrice: '28.00',
        itemsOrdered: 'Hippo x 2',
        status: 'Closed'
    },
    ],
    
  });

  return (
   //return the table itself using the materialTable library
    <MaterialTable 

    title="Orders"
    columns={state.columns}
    data={state.data}
    editable={{
    //onRowAdd updates state whenever a row is added so the new table corrrectly displays new data
      onRowAdd: newData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            setState(prevState => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }, 1000);
        }),
          
 //onRowAdd updates state whenever a row is updated so the new table corrrectly displays new data
      onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            if (oldData) {
              setState(prevState => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }, 1000);
        }),
        
 //onRowAdd updates state whenever a row is deleted so the new table corrrectly displays new data set
      onRowDelete: oldData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            setState(prevState => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }, 1000);
          
        }),
    }}
    options={{
      headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF',
        padding: '10px'
      },
      searchFieldStyle: {
        height: '70px'
       
      }
    }}
  />
                
  );
}
