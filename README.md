Things to note:
 * Backend: Controller is annotated with @CrossOrigin(origins = "http://localhost:3000") to allow it to receive requests from the front end.
 * Frontend: Fetch statements call the urls that the controller commands are connected to eg. const response = await fetch('http://localhost:8080/book');
