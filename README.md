CheezyTrade
===========================
This is the final project for the course Ramverk2, held by BTH.

It's a fake trading platform for cheese, where you can register and deposit CD (Cheese Dollars) in order to buy or sell Cheese.

This is the frontend that uses the backend version of this project, that can be found amongst the other repos.

Register a new user, login and start trading!

How to install
---------------------------------
Clone this repo, run npm install. When everything has been installed, you start the app by using the Angular-Cli and the command ng serve.

This application requires that the backend is up and running.

JavaScript framework
---------------------------------
This site is a Single Page Application, which is a client-heavy type of application, where everything is being rendered on the client. The make the development faster and more robust, this project uses Angular.

Angular is one of the most popular frameworks out on the market and has been well tested by multiple applications. It is run by Google, making its future very reliant. 

It utilizes TypeScript which is a typed version of JavaScript. TypeScript helps to force the user to be more carful about the type of variables and to use interfaces to predefine data that is served from APIs. Being aware of datatypes makes it possible for the code editor to debug the software without having to run it, making it possible to pick up errors on the fly. It also helps to remember what a dataset looked like because the code editor can show you the expected data coming from a function. This makes the development much faster and creates less bugs along the way.

The Angluar-cli also helps to reduce time developing. The CLI can create components just by one line of code, reducing boilerplate code that otherwise would need to be created manually. It also helps to create the correct imports and exports needed for a functional app.

Charts using Ng2-charts
----------------------------
This project uses charts to display the real-time updates coming from the backend. These charts are created using ng2-charts, which is a library created specifically for Angular and is built on top of ChartJS. This helps in creating charts for Angular which can be pretty tricky. It also provides nice looking charts with a lot of options when it comes to looks. 

Architecture of the application
------------------------------------------------
This application consists of multiple components. Splitting the code into multiple application makes it easier to maintain and makes it easier to find what you are looking for.

There are a few main components, that carries child components. There is the home component which presents the homepage. The homepage has a register form. This form is a component by itself is then injected into the home component. By doing it this way, rather then having the code for the form written straight in the home component, the register form could be used on multiple pages. The same goes for the login page, that contains a login form that is a component by itself.

Ones a user has registered and logged in, a user page will be displayed. This is made up by one major component that have multiple components being injected depending on where the user navigates to using the menu. There’re two options, either see the current cheesesas that the user have bought shares in, or to go to the cheese market where you can see the current price of all cheeseases and buy shares in them. Both options are created using respective components and data flows between these components. 

To buy or sell shares, this application uses modals to keep the user on the page. Reducing the amount of steps a user has to take makes the application more effective and ones the user is done, they end up where they were, reducing the risk of having the user confused. 



