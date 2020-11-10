
<h3> Create the Server</h3>
<pre> This is done by using <code>
http.createServer((request, response) => { 
      // magic happens here!});` </code> </pre>

<pre>
 shorthand for creating a server object <br>  
<code>  const server = http.createServer();
        server.on('request', (request, response) => {
        // the same kind of magic happens here!
      }); </code>. </pre> 
      
<li> The[listen] method needs to be called on the server object. </li>


<h3>Routing </h3>
<li> Refers to determining how an application responds to a client request to a particular endpoint, 
      which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).</li>

