function ThemeWfApp(){
  this.signin = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_signin', url: '/account/signin', label: btn.innerHTML, size: 'sm'});
  }
  this.create = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_create', url: '/account/create', label: btn.innerHTML, size: 'sm'});
  }
  this.password = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_password', url: '/account/password', label: btn.innerHTML, size: 'sm'});
  }
  this.email = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_email', url: '/account/email', label: btn.innerHTML, size: 'sm'});
  }
  this.username = function(btn){
    PluginWfBootstrapjs.modal({id: 'modal_username', url: '/account/username', label: btn.innerHTML, size: 'sm'});
  }
}
var ThemeWfApp = new ThemeWfApp();
