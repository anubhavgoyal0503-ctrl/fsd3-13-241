localhost-URL
127.0.0.1-IP address
ctrl+c-stop the server
every request from client has a pair of {request,response}
npm ===node package manager
## NODE PACKAGE MANAGER(NPM)
used to install ,run,uninstall any program/potoject and package
-npm intsall<packageName>
-npm unisntall </packageName>
to use npm ,the project must be npm project,
to create npm project we can use
-npm init -y
-it creates a package.json file automatically
package.json holds all the information related to intsall package from npm
-update package.json,set type='module'
- it also creates a foldrer  node_modules automatically 
-node_modiules holds the package / library fuiles
-generqlly we ignire the node_modules by.gitignore
#### prg 3
- NODEMON= it restart the server automatically when file changes ,to intsall
-NOTE: -D flag will install this package as developer dependency 
-to execute any program ,update the package.json fie then start the server as <b>npm run dev</b>
-dev = it will start server in development phase (only for developer)
- res: it will return contents (json/html/plain) to user /client 
- req: it will retrieve the info from client to server
### status codes
- 200 =ok 
- 201= created 
-400= bad request 
- 401 =unauthorized 
- 403=forbidden 
-404=not found 
-500=internal server error
## content type 
-text/plain
-text/html
-application/json
-text/css
the content type and status code can be send back to client by two ways 
1. res.writeHead
2. res.setHeader
3.res.statusCode
 ## response 
 1. res.end()
 end("any html /content tag)
 2.html free 
 .read by createreadstrewam
 . pipe with res 
 ### send html file to client 
 1.html file 
 - read html file using createReadStream
 -pipe it with res object 
 2.html content 
 send any html  tag/content by using res.end('<any html tag>)

 ### JSON 
 servers returns data only  not html context  because html context  will be return by front end developer . the data is in json format.
 Json always storesdata in key value pair enclosed by curely bracket .
 array can be stored by square bracket [] one pair of the curly bracket will represent one object and its property will be separated by , 
 ```
   { 
    id:1;
    name:"mobile",2
    price:25000,
    rating:4.5,
    review:200
   }
```
