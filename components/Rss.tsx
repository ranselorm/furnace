import { useEffect, useState } from "react";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

export default function Home() {
  const [rssData, setRssData] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRss = async () => {
      try {
        const response = await fetch("/api/rss");
        if (!response.ok) {
          throw new Error("Failed to fetch RSS feed");
        }
        const data: FeedItem[] = await response.json();
        setRssData(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchRss();
  }, []);

  console.log(rssData);
  return (
    <div>
      <h1>African News from Mining.com</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {rssData.map((item, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h2>{item.title}</h2>
              </a>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                />
              )}
              <p>{item.contentSnippet}</p>
              <small>{item.pubDate}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
