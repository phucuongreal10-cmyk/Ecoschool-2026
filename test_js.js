var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.OpenTextFile("app.js", 1);
var code = f.ReadAll();
f.Close();
try {
    eval(code);
    WScript.Echo("No syntax errors found.");
} catch(e) {
    WScript.Echo("Error: " + e.message + " on line " + e.line);
}
