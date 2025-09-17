export interface BlogPostMetadata {
	title: string;
	createdAt: string;
	lastUpdatedAt?: string;
}

export interface BlogPost {
	metadata: BlogPostMetadata;
	path?: string;
}

export interface FullBlogPost extends BlogPost {
	content: any;
}
