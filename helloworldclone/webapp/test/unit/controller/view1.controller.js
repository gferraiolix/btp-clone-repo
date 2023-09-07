/*global QUnit*/

sap.ui.define([
	"sapbtp/helloworldclone/controller/view1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("view1 Controller");

	QUnit.test("I should test the view1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
