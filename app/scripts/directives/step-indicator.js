'use strict';

/**
 * @ngdoc directive
 * @name angularComponentsApp.directive:stepIndicator
 * @description
 * # stepIndicator
 */
angular.module('angularComponentsApp')
  .directive('stepIndicator', function () {
    return {
      //template: '<div>blah blah</div>',
      templateUrl: 'templates/step-indicator.html',
      restrict: 'E',
      transclude: true,
      link: function postLink(scope, element, attrs) {
        
        attrs.$observe('step', function() {
        	var stepDivs = element.find(".step");
        	var numSteps = stepDivs.length;
        	var activeElem = stepDivs[0];
        	var activeElemPos = 0; //tracks position of the active step

        	//set step circles states
        	for(var i=0; i<numSteps; i++) {
        		(function(stepDiv) {        			

					stepDiv.removeClass("active");
    				stepDiv.removeClass("inactive");
    				stepDiv.removeClass("completed");

        			if(parseInt(stepDiv.attr("data-step")) < parseInt(attrs.step)) {        				
        				stepDiv.addClass("completed");
        			} else if(parseInt(stepDiv.attr("data-step")) == parseInt(attrs.step)) {        				
        				stepDiv.addClass("active");
        				activeElemPos = stepDiv.position().left;
        			} else {        				
        				stepDiv.addClass("inactive");
        			}

        		})($(stepDivs[i]));
        	}

        	//adjust background progressbar to extend to the active element        	
        	element.find(".progress-bar.inner").css("width", activeElemPos + "px");
        });
      }
    };
  });
