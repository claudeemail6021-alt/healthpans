import fs from "fs"; import path from "path"; import matter from "gray-matter";
const DIR = path.join(process.cwd(), "content", "blog");
export interface BlogFrontmatter { title:string; description:string; date:string; author:string; category:string; tags:string[]; readTime:string; }
export interface BlogPost { slug:string; frontmatter:BlogFrontmatter; content:string; }
export function getAllBlogSlugs(): string[] { if(!fs.existsSync(DIR)) return []; return fs.readdirSync(DIR).filter(f=>f.endsWith(".mdx")).map(f=>f.replace(/\.mdx$/,"")); }
export function getBlogPost(slug:string): BlogPost|null { const fp=path.join(DIR,`${slug}.mdx`); if(!fs.existsSync(fp)) return null; const{data,content}=matter(fs.readFileSync(fp,"utf-8")); return{slug,frontmatter:data as BlogFrontmatter,content}; }
export function getAllBlogPosts(): BlogPost[] { return getAllBlogSlugs().map(s=>getBlogPost(s)).filter(Boolean).sort((a,b)=>new Date(b!.frontmatter.date).getTime()-new Date(a!.frontmatter.date).getTime()) as BlogPost[]; }
