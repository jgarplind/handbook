"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={id:"ldap-authentication",title:"LDAP authentication",sidebar_label:"LDAP Authentication"},l=void 0,d={unversionedId:"devops-guide/ldap-authentication",id:"devops-guide/ldap-authentication",title:"LDAP authentication",description:"This is a first draft and might not work on your system. It has been tested on a Debian 11 installation with prosody 0.11 and authenticates against an OpenLDAP directory.",source:"@site/docs/devops-guide/ldap-authentication.md",sourceDirName:"devops-guide",slug:"/devops-guide/ldap-authentication",permalink:"/handbook/docs/devops-guide/ldap-authentication",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/ldap-authentication.md",tags:[],version:"current",lastUpdatedBy:"Sa\xfal Ibarra Corretg\xe9",lastUpdatedAt:1647509660,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"ldap-authentication",title:"LDAP authentication",sidebar_label:"LDAP Authentication"},sidebar:"docs",previous:{title:"Authentication (Secure Domain)",permalink:"/handbook/docs/devops-guide/secure-domain"},next:{title:"Scalable setup",permalink:"/handbook/docs/devops-guide/devops-guide-scalable"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required packages",id:"required-packages",level:3},{value:"Install and set up Cyrus SASL",id:"install-and-set-up-cyrus-sasl",level:2},{value:"Test LDAP authentication",id:"test-ldap-authentication",level:3},{value:"Enable the <code>saslauthd</code> service",id:"enable-the-saslauthd-service",level:3},{value:"Cyrus SASL Configuration file",id:"cyrus-sasl-configuration-file",level:3},{value:"Set up Prosody",id:"set-up-prosody",level:2},{value:"Set Permissions",id:"set-permissions",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a first draft and might not work on your system. It has been tested on a Debian 11 installation with prosody 0.11 and authenticates against an OpenLDAP directory."))),(0,o.kt)("p",null,"If you want to authenticate your users against an LDAP directory instead\nof the local Prosody user database, you can use the Cyrus SASL package.\nUsing this package you might be able to validate user-supplied credentials\nagainst other sources, such as PAM, SQL and more - but this is beyond\nthis article."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before following this article, make sure you have set up Prosody as\ndescribed in ",(0,o.kt)("a",{parentName:"p",href:"/handbook/docs/devops-guide/secure-domain"},"Authentication (Secure Domain)")," first."),(0,o.kt)("h3",{id:"required-packages"},"Required packages"),(0,o.kt)("p",null,"On Debian systems you need to install some required packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install sasl2-bin libsasl2-modules-ldap lua-cyrussasl\n")),(0,o.kt)("p",null,"The first two packages are necessary for Cyrus' ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," and allow it\nto connect to an LDAP directory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"lua-cyrussasl"),"-package allows\nProsody to access Cyrus SASL."),(0,o.kt)("h2",{id:"install-and-set-up-cyrus-sasl"},"Install and set up Cyrus SASL"),(0,o.kt)("p",null,"The following options define a basic LDAP configuration. A full set of\npossible options can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winlibs/cyrus-sasl/blob/master/saslauthd/LDAP_SASLAUTHD"},"LDAP_SASLAUTHD"),"."),(0,o.kt)("p",null,"By default Cyrus' ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," searches for its LDAP configuration in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/saslauthd.conf"),". So create this file and enter something similar\nto define your LDAP environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ldap_servers: ldaps://ldap.example.com\nldap_bind_dn: cn=admin,dc=example,dc=com\nldap_bind_pw: topsecret\nldap_auth_method: bind\nldap_search_base: ou=people,dc=example,dc=com\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"One omitted option you might want to look into is ",(0,o.kt)("inlineCode",{parentName:"p"},"ldap_filter")," which\ndefaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"uid=%u")," and should work for a lot of systems. But if you\nwant to only allow specific users or even use a different LDAP attribute\nas username, you can do so by adding this option. Also check the available\nplaceholders for the filter in the above linked ",(0,o.kt)("inlineCode",{parentName:"p"},"LDAP_SASLAUTHD"),"."),(0,o.kt)("p",{parentName:"div"},'Please note that Prosody might not work with usernames containing the "@"-symbol. So authenticating with a full email address will not work.'))),(0,o.kt)("h3",{id:"test-ldap-authentication"},"Test LDAP authentication"),(0,o.kt)("p",null,"To test if the LDAP configuration is working, you can start ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," in\ndebug mode while specifying the mandatory LDAP authentication mechanism:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo saslauthd -d -a ldap\n")),(0,o.kt)("p",null,"The test utility for the SASL authentication server can then be used in a\nsecondary terminal. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," with credentials stored\nin LDAP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo testsaslauthd -u user -p password\n0: OK "Success."\n\nsudo testsaslauthd -u user -p wrongpassword\n0: NO "authentication failed"\n')),(0,o.kt)("p",null,"After testing, you can stop ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-c"),"."),(0,o.kt)("h3",{id:"enable-the-saslauthd-service"},"Enable the ",(0,o.kt)("inlineCode",{parentName:"h3"},"saslauthd")," service"),(0,o.kt)("p",null,"To be able to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," service with LDAP authentication and have\nit start automatically at system boot, edit ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/default/saslauthd")," and\nchange the following values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[...]\n# Should saslauthd run automatically on startup? (default: no)\nSTART=yes\n[...]\n# Example: MECHANISMS="pam"\nMECHANISMS="ldap"\n[...]\n')),(0,o.kt)("p",null,"It is not necessary to point ",(0,o.kt)("inlineCode",{parentName:"p"},"MECH_OPTIONS")," to the LDAP configuration file\nsince this is the default for this mechanism."),(0,o.kt)("p",null,"Now you can start, restart and stop ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service saslauthd restart\n")),(0,o.kt)("p",null,"If you experience issues, check ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/auth.log")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," entries."),(0,o.kt)("h3",{id:"cyrus-sasl-configuration-file"},"Cyrus SASL Configuration file"),(0,o.kt)("p",null,"Cyrus SASL requires a configuration file in order to know how to check user\ncredentials. For Prosody, the file is named ",(0,o.kt)("inlineCode",{parentName:"p"},"prosody.conf")," by default.\nIts location varies by OS and distribution as shown in the following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Platform"),(0,o.kt)("th",{parentName:"tr",align:null},"Location"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Debian and Ubuntu"),(0,o.kt)("td",{parentName:"tr",align:null},"/etc/sasl")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Arch, RHEL/CentOS"),(0,o.kt)("td",{parentName:"tr",align:null},"/etc/sasl2")))),(0,o.kt)("p",null,"So for Debian systems, create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/sasl/prosody.conf"),".\nThe directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/sasl")," might not yet exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mkdir /etc/sasl/\n\ncat << 'EOF' |sudo tee /etc/sasl/prosody.conf > /dev/null\npwcheck_method: saslauthd\nmech_list: PLAIN\nEOF\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The filename ",(0,o.kt)("inlineCode",{parentName:"p"},"prosody.conf"),"  corresponds to a value for ",(0,o.kt)("inlineCode",{parentName:"p"},"cyrus_application_name"),"\nin the Prosody config. Since we have not changed the default this has a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"prosody"),"."))),(0,o.kt)("p",null,"The Prosody documentation has more details on a\n",(0,o.kt)("a",{parentName:"p",href:"https://prosody.im/doc/cyrus_sasl"},"Cyrus SASL-related setup"),"."),(0,o.kt)("h2",{id:"set-up-prosody"},"Set up Prosody"),(0,o.kt)("p",null,"If you have tested the LDAP authentication successfully and enabled the\n",(0,o.kt)("inlineCode",{parentName:"p"},"saslauthd")," service, you can change Prosody's authentication to the Cyrus backend\nby changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication")," setting in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/prosody/conf.avail/$(hostname -f).cfg.lua"),":"),(0,o.kt)("p",null,"You might also have to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"allow_unencrypted_plain_auth")," option to allow\nplain-text passwords to be sent over the network. This is not recommended as it\nmakes the setup less secure. So please try without this line first and only add\nit if you have problems authenticating."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'        authentication = "cyrus"\n        allow_unencrypted_plain_auth = true\n')),(0,o.kt)("p",null,"Finally add the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_cyrus")," module to the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"modules_enabled"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'        modules_enabled = {\n            "bosh";\n            "pubsub";\n            "ping"; -- Enable mod_ping\n            "auth_cyrus";\n        }\n')),(0,o.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,o.kt)("p",null,"Prosody will now try to access the saslauthd socket in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/saslauthd/")," to communicate with the authentication daemon.\nThis folder only allows access to user ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," and group ",(0,o.kt)("inlineCode",{parentName:"p"},"sasl")," while prosody\nruns as the system user/group ",(0,o.kt)("inlineCode",{parentName:"p"},"prosody"),". "),(0,o.kt)("p",null,"The easiest solution is to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"sasl")," group to the ",(0,o.kt)("inlineCode",{parentName:"p"},"prosody")," user and\nrestart the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo adduser prosody sasl\nsudo service prosody restart\n")))}h.isMDXComponent=!0}}]);