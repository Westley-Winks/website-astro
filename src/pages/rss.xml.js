import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  let posts = [];

  const writingCollection = await getCollection("writing");
  const booksCollection = await getCollection("books");
  const peaceCorpsCollection = await getCollection("peace-corps");
  posts.push(...writingCollection);
  posts.push(...booksCollection);
  posts.push(...peaceCorpsCollection);

  posts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${post.collection}/${post.slug}`,
    })),
  });
}
