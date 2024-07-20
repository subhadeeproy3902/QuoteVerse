import tags from "./tags";

const getTags = async () => {
        const slugs = tags.map(tag => tag.slug);
        return slugs;
};

export { getTags };

