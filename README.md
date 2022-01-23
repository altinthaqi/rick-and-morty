<h1 align="center">Rick and Morty</h1>

<p align="center">Rick and Morty is a web application used to view information of Rick and Morty's American adult animated science fiction sitcom Characters, Episodes, Locations. Built on top of Rickandmorty - GraphQL, it uses GraphQL Client - Apollo Client for queries and data handling. You can view Characters and search for them by input, view their details and episodes they're on, View Locations, Episodes cast and more.</p>

## Links

- [Repository](https://github.com/altinthaqi/rick-and-morty "Rick and Morty Repo")

- [Live Deployment](https://rickandmorty.altinthaci.com "Live View")

- [Rickandmorty GraphQL](https://rickandmortyapi.com/graphql "Rickandmorty GraphQL")

## To use the project

**Download** the project as **ZIP** or **Clone** it via:

```
git clone https://github.com/altinthaqi/rick-and-morty.git
```

Go to repository's directory and install all dependencies:

```
npm install
```

After Node Modules are installed, you're ready to start the project:

```
npm start
```

## Project's using these libraries: version

- @apollo/client: 3.5.7,
- @apollo/client: ^3.5.7,
- @chakra-ui/react: ^1.7.4,
- @emotion/react: ^11.7.1,
- @emotion/styled: ^11.6.0,
- framer-motion: ^5.6.0,
- react-icons: ^4.3.1,
- graphql: 16.2.0,
- react-router-dom: 6.2.1,
- uuid: 8.3.2.

## Features:

- Fully responsive design (Mobile, Tablet, Desktop),
- Integrates Apollo Client and connects to GraphQL,
- Displays Charcters, Episodes, Locations,
- Search by Input,
- View Character's details, Location's information, Episode's cast.

## Paths:

- /
- /characters
- /characters/:id
- /locations
- /locations/:id
- /episodes
- /episodes/:id

## Built With:

- ReactJS
- Apollo Client
- Chakra UI

## Why Modular Structure

- Each module has all the code related to it and only code from the module is imported,
- Helps folder and component organization by not importing code between different modules.
