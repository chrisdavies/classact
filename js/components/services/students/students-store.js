app.module("services").factory("StudentsStore",["LocalStore","$log",function(e,n){var r="studentInfo.usernames",t={saveUsernames:function(n){return e.save(r,n)},loadUsernames:function(){return e.load(r).catch(function(e){return n.log(e),[]})}};return t}]);