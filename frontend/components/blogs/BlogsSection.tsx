import { TPostMetadata } from "@/types/blog";
import Reveal from "../utils/Reveal";
import BlogItem from "./BlogItem";

type TBlogsSectionProps = {
	blogs: TPostMetadata[];
};

export default function BlogsSection({ blogs }: any) {
	return (
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-6 gy-10 gy-lg-16">
			{blogs.map((blog:any) => (
				<Reveal key={blog.slug} className="col" delay={0.05}>
					<BlogItem data={blog} />
				</Reveal>
			))}
		</div>
	);
}
