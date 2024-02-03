interface TypeWriterItem {
	id: number;
	word: string;
}

export function extractWords(typeWriterItems: TypeWriterItem[]): string[] {
	return typeWriterItems.map((item) => item.word);
}
