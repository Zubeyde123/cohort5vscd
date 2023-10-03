({
    createContactClientController : function(component, event, helper) {
        var singleCon = component.get('v.singleContact');
        var serverController = component.get('c.createContact');
              
        
                
        
                serverController.setParams({
                    con:singleCon
                   
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