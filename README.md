# MovieExplore

**Live Demo:** [https://movie-explorer-seven-mu.vercel.app](https://movie-explorer-seven-mu.vercel.app)

## Project Description

MovieExplore is a modern web application built with React and Vite that allows users to discover, search, and manage a collection of their favorite movies. It utilizes the OMDB API to fetch up-to-date movie information, providing a seamless browsing experience with dedicated pages for home discovery, detailed movie facts, personal favorites, and an about section.

## Problem Statement

Movie enthusiasts often struggle to find a centralized, fast, and easy-to-use platform to quickly search for movie details, read about cast and plot summaries, and bookmark titles for later viewing without navigating through clunky ad-filled platforms.

## Solution

MovieExplore leverages a fast, responsive interface to search for any movie in the extensive OMDB database. Users can view comprehensive details about a movie and effortlessly add or remove movies from their personalized favorites list, which is managed continuously across sessions, delivering a frictionless, user-focused experience.

## Key Features

- **Movie Search:** Explore and search for movies dynamically.
- **Detailed Views:** Get comprehensive details for each movie including plot, cast, released date, and more.
- **Favorites Management:** Bookmark movies into your personal favorites list using Context API.
- **Responsive Design:** Sleek UI optimized for both desktop and mobile devices.
- **Seamless Navigation:** Client-side routing for instant transitions between pages using React Router.

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM v7
- **Styling:** Vanilla CSS (`App.css`, `index.css`)
- **Icons:** Lucide React
- **API:** OMDB API

## How to Clone and Run Locally

Follow these steps to get a copy of the project running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd MovieExplore
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your OMDB API key if necessary:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```
   *(Note: Ensure you obtain an API key from OMDB at http://www.omdbapi.com/apikey.aspx)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in your browser:**
   Navigate to `http://localhost:5173` (or the port specified by Vite in the terminal) to view the application.
