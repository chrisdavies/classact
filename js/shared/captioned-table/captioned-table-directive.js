app.module("directives").directive("captionedTable",function(){return{restrict:"E",transclude:!0,replace:!0,scope:{cols:"="},template:'<ul class="captioned-table"><li class="captioned-table-header-row"><span class="captioned-table-header-cell" ng-repeat="col in cols">{{col}}</span></li></ul>',compile:function(e,c,a){return function(c){a(c.$parent,function(c){e.append(c)})}}}});