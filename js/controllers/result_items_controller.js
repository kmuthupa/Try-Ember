Calculator.resultItemsController = Ember.ArrayProxy.create({
   content: [],
   createResultItem: function(val1, val2, res){
      var item = Calculator.ResultItem.create({
         value1: val1,
         value2: val2,
         result: res
      });
      this.pushObject(item);
   },
   clearResultItems: function() {
      this.forEach(this.removeObject, this);
   }
})

