export interface BlogPostMetadata {
	title: string;
	createdAt: string;
	lastUpdatedAt?: string;
}

export interface BlogPost {
	metadata: BlogPostMetadata;
}
