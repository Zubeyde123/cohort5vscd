import { LightningElement,wire,track } from 'lwc';

// uiAccountHandler.allAccList --- whole list
// uiAccountHandler.accList  --- search
import allAccList from '@salesforce/apex/uiAccountHandler.allAccList';
import accList from '@salesforce/apex/uiAccountHandler.accList';


const actions = [
  { label: 'Show details', name: 'show_details' },
  { label: 'Send Email', name: 'send_email' },
  { label: 'Delete', name: 'delete' }
];



const columns = [
  { label: 'Name', fieldName: 'accURL',type:'url',typeAttributes:{ label: {
        fieldName: 'Name' }} },
  { label: 'Website', fieldName: 'Website', type: 'url' },
  { label: 'Phone', fieldName: 'Phone', type: 'phone' },
  { label: 'Industry', fieldName: 'Industry' },
  { label: 'Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
  { type: 'action', typeAttributes: { rowActions: actions, menuAlignment: 'right' } }
];





export default class C5lwcAccount extends LightningElement {
// wire -- imperative

columns = columns;


searchTerm='';

@track acclist;




connectedCallback(){
  console.log('connectedCallback');

 

}

textChangeHandler(event){
  this.searchTerm=event.target.value;
  

 accList({searchTerm:this.searchTerm})
  .then((data)=>{
    // console.log(data);



    this.acclist=data.map((item)=>{

      console.log(item);
      let tempACC = {
        ...item,
        accURL:'/lightning/r/Account/'+item.Id+'/view' 
      }

      console.log(JSON.parse(JSON.stringify(tempACC)));
      return tempACC;
    });
  })
  .catch((err)=>{
    console.log(err);
  });


}


handleRowAction(event) {
  const action = event.detail.action;
  const row = event.detail.row;
  switch (action.name) {
      case 'send_email':
          console.log('send_email : ' );
          console.log(JSON.parse(JSON.stringify(row)));
          break;
      case 'show_details':
          console.log('Showing Details: ' );
          console.log(JSON.parse(JSON.stringify(row)));
          break;
      case 'delete':
        console.log('delete : ');
        console.log(JSON.parse(JSON.stringify(row)));
          break;
}

}


}