'use strict';
angular.module('Gbuddy')
    .controller('topNavbarController', ['$rootScope','$scope', '$uibModal', '$window', '$timeout', '$location', 'QiNodeRestService', 'NgTableParams',
        function ($rootScope,$scope, $uibModal, $window, $timeout, $location, qiNodeRestService, NgTableParams) {


            var vm = this;

            vm.chartConfig = {
                //=====================
                options: {

                    chart: {
                        renderTo: 'container',
                        defaultSeriesType: 'bar',
                        plotBorderWidth: 2,
                        plotBackgroundColor: '#F5E6E6',
                        plotBorderColor: '#D8D8D8',
                        plotShadow: true,
                        width: 200,
                        height:100
                    },

                    title: {
                        text: ' Profile 56/100'
                    },
                    yAxis: {
                        title: {
                            text: ""
                        },
                        labels: {
                            y: 20
                        },
                        min: 0,
                        max: 100,
                        tickInterval: 20,
                        minorTickInterval: 10,
                        tickWidth: 1,
                        tickLength: 8,
                        minorTickLength: 5,
                        minorTickWidth: 1,
                        minorGridLineWidth: 0
                    },
                    xAxis: {
                        labels: {
                            enabled: false
                        },
                        tickLength: 0
                    },
                    rangeSelector : {
                        inputEnabled:false
                     }


                },
                series: [{
                    borderColor: 'red',
                    borderRadius: 3,
                    borderWidth: 1,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 0
                        },
                        stops: [
                            [0, '#D69999'],
                            [0.3, 'red'],
                            [0.45, 'red'],
                            [0.55, 'red'],
                            [0.7, 'red'],
                            [1, '#D69999']
                        ]
                    },
                    pointWidth: 50,
                    data: [56],
                    showInLegend: false
                    
                }]





            } //end of chart config


        }
    ]);