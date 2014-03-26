var Brazil2014;
(function (Brazil2014) {
    Brazil2014.app.directive('routeActiveClass', function ($location) {
        var ddo;
        ddo = {
            link: function (scope, element, attrs) {
                var routeActiveClass = attrs['routeActiveClass'];
                var href = attrs['href'];
                if (!href)
                    return;
                var parentLi = element.parent('li');
                scope.$watch(function () {
                    return $location.url();
                }, function (newUrl) {
                    if (newUrl.substring(1) == href.substring(1))
                        parentLi.addClass(routeActiveClass);
                    else
                        parentLi.removeClass(routeActiveClass);
                });
            }
        };
        return ddo;
    });

    Brazil2014.app.directive('appreciationButton', function () {
        return {
            restrict: 'E',
            template: '<span class="col-xs-10"> ' + '    <button ng-click="thumbsDown()" type="button" class="btn btn-default btn-sm">' + '        <span class="glyphicon glyphicon-thumbs-down"></span > ' + '    </button> ' + '    <span class="badge">{{appreciation}}</span>' + '    <button ng-click="thumbsUp()" type="button" class="btn btn-default btn-sm">' + '       <span class="glyphicon glyphicon-thumbs-up"></span > ' + '    </button> ' + '</span >',
            scope: {
                appreciation: "="
            },
            link: function (scope, element, attrs, controller) {
                scope.thumbsUp = function () {
                    if (scope.appreciation < 5)
                        scope.appreciation++;
                };
                scope.thumbsDown = function () {
                    if (scope.appreciation > 0)
                        scope.appreciation--;
                };
            }
        };
    });
})(Brazil2014 || (Brazil2014 = {}));
//# sourceMappingURL=directives.js.map
