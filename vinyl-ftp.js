var fs = require("vinyl-fs")
var ftp = require("vinyl-ftp")
var reader =require('properties-reader')
var config =reader("config/config.properties")
const host=config.get("hosting.host")
const user=config.get("hosting.user")
const pass=config.get("hosting.pass")
var conn = new ftp({
    host:host,
    user:user,
    password:pass,
    parallel:10,
    secure:true,
    secureOptions: {rejectUnauthorized: false}
})
fs.src( [ './dist/**' ], { buffer: false } )
    .pipe( conn.dest( '/htdocs/gyar' ) );