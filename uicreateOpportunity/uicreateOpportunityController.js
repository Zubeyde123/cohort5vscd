({
    createOpportunityController : function(component, event, helper) {


        var singleOpp = component.get('v.singleOpportunity');


        var serverController = component.get('c.createOpportunity');
        
              
        
                
        
        serverController.setParams({
            opp: {
                'sobjectType': 'Opportunity',
                'Name': singleOpp.Name,
                'CloseDate': singleOpp.CloseDate,
                'StageName': singleOpp.StageName
            }
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