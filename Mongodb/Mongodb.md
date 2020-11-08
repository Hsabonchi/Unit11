<h2> MongoDB Server </h2>
<ul>
<li> A collection is the equivalent of a table in relational databases </li>
<li> Collection does notenforce a schema </li>
<li> A document in MongoDB is the same as a record in MySQL </li>
<li> Documents in MongoDB are objects stored in a format called BSON </li> 
<li> Each document must have a unique _id field that serves as the primary key </li>
<li> An Object value is also known as an embedded documentor a sub-document </li>
</ul>

<h3>What is BSON? </h3>
<ul> 
  <li>BSON simply stands for “Binary JSON </li>
  <li> BSON’s binary structure encodes type and length information, which allows it to be parsed much more quickly. </li>
  <li>MongoDB stores data in BSON </li>
  <li> Allows developers to query and manipulate objects by specific keys inside the JSON/BSON document</li>
</ul>

<h4> <a href="https://docs.mongodb.com/guides/server/drivers/"> Connect to your MongoDB instance</a> </h4>

<h4>Data Model </h4>
  <ul>
    <li> if you do not specify an _id field, then MongoDB will add one for you and assign a unique id for each document.</h4>
    <li>Embedded documents capture relationships between data by storing related data in a single document structure</li>
  </ul>
  
---

<h4> Node JS <h4>
<p> <code> db.listCollections()</code> Retrieve information, i.e. the name and options, about the collections and views in a database</p>
  <p> create a new collection <code> db.collection(); </code></p>

---

<h3> Query Expression</h3>
