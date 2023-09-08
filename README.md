# Dexscreener API Integration Project

This project is a web application that integrates with the Dexscreener API to provide users with information about decentralized exchange (DEX) tokens and pairs. The application allows users to search for tokens and pairs, view detailed information about them, and connect their wallet using Web3 Modal. It is built using React.js and vanilla CSS, following the design guidelines provided in Figma.

Live: https://matrix-lab-assignment-three.vercel.app/


## Introduction

This project is a web-based interface that leverages the Dexscreener API to fetch and display data related to DEX tokens and pairs. Users can search for tokens by their address and view information about up to 10 pairs associated with the token. The pairs are displayed in descending order of price in USD to provide users with valuable trading insights.

Additionally, users can connect their wallet to the website using the Web3 Modal, enabling them to interact with decentralized applications (DApps) and perform blockchain transactions.

## Features

- Search for tokens by their address.
- Display information about up to 10 pairs associated with the token.
- Sort pairs in descending order of price in USD.
- Connect a wallet using Web3 Modal for DApp interaction.
- Responsive for mobile screens also

## Tech Stack

- React.js: Used for building the user interface and managing state.
- Vite.js: A build tool that enhances the development workflow for React applications.
- Vanilla CSS: Custom styling for the application.
- Dexscreener API: Fetches data about tokens and pairs.
- Web3 Modal: Allows users to connect their wallet.

## Usage

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Start the development server with `npm start`.
4. Access the application in your web browser at `http://localhost:3000`.

## API Integration

The project makes use of the Dexscreener API to fetch data about tokens and pairs. The following endpoints are utilized:

- `https://api.dexscreener.com/latest/dex/tokens/:tokenAddreses`: Fetch token information by address.
- `https://api.dexscreener.com/latest/dex/search/?q=:q`: Perform a search query for pairs.

Asynchronous calls are made to these endpoints based on user input to display the relevant data.

## Web3 Modal Integration

To enable users to connect their wallet to the website, the Web3 Modal library is used. Users can connect their wallet to interact with DApps and perform blockchain transactions seamlessly.


