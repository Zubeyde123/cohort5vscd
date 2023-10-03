/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 10-03-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class uiAccountHandler {
    public uiAccountHandler() {

    }

    @AuraEnabled
    public static string createAcc(Account acc){
        system.debug('Create Acc Details...');
        system.debug(acc);
        // Account acc=new Account(Name=accName,Phone=accPhone);
        try {
            insert acc;
            return acc.id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        
    }


    @AuraEnabled(cacheable=true)
    public static List<Account> accList(String searchTerm){
        List<Account> searchedAcc = New List<Account>();

        if(searchTerm=='' || searchTerm==null){
            return searchedAcc;

        }
        String search = '%' + searchTerm + '%';
        try {
            searchedAcc=[SELECT Id, Name, Phone, Industry, AnnualRevenue,Website FROM Account WHERE Name LIKE :search];
            return searchedAcc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled(cacheable=true)
    public static List<Account> allAccList(){
        List<Account> multiAcc = New List<Account>();
        try {
            multiAcc=[SELECT Id,Name,Industry,Phone,WebSite,AnnualRevenue FROM Account];
            return multiAcc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }




}