# Image Gallery Website

## Description

This is an image gallery website built using Vite and React. The website fetches data from the API provided by "https://api.slingacademy.com/v1/sample-data/photos" and displays 20 images on the homepage. Users can click on an image to view its title, description, and the full-size image.

## Technologies Used

- Vite
- React
- JavaScript (ES6+)
- axios

## Project Setup

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/image-gallery.git
cd image-gallery
```

2. Install dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

3. Run the development server.

```bash
npm run dev
# or
yarn dev
```

4. Open your web browser and go to http://localhost:5173 to view the homepage of the image gallery.

## Features

1. Homepage: The homepage displays 20 images fetched from the API mentioned above. Each image is clickable, allowing users to view more details.

2. Image Detail Page: When clicking on an image on the homepage, the user is redirected to the image detail page. This page shows the image title, description, and the full-size image.

## API Integration

The image gallery website fetches data from the "https://api.slingacademy.com/v1/sample-data/photos" API. The API provides a list of images in JSON format, each containing the following properties:

- `id`: Unique identifier for the image.
- `title`: Title of the image.
- `description`: Description of the image.
- `url`: URL of the full-size image.

The homepage of the website fetches the first 20 images from the API and displays them as thumbnails. When a user clicks on an image, the website fetches the details of the selected image and displays them on the image detail page.

## Customization

You can customize the website by modifying the React components in the `src/components` folder. If you want to change the number of images displayed on the homepage or add more features.

## Deployment

[Preview Link](https://image-gellary-sukomal07.vercel.app)

## Troubleshooting

If you encounter any issues with the website or API integration, please check the browser console for error messages. Additionally, ensure that you have a stable internet connection to fetch data from the API successfully.

## Acknowledgments

Special thanks to Sling Academy for providing the sample data photos API, which made this image gallery website possible.

---
