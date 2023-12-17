
const url = "https://api.quotable.io/tags";

const getTags = async () => {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const slugs = data.map(tag => tag.slug);
        return slugs;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export { getTags };

