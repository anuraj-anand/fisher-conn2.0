angular.module('starter.services', [])


.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'jarr' && pw == '1') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

// Cart Service
CartService.$inject = ['$http', '$q', 'ProductService'];
function CartService($http, $q, ProductService) {
  var service = this;
  service.products = [];
  service.cart_product_id = 0;
  service.total = 0;
  service.add = add;
  service.remove = remove;
  service.getCount = getCount;

  function add(product) {
    var newProduct = $.extend(true, {}, product);
    newProduct.cart_product_id = ++service.cart_product_id;
    service.products.push(newProduct);
    service.total += parseFloat(newProduct.price);
  }

  function remove(product) {
    service.products = service.products.filter(function (el) { return el !== product; });
    service.total -= parseFloat(product.price);
  }

  function getCount() {
    return service.products.length;
  }

  return service;
};
