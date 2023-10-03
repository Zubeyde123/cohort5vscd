import { LightningElement } from 'lwc';


const columns = [
  { label: 'firstNum', fieldName: 'firstNum' },
  { label: 'secondNum', fieldName: 'secondNum' },
  { label: 'calcType', fieldName: 'calcType' },
  { label: 'result', fieldName: 'result' },
];


export default class Lwcmath extends LightningElement {
  numberx=0;
  numbery=0;
  result=0;

  columns = columns;

  calcHistory = [];

  calcHandler(event){
    console.log('NAME :' + event.target.name);
    console.log('VALUE : '+ event.target.value);


    switch(event.target.name) {
      case 'sum':
          // code block
          this.result=parseInt(this.numberx)+parseInt(this.numbery);

          break;
      case 'sub':
          // code block
          this.result=parseInt(this.numberx)-parseInt(this.numbery);
          break;
      case 'mul':
        // code block
        this.result=parseInt(this.numberx)*parseInt(this.numbery);
        break;

        case 'div':
      // code block
      this.result=parseInt(this.numberx)/parseInt(this.numbery);
      break;
    }

    this.calcHistory=[
      ...this.calcHistory,
      {
          firstNum:this.numberx,
          secondNum:this.numbery, 
          calcType:event.target.name,
          result:this.result
      }
    ]

  
      console.log(JSON.parse(JSON.stringify(this.calcHistory)));
  }


  onchangeHandler(event){
    

    switch(event.target.name) {
      case 'numx':
          // code block
          this.numberx=event.target.value;
          break;
      case 'numy':
          // code block
          this.numbery=event.target.value;
          break;
    }
  }
}