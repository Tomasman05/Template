var fs = require("vinyl-fs")
var ftp = require("vinyl-ftp")
var conn = new ftp({
    host:"ftpupload.net",
    user:"epiz_33660984",
    password:"GVA2IHCR39BxZP",
    parallel:10,
    secure:true,
    secureOptions: {rejectUnauthorized: false}
})
fs.src( [ './src/**' ], { buffer: false } )
    .pipe( conn.dest( '/htdocs/valami' ) );