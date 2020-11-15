
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
      
<h3>End Points </h3>
<ul>
      <li>A Resource is a RESTful subset of Endpoint. </li>
      <li> An endpoint by itself is the location where a service can be accessed </li>
      <li> A resource refers to one or more nouns being served, represented in namespaced fashion </li>
      <li>/api/users/johnny         # Look up johnny from a users collection. </li>
      <li>/v2/books/1234            # Get book with ID 1234 in API v2 schema. </li>
</ul>
<p> nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected</p>
<p> Usage<code> nodemon [your node app]</code></p>
