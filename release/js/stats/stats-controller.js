app.module("appStats").config(["$routeProvider",function(t){var n={templateUrl:"/stats/stats.html",controller:"StatsCtrl",resolve:{students:["StudentsStore","Students","$log","$q",function(t,n,e,r){return t.loadUsernames().then(function(t){return n.query({usernames:t})}).then(function(t){return r.all(t.map(function(t){return n.events(t).then(function(n){return t.events=n,t.latestEvent=n.length?n[0]:void 0,t}).catch(function(n){return e.log(n),t})}))})}]}};t.when("/",n),t.when("/stats",n)}]).controller("StatsCtrl",["$scope","students",function(t,n){t.studentInfo={students:n}}]);