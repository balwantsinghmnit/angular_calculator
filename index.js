var module1 = angular.module("module1",[]);
module1.controller("mycont",calci);

function calci($scope) 
{
	$scope.result = "";
	$scope.add = function(ele){$scope.result += ele;}
	$scope.equal = function(){var ans = eval($scope.result).toString();$scope.result=ans;console.log(typeof(ans));}
	$scope.delete = function(){var s = ($scope.result).toString();var ss = s.substring(0,s.length-1);$scope.result=ss;}
	$scope.cancel = function(){$scope.result="";}
}

