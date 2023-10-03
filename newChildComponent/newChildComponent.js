import { LightningElement,api } from 'lwc';

export default class NewChildComponent extends LightningElement {

  
  @api hellomessage = 'Child';

  
  @api changemessage(){
    console.log('child message is chaged from parent...');

    this.hellomessage='Message Changed via function...';
  }
}