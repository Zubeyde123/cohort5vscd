import { LightningElement } from 'lwc';

export default class Parenthello extends LightningElement {




  changeChildMessageHandler(){

    console.log('parent button is clicked...');

    this.template.querySelector('c-childhello').changemessage();

    this.template.querySelector('c-new-child-component').changemessage();

  }
}