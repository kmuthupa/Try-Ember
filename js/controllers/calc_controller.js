var Calculator = Ember.Application.create();

Calculator.CalcController = Ember.Object.extend({
	result: null,
	value1: null,
	value2: null,
	sum: function() {
		if (this.value1 == null || this.value2 == null) return;
		this.set('result', parseInt(this.value1) + parseInt(this.value2));
	},	
	difference: function() {
	    if (this.value1 == null || this.value2 == null) return;
		this.set('result', parseInt(this.value1) - parseInt(this.value2));
	},
	product: function() {
	    if (this.value1 == null || this.value2 == null) return;
		this.set('result', parseInt(this.value1) * parseInt(this.value2));
	},
	division: function() {
	    if (this.value1 == null || this.value2 == null) return;
	    this.set('result', parseInt(this.value1) / parseInt(this.value2));
	},
	newResultComputed: function() {
	  if (this.value1 == null || this.value2 == null || this.result == null) return;
	  Calculator.resultItemsController.createResultItem(this.value1, this.value2, this.result);
	}.observes('result'),
	reset: function() {
	  this.set('value1', null);
	  this.set('value2', null);
	  this.set('result', null);
	  Calculator.resultItemsController.clearResultItems();
	}
})

Calculator.calcController = Calculator.CalcController.create();