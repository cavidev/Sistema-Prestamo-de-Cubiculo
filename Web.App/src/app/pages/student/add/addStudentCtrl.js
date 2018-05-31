/**
 * @author Carlos Mario Villafuerte
 * created on 08.02.2018
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.student')
		.controller('AddStudentCtrl', AddStudentCtrl);

	/** @ngInject */
	function AddStudentCtrl($scope, studentService, toastr) {
		var vm = this;

		vm.disabled = undefined;
		vm.gender = [{
				label: 'Masculino',
				value: 0
			},
			{
				label: 'Femenino',
				value: 1
			}
		];

		vm.majors = studentService.getMajors();

		vm.dateStudent = {
			carnet: undefined,
			identification: undefined,
			firstName: undefined,
			secondName: undefined,
			firstLastName: undefined,
			secondLastName: undefined,
			gender: vm.gender[0].label,
			majors: vm.majors[0].label,
			email: undefined
		};

		/**
		 * Registra un nuevo usuario.
		 * 
		 */
		vm.registerNewStudent = function registerNewStudent(dateStudent) {
			dateStudent['typeOfUser'] = 'student';
			studentService.registerNewUser(dateStudent, function (res) {
				if (res.type === 'error') {
					toastr.error(res.message.text, res.message.tittle, {
						"autoDismiss": false,
						"positionClass": "toast-bottom-right",
						"type": "error",
						"timeOut": "3000",
						"extendedTimeOut": "2000",
						"allowHtml": true,
						"closeButton": false,
						"tapToDismiss": true,
						"progressBar": true,
						"newestOnTop": true,
						"maxOpened": 0,
						"preventDuplicates": false,
						"preventOpenDuplicates": false
					});
					return;
				}
				toastr.success(res.message.text, res.message.tittle, {
					"autoDismiss": false,
					"positionClass": "toast-bottom-right",
					"type": "success",
					"timeOut": "3000",
					"extendedTimeOut": "2000",
					"allowHtml": true,
					"closeButton": false,
					"tapToDismiss": true,
					"progressBar": true,
					"newestOnTop": true,
					"maxOpened": 0,
					"preventDuplicates": false,
					"preventOpenDuplicates": false
				});

			});
		};

		vm.deleteInfomationStudent = function deleteInfomationStudent() {
			vm.dateStudent = {
				carnet: undefined,
				identification: undefined,
				firtName: undefined,
				secondName: undefined,
				firtLastName: undefined,
				secondLastName: undefined,
				gender: vm.gender[0].label,
				majors: vm.majors[0].label,
				email: undefined
			};
		}



	}
})();