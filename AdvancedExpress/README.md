#### Advanced Express 

<p> Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application </p>

### dotenv
<p>Loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. </p>
<p> Using dotenv to manage your ENV variables in NodeJS </p>
<ul>
  <li> Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE</li>
  <li> Usage <code> require("dotenv").config();</code></li>
  <li> .config() read environmental variables files and save those variables </li>
  <li> Access variables through <code> process.env.varname</code> </li>
  <li> .env  default file</li>
  </ul>

