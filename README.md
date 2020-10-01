# App
This is a master theme who easily could be used as an app. The purpose is not to touch files in this theme like a custom theme.

## Folder buto_data
One should put content from buto_data folder to /../buto_data/theme/_folder_/_folder_ and the app can access this files. 
One could start this app without using this by create an Mysql database named theme_app.

## Database theme_app
The theme_app database must have tables regarding to this schema /plugin/wf/account2/mysql/schema.yml.
Create the theme_app database or use an existing one in your environment.

### Mysql user
Add user with full privileges.
```
username: theme_app
password: theme_app
```

### Create database tables
```
CREATE TABLE `account` (`id` varchar(50) NOT NULL,`email` varchar(255),`username` varchar(50),`password` varchar(255),`activated` int(11),`activate_key` varchar(50),`activate_password` varchar(255),`activate_date` datetime,`change_email_email` varchar(255),`change_email_key` varchar(50),`change_email_date` datetime,`phone` varchar(255),`two_factor_authentication_key` varchar(50),`two_factor_authentication_date` datetime,`cert_id` varchar(255),`created_at` timestamp NULL default CURRENT_TIMESTAMP,`updated_at` timestamp NULL,`created_by` varchar(50),`updated_by` varchar(50),PRIMARY KEY (id)   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `account_log` (`id` int(16) NOT NULL auto_increment,`account_id` varchar(50),`type` varchar(50),`date` datetime,`HTTP_USER_AGENT` mediumtext,`REMOTE_ADDR` mediumtext,`session_id` varchar(255),`created_at` timestamp NULL default CURRENT_TIMESTAMP,`updated_at` timestamp NULL,`created_by` varchar(50),`updated_by` varchar(50),PRIMARY KEY (id) , KEY account_log_account_id_fk (account_id) , CONSTRAINT account_log_account_id_fk FOREIGN KEY (account_id) REFERENCES `account`(id) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `account_role` (`id` int(16) NOT NULL auto_increment,`account_id` varchar(50),`role` varchar(50),`created_at` timestamp NULL default CURRENT_TIMESTAMP,`updated_at` timestamp NULL,`created_by` varchar(50),`updated_by` varchar(50),PRIMARY KEY (id) , KEY account_role_account_id_fk (account_id) , CONSTRAINT account_role_account_id_fk FOREIGN KEY (account_id) REFERENCES `account`(id) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

### Create webmaster account
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
 