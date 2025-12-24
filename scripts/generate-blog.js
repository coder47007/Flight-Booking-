
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Parser from 'rss-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clean up response text to ensure valid JSON
function cleanJsonString(text) {
    let cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return cleanText;
}

async function fetchTravelNews() {
    const parser = new Parser();
    try {
        // Feed: Google News search for flights, travel deals, airline news
        const feed = await parser.parseURL('https://news.google.com/rss/search?q=flights+airline+news+travel+deals+cheap+flights+vacation+hacks&hl=en-US&gl=US&ceid=US:en');

        // Take the top 10 items to ensure freshness
        const recentItems = feed.items.slice(0, 10);

        if (recentItems.length === 0) {
            throw new Error("No news items found.");
        }

        // Return a random item from the top 10 to vary daily content
        const randomItem = recentItems[Math.floor(Math.random() * recentItems.length)];
        return randomItem;
    } catch (error) {
        console.error("Error fetching news:", error);
        // Fallback topic if RSS fails
        return {
            title: "Secret Ways to Find Cheap Flights in 2025",
            contentSnippet: "Experts reveal the best days to book and how to use incognito mode for savings."
        };
    }
}

async function generateBlog() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        // 1. Fetch Real-Time News
        console.log("Fetching latest travel news...");
        const newsItem = await fetchTravelNews();
        console.log(`Selected Topic: ${newsItem.title}`);

        const today = new Date().toISOString().split('T')[0];

        // 2. Generate Content based on News
        const prompt = `
    You are a professional travel journalist for a flight booking website.
    Write a high-traffic, SEO-optimized "Travel Hack" or "Breaking Travel News" article based on this real news story:
    
    HEADLINE: "${newsItem.title}"
    CONTEXT: "${newsItem.contentSnippet}"
    
    If the news is about a specific event (e.g. "Airline X launches new route"), focus on that.
    If it's a general trend, turn it into a actionable advice (e.g. "Why prices are dropping").
    
    Return ONLY a valid JSON object with the following structure:
    {
      "slug": "url-friendly-slug-based-on-title",
      "title": "Catchy, Clickable Title (Better than the original headline)",
      "excerpt": "Urgent, exciting summary (approx 2 sentences).",
      "category": "One of: Travel News, Flight Deals, Travel Hacks, Airline Updates",
      "author": "Travel Team",
      "readTime": "e.g. 3 min read",
      "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
      "keywords": ["keyword1", "keyword2", "travel news", "viral travel"],
      "content": "Full blog content in Markdown format. Use h1, h2, h3. Include 'What This Means for Travelers' section."
    }
    The content should be at least 500 words.
    For the image, use a relevant unsplash URL (generic travel if specific not found).
    DO NOT include any text outside the JSON object.
    `;

        console.log(`Generating content...`);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const cleanJson = cleanJsonString(text);
        let blogData;

        try {
            blogData = JSON.parse(cleanJson);
        } catch (e) {
            console.error("Failed to parse JSON response:", text);
            process.exit(1);
        }

        // Add required fields
        blogData.id = Date.now();
        blogData.date = today;
        // Ensure category matches what our frontend expects for the "Travel Hacks" page
        // The prompt asks for "Travel News" etc, which are good.
        // We enforce "Travel Hacks" page filters in TravelHacks.jsx to look for these.

        // Path to blogPosts.js
        const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.js');
        let fileContent = fs.readFileSync(blogPostsPath, 'utf8');

        // Find insertion point
        const insertionMarker = 'export const blogPosts = [';
        const insertionIndex = fileContent.indexOf(insertionMarker);

        if (insertionIndex === -1) {
            console.error("Could not find blogPosts array in file.");
            process.exit(1);
        }

        // Construct the new object string
        const newEntryString = `
    {
        id: ${blogData.id},
        slug: '${blogData.slug}',
        title: '${blogData.title.replace(/'/g, "\\'")}',
        excerpt: '${blogData.excerpt.replace(/'/g, "\\'")}',
        category: '${blogData.category}',
        author: '${blogData.author}',
        date: '${blogData.date}',
        readTime: '${blogData.readTime}',
        image: '${blogData.image}',
        keywords: ${JSON.stringify(blogData.keywords)},
        content: \`
${blogData.content.replace(/`/g, "\\`")}
        \`
    },`;

        const newFileContent = fileContent.slice(0, insertionIndex + insertionMarker.length) + newEntryString + fileContent.slice(insertionIndex + insertionMarker.length);

        fs.writeFileSync(blogPostsPath, newFileContent, 'utf8');
        console.log("Successfully added new news-based blog post!");

    } catch (error) {
        console.error("Error generating blog:", error);
        process.exit(1);
    }
}

generateBlog();
