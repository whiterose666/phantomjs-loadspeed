var page = require('webpage').create(),
    system = require('system'),
    t, address;
 
if (system.args.length === 1){
    console.log('Usage: phantom.js <some URL>');
    phantom.exit();
}
 
t = Date.now();
address = system.args[1];
console.log('Start calculating...');
page.open(address, function(status){
    if (status !== 'success'){
        console.log('FAIL to load the address');
    }
    else{
        t = Date.now() - t;
        console.log('Loading time ' + t + " msec");
        console.log(address + " was succesfully loaded..");
    }
    phantom.exit();
});
