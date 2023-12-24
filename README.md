# cubey
A useful Discord-Bot for Hypixel SkyBlock!

## Installation

### Prerequisites

 - NodeJS >= 20.10.0
 - yarn >= 1.22.21
 - nodemon >= 3.0.2

### Setup Guide

To get started, clone my repository and cd into the directory:

```shell
git clone https://github.com/CuB3y0nd/cubey.git && cd cubey
```

Then, install dependency packages globally.

```shell
yarn global add nodemon
```

Next, go into the cubey folder and install all the dependencies using Yarn or NPM.

```shell
yarn install
```

If you use NPM:

```shell
npm install
```

When all the setups have been finished, you can use `nodemon` to start your bot.

```shell
nodemon
```

## Environment Variables

You should create 2 files for store the *PRIVATE THINGS*

### `.env` file

Create a `.env` file in the *root* directory of `cubey` for store the **Discord Application Token** and the **Hypixel API Key** .

```.env
TOKEN=<PUT_YOUR_DISCORD_TOKEN_HERE>
HYPIXEL_API_KEY=<PUT_YOUR_HYPIXEL_API_KEY_HERE>
```

### `.config` file

Create a `.config` file in the *root* directory of `cubey` for store the **Development Variables** .

```.config
{
  "GUILD_ID": "YOUR_GUILD_ID",
  "CLIENT_ID": "YOUR_CLIENT_ID"
}
```

Notice
---
 - *GUILD_ID* is your discord server's id.
 - *CLIENT_ID* is your discord application's id.
 - WTF cubey is my wife!

