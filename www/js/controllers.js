angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,$stateParams, $ionicSideMenuDelegate, $http,$ionicModal) {
 
    $scope.data = {};
 

 $scope.test = {};
 $scope.product = [];
$scope.itemlist=[];
$ionicModal.fromTemplateUrl('templates/cart.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

   

$scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      }

      $scope.ratingsCallback = function(rating) {
        //console.log('Selected rating is : ', rating);
      }

$scope.dashboardLoad=function() {


   // alert("Inside the DAshboarddd");
  
    $http.get(dashboardapi,{
         
        })
        .success(function(data){
            $scope.test=data;


for(var i=0;i<data.length;i++)
{
    /*$scope.product=$scope.test[i].productid;*/

    $scope.product.push($scope.test[i].productid);  
}
            

alert("==success=="+JSON.stringify($scope.product));

//var values = {name: 'misko', gender: 'male'};
// var itemlist = [];
// angular.forEach(data, function(value, key) {
//     alert("--"+key);
//     alert("value"+JSON.stringify(value));
//   itemlist.push(itemlist + ': ' + value);
// }, itemlist);



/*$scope.itemlist=[
    
           {id:data.productid,name:data.productname,price:data.productprice,desc:data.productdesc}

           ];
*/




/*
          $scope.itemlist=[

           {id:data.productid,name:data.productname,price:data.productprice,desc:data.productdesc}

           ];*/
//            alert("==success=="+JSON.stringify(data));

        })
        .error(function(data){

            alert("==error=="+JSON.stringify(data));
        }); 

  //       alert("$scope.itemlistvvvv"+JSON.stringify($scope.itemlist));



        //console.log('Selected rating is : ', rating);
      }

$scope.listDetail=[];
$scope.itemlist=[

{name:$scope.test.productname,id:$scope.test.productid,price:$scope.test.productprice}


];

/*$scope.itemlist=[

{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];

*/
/*$scope.itemlist=[
$scope.itemlist=[

{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];
{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];*/
$scope.shipcharge=0;
$scope.totaloutstand=0;

$scope.tax=0;
$scope.count=0;
$scope.cnt=0;
$scope.itemfish=[];
$scope.itemfish.fishname=0;
$scope.fishprice=0;
$scope.itemfish.fishid=0;
$scope.itemfish.fishprice=0; 

var api_login_uri="http://127.0.0.1:8000/userandaccess/users/1/?format=json";

var dashboardapi="http://127.0.0.1:8000/userandaccess/Products/?format=json";
$scope.loginSubmit = function() {

$scope.data.username, $scope.data.password
alert("Inside the Login Submit call"+$scope.data.username);
alert("password"+$scope.data.password)
/*var fd={
username:"fisherconnteam",
email:"admin@fisherconn.com",
password:"12345"

};*/


// Triggered in the login modal to close it
  
//alert("===="+JSON.stringify(fd));

    $http.get(api_login_uri,{
         
        })
        .success(function(data){
            alert("==success=="+JSON.stringify(data));


            if(data.email==$scope.data.username)
            {
             $state.go('home');
            }
            else
            {

                alert("Inside the Failed");
            $state.go('login');
            }

        })
        .error(function(data){

            alert("==error=="+JSON.stringify(data));
        }); 


}
  
    $scope.forgotpassword = function() {
        $state.go('forgot');
        }

    $scope.logout = function() {

     $scope.modal.hide();
        alert("kjgk");
         $state.go('login');
        
            }

    $scope.toggleLeft = function() {
   
        $ionicSideMenuDelegate.toggleLeft();        
    }

    $scope.cart = function(item) {
$scope.fishprice=0;   

$scope.itemfish.push(item);    

$scope.count=$scope.itemfish.length-1;

//alert("==price="+JSON.stringify($scope.itemfish));

//$scope.finalprice=0;
for(var i=0;i<$scope.itemfish.length;i++)
{

$scope.fishprice=$scope.fishprice+$scope.itemfish[i].price;

//alert("==price="+$scope.fishprice);

}
//alert("==After="+$scope.fishprice);

//alert("COUNTTT"+$scope.count);
   /* $scope.finalArray($scope.itemchanged);*/

$scope.itemfish.fishname=item.name;

$scope.itemfish.fishid=item.id;
$scope.itemfish.fishprice=item.price; 
$scope.shipcharge=$scope.fishprice*(0.02);
$scope.tax=$scope.fishprice*(0.05);
//alert("$scope.shipcharge"+$scope.shipcharge);
//alert("$scope.tax"+$scope.tax);
$scope.totaloutstand=$scope.tax+$scope.shipcharge+$scope.fishprice;

//alert("=="+$scope.totaloutstand);

    }

      

     $scope.itemfish=[
    {name:$scope.itemfish.fishname,
    id:$scope.itemfish.fishid,
    price:$scope.itemfish.fishprice}
        
       ];

    


// For the Count
$scope.getTotalItems=function() {

            var count = 0;

            return count;


}


  
 $scope.signup = function() {
   $state.go('signup');
        
    }


    $scope.cancelButton = function() {


   // alert("inside the close");
    $scope.modal.hide();
  }

    $scope.sideAcctSett = function() {
   $state.go('setting');
        
    }

    $scope.shoppingbag = function(){

$scope.modal.show();





    }

})

