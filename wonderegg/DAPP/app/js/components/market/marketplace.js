(function() {
"use strict";

	angular.module("dashboard.marketplace", [])
	    .component("marketplace", {
	        templateUrl: "js/components/market/marketplace.html"
	    })
        .controller("marketController", function ($scope) {
            console.log("marketController called");
            loadMain();
        });
    	console.log("market called");

        function loadMain(){
            console.log("main loaded called");

            console.log("main loaded called");
            if (typeof web3 !== 'undefined') {
                web3 = new Web3(web3.currentProvider);
              } else {
                // set the provider you want from Web3.providers
                web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
              }
            
              // Previous if/else statement removed for brevity
            
              web3.eth.defaultAccount = web3.eth.accounts[0];
            
              var defaultAccount = web3.eth.accounts[0];
            
              var wondereggContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"newSellPrice","type":"uint256"},{"name":"newBuyPrice","type":"uint256"}],"name":"setPrices","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wonder","outputs":[{"name":"addr","type":"address"},{"name":"id","type":"uint256"},{"name":"wprice","type":"uint256"},{"name":"idName","type":"bytes32"},{"name":"Description","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"WonderStructArray","outputs":[{"name":"addr","type":"address"},{"name":"id","type":"uint256"},{"name":"wprice","type":"uint256"},{"name":"idName","type":"bytes32"},{"name":"Description","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countWonderStructs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"}],"name":"getetherbalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"_transfer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWonderStructs","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wonderID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"wonderAddressArray","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPrices","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getWonderStructByID","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_wprice","type":"uint256"},{"name":"_idName","type":"bytes32"},{"name":"_Description","type":"uint256"}],"name":"setWonderStruct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"sell","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"freeze","type":"bool"}],"name":"freezeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"},{"name":"ins","type":"address"}],"name":"getWonderStructByAddress","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getlastWonderStruct","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"wprice","type":"uint256"},{"indexed":false,"name":"idName","type":"bytes32"},{"indexed":false,"name":"Description","type":"uint256"}],"name":"wonderInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"FrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}]);
            
            
            
            
            
              var Coursetro = wondereggContract.at('0x0e3b8fd8fcd8e867e05fae5549b00f038dd3cad5');
            
              var sellrate =1;
              var sellrate =1;
            
            
              Coursetro.getPrices(function(error, result){
                if(result)
                    {
                          sellrate = result[0];
                          $("#sellPriceRate").val(sellrate);
            
                          var buyrate = result[1];
                          $("#buyPriceRate").val(buyrate);
            
                        console.log('sellpricerate: ' + sellrate + ' buy price rate: ' + buyrate );
                    }
                else{
                    $("#loader").hide();
                    console.error(error);
                }
              });
            
            
            
            
              var outtext;
            
              Coursetro.getlastWonderStruct(function(error, result){
                var text = 'test';
                if(result)
                    {
                            $("#loader").hide();
            
                          $("#insTrans").html('MetaMask User Account: ' + web3.eth.defaultAccount);
                          $("#lDescription").val(result[4]);
                          switch ($("#lDescription").val()) {
                                case '1':
                                    text = "I believe the world is flat. My great-great-great-great-great-great grandkitty lived with Confucius. I think you'll love me beclaws I have cattitude.";
                                    break;
                                case '2':
                                    text = "My friends describe me as vegan and despicable. I once got in a fight with a chimpanzee, and won. We're so fur-tunate to have found each other!";
                                    break;
                                case '3':
                                    text = " I'm often referred to as the Samwise Gamgee of the group. My secret indulgence is cereal. We're so fur-tunate to have found each other!";
                                    break;
                                case '4':
                                    text = "I enjoy picking flowers, tripping my owner, and spinning sick beats. In my free time, I can usually be found wondrous or sleeping in fresh laundry. Purrhaps this is the beginning of a beautiful relationship.";
                                    break;
                                case '5':
                                    text = "I'm here to enjoy eating until I loathe myself and watching Stranger Things. I'm convinced that the world is flat. One day I'll prove it. This will be an amewsing friendship.";
                                    break;
                                case '6':
                                    text = "My friends describe me as smelly and gorgeous. I once dreamed of being a Private Dancer . Now I can be found reading Danielle Steele all day. Will you be the garlic butter to my marmalade?";
                                    break;
                                case '7':
                                    text = " I want to live in a world where people believe the world is flat. When my owner isn't watching, I steal their clutches and use them for litter paper. I'm not sorry. Will you be the ranch dressing to my soy sauce?";
                            }
            
                            outtext = 'Youngest Wonder Egg ID: '+ result[1]+ '   I am '+ web3.toAscii(result[3])+'  :)  '+ String(text)+' (Price: '+result[2]/sellrate+' ether)'  ;
                            $("#instructor").html(outtext);
                            $("#idName").val(web3.toAscii(result[3]).replace(/\u0000/g, ''));
                            $("#age").val(result[2]/sellrate);
            
                        console.log("refresh get last nameid: " + result[3] + ' description id' + String(text)  + " Price: " + result[2]/sellrate);
                    }
                else{
                    $("#loader").hide();
                    console.error(error);
                }
              });
            
            
            
              var count ;
              var output ;
              Coursetro.countWonderStructs(function(error, result){
              if (result) {
              count = result.c;
              output =count + ' total Wonder Eggs.  only your create/purchsed wonder egg will show here with pictures, below is one Youngest born wonder egg example FYI <hr>';
            
              for (var i = 0; i < count; i++) {
              //output =output + ' , ' + i;
              //outtext = outtext + i;
            
              Coursetro.getWonderStructByID(i, function(error, result){
                var text = '';
                if(result)
                    {
                        var icase = result[4];
                        switch (icase) {
                                case '1':
                                    text = "I believe the world is flat. My great-great-great-great-great-great grandkitty lived with Confucius. I think you'll love me beclaws I have cattitude.";
                                    break;
                                case '2':
                                    text = "My friends describe me as vegan and despicable. I once got in a fight with a chimpanzee, and won. We're so fur-tunate to have found each other!";
                                    break;
                                case '3':
                                    text = " I'm often referred to as the Samwise Gamgee of the group. My secret indulgence is cereal. We're so fur-tunate to have found each other!";
                                    break;
                                case '4':
                                    text = "I enjoy picking flowers, tripping my owner, and spinning sick beats. In my free time, I can usually be found wondrous or sleeping in fresh laundry. Purrhaps this is the beginning of a beautiful relationship.";
                                    break;
                                case '5':
                                    text = "I'm here to enjoy eating until I loathe myself and watching Stranger Things. I'm convinced that the world is flat. One day I'll prove it. This will be an amewsing friendship.";
                                    break;
                                case '6':
                                    text = "My friends describe me as smelly and gorgeous. I once dreamed of being a Private Dancer . Now I can be found reading Danielle Steele all day. Will you be the garlic butter to my marmalade?";
                                    break;
                                case '7':
                                    text = " I want to live in a world where people believe the world is flat. When my owner isn't watching, I steal their clutches and use them for litter paper. I'm not sorry. Will you be the ranch dressing to my soy sauce?";
                        }
            
            
                        if (result[1]==0) {
                            console.log("refresh get last nameid no id found under user account: "+web3.eth.defaultAccount);
            
                        }
                        else{
                          outtext = outtext + '<hr>'+' Wonder Egg ID: '+ result[1]+ ' name:' + web3.toAscii(result[3]) + ' descriptionID: '+ icase+ '<img id="'+icase+'" width="100%" src="./assets/img/'+icase+'.jpg"> '+' (Price: '+result[2]/sellrate+' ether)';
                        console.log("refresh get last nameid: " + outtext);
                        }
                        
                $("#countIns").html(output+outtext);
                    }
                else{
                    $("#loader").hide();
                    console.error(error);
                }
              });
            
            
              }
            
            
            
            
                      //     $("#instructor").html(outtext);
            
              }
              });
            
            
            
              var eventInstructor = Coursetro.wonderInfo({}, 'latest', function(error, result){   
                var text = 'test';
                if(result)
                    {
                        if (result.blockHash != $("#insTrans").html())
                            $("#loader").hide();
            
                          $("#insTrans").html('Block hash: ' + result.args.addr);
            
                            $("#lDescription").val(result.args.Description);
                          switch ($("#lDescription").val()) {
                                case '1':
                                    text = "I believe the world is flat. My great-great-great-great-great-great grandkitty lived with Confucius. I think you'll love me beclaws I have cattitude.";
                                    break;
                                case '2':
                                    text = "My friends describe me as vegan and despicable. I once got in a fight with a chimpanzee, and won. We're so fur-tunate to have found each other!";
                                    break;
                                case '3':
                                    text = " I'm often referred to as the Samwise Gamgee of the group. My secret indulgence is cereal. We're so fur-tunate to have found each other!";
                                    break;
                                case '4':
                                    text = "I enjoy picking flowers, tripping my owner, and spinning sick beats. In my free time, I can usually be found wondrous or sleeping in fresh laundry. Purrhaps this is the beginning of a beautiful relationship.";
                                    break;
                                case '5':
                                    text = "I'm here to enjoy eating until I loathe myself and watching Stranger Things. I'm convinced that the world is flat. One day I'll prove it. This will be an amewsing friendship.";
                                    break;
                                case '6':
                                    text = "My friends describe me as smelly and gorgeous. I once dreamed of being a Private Dancer . Now I can be found reading Danielle Steele all day. Will you be the garlic butter to my marmalade?";
                                    break;
                                case '7':
                                    text = " I want to live in a world where people believe the world is flat. When my owner isn't watching, I steal their clutches and use them for litter paper. I'm not sorry. Will you be the ranch dressing to my soy sauce?";
                            }
            
                            $("#instructor").html('Wonder Egg ID: '+ result.args.id+'      *hissing noises*!  I am '+ web3.toAscii(result.args.idName)+'  :)  '+ String(text)+' (Price: '+result.args.age/sellrate+' ether)' );
            
                        $("#idName").val(web3.toAscii(result.args.idName));
                        $("#age").val(result.args.age/sellrate);
                        console.log("Event watch change Instructor: " + result.args.idName + ' ' + String(text)  + " Price: " + result.args.age/sellrate);
                    }
                else{
                    $("#loader").hide();
                    console.error(error);
                }
              });
            
            
              $("#button1").click(function() {
                Coursetro.setWonderStruct(web3.eth.defaultAccount, $("#age").val()*sellrate, $("#idName").val(), $("#lDescription").val(), function(error,result){
                    if(error)  
                    {
                        console.log("Please check error: etheruem user is not authorize to change Instructor");
                        console.error(error);
                        $("#loader").hide(); 
                    }
                    else {
                        console.log("set Wonder Egg: " + $("#idName").val() + " " + $("#lDescription").val() + " Price: " +$("#age").val()*sellrate + " for "+web3.eth.defaultAccount);
                        $("#loader").hide(); 
                    }
                });
            
              });
            
            
            
            
            
              $("#button3").click(function() {
                myFunction();
                renderApp();
              });
            
            
            
              /*                var i=0;
                    var button4;
                    var body ;//= document.getElementsByTagName("body")[0];
                    for (i = 1; i < 10; i++) {
                        // 1. Create the button
                        button4 = document.createElement("button");
                        button4.innerHTML = "Do Something"+i;
            
                        // 2. Append somewhere
                        body = document.getElementsByTagName("body")[0];
                        body.appendChild(button4);
            
                        // 3. Add event handler
                        button4.addEventListener ("click", function() {
                          alert("did something"+i);
                        });
            
                      document.write("Current Count : " + i );
                      document.write("<br />");
                    }
              */
            
            
            
              function myFunction() {
                location.reload();
              }
            
              setTimeout(myFunction, 180000); // 180 seconds
        }
        //loadMain();


    }());