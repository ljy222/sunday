var gulp=require("gulp");
var minfy=require("gulp-minify-css");
var uglify=require("gulp-uglify");
var html=require("gulp-htmlmin");
var webserver=require("gulp-webserver");
var path=require("path");
var fs=require("fs");
var url=require("url")
gulp.task("server",function(){
    gulp.src(".")
    .pipe(webserver({
        host:"localhost",
        port:8808,
        middleware:function(req,res,next){
            var obj=url.parse(req.url);
            res.setHeader("Access-Control-Allow-Origin","*")
                if(req.method==="GET"){
                    if(obj.pathname==="/getdata"){
                        res.end(fs.readFileSync("controller/text.json"))
                    }
                }
        }
    }))
})