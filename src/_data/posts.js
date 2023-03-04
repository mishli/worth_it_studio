const { default: axios } = require("axios");

module.exports = async () => {
	try {
		const res = await axios.get(
			`${process.env.STRAPI_ROOT_URL}/api/posts?populate=*`
		);

        // format posts objects
        const resObj = JSON.parse(JSON.stringify(res.data.data));
        const postsFormatted = resObj.map((item) => {           
            return {
                id: item.id,
                title: item.attributes.title,
                excerpt: item.attributes.excerpt,
                content: item.attributes.content,
                date: item.attributes.date,
                author: item.attributes.author,
                slug: item.attributes.slug,                
                featured_image: item.attributes.featured_image,
                tags: item.attributes.tags
            };
        });
        // console.log(postsFormatted)
		return postsFormatted;
	} catch (error) {
		console.error(error);
	}
};