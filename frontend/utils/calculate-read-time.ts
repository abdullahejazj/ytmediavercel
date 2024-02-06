export const calculateReadTime = (content: string) => {
	const words = content.trim().split(/\s+/).length;
	const averageSpeed = 200;
	const readTimeMinutes = Math.ceil(words / averageSpeed);

	return `${readTimeMinutes} min read`;
};
