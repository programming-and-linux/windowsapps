const execSync = require('child_process').execSync;

function get_apps(){
    var apps = JSON.parse(execSync('powershell -ExecutionPolicy Bypass "Get-StartApps|convertto-json',{encoding: 'utf8'}));
    var names = [];
    apps.forEach(element => {
        names.push(element);
    });
    return names;
}

function find_app(app_name){
    var apps = get_apps();
    var result;
    var count = 0;
    apps.forEach(element => {
        if(element['Name'].toUpperCase() == app_name.toUpperCase() || element['Name'].toUpperCase().includes(app_name) ){
            result = element;
        }else{
            count++;
        }
        if(count == apps.length){
            result = "Application not found!";
        }
    });
    return result;
}

function open_app(app_name){
    var app = find_app(app_name);
    var result;
    if(app == null || app == "Application not found!"){result = "Application not found!";}
    else{
        execSync("start shell:AppsFolder\\"+app['AppID']);
        result = app['Name']+" started successfully";
    }
    return result;
}

module.exports = {get_apps,find_app,open_app}