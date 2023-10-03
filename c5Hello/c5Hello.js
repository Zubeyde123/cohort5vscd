import { LightningElement } from 'lwc';

export default class C5Hello extends LightningElement {
    person ={
        firstName:'Enes',
        lastName:'Tom'
    }
    clickHandler(){
        console.log('LWC button is clicked.');
 this.person.firstName='Ahmet';
 console.log(JSON.parse(JSON.stringify(this.person)));
    }
}