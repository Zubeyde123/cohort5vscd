({
    cc_searchAccount : function(component, event, helper) {
        //  {label: 'Account name', fieldName: 'Name', type: 'text'},

        var columns = [            
            { label: 'Name', fieldName: 'linkAcc', type: 'url',typeAttributes: { label: { fieldName: 'Name' } } },
            {label: 'Industry', fieldName: 'Industry', type: 'text'},           
            {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency', typeAttributes: { currencyCode: 'USD', maximumSignificantDigits: 5}},
            {label: 'Phone', fieldName: 'Phone', type: 'phone'},
            
        ];



        component.set('v.columns',columns);

        var search = component.get('v.search');

        
        console.log('Search : '+search);

        if(search==null || search==''){
            component.set('v.isAccountFound',false);
        }

        var serverController = component.get('c.accList');


        serverController.setParams({
            'searchTerm':search
        });

        serverController.setCallback(this, function(res){
            var state = res.getState();

            if(state=='SUCCESS'){

                // list of accounts
                var returnedValues = res.getReturnValue(); 

                // v.isAccountFound
                if(returnedValues.length>0){
                    component.set('v.isAccountFound',true);

                } else {
                    component.set('v.isAccountFound',false);
                }


                console.log('returnedValues...');
                console.log(returnedValues);



                returnedValues.map((item)=>{

                    item.linkAcc='/lightning/r/Account/'+item.Id+'/view';

                    return item;


                });

  
                component.set('v.accountList',returnedValues);

            } else {
                var err = res.getError()[0].message;

                component.set('v.err',err);
                component.set('v.isAccountFound',false);
            }


        });





        $A.enqueueAction(serverController);


       
    }
})