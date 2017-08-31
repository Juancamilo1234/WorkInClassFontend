
(function(){
	'use strict';

	class UserCreateComponent{
		constructor(userService, cityService,departmentService,typeDocumentService,  $state){
		this.userService = userService;
		this.cityService = cityService;
		this.departmentService = departmentService;
		this.typeDocumentService = typeDocumentService;
		this.$state = $state;
	}
	//SERVICES REQUIRED FOR SELECT CITIES AND TYPE DOCUMENTS ON THE REGISTER OF USERS.
		$onInit(){
			this.departmentService.query().$promise
			.then(response => {
				this.department = response;
				console.log(this.department);
			})
			.catch(err => console.log("ERROR"));



			this.typeDocumentService.query().$promise
			.then(response => {
				this.typeDocument = response;
				console.log(this.typeDocument);
			})
			.catch(err => console.log("ERROR"));


}

getCity(){

	console.log(this.idDepartment);
	this.cityService.getCitys({idDepartment:this.idDepartment}).$promise
	.then(response =>{
		console.log("Ciudades",response);
		this.city = response;
	})
	.catch(err=> console.error(err));

}
		createUser(){


      console.log(this.user);
			this.userService.save(this.user).$promise
			.then(response => {
				console.log(alert="Registro exitoso",response);
				// this.$state.go('main');
			})
			.catch(err => console.log("ERROR",err));
		}
}
UserCreateComponent.$inject =  ['userService','cityService','departmentService','typeDocumentService',  '$state'];
angular.module('workInClassFontendApp')
	.component('userCreate',{
		templateUrl:"app/user/user-create/user-create.html",
		controller:UserCreateComponent,
		controllerAs:'vm'
	});

})();
