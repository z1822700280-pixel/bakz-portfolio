import { defineConfig } from "tinacms";

// TinaCMS configuration for BAKZ Portfolio
// To enable TinaCMS Cloud:
// 1. Create a TinaCMS account at https://tina.io
// 2. Create a new project and get your credentials
// 3. Update .env.local with your credentials
// 4. Run: npm run tina:build

const isLocalDev = !process.env.NEXT_PUBLIC_TINA_CLIENT_ID || 
                   process.env.NEXT_PUBLIC_TINA_CLIENT_ID === "local-dev";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "local-dev",
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! ||
    process.env.VERCEL_GIT_COMMIT_BRANCH! ||
    "main",
  token: process.env.TINA_TOKEN || "local-dev-token",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "json",
        fields: [
          {
            type: "object",
            name: "title",
            label: "Title",
            fields: [
              { type: "string", name: "zh", label: "Chinese" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "description",
            label: "Description",
            fields: [
              {
                type: "string",
                name: "zh",
                label: "Chinese",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "en",
                label: "English",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["game", "ai-visual", "post-production"],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "number",
            name: "year",
            label: "Year",
          },
          {
            type: "string",
            name: "tools",
            label: "Tools",
            list: true,
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail",
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            fields: [
              { type: "string", name: "behance", label: "Behance" },
              { type: "string", name: "figma", label: "Figma" },
              { type: "string", name: "youtube", label: "YouTube" },
            ],
          },
        ],
      },
      {
        name: "gallery",
        label: "Gallery",
        path: "content/gallery",
        format: "json",
        fields: [
          {
            type: "object",
            name: "title",
            label: "Title",
            fields: [
              { type: "string", name: "zh", label: "Chinese" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "description",
            label: "Description",
            fields: [
              {
                type: "string",
                name: "zh",
                label: "Chinese",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "en",
                label: "English",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["poster", "photography", "aigc", "3d"],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "number",
            name: "year",
            label: "Year",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
    ],
  },
});
