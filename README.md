<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/LemKimia/Country-App">
    <img src="assets/country-app-icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Country App</h3>

  <p align="center">
    A Quick and Simple React Native Project
    <br />
    <a href="https://github.com/LemKimia/Country-App"><strong>Explore the docs »</strong></a>
    <br />
  </p>
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
        <li><a href="#run-locally">Run Locally</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Country App Home Screen Shot](https://github.com/user-attachments/assets/7831deaa-31c7-4f31-8a6e-1ca17536d375)

This is a simple React Native app built using Expo Dev, created as a side project while learning React Native. 
The app features:

* __Search Functionality__: Users can search for countries by name.
* __Filter Functionality__: Users can filter countries by continent.
* __Favorite System__: Users can mark countries as favorites, with the favorite list managed through Zustand.
* __State Management__: Zustand is used for efficient state management, handling country data, search keywords, and favorite countries.

This project demonstrates my understanding of React Native and Expo Dev, as well as my ability to implement state management with Zustand. 
The search and filter functionalities, combined with the favorite system, showcase how these features can be integrated into other applications.

The app uses the free public [API REST Countries](https://restcountries.com/) to fetch country data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React Native][ReactNative]][ReactNative-url]
* [![Expo][Expo.dev]][Expo-url]
* [![Axios][Axios]][Axios-url]
* [![Zustand][Zustand]][Zustand-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is how you can set up this project locally. To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node package manager comes with Node.js. Alternatively, you can use [yarn](https://classic.yarnpkg.com/en/docs/install).
- **Expo CLI**: Install it globally by running:
   ```sh
   npm install -g expo-cli
   ```

### Run Locally

1. Clone the repo
   ```sh
   git clone https://github.com/LemKimia/Country-App.git
   ```
2. Navigate to the project directory
   ```sh
   cd Country-App
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the Expo project
   ```sh
   expo start
   ```

The app uses the free public [API REST Countries](https://restcountries.com/) to fetch country data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Samuel Joel T - [My Email](samueljoel464@gmail.com)

Project Link: [https://github.com/LemKimia/Country-App](https://github.com/LemKimia/Country-App)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/LemKimia/Country-App.svg?style=for-the-badge
[contributors-url]: https://github.com/LemKimia/Country-App/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LemKimia/Country-App.svg?style=for-the-badge
[forks-url]: https://github.com/LemKimia/Country-App/network/members
[stars-shield]: https://img.shields.io/github/stars/LemKimia/Country-App.svg?style=for-the-badge
[stars-url]: https://github.com/LemKimia/Country-App/stargazers
[issues-shield]: https://img.shields.io/github/issues/LemKimia/Country-App.svg?style=for-the-badge
[issues-url]: https://github.com/LemKimia/Country-App/issues
[license-shield]: https://img.shields.io/github/license/LemKimia/Country-App.svg?style=for-the-badge
[license-url]: https://github.com/LemKimia/Country-App/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/samueljoelt
[ReactNative]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[Expo.dev]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[Axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[Zustand]: https://img.shields.io/badge/Zustand-775bb5?style=for-the-badge&logo=&logoColor=white
[Zustand-url]: https://zustand-demo.pmnd.rs/
[NodeJs-url]: https://nodejs.org