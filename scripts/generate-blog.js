
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clean up response text to ensure valid JSON
function cleanJsonString(text) {
    // Remove markdown code blocks if present
    let cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return cleanText;
}

async function generateBlog() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const topics = [
            "Budget Travel Tips", "Hidden Gems in Europe", "Solo Travel Guides",
            "Family Vacation Ideas", "Luxury Travel for Less", "Airline Reviews",
            "Travel Tech & Gadgets", "Sustainable Travel", "Foodie Destionations",
            "Digital Nomad Lifestyle", "Weekend Getaways", "Flight Booking Hacks"
        ];

        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        const today = new Date().toISOString().split('T')[0];

        const prompt = `
    Write a SEO-optimized blog post about "${randomTopic}" for a flight booking website.
    Return ONLY a valid JSON object with the following structure:
    {
      "slug": "url-friendly-slug",
      "title": "Catchy Title",
      "excerpt": "Short engaging summary (approx 2 sentences)",
      "category": "One of: Cheap Flights, Travel Tips, Destination Guides",
      "author": "Travel Team",
      "readTime": "e.g. 5 min read",
      "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
      "keywords": ["keyword1", "keyword2"],
      "content": "Full blog content in Markdown format. Use h1, h2, h3 for headers."
    }
    The content should be at least 600 words, engaging, and informative. 
    For the image, use a relevant unsplash URL (you can reuse the one in the example if you can't find a specific one, but try to vary it based on topic).
    DO NOT include any text outside the JSON object.
    `;

        console.log(`Generating blog post about: ${randomTopic}...`);
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
        blogData.id = Date.now(); // Simple unique ID
        blogData.date = today;

        // Path to blogPosts.js
        const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.js');
        let fileContent = fs.readFileSync(blogPostsPath, 'utf8');

        // Find insertion point (start of the array)
        // We want to add the new post at the BEGINNING of the array so it shows up first
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
        console.log("Successfully added new blog post!");

    } catch (error) {
        console.error("Error generating blog:", error);
        process.exit(1);
    }
}

generateBlog();
