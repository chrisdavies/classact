app.module("services").factory("LocalStore",["$q",function(t){var r={save:function(r,e){return t(function(t,n){try{localStorage.setItem(r,JSON.stringify(e)),t(e)}catch(a){n(a)}})},load:function(r){return t(function(t,e){try{var n=JSON.parse(localStorage.getItem(r));return n?t(n):e(r)}catch(a){e(a)}})}};return r}]);