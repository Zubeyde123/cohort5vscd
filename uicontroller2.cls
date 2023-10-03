/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 09-28-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class uicontroller2 {
    public uicontroller2() {

    }
    @AuraEnabled
    public static string createOpp(Opportunity opp){
        try {
           insert opp;
           return opp.id; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        
    }
}