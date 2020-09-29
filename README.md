# App
This is a master theme who easily could be used as an app. The purpose is not to touch files in this theme like a custom theme.

## Folder buto_data
One should put content from buto_data folder to /../buto_data/theme/_folder_/_folder_ and the app can access this files. 
One could start this app without using this by create an Mysql database named theme_app.

## Database theme_app
The theme_app database must have files regarding to this schema /plugin/wf/account2/mysql/schema.yml.
Create the theme_app database or use an existing one in your environment.

### Mysql user
Add user with full privileges.
```
username: theme_app
password: theme_app
```

### Create webmaster account.
```
set @id = 'wm_sdif38jsflj389sflsdf833jl23';
set @username = 'webmaster';
set @password = '123456';
insert into account (id, username, password, activated) values (@id, @username, @password, 1);
insert into account_role (account_id, role) value (@id, 'webmaster');
insert into account_role (account_id, role) value (@id, 'webadmin');
```

## Create account
The app is by default enabled to accept account creation. However on this task one must set up an email account in phpmailer.yml.
 