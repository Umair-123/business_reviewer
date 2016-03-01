var app=angular.module('business',[]);
app.controller('businessController',function(){
	this.bizobj=jsone;
});
app.controller('panelController',function(){
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
});
app.directive('businesses',function(){
	return
	{
		restrict:'E',
		templateUrl:'business.html'
	};
});
var jsone=[
{
	businessName:'burger-king',
	Address:'Multan Chungi',
	Ratings:'3.0',
	pic:'assets/img/dummy/burger-king.jpg',
	Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco.',
	reviews:[
			{
				stars:'3.0',
				Comment:'its allright'
			},
			{
				stars:'4.0',
				Comment:'its good'
			}
	]
},
{
	businessName:'Shaukat-Khanam',
	Address:'Pindi Chowk',
	Ratings:'4.0',
	pic:"assets/img/dummy/shaukat-khanam.jpg" ,
	Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco.',
	reviews:[
			{
				stars:'3.0',
				Comment:'its allright'
			},
			{
				stars:'4.0',
				Comment:'its good'
			}
		]
}
];