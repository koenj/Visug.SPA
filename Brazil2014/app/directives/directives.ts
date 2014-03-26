module Brazil2014 {

    // This directive will dynamically apply the given css class whenever the route specified in the href is active.
    app.directive('routeActiveClass', ($location: ng.ILocationService) => {
        var ddo: ng.IDirective;
        ddo = {
            link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                var routeActiveClass = attrs['routeActiveClass'];
                var href = attrs['href'];
                if (!href) return;
                href = href.substring(1);
                var parentLi = element.parent('li');
                // Track whenever the current route changes.
                // ~ 'PropertyChanged listener on the current route'
                scope.$watch(() => $location.url(), (newUrl: string) => {
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

    // Typed scope for the appreciationButton directive
    interface IAppreciationButtonScope extends ng.IScope {
        thumbsUp(): void;
        thumbsDown(): void;
        appreciation: number;
    }

    // This directive will show the appreciation buttons.
    app.directive('appreciationButton', () => {
        var ddo: ng.IDirective;
        ddo = {
            restrict: 'E',
            templateUrl: 'directives/appreciationButton.html',
            scope: {
                appreciation: "="
            },
            link: (scope: IAppreciationButtonScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller) => {
                scope.thumbsUp = () => {
                    if (scope.appreciation < 5)
                        scope.appreciation++;
                };
                scope.thumbsDown = () => {
                    if (scope.appreciation > 0)
                        scope.appreciation--;
                };
            }
        };
        return ddo;
    });

} 