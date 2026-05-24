// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "local-dev",
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_BRANCH || "main",
  token: process.env.TINA_TOKEN || "local-dev-token",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
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
              { type: "string", name: "en", label: "English" }
            ]
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
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "en",
                label: "English",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["game", "video"]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "number",
            name: "year",
            label: "Year"
          },
          {
            type: "string",
            name: "tools",
            label: "Tools",
            list: true
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail"
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            fields: [
              { type: "string", name: "behance", label: "Behance" },
              { type: "string", name: "figma", label: "Figma" },
              { type: "string", name: "youtube", label: "YouTube" }
            ]
          }
        ]
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
              { type: "string", name: "en", label: "English" }
            ]
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
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "en",
                label: "English",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["poster", "photography", "aigc"]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "number",
            name: "year",
            label: "Year"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
