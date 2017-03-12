angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,$stateParams, $ionicSideMenuDelegate, $http,$ionicModal) {
 
    $scope.data = {};
 

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
        console.log('Selected rating is : ', rating);
      }


$scope.listDetail=[];
$scope.itemlist=[

{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];
$scope.shipcharge=0;
$scope.totaloutstand=0;

$scope.tax=0;
$scope.count=0;
$scope.itemfish=[];
$scope.itemfish.fishname=0;
$scope.fishprice=0;
$scope.itemfish.fishid=0;
$scope.itemfish.fishprice=0; 

/*var api_login_uri="http://127.0.0.1:8000/userandaccess/users/1/?format=api";
$scope.loginSubmit = function() {
*/
//alert("Inside the Login Submit call");
/*var fd={*/
/*username:"fisherconnteam",*/
/*email:"admin@fisherconn.com",
password:"12345"

};*/

//alert("===="+JSON.stringify(fd));

    /*$http.get(api_login_uri,fd,{
         
        })
        .success(function(data){
  //          alert("==success=="+JSON.stringify(data));
             $state.go('home');

        })
        .error(function(data){

            //alert("==error=="+JSON.stringify(data));
        }); 


}*/
  
    $scope.forgotpassword = function() {
        $state.go('forgot');
        }

    $scope.logout = function() {
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

    $scope.sideAcctSett = function() {

      //  alert("klfklf");
   $state.go('setting');
        
    }

    $scope.shoppingbag = function(){

$scope.modal.show();





    }

})

