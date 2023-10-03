({
    cc_sum : function(component, event, helper) {

        var x=component.get('v.numberx');
        var y=component.get('v.numbery');

        console.log('x number : ' + x);
        console.log('y number : ' + y);


        var serverController = component.get('c.sc_sum');

        serverController.setParams({
            'xnum':x,
            'ynum':y
        });


        serverController.setCallback(this,function(res){

                var status = res.getState();
                console.log(status);

                if(status=='SUCCESS'){
                    var calculation = res.getReturnValue();
                    component.set('v.result',calculation);
                } else {
                    var errmsg = res.getError()[0].message;
                    component.set('v.result',errmsg);
                }

        });





        $A.enqueueAction(serverController);




        // var calculation = parseInt(x)+parseInt(y);        
        // console.log('sum : ' + calculation);
        // component.set('v.result',calculation);
        

    },
    cc_sub : function(component, event, helper) {

        var x=component.get('v.numberx');
        var y=component.get('v.numbery');

        console.log('x number : ' + x);
        console.log('y number : ' + y);


        var serverController = component.get('c.sc_sub');

        serverController.setParams(
            {
                'xnum':x,
                'ynum':y
     
            }
        );

        serverController.setCallback(this,function(res){
                var status = res.getState();

                if(status=='SUCCESS'){
                    var calculation = res.getReturnValue();
                    component.set('v.result',calculation);
                } else {
                    var err = res.getError()[0].message;
                    component.set('v.result',err);
                }


        });

        $A.enqueueAction(serverController);



        // var calculation = parseInt(x)-parseInt(y);
        
        // console.log('sub : ' + calculation);

        // component.set('v.result',calculation);

    },
    cc_mul : function(component, event, helper) {
    
        var x=component.get('v.numberx');
        var y=component.get('v.numbery');

        console.log('x number : ' + x);
        console.log('y number : ' + y);


            var serverController=component.get("c.sc_mul");
    
            serverController.setParams({
                'xnum':x,
                'ynum':y
            });
            serverController.setCallback(this,function(res){
                var state=res.getState();
                
                
    
                if(state==='SUCCESS'){
                    var resVal=res.getReturnValue();
    
                    component.set("v.result",resVal);
                    
                    
    
                }else{
                    var errMsg=res.getError();
                    component.set("v.result",errMsg[0].message);
    
                }
    
    
    
            });
    
            $A.enqueueAction(serverController);
    
            
    
        },


        cc_div : function(component, event, helper) {
    
            var x=component.get('v.numberx');
            var y=component.get('v.numbery');
    
            console.log('x number : ' + x);
            console.log('y number : ' + y);
    
    
                var serverController=component.get("c.sc_div");
        
                serverController.setParams({
                    'xnum':x,
                    'ynum':y
                });
                serverController.setCallback(this,function(res){
                    var state=res.getState();
                    
                    
        
                    if(state==='SUCCESS'){
                        var resVal=res.getReturnValue();
        
                        component.set("v.result",resVal);
                        
                        
        
                    }else{
                        var errMsg=res.getError();
                        component.set("v.result",errMsg[0].message);
        
                    }
        
        
        
                });
        
                $A.enqueueAction(serverController);
        
                
        
            }
})