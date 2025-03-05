<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="(https://github.com/darrenyzheng/sneaker-ecommerce)">
  </a>

  <h3 align="center">Sneaker Ecommerce</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

I was really into collecting sneakers as a teenager, frequently visiting websites such grailed.com and stockx.com so that I could see the prices of my most coveted sneakers. I created this application so that I could practice my web development skills and learn new technoligies such as using Google OAuth to login and Stripe API for payment authentication. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![PostgresSQL][PostgresSQL]][PostgresSQL-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node.js][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Make an account for Stripe and get your publishable and secret keys from [Stripe](https://stripe.com)

2. Go to [Google Console](https://console.cloud.google.com/), register the application's redirect URIs, and get the Google OAuth Client ID and Client Secret
  
3. Clone the repo
   ```sh
   git clone https://github.com/YOUR_USERNAME/sneaker_ecommerce.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your keys in a `.env` file
   ```sh
   VARIABLE_NAME=YOUR_VALUE
   ```
6. Start the React app
   ```sh
   cd ecommerce
   npm run dev
   ```
7. Start the backend server
   ```sh
   cd ecomerce
   cd api
   node server.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<figure>
  <img src='https://github.com/user-attachments/assets/fece4d9e-f6ff-44c0-832e-b46da73684c3' alt="Shop page"/>
  <figcaption><strong> Home </strong></figcaption>
</figure>
<br/>
<br/>

<figure>
  <img src='https://github.com/user-attachments/assets/bd848173-a0b1-4f67-8a55-30a8e46d7059' alt="Product page"/>
  <figcaption><strong> Example product  </strong></figcaption>
</figure>
<br/>
<br/>

<figure>
  <img src='https://github.com/user-attachments/assets/10e6acb8-b069-4e9f-a88a-5d3acd6d0a30' alt="OAuth page"/>
  <figcaption><strong> Logging in via Oauth </strong></figcaption>
</figure>
<br/>
<br/>

<figure>
  <img src='https://github.com/user-attachments/assets/16397e5f-f37c-4a88-8e51-6405b04c0aa2' alt="Account page"/>
  <figcaption><strong> User's settings based off of their Google profile </strong></figcaption>
</figure>
<br/>
<br/>

<figure>
  <img src='https://github.com/user-attachments/assets/a21161a7-cbcd-4dd4-9edf-3cf2f9e0ab5d' alt="Cart page"/>
  <figcaption><strong> A user's cart </strong></figcaption>
</figure>
<br/>
<br/>

<figure>
  <img src='https://github.com/user-attachments/assets/3545fb4d-87eb-4d4d-9039-c2a90c31511e' alt="Stripe API transaction "/>
  <figcaption><strong> Stripe API's transaction page </strong></figcaption>
</figure>
<br/>
<br/>
<figure>
  <img src='https://github.com/user-attachments/assets/5ee93cca-4512-4775-ad6e-66002e7e939d' alt="Transactions page"/>
  <figcaption><strong> A list of the user's transactions </strong></figcaption>
</figure>
<br/>
<br/>





<!-- CONTACT -->
## Contact

Project Link: [Sneaker Ecommerce](https://github.com/darrenyzheng/sneaker-ecommerce)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LESSONS LEARNED -->
## Lessons Learned

<p> I had some trouble converting the values from the cart of the user to the Stripe modal's dynamic price because Stripe wanted to use the component's values initially on mount so I had to get creative on getting that information to the modal as it dynamically changes. I also understand the purpose of putting the API routes in their own separate folder as it helps with routing and deploying to Vercel, leaving the other routes to be handled by the index.html file. </p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Stripe API](https://docs.stripe.com/)
* [Google OAuth](https://developers.google.com/identity/protocols/oauth2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[PostgresSQL]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgresSQL-url]: https://www.postgresql.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white
[Node-url]: https://nodejs.org/



