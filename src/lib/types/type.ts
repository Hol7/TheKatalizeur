// types.ts
export interface Article {
    id: number; // Unique identifier for the article
    title: string; // Title of the article
    description: string; // Short description or excerpt
    slug: string; // Slug for the article URL
    cover?: { // Optional cover image details
      url: string; // Absolute URL to the image
      formats?: { // Optional formatted images
        thumbnail?: { url: string }; // Thumbnail URL
        small?: { url: string }; // Small image URL
        medium?: { url: string }; // Medium image URL
        large?: { url: string }; // Large image URL
      };
    };
    category?: { // Optional category details
      name: string; // Name of the category
      slug: string; // Slug for the category URL
    };
    author?: { // Optional author details
      name: string; // Name of the author
    };
    blocks?: []; // Array of content blocks (optional)
  }