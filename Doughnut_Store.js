function DoughnutStore (name,minimumCustomers, maximumCustomers, averageDoughnuts) {
	this.locationName = name;
	this.minimumCustomers = minimumCustomers;
	this.maximumCustomers = maximumCustomers;
	this.averageDoughnuts = averageDoughnuts;
	var hoursOfOperation = 12;


	this.getDoughnutsPerHour = function () {
		return(getPerHour());
	};
	var getPerHour = function() {
		return(Math.floor((Math.random() *(maximumCustomers - minimumCustomers + 1) + minimumCustomers) * averageDoughnuts));
	}


	this.getDoughnutsPerDay = function () {
		var a = getPerHour() * hoursOfOperation;
		return(a);

	};

}
//creating doughnut master class
function DoughnutMaster (){
	var shopList = [];  //creating arrays to push information too
	var perDay = []
	var perHour = []
	var hoursOfOperation = 12;
	this.listShops = function() {
		return (shopList);
	}
	// i had a fucntion that took one parameter (the doughnutstore object) but i couldnt get the object to return their actaul outputs so i did this as a work around. 
	this.addShop = function(store,min,max,avg) {
		this.store = store;
		this.min = min;
		this.max = max;
		this.avg = avg;
		var getPerHour = function() {
		return(Math.floor((Math.random() *(max - min+ 1) + min) * avg));
		}

		shopList.push(store);
		perHour.push(getPerHour());
		perDay.push(getPerHour() * hoursOfOperation);
	}
	// this function pulls information from the arrays i created earlier in the constructor and pushes them to one array so that i can return that array that has all the necessary information. 
	this.generateReport = function() {
		 list = [];
		for (i = 0; i <shopList.length; i++){
			list.push(shopList[i]);
			var a = perHour[i];
			list.push(a);
			var b = perDay[i];
			list.push(b);
		}
		return (list);
	}
}
var downTown = new DoughnutStore("DownTown",8,43,4.5);
var capitolHill = new DoughnutStore("CapitolHill",4,37,2.0);
var southLakeUnion = new DoughnutStore("SouthLake Union",9,23,6.33);
var wedgewood = new DoughnutStore("Wedgewood",2,28,1.25);
var ballard = new DoughnutStore("Ballard",8,58,3.75);
var manager = new DoughnutMaster();
manager.addShop("DownTown",8,43,4.5);
manager.addShop("CaptiolHill",4,37,2.0);
manager.addShop("SouthLake Union",9,23,6.33);
manager.addShop("Wedgewood",2,28,1.25);
manager.addShop("Ballard",8,58,3.75);
manager.generateReport();
//using jquery to insert functions into my table
$(document).ready(function(){
	$('#downD').append(downTown.getDoughnutsPerDay());
	$("#capD").append(capitolHill.getDoughnutsPerDay());
	$('#southD').append(southLakeUnion.getDoughnutsPerDay());
	$('#wedgeD').append(wedgewood.getDoughnutsPerDay());
	$('#ballD').append(ballard.getDoughnutsPerDay());

	$('#menu ul ul li:odd').addClass('odd');
	$('#menu ul ul li:even').addClass('even'); 
	$('#menu > ul > li > a').click(function() {

	  	var checkElement = $(this).next();

	  	$('#menu li').removeClass('active');
	  	$(this).closest('li').addClass('active'); 

	  	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
	    $(this).closest('li').removeClass('active');
	    checkElement.slideUp('normal');
	  	}
	  	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
	    	$('#menu ul ul:visible').slideUp('normal');
	    	checkElement.slideDown('normal');
	  	}
		if($(this).closest('li').find('ul').children().length == 0) {
	  	  	return false;
	  	} 
	  	else {
	    	return false; 
	  	}

	});  
  
});




