# **SHIFT FAUCET**

![](http://densmirnov.com/img/shift_faucet.png)

---

1. ### **PREREQUISITES**

  - Node.js + npm (https://github.com/nodesource/distributions)
  - Redis (http://redis.io)

2. ### INSTALLATION

  - Install node modules:

      ```
      npm install
      ```

  - Start redis-server:

      ```
      redis-server > /dev/null 2>&1 &
      ```

3. ### CONFIGURATION

  - Open `config.json` and complete the following details:

  - Edit your [reCaptcha](https://www.google.com/recaptcha/) public/private keypair:

      ```js
      "captcha" : {
      "publicKey" : "",     // <-- Your publicKey
      "privateKey" : ""     // <-- Your privateKey
      }
      ```
      
      **NOTE:** There are two separate keypairs for development and production environments.

 - Edit your Shift connection details:

      ```js
      "Shift" : {
      "host" : "127.0.0.1", // <-- Server IP/hostname
      "port" : 9305,        // <-- 7000 for testnet, 8000 for mainnet
      "passphrase" : "",    // <-- Passphrase of faucet account
      "address" : ""        // <-- Address of faucet account
      }
      ```

  - Edit your Redis connection details:

      ```js
      "redis" : {
      "host" : "127.0.0.1", // <-- Redis server host (default: 127.0.0.1)
      "port" : 6379,        // <-- Redis server port (default: 6379)
      "password" : ""       // <-- Redis server password
      }
      ```

  - Edit the faucet amount:

      ```js
      { "amount" : 1 }          // <-- Amount sent by faucet (default: 1)
      ```
      
4. ### LAUNCH

  - Development:

            node app.js

      Open: [http://localhost:3000](http://localhost:3000)

  - Production:

            NODE_ENV=production node app.js

      Open: [http://localhost:6000](http://localhost:6000)

5. ### AUTHORS

  - Boris Povod <boris@crypti.me>
  - Oliver Beddows <oliver@lisk.io>
  - Max Kordek <max@lisk.io>
  - Denis Smirnov <densmirnov@me.com>

6. ### LICENSE

  `The MIT License (MIT)`
  
  Copyright (c) 2016 Lisk
  Copyright (c) 2014-2015 Crypti
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
---
