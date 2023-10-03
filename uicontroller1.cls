/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 09-28-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class uicontroller1 {
    public uicontroller1() {
    system.debug('ui controller is working....');
    }



   @AuraEnabled
   public static string createContact(Contact con){

    try {
        insert con;    
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
    return con.id;
   }
}