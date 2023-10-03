({
    changeText : function(component, event, helper) {

        var msg = component.get('v.hellomsg');
        console.log('activity button is clicked....'+msg);

        component.set('v.clientControllerMsg','activity button is clicked....'+msg);
    }
})