function ThemeWfApp(){
  this.signin = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_signin', url: '/account/signin', label: btn.innerHTML});
  }
  this.create = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_create', url: '/account/create', label: btn.innerHTML});
  }
  this.on_signin = function(){
    alert('on_signin...');
  }
}
var ThemeWfApp = new ThemeWfApp();
