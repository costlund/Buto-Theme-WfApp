function ThemeWfApp(){
  this.signin = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_signin', url: '/account/signin', label: btn.innerHTML, size: 'sm'});
  }
  this.create = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_create', url: '/account/create', label: btn.innerHTML, size: 'sm'});
  }
  this.on_signin = function(){
    alert('on_signin...');
  }
}
var ThemeWfApp = new ThemeWfApp();
