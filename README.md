# Grafana Giphy Search Panel Plugin

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

A simple Grafana panel plugiin which allows you to search for images across Giphy.
<img width="1104" alt="Screenshot 2021-08-09 at 12 12 54 PM" src="https://user-images.githubusercontent.com/19775888/128672456-32551804-5890-483f-86fa-2d9f30950ff6.png">

## How to Run

1. Clone this repository
    ```
   git clone https://github.com/prssanna/grafana-plugin-giphy.git
   ```

2.  
   ```
   cd grafana-plugin-giphy
   ```

3. Install dependencies

   ```bash
   yarn install
   ```

4. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

5. Build plugin in production mode

   ```bash
   yarn build
   ```
6. Run
   ```bash
    docker run -d -p 3000:3000 -v "$(pwd)":/var/lib/grafana/plugins --name=grafana grafana/grafana:7.0.0
   ```
7. Open [http://localhost/:3000](http://localhost:3000)
8. Login with username as **admin** and password as **admin**
9. Create a new dashboard and add the Giphy Search panel from visualization options


