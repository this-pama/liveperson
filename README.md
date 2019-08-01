
### Installation
Clone this repo and go into the folder directory. You can type `docker-compose up` to start the services.
### Available Endpoints
* **"/"**: Method **POST**. This is the endpoint to create user.
	* **Request Object**:
		* firstName : Type(String)
		* lastName : Type(String)

	* **Response Object**:
		* message: "user created sucessfully"


* **"/:firstName"**: Method **PUT**. This is the endpoint to update user
	* **Request Object**:
		* firstName : Type(String)
		* lastName : Type(String)
	* **Response Object**:
		* message: "update successful"

* **"/:firstName"**: Method **GET**. This is the endpoint to read user by its firstName
	* **Request Object**:
		* :firstName - is a request parameter

	* **Response Object**:
		* _id : Type(String)
		* firstName : Type(String)
		* lastName : Type(String)

* **"/:firstName"**:  **DELETE** Method. This is the endpoint to delete a user by its firstName
	 * **Request Object**:
		 * :firstName - is a request parameter

	* **Response Object**:
		* message : "user successfully deleted "

