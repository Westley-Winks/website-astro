import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    collection: z.enum(["writing"]),
    date: z.coerce.date(),
    description: z.string(),
    summary: z.string().optional(),
    title: z.string(),
    lastmod: z.coerce.date(),
    toc: z.boolean().default(false),
  }),
});

const peaceCorps = defineCollection({
  type: "content",
  schema: z.object({
    collection: z.enum(["peace-corps"]),
    date: z.coerce.date(),
    description: z.string(),
    lastmod: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
    toc: z.boolean().default(false),
  }),
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    collection: z.enum(["books"]),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    keywords: z.array(z.string()).optional(),
    lastmod: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    toc: z.boolean().default(false),
    summary: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  writing: writing,
  "peace-corps": peaceCorps,
  books: books,
};
