import {Injectable} from '@angular/core';

@Injectable()

export class AccountServices{
    
    constructor(){
        console.log('Im Account services')
    }

    setAccountDetails(accntId,accntObj){
        accntObj[accntId]=accntObj;
    }

    getAccountDetails(accntId){
        return accntObj[accntId];
    }

    getAccntData():{accounts:Array<object>}{
        return {
            accounts:accntData['result']['accounts'],
        }
    }

}
let accntObj:object={};
let accntData={"id":"13bd7886-ea48-41ea-bfd6-64f4270eb695","result":{"maxNumberOfResults":3,"accounts":[{"producerCodes":["\n  (AccountProducerCode) {ID=306, BeanVersion=0, Account=308, ArchivePartition=null, CreateTime=Fri Mar 29 07:17:59 EDT 2019, CreateUser=298, FrozenSet=null, ProducerCode=77, PublicID=pc:306, RetiredValue=0, UpdateTime=Fri Mar 29 07:17:59 EDT 2019, UpdateUser=298}"],"accountCreatedDate":"2019-03-29T11:17:59Z","policySummaries":[{"expiration":"2019-09-29T04:01:00Z","primaryInsuredName":"Bhanu Singh","policyNumber":"6200379187","product":{"publicID":"PersonalAuto","productCode":"PersonalAuto","productName":"Personal Auto"},"premium":{"currency":"usd","amount":489.00},"producerCodeOfService":"301-008573","accountNumber":"5828154954","accountHolder":{"displayName":"Bhanu Singh","publicID":"pc:1210","subtype":"Person","contactName":"Bhanu Singh","primaryAddress":{"state":"OH","country":"US","displayName":"1800 halleck pl, Columbus, OH 43209","publicID":"pc:1322","city":"Columbus","postalCode":"43209","addressLine1":"1800 halleck pl","addressType":"home"},"emailAddress1":"bhanusingh@gmail.com","accountHolder":true,"homeNumber":"2010202111","gender":"M","primaryPhoneType":"home","dateOfBirth":{"month":1,"year":1980,"day":5},"firstName":"Bhanu","lastName":"Singh","licenseNumber":"OH123456","licenseState":"OH","additionalAddresses":[{"state":"OH","country":"US","displayName":"1800 halleck pl, Columbus, OH 43209","publicID":"pc:1326","city":"Columbus","postalCode":"43209","addressLine1":"1800 halleck pl","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"PersonalAutoLine","lineOfBusinessName":"Personal Auto Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-29T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Bhanu Singh","producerCodeOfRecord":"301-008573"}],"numberOfOpenActivities":0,"isPersonalAccount":true,"accountNumber":"5828154954","accountHolder":"Bhanu Singh","createdByMe":true,"accountHolderAddress":{"state":"OH","country":"US","displayName":"1800 halleck pl, Columbus, OH 43209","publicID":"pc:1322","city":"Columbus","postalCode":"43209","addressLine1":"1800 halleck pl","addressType":"home"},"isCommercialAccount":false},{"producerCodes":["\n  (AccountProducerCode) {ID=305, BeanVersion=0, Account=307, ArchivePartition=null, CreateTime=Fri Mar 29 07:07:42 EDT 2019, CreateUser=298, FrozenSet=null, ProducerCode=77, PublicID=pc:305, RetiredValue=0, UpdateTime=Fri Mar 29 07:07:42 EDT 2019, UpdateUser=298}"],"accountCreatedDate":"2019-03-29T11:07:42Z","policySummaries":[{"expiration":"2019-09-29T04:01:00Z","primaryInsuredName":"Test Smoke","policyNumber":"5892661185","product":{"publicID":"PersonalAuto","productCode":"PersonalAuto","productName":"Personal Auto"},"premium":{"currency":"usd","amount":205.00},"producerCodeOfService":"301-008573","accountNumber":"3537321588","accountHolder":{"displayName":"Test Smoke","publicID":"pc:1209","subtype":"Person","contactName":"Test Smoke","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, Tuscon, AZ 85710","publicID":"pc:1320","city":"Tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@test.com","accountHolder":true,"homeNumber":"5634754736","gender":"M","primaryPhoneType":"home","dateOfBirth":{"month":11,"year":2008,"day":28},"firstName":"Test","lastName":"Smoke","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, Tuscon, AZ 85710","publicID":"pc:1324","city":"Tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"PersonalAutoLine","lineOfBusinessName":"Personal Auto Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-29T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Smoke","producerCodeOfRecord":"301-008573"}],"numberOfOpenActivities":0,"isPersonalAccount":true,"accountNumber":"3537321588","accountHolder":"Test Smoke","createdByMe":true,"accountHolderAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, Tuscon, AZ 85710","publicID":"pc:1320","city":"Tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"isCommercialAccount":false},{"producerCodes":["\n  (AccountProducerCode) {ID=303, BeanVersion=0, Account=305, ArchivePartition=null, CreateTime=Thu Mar 28 04:49:40 EDT 2019, CreateUser=298, FrozenSet=null, ProducerCode=77, PublicID=pc:303, RetiredValue=0, UpdateTime=Thu Mar 28 04:49:40 EDT 2019, UpdateUser=298}"],"accountCreatedDate":"2019-03-28T08:49:40Z","policySummaries":[{"expiration":"2020-03-29T04:01:00Z","primaryInsuredName":"Test Account","policyNumber":"8614792923","product":{"publicID":"BusinessOwners","productCode":"BusinessOwners","productName":"Businessowners"},"premium":{"currency":"usd","amount":553.00},"producerCodeOfService":"301-008573","accountNumber":"9309304923","accountHolder":{"displayName":"Test Account","publicID":"pc:1207","subtype":"Person","contactName":"Test Account","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@Mail.com","accountHolder":true,"homeNumber":"3535353535","primaryPhoneType":"home","dateOfBirth":{"month":2,"year":2000,"day":26},"firstName":"Test","lastName":"Account","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1312","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"BOPLine","lineOfBusinessName":"Businessowners Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-29T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Account","producerCodeOfRecord":"301-008573"},{"expiration":"2020-03-28T04:01:00Z","primaryInsuredName":"Test Account","policyNumber":"0312989540","product":{"publicID":"BusinessOwners","productCode":"BusinessOwners","productName":"Businessowners"},"premium":{"currency":"usd","amount":442.00},"producerCodeOfService":"301-008573","accountNumber":"9309304923","accountHolder":{"displayName":"Test Account","publicID":"pc:1207","subtype":"Person","contactName":"Test Account","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@Mail.com","accountHolder":true,"homeNumber":"3535353535","primaryPhoneType":"home","dateOfBirth":{"month":2,"year":2000,"day":26},"firstName":"Test","lastName":"Account","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1312","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"BOPLine","lineOfBusinessName":"Businessowners Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-28T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Account","producerCodeOfRecord":"301-008573"},{"expiration":"2019-09-28T04:01:00Z","primaryInsuredName":"Test Account","policyNumber":"6931922362","product":{"publicID":"PersonalAuto","productCode":"PersonalAuto","productName":"Personal Auto"},"premium":{"currency":"usd","amount":205.00},"producerCodeOfService":"301-008573","accountNumber":"9309304923","accountHolder":{"displayName":"Test Account","publicID":"pc:1207","subtype":"Person","contactName":"Test Account","primaryAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"emailAddress1":"Test@Mail.com","accountHolder":true,"homeNumber":"3535353535","primaryPhoneType":"home","dateOfBirth":{"month":2,"year":2000,"day":26},"firstName":"Test","lastName":"Account","licenseNumber":"A12345678","licenseState":"AZ","additionalAddresses":[{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1312","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"billing"}]},"displayStatus":"In Force","policyLines":[{"lineOfBusinessCode":"PersonalAutoLine","lineOfBusinessName":"Personal Auto Line"}],"isCancelled":false,"createdByMe":true,"effective":"2019-03-28T04:01:00Z","canUserView":true,"isIssued":true,"delinquent":false,"accountHolderName":"Test Account","producerCodeOfRecord":"301-008573"}],"numberOfOpenActivities":0,"isPersonalAccount":true,"accountNumber":"9309304923","accountHolder":"Test Account","createdByMe":true,"accountHolderAddress":{"state":"AZ","country":"US","displayName":"7471 E Random R, tuscon, AZ 85710","publicID":"pc:1310","city":"tuscon","postalCode":"85710","addressLine1":"7471 E Random R","addressType":"home"},"isCommercialAccount":false}]},"jsonrpc":"2.0"}