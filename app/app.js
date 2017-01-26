/**
 * Created by NamithaK on 1/25/2017.
 */
angular.module('helloworldapp',[])
   .controller('helloworldcontroller',function($scope)
   {
       var vm=this;
       vm.greeting="Hello World";
   })