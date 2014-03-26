var Brazil2014;
(function (Brazil2014) {
    // This directive will dynamically apply the given css class whenever the route specified in the href is active.
    Brazil2014.app.directive('routeActiveClass', function ($location) {
        var ddo;
        ddo = {
            link: function (scope, element, attrs) {
                var routeActiveClass = attrs['routeActiveClass'];
                var href = attrs['href'];
                if (!href)
                    return;
                href = href.substring(1);
                var parentLi = element.parent('li');

                // Track whenever the current route changes.
                // ~ 'PropertyChanged listener on the current route'
                scope.$watch(function () {
                    return $location.url();
                }, function (newUrl) {
                    newUrl = newUrl.substring(1);

                    // if the current route equals the href this element represents, add the css class.
                    if (newUrl.slice(0, href.length) == href)
                        parentLi.addClass(routeActiveClass);
                    else
                        parentLi.removeClass(routeActiveClass);
                });
            }
        };
        return ddo;
    });

    

    // This directive will show the appreciation buttons.
    Brazil2014.app.directive('appreciationButton', function () {
        var ddo;
        ddo = {
            restrict: 'E',
            templateUrl: 'directives/appreciationButton.html',
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
        return ddo;
    });
})(Brazil2014 || (Brazil2014 = {}));
//# sourceMappingURL=directives.js.map
