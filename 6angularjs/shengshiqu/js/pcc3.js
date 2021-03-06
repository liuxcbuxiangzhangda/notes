/**
 * Created by Administrator on 2017/4/20.
 */
/**
 * Created by Administrator on 2017/4/17.
 */
var myapp=angular.module("myapp",[]);
myapp.controller("myControl",function($scope,$http) {
    /*设置默认展示的省，市，区*/
    $scope.showPro="北京市";
    $scope.showProId="11";
    $scope.showCi="市辖区";
    $scope.showCiId="01";
    $scope.showDi="东城区";
    $scope.showDiId="01";
    /*省对应的市，市对应的区县数组*/
    $scope.cis=[];
    $scope.Dis=[];
    /*获取省的数据*/
    $http({
        method: 'GET',
        url: 'js/ProJson.json'
    }).then(function successCallback(response) {
        $scope.pro=response.data.province;
        var panes;
        $scope.surePane=function () {
            panes=$(".tab-content .tab-pane");
        };
        $scope.surePane()
        console.log(panes)
    }, function errorCallback(response) {
        alert("获取省份数据失败")
    });
    /*获取市数据*/
    $http({
        method: 'GET',
        url: 'js/CityJson.json'
    }).then(function successCallback(response) {
        $scope.ci=response.data.city;
        /*默认北京市对应的市*/
        angular.forEach( $scope.ci,function (data) {
            if(data.province=="11"){
                $scope.cis.push(data);
            }
        });
    }, function errorCallback(response) {
        alert("获取市级数据失败")
    });
    /*获取区县的数据*/
    $http({
        method: 'GET',
        url: 'js/DistrictJson.json'
    }).then(function successCallback(response) {
        $scope.Di=response.data.District;
        /*默认北京市市辖区对应的区县*/
        angular.forEach($scope.Di,function (data) {
            if(data.province=="11"&&data.city=="01"){
                $scope.Dis.push(data);
            }
        });
    }, function errorCallback(response) {
        alert("获取市级数据失败")
    });


    /*点击选择省*/
    $scope.chosePro=function ($event) {
        $scope.showPro=angular.element($event.target).html();/*展示选择的省*/
        $scope.showProId=$event.target.value;/*获取所选择省的id*/
        angular.element($event.target).addClass(".tabli");
        $scope.cis=[];/*清空数组*/
        /*选择省对应的市*/
        angular.forEach( $scope.ci,function (data) {
            if(data.province==$scope.showProId){
                $scope.cis.push(data);
            }
        });
        $scope.showCi="请选择";
        $scope.restChange(0);
    };
    /*点击选择市*/
    $scope.choseCity=function ($event) {
        $scope.showCi=angular.element($event.target).html()  /*展示所选择市*/
        $scope.showCiId=$event.target.value;/*获取所选择市的id*/
        console.log($scope.showCiId);
        $scope.Dis=[];/*清空数组*/
        /*选择省对应的区县*/
        angular.forEach($scope.Di,function (data) {
            if(data.province==$scope.showProId&&data.city==$scope.showCiId){
                $scope.Dis.push(data);
            }
        });
        $scope.showDi="请选择";
        $scope.restChange(1);
    }
    /*点击选择区县*/
    $scope.choseDistrict=function ($event) {
        $scope.showDi=angular.element($event.target).html();  /*展示所选择区县*/
    }
    /*重新选择时出现的效果*/
    $scope.restChange=function (n) {
        $(".nav-tabs li").eq(n).removeClass("active");
        $(".nav-tabs li").eq(n+1).addClass("active");
        $(".tab-content .tab-pane").eq(n).removeClass("active");
        $(".tab-content .tab-pane").eq(n+1).addClass("active");
        $(".nav-tabs li").eq(n+1).css("display","block");
        $(".nav-tabs li").eq(n+2).css("display","none");
    }
});
myapp.directive('tabs', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: [ "$scope", function($scope) {
            var panes = $scope.panes = [];
            console.log(panes);
            $scope.select = function(pane) {
                $(".nav-tabs li").removeClass("active");
                $(".tab-content .tab-pane").removeClass("active");
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };
            this.addPane = function(pane) {
                if (panes.length == 0) $scope.select(pane);
                panes.push(pane);
            }

        }],
        template:
        '<div class="tabbable">' +
        '<ul class="nav nav-tabs">' +
        '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
        '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-content" ng-transclude></div>' +
        '</div>',
        replace: true
    };
});
myapp.directive('pane', function() {
    return {
        require: '^tabs',
        restrict: 'E',
        transclude: true,
        scope: { title: '@' },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
        replace: true
    };
});





