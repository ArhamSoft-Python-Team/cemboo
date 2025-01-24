# Cemboo - Frontend Development Task

This project is a single-page streaming application built using `Next.js` and `TypeScript`, inspired by popular platforms like Netflix, Viki, and Hotstar. The app features a clean and interactive design, with a focus on responsive layouts and smooth user experience.

## Key Features:
- **Hero Banner:** Display a featured media banner similar to streaming platforms.
- **Media Carousels:** Multiple carousels showcasing different media categories with hover previews.
- **Navigation Bar:** A simple, static navigation bar (no active links).
- **Video Modal:** Clicking on a media item opens a modal with a YouTube video and a title.
- **Responsive Design:** The app is fully responsive, providing a seamless experience on both desktop and mobile devices.

## Technology Stack

- **Next.js:** For building the user interface.
- **TypeScript:** For type safety and better development experience.
- **CSS**: For styling the application.

## Requirements

For development, you will need to install `Node.js v20.x (recommended) or greater` and a node global package, `NPM` in your environment.

### Prerequisites

Node.js (lts)

## App Setup

You can configure this app by following the instructions mentioned below:

### Clone Repository

Run the command `git clone <repository-url>` to clone this repository.

### Install Packages

At the root directory of the application, run the following command to install packages:

```bash
npm i
```

### Run Project Locally

Start running a project with the following command:

```bash
npm run dev
```

### Build Project Locally

To build a project locally run the following command:

```bash
npm run build
```

### Port

It would run on port `3000` if you provide PORT `3000` in the `.env` file.

The required PORT can be added in the `.env` file.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Information

- All the movies are dynamically mapped from the mocked data located in `./public/data/movies.json`.
- An additional object with the movie name "Aladdin" has been added to the mocked data to create a more presentable banner.
- All dependencies match the latest package versions till date.
- No ESLint warnings or errors.
- All the SEO best practices and standard coding guidelines have been followed in the app.
- Only the required dependencies and devDependencies are installed in the app.
- All the required linting tools are configured in the app.
- This project also uses the [`Cloudinary`](https://cloudinary.com/) to serve images through the CDN.

## Deployed App on Vercel

[Site URL](https://assessment-frontend-rho-dusky.vercel.app/)