/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 09-27-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class uicalc {
    public uicalc() {

    }


    @AuraEnabled
    public static decimal sc_sum(decimal xnum,decimal ynum){
        decimal res = 0;
        try {
            res=xnum+ynum;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return res;
    }

    @AuraEnabled
    public static decimal sc_sub(decimal xnum,decimal ynum){
        decimal res = 0;
        try {
            res=xnum-ynum;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return res;
    }


    @AuraEnabled
    public static decimal sc_mul(decimal xnum,decimal ynum){
        decimal res = 0;
        try {
            res=xnum*ynum;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return res;
    }


    @AuraEnabled
    public static decimal sc_div(decimal xnum,decimal ynum){
        decimal res = 0;
        try {
            res=xnum/ynum;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return res;
    }

}






