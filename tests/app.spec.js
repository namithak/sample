/**
 * Created by NamithaK on 1/26/2017.
 */
describe("hello world",function()
{

    var controller,rootScope,scope,greeting;
    beforeEach(function(){
        module("helloworldapp",function($provide){

        });
    });
    beforeEach(inject(function($rootScope,$controller){
        scope= $rootScope.$new();
        rootScope=$rootScope;
        controller=$controller('helloworldcontroller as vm',{$scope:scope});
    }));
    describe('helloworldcontroller',function(){
        it("window should say hello world",function(){
            expect(controller.greeting).toEqual("Hello World") ;
        });

    });

});