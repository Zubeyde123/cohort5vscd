({
    createAccountClientController : function(component, event, helper) {


        var singleAcc = component.get('v.singleAccount');


        var serverController = component.get('c.createAccount');
              
        
                
        
                serverController.setParams({
                    acc:singleAcc
                   
                });
        
                serverController.setCallback(this,function(response){
                    console.log(response);
                    var state=response.getState();
        
                    
        
                    if(state==='SUCCESS'){
                        var responseValue = response.getReturnValue();
                        component.set('v.Message', responseValue);
        
                    } else {
                        var errormsg = response.getError()[0].message;
                        console.log(errormsg);
                        component.set('v.Message', errormsg);
                    }
                });
        
                $A.enqueueAction(serverController);
    }
})